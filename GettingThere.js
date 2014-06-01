function GettingThereState(game){
	State.call(this,game);
	this.levelFact     = this.game.levelFact;
	this.tipsFact      = this.game.tipsFact;

	this.maxSlower     = 10;
	this.slowerCounter = 0;
	this.previousLevel = this.game.currentLevel;
	this.level = this.levelFact.getLevel(this.game.currentLevel);
	this.tips  = this.tipsFact.getTips(this.game.currentLevel); 

	if (this.tips!=null) {
		this.currentState = this.tips;
	}
	else {
		this.currentState = this.level;
	}
}

//inheritance from State
GettingThereState.prototype = new State();
GettingThereState.prototype.constructor = GettingThereState;

GettingThereState.prototype.eventsCallbacks = function() {
	this.currentState.eventsCallbacks();
}

GettingThereState.prototype.changeLevel= function() {
	mainMenuState.options[0] = "Continue";
	this.level = this.levelFact.getLevel(this.game.currentLevel);
	this.tips  = this.tipsFact.getTips(this.game.currentLevel);
	if (this.tips!=null && this.previousLevel!= this.game.currentLevel) {
		this.currentState = this.tips;
	}
	else if (this.level == null) {
		//here just put win game when the win-game screen is done
		this.game.setState(winState);
	}
	else {
		this.currentState = this.level;
	}
	this.previousLevel = this.game.currentLevel;
}

GettingThereState.prototype.changeLevelWithoutContinue= function() {
	this.level = this.levelFact.getLevel(this.game.currentLevel);
	this.tips  = this.tipsFact.getTips(this.game.currentLevel);
	if (this.tips!=null && this.previousLevel!= this.game.currentLevel) {
		this.currentState = this.tips;
	}
	else {
		this.currentState = this.level;
	}
	this.previousLevel = this.game.currentLevel;
}

GettingThereState.prototype.update = function(animStart) {
	this.eventsCallbacks();
	this.currentState.update();
	if(this.slowerCounter < this.maxSlower) {
		this.slowerCounter++;
	}
}

GettingThereState.prototype.draw = function () {
	this.game.ctx.clearRect(0, 0, this.game.canvasWidth, this.game.canvasHeight);
	this.currentState.draw();
	this.game.ctx.lineWidth = 1;
	this.game.ctx.shadowBlur = 0;
}


//Handle pointer events
GettingThereState.prototype.pDown = function(e) {
	this.currentState.pDown(e);
}

GettingThereState.prototype.pUp = function(e) {
	this.currentState.pUp(e);
}

GettingThereState.prototype.pMove = function(e) {
	this.currentState.pMove(e);
}



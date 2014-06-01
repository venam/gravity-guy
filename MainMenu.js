function MainMenuState(game) {
	State.call(this,game);
	this.options = [
		"Play",
		"Save_Load",
		"Levels",
		"Sound",
	];
	this.currentOption = 0;
	this.maxSlower     = 10;
	this.slowerCounter = 0;

	this.transitionTime = 90;
	this.transitionColor = "#FFFFFF";
	this.transitionCounter = 0;
}

MainMenuState.prototype =new State();
MainMenuState.prototype.constructor = MainMenuState;

MainMenuState.prototype.update = function(animStart) {
	if (spaceShipLevels[this.game.currentLevel]==null) {
		this.options[0] = "Play";
		this.game.currentLevel = "1.1";
		gettingThereState.changeLevelWithoutContinue();
	}
	this.eventsCallbacks();
	if (this.transitionCounter <= this.transitionTime) {
		this.transitionCounter+=5;
	}
	if(this.slowerCounter < this.maxSlower) {
		this.slowerCounter++;
	}
}

MainMenuState.prototype.drawText = function(ctx) {
	var position = 100;
	for (var id in this.options) {
		if (id==this.currentOption) {
			ctx.fillStyle = "#11A249";
			ctx.fillText(this.options[id], 290, position);
			ctx.strokeText(this.options[id], 290, position);
		}
		else {
			ctx.fillStyle = "#0F90FF";
			ctx.fillText(this.options[id], 265, position);
			ctx.strokeText(this.options[id], 265, position);
		}
		position +=30;
	}
}

MainMenuState.prototype.draw  = function() {
	this.game.ctx.clearRect(0, 0, this.game.canvasWidth, this.game.canvasHeight);
	this.game.ctx.drawImage(media.mainImage, 0, 0);
	this.game.ctx.fillStyle   = "#0F90FF";
	this.game.ctx.strokeStyle = "#212121";
	this.game.ctx.lineWidth = 1;
	this.game.ctx.font = "55px Computerfont";
	this.game.ctx.textAlign="left";
	this.game.ctx.fillText("Gravity Guy", 250, 50);
	this.game.ctx.strokeText("Gravity Guy", 250, 50);
	this.game.ctx.font = "40px Computerfont";
	this.game.ctx.textAlight="left";
	this.drawText(this.game.ctx);
	if (this.transitionCounter<= this.transitionTime) {
		this.drawTransition(this.game.ctx);
	}
}

MainMenuState.prototype.drawTransition =  function(ctx) {
	ctx.fillStyle = this.transitionColor;
	ctx.globalAlpha = 1- this.transitionCounter/100;
	ctx.fillRect(0,0, 600,600);
	ctx.globalAlpha = 1.0;
}

MainMenuState.prototype.eventsCallbacks = function() {
	if (this.slowerCounter == this.maxSlower) {
		if (38 in keysDown) { //holding up
			this.currentOption--;
			if (this.currentOption == -1) {
				this.currentOption=this.options.length-1;
			}
			this.slowerCounter = 0
		}
		if (40 in keysDown) { //holding down
			this.currentOption++;
			if(this.currentOption == this.options.length) {
				this.currentOption = 0;
			}
			this.slowerCounter = 0
		}
		if( 13 in keysDown || 39 in keysDown) { //holding enter or right
			if (this.currentOption==0) {
				this.transitionCounter = 0;
				this.options[0] = "Continue";
				this.game.setState(gettingThereState);
			}
			else if (this.currentOption==3) {
				this.game.setState(soundState);
			}
			else if (this.currentOption==1) {
				this.game.setState(saveLoadState);
			}
			this.slowerCounter = 0;
		}
	}
}

//Handle pointer events
MainMenuState.prototype.pDown = function(e) {
	if (this.slowerCounter == this.maxSlower) {
		if (e.x>260 && e.x<450) {
			if (85<e.y && e.y<105) {
				this.currentOption = 0;
				this.options[0] = "Continue";
				//here if the currentLevel is a .2 go to alien otherwise to gettingThere
				this.game.setState(gettingThereState);
				this.slowerCounter = 0;
			}
			else if (85+25<e.y && e.y< 110+30) {
				this.currentOption = 1;
				this.game.setState(saveLoadState);
				this.slowerCounter = 0;
			}
			else if (85+25*2<e.y && e.y< 110+30*2) {
				this.currentOption = 2;
				this.slowerCounter = 0;
			}
			else if (85+25*3<e.y && e.y< 110+30*3) {
				this.currentOption = 3;
				this.game.setState(soundState);
				this.slowerCounter = 0;
			}
		}
	}
}

MainMenuState.prototype.pUp = function(e) {
}

MainMenuState.prototype.pMove = function(e) {
}






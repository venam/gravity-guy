function WinState(game) {
	State.call(this,game);
	this.image = media.bgImage;
	this.maxSlower     = 15;
	this.slowerCounter = 0;

	this.transitionTime = 90;
	this.transitionColor = "#FFFFFF";
	this.transitionCounter = 0;
}

WinState.prototype = new State();
WinState.prototype.constructor = WinState;

//draw on this.game.ctx        (called 60/s)
WinState.prototype.draw = function() {
	this.game.ctx.clearRect(0,0,400,600);
	var pattern = this.game.ctx.createPattern( media.bgImage,"repeat");
	this.game.ctx.fillStyle = pattern;
	this.game.ctx.fillRect(0,0,700,600);

	this.game.ctx.font = "50px Computerfont";
	this.game.ctx.textAlign="left";
	this.game.ctx.fillStyle   = "#0F90FF";
	this.game.ctx.strokeStyle = "#212121";
	this.game.ctx.lineWidth = 2;
	this.game.ctx.fillText("Go!", 520, 380);
	this.game.ctx.strokeText("Go!", 520, 380);
	this.game.ctx.fillRect(518,385,70,5);

	this.game.ctx.textAlign = "center";
	this.game.ctx.fillText("You Finished The Game",  300, 40);
	this.game.ctx.strokeText("You Finished The Game", 300, 40);
	this.game.ctx.fillRect(50,50,500,5);
	
	this.game.ctx.fillText("Results:",  300, 100);
	this.game.ctx.strokeText("Results:", 300, 100);

	this.game.ctx.drawImage( media.iconSprites[3].image,
		media.iconSprites[3].sx, //position on the image
		media.iconSprites[3].sy, //position on the image
		media.iconSprites[3].sw, //image width on the image
		media.iconSprites[3].sh, //image height on the image
		270, //position x on canvas
		140, //position y on canvas
		60, //width on canvas
		60 //height on canvas
	);

	this.game.ctx.fillText(theGame.nbOfDeath,  300, 240);
	this.game.ctx.strokeText(theGame.nbOfDeath, 300, 240);

	var rank = "n00b";
	if (theGame.nbOfDeath==0) {
		rank = "Insane Legend";
	}
	else if (theGame.nbOfDeath<20) {
		rank = "Extreme Gamer";
	}
	else if (theGame.nbOfDeath<40) {
		rank = "Good player";
	}
	else if (theGame.nbOfDeath<50) {
		rank = "Fair";
	}

	this.game.ctx.fillText(rank,  300, 300);
	this.game.ctx.strokeText(rank, 300, 300);



	if (this.transitionCounter<= this.transitionTime) {
		this.drawTransition(this.game.ctx);
	}
}


WinState.prototype.drawTransition =  function(ctx) {
	ctx.fillStyle = this.transitionColor;
	ctx.globalAlpha = 1- this.transitionCounter/100;
	ctx.fillRect(0,0, 600,600);
	ctx.globalAlpha = 1.0;
}

//update all that is happening (called 60/s)
WinState.prototype.update = function(animStart) {
	this.eventsCallbacks();
	if (this.transitionCounter <= this.transitionTime) {
		this.transitionCounter+=7;
	}

	if (this.slowerCounter != this.maxSlower) {
		this.slowerCounter++;
	}
}

//handles events recorded in this.keysDown
WinState.prototype.eventsCallbacks = function() {
}

//Handle pointer events
WinState.prototype.pDown = function(e) {
	if (this.slowerCounter == this.maxSlower) {
		if (e.x>521 && e.x< 603 && e.y>355 && e.y<400){
			console.log(e.x);
			mainMenuState.options[0]="Play";
			theGame.setState(mainMenuState);
			this.slowerCounter = 0;
		}
	}
}

WinState.prototype.pUp = function(e) {
}

WinState.prototype.pMove = function(e) {
}


function TipsState(game, image) {
	State.call(this,game);
	this.image = image;
	this.maxSlower     = 15;
	this.slowerCounter = 0;

	this.transitionTime = 90;
	this.transitionColor = "#FFFFFF";
	this.transitionCounter = 0;
}

TipsState.prototype = new State();
TipsState.prototype.constructor = TipsState;



//draw on this.game.ctx        (called 60/s)
TipsState.prototype.draw = function() {
	this.game.ctx.clearRect(0,0,400,600);
	this.game.ctx.drawImage( this.image.image,
			this.image.sx, //position on the image
			this.image.sy, //position on the image
			this.image.sw, //image width on the image
			this.image.sh, //image height on the image
			0, //position x on canvas
			0, //position y on canvas
			600, //width on canvas
			400 //height on canvas
	);


	this.game.ctx.font = "50px Computerfont";
	this.game.ctx.textAlign="left";
	this.game.ctx.fillStyle   = "#0F90FF";
	this.game.ctx.strokeStyle = "#212121";
	this.game.ctx.lineWidth = 2;
	this.game.ctx.fillText("Go!", 520, 380);
	this.game.ctx.strokeText("Go!", 520, 380);
	this.game.ctx.fillRect(518,385,70,5);
	if (this.transitionCounter<= this.transitionTime) {
		this.drawTransition(this.game.ctx);
	}
}

TipsState.prototype.drawTransition =  function(ctx) {
	ctx.fillStyle = this.transitionColor;
	ctx.globalAlpha = 1- this.transitionCounter/100;
	ctx.fillRect(0,0, 600,600);
	ctx.globalAlpha = 1.0;
}



//update all that is happening (called 60/s)
TipsState.prototype.update = function(animStart) {
	this.eventsCallbacks();
	if (this.transitionCounter <= this.transitionTime) {
		this.transitionCounter+=7;
	}

	if (this.slowerCounter != this.maxSlower) {
		this.slowerCounter++;
	}
}

//handles events recorded in this.keysDown
TipsState.prototype.eventsCallbacks = function() {
	if (this.slowerCounter == this.maxSlower) {
/*		if (13 in keysDown) {
			gettingThereState.currentState = gettingThereState.level;
			this.slowerCounter = 0;
		}
*/
	}
}

//Handle pointer events
TipsState.prototype.pDown = function(e) {
	if (this.slowerCounter == this.maxSlower) {
		if (e.x>521 && e.x< 603 && e.y>355 && e.y<400){
			gettingThereState.currentState = gettingThereState.level;
			this.slowerCounter = 0;
		}
	}
}

TipsState.prototype.pUp = function(e) {
}

TipsState.prototype.pMove = function(e) {
}




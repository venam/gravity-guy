function SoundState(game) {
	State.call(this,game);
	this.currentOption = 0;
	this.maxOption     = 2;
	this.maxSlower     = 13;
	this.slowerCounter = 0;
	this.pointerIsDown   = false;
	this.origPoint       = 0;
	this.positiveChange  = -1;
}

SoundState.prototype = new State();
SoundState.prototype.constructor = SoundState;

SoundState.prototype.update = function(animStart) {
	this.eventsCallbacks();
	if(this.slowerCounter < this.maxSlower) {
		this.slowerCounter++;
	}
}

SoundState.prototype.drawRest = function(ctx) {
	var maxLength = 250;
	var padding = 0;
	var sfxVol = maxLength*media.sfx.volume;
	var zikVol = maxLength*media.zik.volume;

	if (this.currentOption==0) {
		ctx.fillStyle = "#11A249";
		padding = 25;
	}
	ctx.fillText("Sfx", 265+padding, 90);
	ctx.strokeText("Sfx", 265+padding, 90);
	ctx.fillStyle = "#0F90FF";
	padding  = 0;
	if( sfxVol>0) {
		ctx.fillRect(265,100, sfxVol, 12);
	}
	ctx.strokeRect(265,100,maxLength+1,13);
	

	if(this.currentOption==1) {
		ctx.fillStyle = "#11A249";
		padding = 25;
	}
	ctx.fillText("Music", 265+padding, 150);
	ctx.strokeText("Music", 265+padding, 150);
	ctx.fillStyle = "#0F90FF";
	padding  = 0;
	if (zikVol>0) {
		ctx.fillRect(265,160, zikVol, 12);
	}
	ctx.strokeRect(265,160,maxLength+1,13);

	if(this.currentOption ==2) {
		ctx.fillStyle = "#11A249";
		padding = 25;
	}
	ctx.fillText("Back", 265+padding, 210);
	ctx.strokeText("Back", 265+padding, 210);
	ctx.fillStyle = "#0F90FF";
}

SoundState.prototype.pressedRight = function() {
	if (this.currentOption==0) {
		if (media.sfx.volume<0.9) {
			media.sfx.volume+=0.1;
		}
		media.bumpSound.play();
	}
	else if (this.currentOption = 1) {
		if(media.zik.volume<0.9) {
			media.zik.volume+=0.1
		}
	}
}


SoundState.prototype.pressedLeft = function() {
	if (this.currentOption==0) {
		if(media.sfx.volume>=0.1) {
			media.sfx.volume-=0.1;
		}
		media.bumpSound.play();
	}
	else if (this.currentOption = 1) {
		if(media.zik.volume>=0.1) {
			media.zik.volume-=0.1;
		}
	}
}

SoundState.prototype.eventsCallbacks = function() {
	if (this.slowerCounter == this.maxSlower) {
		if (37 in keysDown) { //holding left
			this.pressedLeft();
			this.slowerCounter = 0;
		}
		if (39 in keysDown) { //holding right
			this.pressedRight();
			this.slowerCounter = 0;
		}
		if( 81 in keysDown) { //holding 'q'
			this.game.setState(mainMenuState);
			this.slowerCounter = 0;
		}
		if (38 in keysDown) { //holding up
			this.currentOption--;
			if (this.currentOption == -1) {
				this.currentOption=this.maxOption;
			}
			this.slowerCounter = 0;
		}
		if (40 in keysDown) { //holding down
			this.currentOption++;
			if(this.currentOption == this.maxOption+1) {
				this.currentOption = 0;
			}
			this.slowerCounter = 0;
		}
		if( 13 in keysDown) { //holding enter
			if (this.currentOption==2) {
				this.game.setState(mainMenuState);
			}
			this.slowerCounter = 0;
		}
	}
}


SoundState.prototype.draw = function() {
	this.game.ctx.clearRect(0, 0, this.game.canvasWidth, this.game.canvasHeight);
	this.game.ctx.drawImage(media.mainImage, 0, 0);
	this.game.ctx.fillStyle   = "#0F90FF";
	this.game.ctx.strokeStyle = "#212121";
	this.game.ctx.font = "50px Computerfont";
	this.game.ctx.textAlign="left";
	this.game.ctx.fillText("Sound", 260, 40);
	this.game.ctx.strokeText("Sound", 260, 40);
	this.game.ctx.font = "40px Computerfont";
	this.game.ctx.textAlight="left";
	this.drawRest(this.game.ctx);
}


//Handle pointer events
SoundState.prototype.pDown = function(e) {
	this.positiveChange = -1;
	if (this.slowerCounter == this.maxSlower) {
		if (e.x>260 && e.x<510) {
			if (70<e.y && e.y<115) {
				this.currentOption = 0;
				this.slowerCounter = 0;
			}
			else if (130<e.y && e.y<180) {
				this.currentOption = 1;
				this.slowerCounter = 0;
			}
			else if (193<e.y && e.y<220) {
				this.currentOption = 2;
				this.slowerCounter = 0;
				this.game.setState(mainMenuState);
			}
			this.origPoint = e.x;
			this.pointerIsDown = true;
		}
	}
}

SoundState.prototype.pUp = function(e) {

	if (this.positiveChange == 0) {
		this.pressedRight();
	}
	else if (this.positiveChange== 1){
		this.pressedLeft();
	}

	this.pointerIsDown = false;
	this.positiveChange = false;
}

SoundState.prototype.pMove = function(e) {
	if (this.pointerIsDown) {
		if (this.currentOption==0|| this.currentOption==1) {
			if (this.origPoint-e.x<-0.5) {
				this.positiveChange = 0;
			}
			else if (this.origPoint-e.x>0.5){
				this.positiveChange = 1;
			}
		}
	}
}




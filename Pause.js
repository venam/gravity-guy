function PauseState(game) {
	State.call(this,game);
	this.currentOption = 0;
	this.maxSlower     = 5;
	this.slowerCounter = 0;
}

PauseState.prototype = new State();
PauseState.prototype.constructor = PauseState;

PauseState.prototype.eventsCallbacks = function() {
	if (this.slowerCounter == this.maxSlower) {
		if (80 in keysDown) { //holding 'p'
			this.game.setState(gettingThereState);
			this.slowerCounter = 0;
		}
		if (83 in keysDown) { //holding 's'
			soundState.previousState = pauseState;
			this.game.setState(soundState);
			this.slowerCounter = 0;
		}
	}
}

PauseState.prototype.update = function(animStart) {
	this.eventsCallbacks();
	if(this.slowerCounter < this.maxSlower) {
		this.slowerCounter++;
	}
}

PauseState.prototype.draw = function() {
	var levelIco    = media.iconSprites[1];
	var skull       = media.iconSprites[3];

	this.game.ctx.clearRect(0, 0, this.game.canvasWidth, this.game.canvasHeight);
	var pattern = this.game.ctx.createPattern( media.bgImage,"repeat");
	this.game.ctx.fillStyle = pattern;
	this.game.ctx.fillRect(0,0,700,600);
	this.game.ctx.textAlign="center";
	
	this.game.ctx.fillStyle   = "#45A211";
	this.game.ctx.strokeStyle = "#000000";
	this.game.ctx.font = "50px Computerfont";

	this.game.ctx.fillText("Pause", 300, 40);
	this.game.ctx.strokeText("Pause", 300, 40);
	this.game.ctx.textAlign="left";

	this.game.ctx.fillStyle = "#FFFFFF";
	this.game.ctx.shadowColor = "yellow";
	this.game.ctx.shadowBlur = 3;
	this.game.ctx.font = "13px Helvetica";
	this.game.ctx.drawImage( levelIco.image,
		levelIco.sx, //position on the image
		levelIco.sy, //position on the image
		levelIco.sw, //image width on the image
		levelIco.sh, //image height on the image
		560, //position x on canvas
		6, //position y on canvas
		21, //width on canvas
		21 //height on canvas
	);
	this.game.ctx.fillText(this.game.currentLevel , 561, 40);

	this.game.ctx.drawImage( skull.image,
		skull.sx, //position on the image
		skull.sy, //position on the image
		skull.sw, //image width on the image
		skull.sh, //image height on the image
		530, //position x on canvas
		6, //position y on canvas
		21, //width on canvas
		21 //height on canvas
	);
	if (parseInt(this.game.nbOfDeath/10)==0){
		this.game.ctx.fillText(this.game.nbOfDeath , 536, 40);
	}
	else if (parseInt(this.game.nbOfDeath/100)==0) {
		this.game.ctx.fillText(this.game.nbOfDeath, 533, 40);
	}
	else {
		this.game.ctx.fillText(this.game.nbOfDeath , 530, 40);
	}
	this.game.ctx.shadowBlur = 0;


}
 


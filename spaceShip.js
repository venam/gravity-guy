function spaceShip(id, x, y, center) {
	CircleEntity.call(this, id, x, y, center, "black", 0.71,true);
	this.frames = new Array();
	this.currentFrame = 0;
	this.interval = 90;
	this.currentInterval = 0;
	this.setFrames();
	this.type = 'spaceShip';
}

spaceShip.prototype = new CircleEntity();
spaceShip.prototype.constructor = spaceShip;

spaceShip.prototype.setFrames = function(ctx) {
	this.frames = media.spaceShipSprites;
}

spaceShip.prototype.draw = function(ctx) {
	//draw spaceship here
	
	var spaceShipImage = this.frames[this.currentFrame];

	ctx.save();
	if (!theGame.mobile) {
//		ctx.shadowBlur = 3;
//		ctx.shadowColor = "#FFFFFF";
	}
	ctx.translate(this.x*SCALE, this.y*SCALE);
	ctx.rotate(this.angle);
	ctx.translate(-(this.x)*SCALE, -(this.y)*SCALE);
	ctx.drawImage( spaceShipImage.image,
			spaceShipImage.sx, //position on the image
			spaceShipImage.sy, //position on the image
			spaceShipImage.sw, //image width on the image
			spaceShipImage.sh, //image height on the image
			Math.floor(this.x*SCALE-this.radius*SCALE), //position x on canvas
			Math.floor(this.y*SCALE-this.radius*SCALE), //position y on canvas
			this.radius*SCALE*2, //width on canvas
			this.radius*SCALE*2 //height on canvas
	);
	ctx.restore();

	if (this.currentInterval == this.interval) {
		this.currentInterval = 0;
		this.currentFrame++;
	}

	this.currentInterval++;
	
	//if at the end of the frame cycle then go back to 0
	if (this.currentFrame == this.frames.length) {
		this.currentFrame = 0;
	}
	
}



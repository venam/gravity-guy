function RedAlien(id, x, y, center) {
	RectangleEntity.call(this, id, x, y, center,"red", 0.70, 0.35, true);
	this.currentFrame = 0;
	this.whichInterval = 0;
	this.frameInterval = 2;
	this.totalFrames = 5;
	this.sizeOnCanvas = 45;
	this.dead = false;
	this.absorbed = false;
	this.startedDying = false;

	this.alienImg = media.alienSprites[1];
	this.type = "redAlien";
}

RedAlien.prototype = new RectangleEntity();
RedAlien.prototype.constructor = RedAlien;

RedAlien.prototype.draw = function(ctx) {
	ctx.save();
	ctx.translate(this.x*SCALE, this.y*SCALE);
	ctx.rotate(this.angle);
	ctx.translate(-(this.x)*SCALE, -(this.y)*SCALE);
	ctx.drawImage( this.alienImg.image,
			this.alienImg.sx, //position on the image
			this.alienImg.sy, //position on the image
			this.alienImg.sw, //image width on the image
			this.alienImg.sh, //image height on the image
			Math.floor(this.x*SCALE-this.halfWidth*SCALE), //position x on canvas
			Math.floor(this.y*SCALE-this.halfHeight*SCALE-20) //position y on canvas
			this.sizeOnCanvas, //width on canvas
			this.sizeOnCanvas //height on canvas
	);
	ctx.restore();

}

//inheritance didn't work
RedAlien.prototype.update = function(state) {
	if (this.startedDying) {
		this.startDying();
	}
	RectangleEntity.prototype.update.call(this,state);
}

RedAlien.prototype.startDying = function() {
	this.startedDying = true;
	if (this.whichInterval == this.frameInterval) {
		if (this.currentFrame == this.totalFrames) {
			this.dead = true;
		}
		else {
			this.whichInterval = 0;
			this.sizeOnCanvas -=7;
			this.currentFrame++;
		}
	}
	this.whichInterval++;
}





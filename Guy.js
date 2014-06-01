function Guy(id, center) {
	var x = 0.9;
	var y =9.5;
	var halfWidth = 1.15;
	var halfHeight= 1.6;
	var polys =  [
		[{x: 0.3, y: 0.4},{x: 1.0, y: 0.4}, {x: 1.8, y:3.7}, {x:-0.6, y:3.7},  ], // triangle
	];

	PolygonEntity.call(this,id, x, y, center, "red", polys, false);
	this.type = "guy";

	this.frames = new Array();
	this.currentFrame = 0;
	this.interval = 11;
	this.currentInterval = 0;
	this.previousGrav = "down";
	this.frames[0] = media.guySprites[0+9];
	this.frames[1] = media.guySprites[1+9];
	this.frames[2] = media.guySprites[2+9];
	this.dead = false;
}

Guy.prototype = new PolygonEntity();
Guy.prototype.constructor = Guy;

Guy.prototype.setFrames = function(gravityArrows) {
	if (this.previousGrav== gravityArrows.currentGrav) {
		return;
	}
	var start = 0;
	if (gravityArrows.currentGrav=="up") {
		start = 0;
	}
	else if (gravityArrows.currentGrav=="left") {
		start = 3;
	}
	else if (gravityArrows.currentGrav == "right") {
		start = 6;
	}
	else if (gravityArrows.currentGrav=="down") {
		start = 9;
	}
	this.frames[0] = media.guySprites[start];
	this.frames[1] = media.guySprites[start+1];
	this.frames[2] = media.guySprites[start+2];
	this.previousGrav = gravityArrows.currentGrav;
}

Guy.prototype.draw = function(ctx) {
//	PolygonEntity.prototype.draw.call(this, ctx);

	var Image = this.frames[this.currentFrame];

	ctx.save();
	ctx.translate(this.x*SCALE, this.y*SCALE);
	ctx.rotate(this.angle);
	ctx.translate(-(this.x)*SCALE, -(this.y)*SCALE);
	ctx.drawImage( Image.image,
			Image.sx, //position on the image
			Image.sy, //position on the image
			Image.sw, //image width on the image
			Image.sh, //image height on the image
			Math.floor(this.x*SCALE-20), //position x on canvas
			Math.floor(this.y*SCALE+9), //position y on canvas
			75, //width on canvas
			104 //height on canvas
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

Guy.prototype.update = function(state) {
	RectangleEntity.prototype.update.call(this,state);
}


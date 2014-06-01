function RectangleSpikes(id, x, y, center, halfWidth, halfHeight, dynamic) {
	RectangleEntity.call(this, id, x, y, center, "#D3A203", halfWidth, halfHeight, dynamic);
	this.spikeImg = media.spikesSprites[0];
	this.type = "rectangleSpikes";
}

RectangleSpikes.prototype = new RectangleEntity();
RectangleSpikes.prototype.constructor = RectangleSpikes;

RectangleSpikes.prototype.draw = function(ctx) {
	this.drawSpikes(ctx);
}

RectangleSpikes.prototype.drawSpikes = function(ctx) {
	RectangleEntity.prototype.draw.call(this,ctx);
	ctx.save();
	ctx.translate(this.x*SCALE, this.y*SCALE);
	ctx.rotate(this.angle);
	ctx.translate(-(this.x)*SCALE, -(this.y)*SCALE);
	ctx.strokeStyle = "#000000";
	ctx.lineWidth = 5;
	ctx.strokeRect((this.x-this.halfWidth) * SCALE+2.5,
		(this.y-this.halfHeight) * SCALE+2.5,
		(this.halfWidth*2) * SCALE-5,
		(this.halfHeight*2) * SCALE-5);


	/*
	ctx.drawImage( this.spikeImg.image,
			this.spikeImg.sx, //position on the image
			this.spikeImg.sy, //position on the image
			this.spikeImg.sw, //image width on the image
			this.spikeImg.sh, //image height on the image
			this.x*SCALE-this.halfWidth*SCALE, //position x on canvas
			this.y*SCALE-this.halfHeight*SCALE, //position y on canvas
			this.halfWidth*SCALE*2, //width on canvas
			this.halfHeight*SCALE*2 //height on canvas
	);
	*/
	ctx.restore();
}


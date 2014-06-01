function CircleSpikes(id, x, y, center, radius, dynamic) {
	CircleEntity.call(this, id, x, y, center, "black", radius, dynamic);
	this.spikeImg = media.spikesSprites[1];
	this.type = "circleSpikes";
}

CircleSpikes.prototype = new CircleEntity();
CircleSpikes.prototype.constructor = CircleSpikes;

CircleSpikes.prototype.draw = function(ctx) {
	this.drawSpikes(ctx);
}

CircleSpikes.prototype.drawSpikes = function(ctx) {
	ctx.save();
//	ctx.shadowBlur = 2;
//	ctx.shadowColor = "#FFFFFF";

	ctx.fillStyle = "#D3A203";
	ctx.strokeStyle = "#000000";
	ctx.beginPath();
	ctx.arc(this.x * SCALE, this.y * SCALE, this.radius * SCALE, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.fill();

	ctx.beginPath();
	ctx.lineWidth = 5;
	ctx.arc(this.x * SCALE , this.y * SCALE, this.radius * SCALE-1.5, 0, Math.PI * 2, true);
	ctx.stroke();

/*
	ctx.translate(this.x*SCALE, this.y*SCALE);
	ctx.rotate(this.angle);
	ctx.translate(-(this.x)*SCALE, -(this.y)*SCALE);
	ctx.drawImage( this.spikeImg.image,
			this.spikeImg.sx, //position on the image
			this.spikeImg.sy, //position on the image
			this.spikeImg.sw, //image width on the image
			this.spikeImg.sh, //image height on the image
			this.x*SCALE-this.radius*SCALE, //position x on canvas
			this.y*SCALE-this.radius*SCALE, //position y on canvas
			this.radius*SCALE*2, //width on canvas
			this.radius*SCALE*2 //height on canvas
	);
	ctx.restore();
*/
}


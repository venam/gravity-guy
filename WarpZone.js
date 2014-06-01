function warpZone(range, color, rotationOrientation,nbRotation) {
	this.range = range || {
		maxX: 1,
		minX: 0,
		maxY: 1,
		minY: 0
	};
	this.rangeColor = color;
	this.alreadyInZone = false;
	this.rotationOrientation = rotationOrientation;
	this.nbRotation = nbRotation;
}

warpZone.prototype.draw = function(ctx) {
	ctx.save();
	ctx.globalAlpha = 0.2;
	ctx.fillStyle = this.rangeColor;
	ctx.beginPath();
	ctx.shadowBlur = 0;
	ctx.fillRect(
			this.range.minX*SCALE, 
			this.range.minY*SCALE, 
			(this.range.maxX-this.range.minX)*SCALE,
			(this.range.maxY-this.range.minY)*SCALE);


	ctx.restore();
}

warpZone.prototype.inZone = function(position, gravityArrows) {
	if (
			position.x >= this.range.minX &&
			position.x <= this.range.maxX &&
			position.y >= this.range.minY &&
			position.y <= this.range.maxY) {
			if (!this.alreadyInZone) {
				this.alreadyInZone = true;
				for (var i=0; i<this.nbRotation; i++) {
					if (this.rotationOrientation=="right") {
						gravityArrows.rotateRight();
					}
					else {
						gravityArrows.rotateLeft();
					}
				}
			}
	}
	else {
		if (this.alreadyInZone ==true) {
			this.alreadyInZone = false;
			gravityArrows.backToNormal();
		}
	}
}



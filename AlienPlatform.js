function AlienPlatform(id,x,y, center,orientation) {
	this.orientation = orientation;
	var halfWidth, halfHeight;
	if (orientation=="horizontal") {
		halfWidth = 1.0;
		halfHeight = 0.32;
	}
	else if (orientation=="vertical") {
		halfWidth = 0.32;
		halfHeight = 1.0;
	}
	RectangleEntity.call(this, id,x,y, center, "green",halfWidth, halfHeight, false);
	this.generalColor = "#E81F78";
	this.upColor = "#1FE82A";

	this.frames = new Array();
	this.frames[0]="#1FDDE8";
	this.frames[1] ="#1FE82A";
	this.frames[2] = "#E81F78";
	this.currentFrame = 0;
	this.interval = 30;
	this.currentInterval = 0;
	this.type = 'alienPlatform';

}

AlienPlatform.prototype = new RectangleEntity();
AlienPlatform.prototype.constructor = AlienPlatform;

AlienPlatform.prototype.draw = function(ctx) {
	ctx.translate(this.x * SCALE, this.y * SCALE);
	ctx.rotate(this.angle);
	ctx.translate(-(this.x) * SCALE, -(this.y) * SCALE);

	ctx.fillStyle = this.generalColor;
	ctx.fillRect((this.x-this.halfWidth) * SCALE,
				(this.y-this.halfHeight) * SCALE,
				(this.halfWidth*2) * SCALE,
				(this.halfHeight*2) * SCALE);

	ctx.strokeStyle = this.upColor;
	ctx.lineWidth = 5;

	ctx.strokeRect( (this.x-this.halfWidth) * SCALE+2.5,
		(this.y-this.halfHeight) * SCALE+2.5,
		(this.halfWidth*2) * SCALE-2.5,
		(this.halfHeight*2) * SCALE-2.5);
	if (!theGame.mobile) {
		this.drawDecoration(ctx);
	}
}

AlienPlatform.prototype.drawDecoration = function(ctx) {
	if (this.currentInterval == this.interval) {
		this.currentInterval = 0;
		this.currentFrame++;
	}

	this.currentInterval++;

	//if at the end of the frame cycle then go back to 0
	if (this.currentFrame == this.frames.length) {
		this.currentFrame = 0;
	}

	ctx.fillStyle = this.frames[this.currentFrame];
	var x,y;
	x = y = 0;
	if (this.orientation == "vertical") {
		for(var i=0; i< 4; i++) {
			x += i*2;
			ctx.translate(-i*2, 0);
			ctx.beginPath();
			ctx.moveTo( (this.x-this.halfWidth)*SCALE-8, this.y*SCALE);
			ctx.lineTo( (this.x- this.halfWidth)*SCALE - 14, this.y*SCALE-10);
			ctx.lineTo((this.x-this.halfWidth)*SCALE-9, this.y*SCALE);
			ctx.lineTo( (this.x-this.halfWidth)*SCALE -14, this.y*SCALE+10);
			ctx.closePath();
			ctx.fill();
		}
		ctx.translate(x,y);
		x = y =0;
		for(var i=0; i< 4; i++) {
			x -= i*2;
			ctx.translate(i*2, 0);
			ctx.beginPath();
			ctx.moveTo( (this.x+this.halfWidth)*SCALE+8, this.y*SCALE);
			ctx.lineTo( (this.x+this.halfWidth)*SCALE + 14, this.y*SCALE-10);
			ctx.lineTo((this.x+this.halfWidth)*SCALE+9, this.y*SCALE);
			ctx.lineTo( (this.x+this.halfWidth)*SCALE +14, this.y*SCALE+10);
			ctx.closePath();
			ctx.fill();
		}
		ctx.translate(x,y);
	}
	else if (this.orientation == "horizontal") {
		for(var i=0; i< 4; i++) {
			y -= i*2;
			ctx.translate(0, i*2);
			ctx.beginPath();
			ctx.moveTo( this.x*SCALE, (this.y+this.halfHeight)*SCALE+8);
			ctx.lineTo( this.x*SCALE+10, (this.y+this.halfHeight)*SCALE+14);
			ctx.lineTo( this.x*SCALE, (this.y+this.halfHeight)*SCALE+9);
			ctx.lineTo( this.x*SCALE-10, (this.y+this.halfHeight)*SCALE+14);
			ctx.closePath();
			ctx.fill();
		}
		ctx.translate(x,y);
		x = y = 0;
		for(var i=0; i< 4; i++) {
			y += i*2;
			ctx.translate(0, -i*2);
			ctx.beginPath();
			ctx.moveTo( this.x*SCALE, (this.y-this.halfHeight)*SCALE-8);
			ctx.lineTo( this.x*SCALE+10, (this.y-this.halfHeight)*SCALE-14);
			ctx.lineTo( this.x*SCALE, (this.y-this.halfHeight)*SCALE-9);
			ctx.lineTo( this.x*SCALE-10, (this.y-this.halfHeight)*SCALE-14);
			ctx.closePath();
			ctx.fill();
		}
		ctx.translate(x,y);
	}

}




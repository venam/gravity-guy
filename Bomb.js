function Bomb( id, x, y, center, radius) {
	this.color  = "#D3A203";
	CircleEntity.call(this, id, x, y, center, this.color, radius, true);
	this.type = "bomb";
	this.upColor = "#000000";
	this.hitCounter = 0;
	this.activated = false;
}

Bomb.prototype = new CircleEntity();
Bomb.constructor = Bomb;

//overriding the method draw
CircleEntity.prototype.draw = function(ctx) {
	ctx.fillStyle = this.color;
	ctx.strokeStyle = this.upColor;
	ctx.lineWidth = 3;
	ctx.beginPath();
	ctx.arc(this.x * SCALE, this.y * SCALE, this.radius * SCALE, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
}

Bomb.prototype.update = function(state) {
	if (this.isHit && this.hitCounter<5) {
		this.hitCounter++;
		if (this.hitCounter<2) {
			this.upColor = "#C8D303";
		}
		else if (this.hitCounter<3) {
			this.upColor = "#E88F1F";
		}
		else if (this.hitCounter>=3){
			this.upColor = "#D30A03";
		}

		if (this.hitCounter == 5) {
			this.activated = true;
			media.boingSound.play();
		}
	}

	//normal behavior
	Entity.prototype.update.call(this,state);
}




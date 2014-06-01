function Mine( id, x, y, center, orientation) {
	Platform.call(this, id,x,y,center,orientation);

	this.upColor      = "#000000";
	this.generalColor = "#D3A203";
	this.rangeColor   = "red";
	this.type         = "mine";
}

Mine.prototype = new Platform();
Mine.prototype.constructor = Mine;

Mine.prototype.drawDecoration = function(ctx) {
}


Mine.prototype.update = function(state) {
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




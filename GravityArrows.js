function GravityArrows(box) {
	this.box = box;
	//the arrow images and where to put each one of them
	this.positions = ["up","right", "down", "left"]
	this.arrows = {
		"up"    : {
			image: media.arrowSprites[0],
			position: 0,
			grav: "up"
		},
		"right" : {
			image: media.arrowSprites[1],
			position: 1,
			grav:"right"
		},
		"down"  : {
			image: media.arrowSprites[2],
			position: 2,
			grav:"down"
		},
		"left"  : {
			image: media.arrowSprites[3],
			position: 3,
			grav:"left"
		}
	};

	//setup the positions,considering an arrow is 20x20
	this.places = new Array();
	this.places[0] = {
		x: 25,
		y: 0
	};
	this.places[1] = {
		x: 42,
		y: 20
	}
	this.places[2] = {
		x: 25,
		y: 40
	}
	this.places[3] = {
		x: 5,
		y: 20
	};

	this.currentGrav = "down";
}

GravityArrows.prototype.draw = function(ctx) {
	ctx.save();

	var i=0
	for (var id in this.arrows) {
		var img = this.arrows[id].image;
		if (this.currentGrav == id) {
			img = media.arrowSprites[i+4];
		}
		else if (this.currentGrav == id+"+") {
			img = media.arrowSprites[i+8];
		}
		ctx.drawImage( img.image,
			img.sx, //position on the image
			img.sy, //position on the image
			img.sw, //image width on the image
			img.sh, //image height on the image
			Math.floor(this.places[this.arrows[id].position].x), //position x on canvas
			Math.floor(this.places[this.arrows[id].position].y), //position y on canvas
			20, //width on canvas
			20 //height on canvas
		);
		i++;
	}
	ctx.restore();
}

GravityArrows.prototype.rotateLeft = function() {
	for (var id in this.arrows) {
		if ( this.arrows[id].position ==0 ) {
			this.arrows[id].position = this.positions.length-1;
		}
		else {
			this.arrows[id].position--;
		}
	}
}

GravityArrows.prototype.rotateRight = function() {
	for (var id in this.arrows) {
		if (this.arrows[id].position == this.positions.length-1 ) {
			this.arrows[id].position = 0;
		}
		else {
			this.arrows[id].position ++;
		}
	}
}

GravityArrows.prototype.backToNormal = function() {
	this.arrows.up.position    = 0;
	this.arrows.right.position = 1;
	this.arrows.down.position  = 2;
	this.arrows.left.position  = 3;
}

//set the current gravity
GravityArrows.prototype.setGrav = function(grav) {
	if (grav.charAt(grav.length-1)=="+" ){
		this.currentGrav = grav;
	}
	else {
		for ( var id in this.arrows ) {
			if (this.positions[this.arrows[id].position] ==grav) {
				this.currentGrav = this.arrows[id].grav;
				break;
			}
		}
	}
	this.box.setGrav(this.currentGrav);
}



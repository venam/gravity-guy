//super class Entity
NULL_CENTER  = {x:null, y:null};
function Entity(id, x, y, center,color, dynamic) {
	this.id      = id;
	this.type    = "normal";
	this.x       = x;
	this.y       = y;
	this.center  = center;
	this.color   = color || "red";
	this.dynamic = dynamic;
	this.angle   = 0;
	this.isHit   = false;
}

//Methods of Entity
Entity.prototype.update = function(state) {
	this.x      = state.x;
	this.y      = state.y;
	this.center = state.c;
	this.angle  = state.a;
}

Entity.prototype.hit = function(impulse, source) {
	this.isHit = true;
	/*
	if (this.strength) {
		this.strength -= impulse;
		if (this.strength <= 0) {
		this.dead = true
		}
	}
	*/
//	console.log(this.id + ", " + impulse + ", " + source.id + ", " + this.strength);
}

Entity.prototype.draw = function(ctx) {
	ctx.fillStyle = 'black';
	ctx.beginPath();
	ctx.arc(this.x * SCALE, this.y * SCALE, 4, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.fill();

	/*
	ctx.fillStyle = 'yellow';
	ctx.beginPath();
	ctx.arc(this.center.x*SCALE, this.center.y*SCALE, 2, 0, Math.PI*2, true);
	ctx.closePath();
	ctx.fill();
	*/

	//clear its state
	this.isHit = false;
}

//that's my little poop, enjoy!
Entity.build = function(def) {
	if (def.type=="circle") {
		return new CircleEntity(def.id, def.x, def.y, NULL_CENTER, def.color, def.radius, def.dynamic);
	} else if (def.type=="polygon") {
		return new PolygonEntity(def.id, def.x, def.y, NULL_CENTER, def.color, def.polys, def.dynamic);
	} else if (def.type=="rectangle"){
		return new RectangleEntity(def.id, def.x, def.y, NULL_CENTER, def.color,def.halfWidth, def.halfHeight, def.dynamic);
	} else if (def.type=="spaceShip") {
		return new spaceShip(def.id, def.x, def.y, NULL_CENTER);
	} else if (def.type=="platform") {
		return new Platform(def.id, def.x, def.y, NULL_CENTER, def.orientation);
	} else if (def.type=="mine") {
		return new Mine(def.id, def.x, def.y, NULL_CENTER, def.orientation);
	} else if (def.type=="bomb") {
		return new Bomb(def.id, def.x, def.y, NULL_CENTER, def.radius);
	} else if (def.type=="circleSpikes") {
		return new CircleSpikes(def.id, def.x, def.y, NULL_CENTER, def.radius,def.dynamic);
	} else if (def.type=="rectangleSpikes") {
		return new RectangleSpikes(def.id, def.x, def.y, NULL_CENTER, def.halfWidth, def.halfHeight, def.dynamic);
	} else if (def.type=="greenAlien") {
		return new GreenAlien(def.id, def.x, def.y, NULL_CENTER);
	} else if (def.type=="redAlien") {
		return new RedAlien(def.id, def.x, def.y, NULL_CENTER);
	} else if (def.type=="guy") {
		return new Guy(def.id, NULL_CENTER);
	} else if (def.type=="alienPlatform") {
		return new AlienPlatform(def.id,def.x, def.y, NULL_CENTER, def.orientation);
	} else {
		return new RectangleEntity(def.id, def.x, def.y, NULL_CENTER, def.color,def.halfWidth, def.halfHeight, def.dynamic);
	}
}


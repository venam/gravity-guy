var GUY = 200;
function AlienLevel(game, stat) {
	State.call(this,game);
	this.stat            = stat;
	this.timer           = -1;          //no timer
	this.bodiesState     = null;
	this.box             = null;
	this.guy             = GUY;
	this.alienPlatforms  = new Array();
	this.rectangleSpikes = new Array();
	this.circleSpikes    = new Array();
	this.greenAliens     = new Array();
	this.redAliens       = new Array();
	this.world           = new Array(); //the world contains all of the above
	this.initialState    = new Array(); //initial state of everything
	this.lostStat        = "not lost";
	this.killedRed       = 0;
	this.capturedGreen   = 0;

	//related to the pointer
	this.pointerIsDown = false;
	this.origPoint     = {
		x: 0,
		y: 0
	};
}

AlienLevel.prototype = new State();
AlienLevel.prototype.constructor = Level;

//return current status in the level (how much left)
AlienLevel.prototype.won = function() {
	var h1   = this.killedRed;
	var t1   = this.redAliens.length;
	var h2   = this.capturedGreen;
	var t2   = this.greenAliens.length;
	return {
		h1: h1,
		t1: t1,
		h2: h2,
		t2: t2
	};
}

AlienLevel.prototype.pushToInitialState = function(temp, what) {
	var from = this.initialState.length;
	for (var i in temp) {
		temp[i].id = from;
		if (what) {
			what[i] = from;
		}
		this.initialState[from++] = temp[i];
	}
}

AlienLevel.prototype.prepareGuy = function() {
	this.initialState[this.guy] = {
		id: this.guy,
		type: "guy",
	};
}

AlienLevel.prototype.prepareWalls = function() {
	this.initialState[0] = {
		"id":0,
		"x":0.02,
		"y":5.5,
		"angle":0,
		"halfWidth":0.05,
		"halfHeight":9.60406, 
		"dynamic": false,
		type: "rectangle",
		color: "#121212"
	};
	this.initialState[1] = {
		"id":1,
		"x":20.0,
		"y":5.5,
		"angle":0,
		"halfWidth":0.05,
		"halfHeight":9.60406, 
		"dynamic": false,
		type: "rectangle",
		color: "#121212"
	};
	this.initialState[2] = {
		"id":2,
		"x":10.02,
		"y":13.3,
		"angle":0,
		"halfWidth":10.05,
		"halfHeight":0.05, 
		"dynamic": false,
		type: "rectangle",
		color: "#121212"
	};
	this.initialState[3] = {
		"id":3,
		"x":10.02,
		"y":0.02,
		"angle":0,
		"halfWidth":10.05,
		"halfHeight":0.05, 
		"dynamic": false,
		type: "rectangle",
		color: "#121212"
	};
}

AlienLevel.prototype.prepareAlienPlatforms = function(platforms) {
	this.pushToInitialState(platforms,this.alienPlatforms);
}

AlienLevel.prototype.prepareRectSpikes = function(spikes) {
	this.pushToInitialState(spikes,this.rectangleSpikes);
}

AlienLevel.prototype.prepareCirclSpikes = function(spikes) {
	this.pushToInitialState(spikes,this.circleSpikes);
}

AlienLevel.prototype.prepareGreenAliens = function(aliens) {
	this.pushToInitialState(aliens,this.greenAliens);
}

AlienLevel.prototype.prepareRedAliens = function(aliens) {
	this.pushToInitialState(aliens,this.redAliens);
}

AlienLevel.prototype.prepareRest = function(rest) {
	this.pushToInitialState(rest,null);
}

AlienLevel.prototype.init = function(platforms,rSpikes,cSpikes,gAliens,rAliens,rest) {
	this.prepareWalls();
	this.prepareAlienPlatforms(platforms);
	this.prepareRectSpikes(rSpikes);
	this.prepareCirclSpikes(cSpikes);
	this.prepareRest(rest);
	this.prepareGreenAliens(gAliens);
	this.prepareRedAliens(rAliens);
	this.prepareGuy();


	//fill the world with all the objects
	for (var i in this.initialState) {
		this.world[i] = Entity.build(this.initialState[i]);
	}

	if (!theGame.mobile) {
		this.box = new bTest(90, false, this.game.canvasWidth, this.game.canvasHeight, SCALE);
	}
	else {
		this.box = new bTest(85, false, this.game.canvasWidth, this.game.canvasHeight, SCALE);
	}
	this.box.setBodies(this.world);
	this.setContacts();
	this.gravityArrows = new GravityArrows(this.box);
	this.gravityArrows.setGrav("down");
}

AlienLevel.prototype.setContacts = function() {
	this.box.addContactListener({
		BeginContact: function(idA, idB) {
			//console.log('b');
		},
		PostSolve: function (idA, idB, impulse) {
			if (impulse<0.05) return;

			//ugly work-around
			var entityA = gettingThereState.level.world[idA];
			var entityB = gettingThereState.level.world[idB];
			if (!entityA || !entityB) return;
			//colision between spikes and alien
			if ( (entityA.type =="rectangleSpikes" || entityB.type == "rectangleSpikes"||
					entityA.type =="circleSpikes" || entityB.type =="circleSpikes")&&
			  (entityB.type =="greenAlien" || entityA.type=="greenAlien"||
			   entityB.type =="redAlien" || entityA.type=="redAlien") ) {
				  if (entityA.type == "greenAlien"|| entityA.type =="redAlien") {
					entityA.startedDying = true;
				  }
				  else {
					  entityB.startedDying = true;
				  }
			}
			else if ( (entityB.type=="guy" || entityA.type=="guy")&&
			  (entityA.type =="rectangleSpikes" || entityB.type == "rectangleSpikes"||
			   entityA.type =="circleSpikes" || entityB.type =="circleSpikes") ) {
				if (entityB.type == "guy") {
					entityB.dead = true;
				}
				else {
					entityA.dead = true;
				}
			}
			else if ( (entityA.type =="alienPlatform" || entityB.type == "alienPlatform")&&
				(entityB.type =="greenAlien" || entityA.type=="greenAlien"||
				entityB.type =="redAlien" || entityA.type=="redAlien") ) {
				if (entityA.type=="greenAlien" ||entityA.type=="redAlien") {
					entityA.absorbed = true;
				}
				else {
					entityB.absorbed = true;
				}
			}
		}
	});
}

AlienLevel.prototype.eventsCallbacks = function() {
	if (38 in keysDown) { //holding up
		this.gravityArrows.setGrav("up");
	}
	if (40 in keysDown) { //holding down
		this.gravityArrows.setGrav("down");
	}
	if (37 in keysDown) { //holding left
		this.gravityArrows.setGrav("left");
	}
	if (39 in keysDown) { //holding right
		this.gravityArrows.setGrav("right");
	}

	if (gettingThereState.slowerCounter == gettingThereState.maxSlower) {
		if (82 in keysDown) { //holding 'r'
			gettingThereState.changeLevel();
			this.game.nbOfDeath++;
			gettingThereState.slowerCounter = 0;
		}
		if (80 in keysDown) { //holding 'p'
			this.game.setState(mainMenuState);
			gettingThereState.slowerCounter = 0;
		}
	}
	this.world[this.guy].setFrames(this.gravityArrows);
}
 

AlienLevel.prototype.update = function(animStart) {
	this.eventsCallbacks();
	this.box.update();
	this.bodiesState = this.box.getState();
	for (var id in this.bodiesState) {
		var entity = this.world[id];
		if (entity) {
			//count deads and captured here
			if (entity.type =="greenAlien"||entity.type=="redAlien"){
			   if (entity.dead) {
					media.boingSound.play();
					this.world[id] = null;
					this.box.removeBody(id);
					if (entity.type=="greenAlien") {
						this.lostStat = "killedGreen";
					}
					else {
						this.killedRed++;
					}
				}
				else if (entity.absorbed) {
					media.bumpSound.play();
					this.world[id] = null;
					this.box.removeBody(id);
					if (entity.type=="greenAlien") {
						this.capturedGreen ++;
					}
					else {
						this.lostStat = "absorbedRed";
					}
				}
				else {
					entity.update(this.bodiesState[id]);
				}
			}
			else if (entity.type=="guy" && entity.dead==true) {
				media.boingSound.play();
				this.lostStat = "killedGuy";
			}
			else {
				entity.update(this.bodiesState[id]);
			}
		}
	}

	this.timerCheck();
	if (this.lostStat!="not lost") {
		this.game.nbOfDeath++;
		gettingThereState.changeLevel();
	}
	var wonStats = this.won();
	if (wonStats.h1 == wonStats.t1 &&
		wonStats.h2 == wonStats.t2){
		this.game.increaseLevel();
		gettingThereState.changeLevel();
	}
}

AlienLevel.prototype.timerCheck = function() {
	if (this.timer>0) {
		this.timer--;
	}
	else if (this.timer ==0) {
		this.lostStat = "timer";
	}
}

AlienLevel.prototype.drawIcons = function(ctx) {
	var pause       = media.iconSprites[4];
	var refresh     = media.iconSprites[5];
	var levelIco    = media.iconSprites[1];
	var skull       = media.iconSprites[3];

	ctx.shadowColor = "yellow";
	ctx.fillStyle = "#FFFFFF";
	ctx.font = "13px Helvetica";
	ctx.textAlign="center";

	ctx.drawImage( levelIco.image,
		levelIco.sx, //position on the image
		levelIco.sy, //position on the image
		levelIco.sw, //image width on the image
		levelIco.sh, //image height on the image
		470, //position x on canvas
		6, //position y on canvas
		21, //width on canvas
		21 //height on canvas
	);
	ctx.fillText(this.game.currentLevel , 480, 40);

	ctx.drawImage( skull.image,
		skull.sx, //position on the image
		skull.sy, //position on the image
		skull.sw, //image width on the image
		skull.sh, //image height on the image
		500, //position x on canvas
		6, //position y on canvas
		21, //width on canvas
		21 //height on canvas
	);
	ctx.fillText(this.game.nbOfDeath , 510, 40);

	ctx.drawImage( pause.image,
		pause.sx, //position on the image
		pause.sy, //position on the image
		pause.sw, //image width on the image
		pause.sh, //image height on the image
		570, //position x on canvas
		6, //position y on canvas
		21, //width on canvas
		21 //height on canvas
	);

	ctx.drawImage( refresh.image,
		refresh.sx, //position on the image
		refresh.sy, //position on the image
		refresh.sw, //image width on the image
		refresh.sh, //image height on the image
		535, //position x on canvas
		6, //position y on canvas
		21, //width on canvas
		21 //height on canvas
	);
}

//draw which level it is and timer
AlienLevel.prototype.drawAlienLevelStat = function(ctx) {
	var aIco   = media.iconSprites[0];
	var aIco2  = media.iconSprites[6];
	var chrono = media.iconSprites[2];

	ctx.shadowColor = "yellow";
	ctx.fillStyle = "#FFFFFF";
	ctx.font = "13px Helvetica";
	ctx.textAlign="center";

	var position = 8;

	if (this.greenAliens.length>0) {
		ctx.drawImage(aIco.image,
				aIco.sx, //position on the image
				aIco.sy, //position on the image
				aIco.sw, //image width on the image
				aIco.sh, //image height on the image
				position, //position x on canvas
				6, //position y on canvas
				21, //width on canvas
				21 //height on canvas
		);
		ctx.fillText(this.capturedGreen+"/"+this.greenAliens.length, position+11, 40);
		position+= 40;
	}

	if (this.redAliens.length>0) {
		ctx.drawImage(aIco2.image,
				aIco2.sx, //position on the image
				aIco2.sy, //position on the image
				aIco2.sw, //image width on the image
				aIco2.sh, //image height on the image
				position, //position x on canvas
				6, //position y on canvas
				21, //width on canvas
				21 //height on canvas
		);
		ctx.fillText(this.killedRed+"/"+this.redAliens.length, position+11, 40);
		position+=40;
	}

	if (this.timer!=-1) {
		ctx.drawImage( chrono.image,
			chrono.sx, //position on the image
			chrono.sy, //position on the image
			chrono.sw, //image width on the image
			chrono.sh, //image height on the image
			position, //position x on canvas
			6, //position y on canvas
			21, //width on canvas
			21 //height on canvas
		);
		ctx.fillText(parseInt(this.timer/60)+"s", position+11, 40);
		position+=40;
	}
}

AlienLevel.prototype.drawBackground = function() {
	var pattern = this.game.ctx.createPattern( media.bgImage,"repeat");
	this.game.ctx.fillStyle = pattern;
	this.game.ctx.fillRect(0,0,700,600);
}

AlienLevel.prototype.draw = function () {
	this.drawBackground();
	for (var id in this.world) {
		var entity = this.world[id];
		if (entity) {
			entity.draw(this.game.ctx);
		}
	}
	this.drawAlienLevelStat(this.game.ctx);
	this.drawIcons(this.game.ctx);
}

//Handle pointer events
AlienLevel.prototype.pDown = function(e) {
	if (gettingThereState.slowerCounter == gettingThereState.maxSlower) {
		if (e.x>526 && e.x<564&& 5<e.y && e.y<40) {
			if (this.currentState == this.level) {
				gettingThereState.changeLevel();
				this.game.nbOfDeath++;
				gettingThereState.slowerCounter = 0;
			}
		}
		else if (e.x>568 && e.x<610&& 5<e.y&& e.y<40) {
			if (this.currentState == this.level) {
				this.game.setState(mainMenuState);
				gettingThereState.slowerCounter = 0;
			}
		}
		//not on the icons so set pointer down
		else {
			this.origPoint.x = e.x;
			this.origPoint.y = e.y;
			this.pointerIsDown = true;
		}
	}
}

AlienLevel.prototype.pUp = function(e) {
	this.pointerIsDown = false;
}

AlienLevel.prototype.pMove = function(e) {
	//if pressing the screen
	if (this.pointerIsDown) {
		var xDiff = this.origPoint.x-e.x;
		var yDiff = this.origPoint.y-e.y;
		if (Math.abs(xDiff) > Math.abs(yDiff) ){
			if(xDiff<-0.5) {
				this.gravityArrows.setGrav("right");
			}
			else if (xDiff>0.5){
				this.gravityArrows.setGrav("left");
			}
		}
		else {
			if(yDiff<-0.5) {
				this.gravityArrows.setGrav("down");
			}
			else if (yDiff>0.5){
				this.gravityArrows.setGrav("up");
			}
		}
	}
}


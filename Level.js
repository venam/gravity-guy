var SPACESHIP = 200;
function Level(game, stat) {
	State.call(this,game);
	this.stat         = stat;
	this.timer        = -1;          //no timer
	this.bodiesState  = null;
	this.box          = null;
	this.spaceShip    = SPACESHIP;   //the player moves that
	this.spaceShipIni = {            //initial position
		x:1.02, 
		y:12.0
	};
	this.platforms    = new Array(); //the platforms used to enter a level
	this.mines        = new Array();
	this.bombs        = new Array();
	this.warpZones    = new Array();
	this.world        = new Array(); //the world contains all of the above
	this.initialState = new Array(); //initial state of everything
	this.lostStat     = "not lost";
	this.activatedPlat= 0;
	this.pointerIsDown = false;
	this.origPoint     = {
		x: 0,
		y: 0
	};

//	this.init();

}

Level.prototype = new State();
Level.prototype.constructor = Level;

//return current status in the level (how much left)
Level.prototype.won = function() {
	var howMany   = this.activatedPlat;
	var total     = this.platforms.length;
	return {
		"howMany": howMany,
		"total"  : total
	};
}

//return why
Level.prototype.lost = function() {
	return this.lostStat;
}

Level.prototype.pushToInitialState = function(temp, what) {
	var from = this.initialState.length;
	for (var i in temp) {
		temp[i].id = from;
		if (what) {
			what[i] = from;
		}
		this.initialState[from++] = temp[i];
	}
}

Level.prototype.prepareSpaceShip = function() {
	this.initialState[this.spaceShip] = {
		"id":this.spaceShip,
		"x":this.spaceShipIni.x,
		"y":this.spaceShipIni.y,
		"angle":0,
		"dynamic": true,
		type: "spaceShip",
	};
}

Level.prototype.prepareWalls = function() {
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

Level.prototype.preparePlatforms = function(platforms) {
	this.pushToInitialState(platforms,this.platforms);
}

Level.prototype.prepareMines = function(mines) {
	this.pushToInitialState(mines,this.mines);
}

Level.prototype.prepareBombs = function(bombs) {
	this.pushToInitialState(bombs,this.bombs);
}

Level.prototype.prepareWarpZones = function(warpZonesUser) {
	for (var id in warpZonesUser) {
		this.warpZones[id] = new warpZone( {
				maxX: warpZonesUser[id].maxX,
				minX: warpZonesUser[id].minX,
				maxY: warpZonesUser[id].maxY,
				minY: warpZonesUser[id].minY
			}, warpZonesUser[id].color, 
			warpZonesUser[id].rotation,
			warpZonesUser[id].nbRotation
		);
	}
}

Level.prototype.prepareRest = function(rest) {
	this.pushToInitialState(rest,null);
}

Level.prototype.init = function(platforms,mines,bombs,warpZones,rest) {
	this.prepareWalls();
	this.prepareWarpZones(warpZones);
	this.preparePlatforms(platforms);
	this.prepareMines(mines);
	this.prepareBombs(bombs);
	this.prepareRest(rest);
	this.prepareSpaceShip();

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
			if ( (gettingThereState.level.platforms.indexOf(entityB.id)!=-1 
				|| gettingThereState.level.platforms.indexOf(entityA.id)!=-1 
				|| gettingThereState.level.mines.indexOf(entityA.id)!=-1
				|| gettingThereState.level.mines.indexOf(entityB.id)!=-1
				|| gettingThereState.level.bombs.indexOf(entityA.id)!=-1
				|| gettingThereState.level.bombs.indexOf(entityB.id)!=-1)
				&&  (entityA.id==SPACESHIP||entityB.id==SPACESHIP)) {
				entityA.hit(impulse, entityB);
				entityB.hit(impulse, entityA);
			}
		}
	});
	this.gravityArrows = new GravityArrows(this.box);
	this.gravityArrows.setGrav("down");
}

Level.prototype.eventsCallbacks = function() {
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

}
 

Level.prototype.update = function(animStart) {
	for (var id in this.warpZones) {
		this.warpZones[id].inZone({
			x: this.world[this.spaceShip].x,
			y: this.world[this.spaceShip].y
		}, this.gravityArrows);
	}

	this.box.update();
	this.bodiesState = this.box.getState();
	this.activatedPlat = 0;
	for (var id in this.bodiesState) {
		var entity = this.world[id];
		if (entity) {
			entity.update(this.bodiesState[id]);
			if (entity.type =="platform" &&
					entity.activated) {
				this.activatedPlat++;
			}
			else if ( entity.type =="mine" &&
					entity.activated) {
				this.lostStat = "mine";
			}
			else if (entity.type =="bomb" &&
					entity.activated) {
				this.lostStat = "bomb";
			}
		}
	}

	this.platformCheck();
	this.mineCheck();
	this.timerCheck();

	var lostStats = this.lost();
	if (lostStats!="not lost") {
		this.game.nbOfDeath++;
		gettingThereState.changeLevel();
	}
	var wonStats = this.won();
	if (wonStats.howMany == wonStats.total){
		this.game.increaseLevel();
		gettingThereState.changeLevel();
	}
}

Level.prototype.timerCheck = function() {
	if (this.timer>0) {
		this.timer--;
	}
	else if (this.timer ==0) {
		this.lostStat = "timer";
	}
}

Level.prototype.platformCheck = function() {
	for (var id in this.platforms) {
		if (this.world[this.platforms[id]].inZone( {
			x:this.world[this.spaceShip].x,
			y:this.world[this.spaceShip].y
		},this.gravityArrows) ) {
			break;
		}
	}
}

Level.prototype.mineCheck = function() {
	for (var id in this.mines) {
		if (this.world[this.mines[id]].inZone( {
			x:this.world[this.spaceShip].x,
			y:this.world[this.spaceShip].y
		},this.gravityArrows) ) {
			break;
		}
	}
}

//draw which level it is and timer
Level.prototype.drawLevelStat = function(ctx) {

	var platformIco = media.iconSprites[0];
	var levelIco    = media.iconSprites[1];
	var chrono      = media.iconSprites[2];
	var skull       = media.iconSprites[3];

	ctx.shadowColor = "yellow";
	ctx.fillStyle = "#FFFFFF";
	ctx.font = "13px Helvetica";
	ctx.textAlign="center";

	ctx.drawImage( platformIco.image,
			platformIco.sx, //position on the image
			platformIco.sy, //position on the image
			platformIco.sw, //image width on the image
			platformIco.sh, //image height on the image
			80, //position x on canvas
			6, //position y on canvas
			21, //width on canvas
			21 //height on canvas
	);
	ctx.fillText(this.activatedPlat+"/"+this.platforms.length, 90, 40);


	if (this.timer!=-1) {
		ctx.drawImage( chrono.image,
			chrono.sx, //position on the image
			chrono.sy, //position on the image
			chrono.sw, //image width on the image
			chrono.sh, //image height on the image
			110, //position x on canvas
			6, //position y on canvas
			21, //width on canvas
			21 //height on canvas
		);
		ctx.fillText(parseInt(this.timer/60)+"s", 120, 40);
	}
	ctx.shadowBlur = 0;
}

Level.prototype.drawBackground = function() {
//	var pattern = this.game.ctx.createLinearGradient(0,0,0,600);
//	pattern.addColorStop(0.4, "#404040");
//	pattern.addColorStop(0.8, "#459090");
	var pattern = this.game.ctx.createPattern( media.bgImage,"repeat");
	this.game.ctx.fillStyle = pattern;
	this.game.ctx.fillRect(0,0,700,600);
}

Level.prototype.drawIcons = function(ctx) {
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

Level.prototype.draw = function () {
	this.drawBackground();
	for (var id in this.warpZones) {
		this.warpZones[id].draw(this.game.ctx);
	}
	for (var id in this.world) {
		var entity = this.world[id];
		entity.draw(this.game.ctx);
	}
	this.drawLevelStat(this.game.ctx);
	this.gravityArrows.draw(this.game.ctx);
	this.drawIcons(this.game.ctx);
}

//Handle pointer events
Level.prototype.pDown = function(e) {
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

Level.prototype.pUp = function(e) {
	this.pointerIsDown = false;
}

Level.prototype.pMove = function(e) {
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


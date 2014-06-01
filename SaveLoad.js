/*
 * If Save doesn't work make sure that DOM storage is enabled,
 * dom.storage.enabled
 */
function SaveLoadState(game) {
	State.call(this,game);
	this.currentOption = 0;
	this.maxOption     = 5;
	this.maxSlower     = 10;
	this.slowerCounter = 0;
	this.loadable = new Array();
	this.fillLoadable();
}

SaveLoadState.prototype = new State();
SaveLoadState.prototype.constructor = SaveLoadState;

//draw on this.game.ctx        (called 60/s)
SaveLoadState.prototype.draw = function() {
	this.game.ctx.clearRect(0, 0, this.game.canvasWidth, this.game.canvasHeight);
	this.game.ctx.drawImage(media.mainImage, 0, 0);
	this.game.ctx.fillStyle   = "#0F90FF";
	this.game.ctx.strokeStyle = "#212121";
	this.game.ctx.font = "50px Computerfont";
	this.game.ctx.textAlign="left";
	this.game.ctx.shadowBlur =0;
	this.game.ctx.fillText("States", 260, 40);
	this.game.ctx.strokeText("States", 260, 40);
	this.game.ctx.font = "40px Computerfont";
	this.game.ctx.textAlight="left";
	this.drawLoads(this.game.ctx);
	this.drawHowTo(this.game.ctx);
	this.drawBack(this.game.ctx);
}

SaveLoadState.prototype.date = function() {
	var muhDate = new Date();
	return muhDate.getDate()+"-"+(muhDate.getMonth()+1)+"-"+muhDate.getFullYear()
}

SaveLoadState.prototype.fillLoadable = function() {
	var saves = this.loadLevel();
	if (saves == null) {
		for (var i=0; i< 5; i++) {
			this.loadable[i] = {
				date:"??-??-????",
				level:"?.?",
				nbOfDeath: "?",
				zik: "?",
				sfx: "?"
			};
		}
	}
	else {
		var saves = JSON.parse(saves)
		for (var id in saves) {
			this.loadable[id] = saves[id];
		}
	}
}

SaveLoadState.prototype.loadLevel = function() {
	//level will be an array later on
	if (localStorage){
		var saves = localStorage.getItem("saves");
		if (saves != null)  {
			return saves;
		}
	}
	return null;
}

SaveLoadState.prototype.setInLocalStorage = function() {
	//tell me if you find a better way than that poop
	var toSave =  {
		0: {
			date: this.loadable[0].date,
			level: this.loadable[0].level,
			nbOfDeath: this.loadable[0].nbOfDeath,
			zik: this.loadable[0].zik,
			sfx: this.loadable[0].sfx
		},
		1: {
			date: this.loadable[1].date,
			level: this.loadable[1].level,
			nbOfDeath: this.loadable[1].nbOfDeath,
			zik: this.loadable[1].zik,
			sfx: this.loadable[1].sfx
		},
		2:{
			date: this.loadable[2].date,
			level: this.loadable[2].level,
			nbOfDeath: this.loadable[2].nbOfDeath,
			zik: this.loadable[2].zik,
			sfx: this.loadable[2].sfx
		},
		3: {
			date: this.loadable[3].date,
			level: this.loadable[3].level,
			nbOfDeath: this.loadable[3].nbOfDeath,
			zik: this.loadable[3].zik,
			sfx: this.loadable[3].sfx
		},
		4: {
			date: this.loadable[4].date,
			level: this.loadable[4].level,
			nbOfDeath: this.loadable[4].nbOfDeath,
			zik: this.loadable[4].zik,
			sfx: this.loadable[4].sfx
		}
	}
	localStorage.setItem("saves", JSON.stringify(toSave));
}

SaveLoadState.prototype.saveState = function() {
	this.loadable[this.currentOption] = {
		date: this.date(),
		level: this.game.currentLevel,
		nbOfDeath: this.game.nbOfDeath,
		zik: media.zik.volume,
		sfx: media.boingSound.volume
	};
	this.setInLocalStorage();
}

SaveLoadState.prototype.delState =  function() {
	this.loadable[this.currentOption] = {
		date:"??-??-????",
		level:"?.?",
		nbOfDeath: "?",
		zik: "?",
		sfx: "?"
	};
	this.setInLocalStorage();
}

SaveLoadState.prototype.loadState = function() {
	if (this.loadable[this.currentOption].zik!="?") {
		this.game.currentLevel = this.loadable[this.currentOption].level;
		this.game.nbOfDeath    = this.loadable[this.currentOption].nbOfDeath;
		media.zik.volume       = this.loadable[this.currentOption].zik;
		media.boingSound.volume= this.loadable[this.currentOption].sfx;
		media.bumpSound.volume = this.loadable[this.currentOption].sfx;
		gettingThereState.changeLevel();
		this.game.setState(gettingThereState);
	}
}

SaveLoadState.prototype.clearLevel = function() {
	localStorage.clear();
	//localStorage.removeItem("level");
}

SaveLoadState.prototype.drawLoads = function(ctx) {
	ctx.shadowBlur = 0;
	ctx.font = "25px Computerfont";
	ctx.textAlight="left";

	var levelIco    = media.iconSprites[1];
	var chrono      = media.iconSprites[2];
	var skull       = media.iconSprites[3];
	ctx.drawImage( chrono.image,
		chrono.sx, //position on the image
		chrono.sy, //position on the image
		chrono.sw, //image width on the image
		chrono.sh, //image height on the image
		264, //position x on canvas
		60, //position y on canvas
		21, //width on canvas
		21 //height on canvas
	);
	ctx.drawImage( levelIco.image,
		levelIco.sx, //position on the image
		levelIco.sy, //position on the image
		levelIco.sw, //image width on the image
		levelIco.sh, //image height on the image
		450, //position x on canvas
		60, //position y on canvas
		21, //width on canvas
		21 //height on canvas
	);
	ctx.drawImage( skull.image,
		skull.sx, //position on the image
		skull.sy, //position on the image
		skull.sw, //image width on the image
		skull.sh, //image height on the image
		510, //position x on canvas
		60, //position y on canvas
		21, //width on canvas
		21 //height on canvas
	);

	var position = 98;
	ctx.strokeStyle = "#000000";
	for (var id in this.loadable) {
		if (id == this.currentOption) {
			ctx.fillStyle = "#11A249";
		}
		else {
			ctx.fillStyle = "#0F90FF";
		}
		ctx.lineWidth = 1;
		ctx.fillText(id+".",235, position);
		ctx.fillText(this.loadable[id].date, 265, position);
		ctx.fillText(this.loadable[id].level, 445, position);
		ctx.fillText(this.loadable[id].nbOfDeath, 515, position);
		
		ctx.strokeText(id+".",235, position);
		ctx.strokeText(this.loadable[id].date, 265, position);
		ctx.strokeText(this.loadable[id].level, 445, position);
		ctx.strokeText(this.loadable[id].nbOfDeath, 515, position);
		
		position+=21;
	}
	ctx.fillStyle = "#0F90FF";
}

SaveLoadState.prototype.drawHowTo = function(ctx) {
	ctx.font = "20px Computerfont";
	ctx.fillText("S: Save   L: Load   D: Delete", 270, 248);
	ctx.strokeText("S: Save   L: Load   D: Delete", 270, 248);

}

SaveLoadState.prototype.drawBack = function(ctx) {
	ctx.font = "40px Computerfont";
	var position = 270;
	if (this.currentOption == 5) {
		ctx.fillStyle = "#11A249";
		position += 30;
	}
	else {
		ctx.fillStyle = "#0F90FF";
	}
	ctx.fillText("Back", position, 220);
	ctx.strokeText("Back", position, 220);
}

//update all that is happening (called 60/s)
SaveLoadState.prototype.update = function(animStart) {
	this.eventsCallbacks();
	if(this.slowerCounter < this.maxSlower) {
		this.slowerCounter++;
	}
}

//handles events recorded in this.keysDown
SaveLoadState.prototype.eventsCallbacks = function() {
	if (this.slowerCounter == this.maxSlower) {
		if (38 in keysDown) { //holding up
			this.currentOption--;
			if (this.currentOption == -1) {
				this.currentOption=this.maxOption;
			}
			this.slowerCounter = 0;
		}
		if (81 in keysDown) { //holding 'q'
			this.slowerCounter = 0;
			this.game.setState(mainMenuState);
		}
		if ( 83 in keysDown) { //holding 's'
			this.slowerCounter =0;
			if (this.currentOption<6) {
				this.saveState();
			}
		}
		if ( 76 in keysDown) { //holding 'l'
			this.slowerCounter =0;
			if (this.currentOption<6) {
				this.loadState();
			}
		}
		if ( 68 in keysDown) { //holding 'd'
			this.slowerCounter =0;
			if (this.currentOption<6) {
				this.delState();
			}
		}
		if (40 in keysDown) { //holding down
			this.currentOption++;
			if(this.currentOption == this.maxOption+1) {
				this.currentOption = 0;
			}
			this.slowerCounter = 0;
		}
		if( 13 in keysDown) { //holding enter
			if (this.currentOption==5) {
				this.game.setState(mainMenuState);
			}
			this.slowerCounter = 0;
		}
	}
}




//Handle pointer events
SaveLoadState.prototype.pDown = function(e) {
	if (this.slowerCounter == this.maxSlower) {
		if (e.x>240 && e.x<530) {
			if (200<e.y && e.y<227) {
				this.currentOption = 5;
				this.slowerCounter = 0;
				this.game.setState(mainMenuState);
			}
			else if (87<e.y && e.y<100) {
				this.currentOption = 0;
				this.slowerCounter = 0;
			}
			else if (110<e.y && e.y<123) {
				this.currentOption = 1;
				this.slowerCounter = 0;
			}
			else if (128<e.y && e.y<145) {
				this.currentOption = 2;
				this.slowerCounter = 0;
			}
			else if (150<e.y && e.y<160) {
				this.currentOption = 3;
				this.slowerCounter = 0;
			}
			else if (172<e.y && e.y<185) {
				this.currentOption = 4;
				this.slowerCounter = 0;
			}
			else if (240<e.y &&e.y<270) {
				this.slowerCounter = 0;
				if (e.x>265 && e.x<345 && this.currentOption<5) {
					this.saveState();
				}
				if (e.x>345 && e.x<430 && this.currentOption<5) {
					this.loadState();
				}
				if (e.x>430 && e.x<525 && this.currentOption<5) {
					this.delState();
				}
			}
		}
	}
}

SaveLoadState.prototype.pUp = function(e) {
}

SaveLoadState.prototype.pMove = function(e) {
}



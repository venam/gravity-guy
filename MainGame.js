//wrapper for requestAnimFrame that works on multiple Browsers
window.requestAnimFrame = (function(){
	return  window.requestAnimationFrame       || 
			window.webkitRequestAnimationFrame || 
			window.mozRequestAnimationFrame    || 
			window.oRequestAnimationFrame      || 
			window.msRequestAnimationFrame     || 
			function(/* function */ callback, /* DOMElement */ element){
				window.setTimeout(callback, 1000 / 60);
			};
})();

/*---- MainGame Class ----*/
function MainGame() {
	//related to levels and powerup
	this.unlockedLevels     = 0 ;
	this.currentLevel       = "1.1";
	this.nbOfDeath          = 0;
	//canvas used everywhere
	this.canvas             = document.getElementById("c0");
	this.ctx                = this.canvas.getContext("2d");
	this.canvasWidth        = this.ctx.canvas.width;
	this.canvasHeight       = this.ctx.canvas.height;

	this.mobile             = false;
	this.mobileCheck();

	this.levelFact          = new LevelFactory(this);
	this.tipsFact           = new TipsFactory(this);
}

MainGame.prototype.mobileCheck = function() {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent.toLocaleLowerCase()) ){
		this.mobile = true;
	}
}

//change the game state
MainGame.prototype.setState = function (state) {
	gameState = state;
}

//the game loop that runs 60/s
MainGame.prototype.run = function () {
//	document.addEventListener("DOMContentLoaded", function() {
		(function loop(animStart) {
			/*
			if (media.zik.ended ) {
				media.zik.play();
			}
			*/
			gameState.update(animStart);
			gameState.draw();
			requestAnimFrame(loop);
		})();
//	}, false);
}

MainGame.prototype.increaseLevel = function() {
	if (this.currentLevel.substr(this.currentLevel.length-2, this.currentLevel.length-1)==".2") {
		this.currentLevel = parseFloat(this.currentLevel)+1;
		this.currentLevel-=0.1;
		this.currentLevel = this.currentLevel.toFixed(1);
	}
	else {
		this.currentLevel = parseFloat(this.currentLevel)+0.1;
		this.currentLevel = this.currentLevel.toFixed(1);
	}
	if (this.unlockedLevels< this.currentLevel) {
		this.unlockedLevels = this.currentLevel;
	}
	this.currentLevel = this.currentLevel.toString();
}
/*---- End of MainGame ----*/

/*---- Global vars ----*/
var SCALE    = 30;
var theGame  = new MainGame();
var media    = new Media();
//can't place that anywhere else
var tipsImgs = {
	"1.1" : media.tipsSprites[0],
	"2.1" : media.tipsSprites[1],
	"4.1" : media.tipsSprites[2],
	"6.1" : media.tipsSprites[3],
	"8.1" : media.tipsSprites[4],
	"12.1": media.tipsSprites[5],
	"1.2" : media.tipsSprites[6],
	"3.2" : media.tipsSprites[7],
	"5.2" : media.tipsSprites[8],
};
//states
mainMenuState      = new MainMenuState(theGame);
gettingThereState  = new GettingThereState(theGame);
soundState         = new SoundState(theGame,mainMenuState);
saveLoadState      = new SaveLoadState(theGame);
winState           = new WinState(theGame);
gameState          = mainMenuState;

//all Events
var keysDown = {};
addEventListener("keydown", function(e) {
	keysDown[e.keyCode] = true;
}, false);
addEventListener("keyup", function(e) {
	delete keysDown[e.keyCode];
}, false);
window.addEventListener("pointerdown", function(e) {
//	media.zik.play();
	e.x-=theGame.canvas.offsetLeft;
	e.y-=theGame.canvas.offsetTop;
	gameState.pDown(e);
}, false);
window.addEventListener("pointerup", function(e) {
	var rect = theGame.canvas.getBoundingClientRect();
	e.x-=rect.left;
	e.y-=rect.top;
	gameState.pUp(e);
}, false);
window.addEventListener("pointermove", function(e) {
	var rect = theGame.canvas.getBoundingClientRect();
	e.x-=rect.left;
	e.y-=rect.top;
	gameState.pMove(e);
}, false);


/*---- Make it run ----*/
//load media then run
function preLoadMedia() {
	if (media.totalMedia != imgsReady.length) {
		//Loading Screen
		theGame.fillStyle = "#212121";
		theGame.ctx.fillRect(0,0,600,400);
		theGame.ctx.textAlign = "center";
		theGame.ctx.fillStyle = "#FFF";
		theGame.ctx.font = "50px Helvetica";
		theGame.ctx.fillText("Now Loading...", 300, 200);
		theGame.ctx.fillRect(180,210, 200, 3);
		setTimeout(preLoadMedia, 250);
	}
	else {
		
		//play music 
		//media.zik.play();
		//start the game
		theGame.run();
	}
};
preLoadMedia();
/*---- ----*/



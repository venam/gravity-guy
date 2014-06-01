var imgsReady = new Array();

function Media() {
	this.totalMedia = 9;
	this.spaceShipSprites = new Array();
	this.arrowSprites     = new Array();
	this.iconSprites      = new Array();
	this.tipsSprites      = new Array();
	this.spikesSprites    = new Array();
	this.alienSprites     = new Array();
	this.guySprites       = new Array();
	this.setupImages();
	this.setupSounds();
}

Media.prototype.setupImages = function() {
	this.mainImage = new Image();
	this.mainImage.onload = function() {
		imgsReady[imgsReady.length] = true;
	};
	this.mainImage.src="MainTitle.png";

	this.bgImage = new Image();
	this.bgImage.onload = function() {
		imgsReady[imgsReady.length] = true;
	};
	this.bgImage.src =  "rubber_grip.png";

	//spaceShipSprites
	var spaceShipImg = new Image();
	for (var i=0; i<4;i++) {
		this.spaceShipSprites[i] = {
			image: spaceShipImg,
			sx   : 60*i,
			sy   : 0,
			sw   : 60, 
			sh   : 60
		}
	}
	spaceShipImg.onload = function() {
		imgsReady[imgsReady.length] = true;
	}
	spaceShipImg.src = "spaceShipSprites.png";

	//spaceShipSprites
	var arrowImg = new Image();
	for (var i=0; i<12;i++) {
		this.arrowSprites[i] = {
			image: arrowImg,
			sx   : 60*i,
			sy   : 0,
			sw   : 60, 
			sh   : 60
		}
	}
	arrowImg.onload = function() {
		imgsReady[imgsReady.length] = true;
	}
	arrowImg.src = "gravArrowsSprites.png";


	//iconsSprites
	var iconImg = new Image();
	for (var i=0; i<7;i++) {
		this.iconSprites[i] = {
			image: iconImg,
			sx   : 60*i,
			sy   : 0,
			sw   : 60, 
			sh   : 60
		}
	}
	iconImg.onload = function() {
		imgsReady[imgsReady.length] = true;
	}
	iconImg.src = "icons.png";

	var spikeImg = new Image();
	for (var i=0; i<2;i++) {
		this.spikesSprites[i] = {
			image: spikeImg,
			sx   : 300*i,
			sy   : 0,
			sw   : 300, 
			sh   : 300
		}
	}
	spikeImg.onload = function() {
		imgsReady[imgsReady.length] = true;
	}
	spikeImg.src = "spikesSprites.png";


	var alienImg = new Image();
	for (var i=0; i<2;i++) {
		this.alienSprites[i] = {
			image: alienImg,
			sx   : 120*i,
			sy   : 0,
			sw   : 120, 
			sh   : 120
		}
	}
	alienImg.onload = function() {
		imgsReady[imgsReady.length] = true;
	}
	alienImg.src = "aliens.png";

	var guyImg = new Image();
	for (var i=0; i<12;i++) {
		this.guySprites[i] = {
			image: guyImg,
			sx   : 300*i,
			sy   : 0,
			sw   : 300, 
			sh   : 430
		}
	}
	guyImg.onload = function() {
		imgsReady[imgsReady.length] = true;
	}
	guyImg.src = "theGuy.png";

	//tipsSprites
	var tipsImg = new Image();
	for (var i=0; i<9;i++) {
		this.tipsSprites[i] = {
			image: tipsImg,
			sx   : 600*i,
			sy   : 0,
			sw   : 600, 
			sh   : 400
		}
	}
	tipsImg.onload = function() {
		imgsReady[imgsReady.length] = true;
	}
	tipsImg.src = "Tips.png";
}

Media.prototype.setupSounds = function() {
	/*
	 currentTime	playhead position	double (seconds)
	 duration	media duration	double (seconds); read-only
	 muted	is volume muted?	boolean
	 paused		is media paused?	boolean
	 volume		volume level	double (between 0 and 1)currentTime		playhead position	double (seconds)
	 duration	media duration	double (seconds); read-only
	 muted	is volume muted?	boolean
	 paused		is media paused?	boolean
	 volume		volume level	double (between 0 and 1)
	 */
	this.boingSound = function() {
	};
	this.boingSound.play = function() {
		player.play(1);
	}
	this.bumpSound = function() {
	}
	this.bumpSound.play = function() {
		player.play(0);
	}
	this.sfx = player.tracks[0].audio;
	this.zik = document.getElementById("zik");

	this.zik.loop = true;
	this.zik.volume = 0.0;
	this.zik.load();
	this.zik.play();
}




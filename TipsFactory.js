function TipsFactory(game) {
	this.game = game;
}

TipsFactory.prototype.getTips = function(stat) {
	//create a Tips based on an image
	var img = tipsImgs[stat];
	if(img) {
		tipsState  = new TipsState(theGame,img);
		return tipsState;
	}
	else {
		return null;
	}
}


function LevelFactory(game) {
	this.game = game;
}

LevelFactory.prototype.getLevel= function(stat) {
	if (spaceShipLevels[stat]) {
		if (stat.substr(stat.length-2, stat.length-1)==".2") {
			var lvl = new AlienLevel(this.game, stat);
			lvl.timer = spaceShipLevels[stat].timer;
			lvl.init(
				spaceShipLevels[stat].platforms,
				spaceShipLevels[stat].rSpikes,
				spaceShipLevels[stat].cSpikes,
				spaceShipLevels[stat].gAliens,
				spaceShipLevels[stat].rAliens,
				spaceShipLevels[stat].rest
			);
			lvl.gravityArrows.setGrav(spaceShipLevels[stat].gravity);
			for (var i=0; i<spaceShipLevels[stat].rotation.nbRotation; i++) {
				if (spaceShipLevels[stat].rotation.rotation=="right") {
					lvl.gravityArrows.rotateRight();
				}
				else {
					lvl.gravityArrows.rotateLeft();
				}
			}
			return lvl;
		}
		else {
			var lvl = new Level(this.game, stat);
			lvl.timer = spaceShipLevels[stat].timer;
			lvl.spaceShipIni = spaceShipLevels[stat].spaceShipPosition;
			lvl.init(
				spaceShipLevels[stat].platforms,
				spaceShipLevels[stat].mines,
				spaceShipLevels[stat].bombs,
				spaceShipLevels[stat].warpZones,
				spaceShipLevels[stat].rest
			);
			lvl.gravityArrows.setGrav(spaceShipLevels[stat].gravity);
			return lvl;
		}
	}
	else {
		return null;
	}
}


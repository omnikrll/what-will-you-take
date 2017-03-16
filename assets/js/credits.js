var Credits = function(game) {
	backText = null;
	background = null;
	credits = null;
}

Credits.prototype = {
	preload: function() {
		background = this.game.add.image(this.game.world.width / 2, this.game.world.height / 2, 'titleImg');
		background.anchor.setTo(0.5, 0.5);
		background.inputEnabled = true;
		background.events.onInputDown.add(function() {
			this.game.state.start('Loader');
		}, this);

		this.game.load.text('credits', 'README.md');
	},
	create: function() {
		var _credits = this.game.cache.getText('credits');

		credits = this.game.add.text(this.game.world.centerX, this.game.world.centerY, _credits, {font: '18px Schoolbell', fill: '#FFD700', backgroundColor: '#653A33'});
		credits.padding.set(18, 18);
		credits.anchor.setTo(0.5);
		credits.backgroundColor = '#653A33';
	}
}
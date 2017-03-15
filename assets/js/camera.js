var Camera = function(game) {
	backText = null;
	background = null;
	camera = null;

	images = [];
};

Camera.prototype = {
	create: function() {
		background = this.game.add.image(0, 0, 'background');
		camera = this.game.add.image(this.game.world.width / 2, this.game.world.height / 2, 'camera');
		camera.anchor.setTo(0.5, 0.5);
		camera.scale.setTo(0.29, 0.29);

		backText = this.game.add.text(20, 20, 'back', {font: '24px Arial', fill: '#ffffff'});
		backText.inputEnabled = true;
		backText.events.onInputDown.add(this.startState, {_game: this.game, state: 'Backpack'});
	},
	startState: function() {
		this._game.state.start(this.state);
	}
};
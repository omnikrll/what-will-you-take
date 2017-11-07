var Passport = function(game) {
	backText = null;
	background = null;
	passport = null;
	passport_text = null;
};

Passport.prototype = {
	preload: function() {
		background = this.game.add.image(0, 0, 'background');
	},
	create: function() {
		passport = this.game.add.image(this.game.world.width / 2, 180, 'passport');
		passport.anchor.setTo(0.5, 0.5);
		// passport.scale.setTo(0.18, 0.18);

		passport_text = this.game.add.image(this.game.world.width / 2, this.game.world.height - 160, 'passport-text');
		passport_text.anchor.setTo(0.5, 0.5);
		// passport_text.scale.setTo(0.36, 0.36);

		backText = this.game.add.text(12, 12, 'back', {font: '24px Schoolbell', fill: '#FFD700'});
		backText.stroke = '#333333';
		backText.strokeThickness = 1;
		backText.setShadow(2, 2, '#333333', 3);
		backText.inputEnabled = true;
		backText.events.onInputDown.add(this.startState, {_game: this.game, state: 'Backpack'});
		backText.input.useHandCursor = true;
	},
	startState: function() {
		this._game.state.start(this.state);
	}
};
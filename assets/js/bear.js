var Bear = function(game) {
	backText = null;
	letter1 = null;
	letter2 = null;
	bear1 = null;
	bear2 = null;
};

Bear.prototype = {
	create: function() {
		bear1 = this.game.add.image(this.game.world.width, -5, 'bear1');
		bear1.anchor.setTo(1, 0);

		letter2 = this.game.add.image(this.game.world.width, this.game.world.height + 190, 'letter2');
		letter2.anchor.setTo(1, 1);

		letter1 = this.game.add.image(0, 0, 'letter1');

		bear2 = this.game.add.image(this.game.world.width - 60, this.game.world.height + 40,'bear2');
		bear2.anchor.setTo(1, 1);
		bear2.angle = 15;

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
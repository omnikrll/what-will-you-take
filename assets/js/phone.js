var Phone = function(game) {
	placeholderText = null;
};

Phone.prototype = {
	create: function() {
		placeholderText = this.game.add.text(100, 100, 'Back', { font: '24px Arial', fill: '#ffffff' });
		placeholderText.inputEnabled = true;

		var back = function() {
			this.game.state.start('Main');
		}

		placeholderText.events.onInputDown.add(back, this);
	}
};
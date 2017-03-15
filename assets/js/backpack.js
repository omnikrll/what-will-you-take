var Backpack = function(game) {
	backText = null;
	background = null;
	backpack = null;
	backpack_description = null;
	inventory_bear = null;
	inventory_camera = null;
	inventory_passport = null;
	inventory_sketchbook = null;
};

Backpack.prototype = {
	create: function() {
		background = this.game.add.image(0, 0, 'background');

		backpack = this.game.add.image(20, 40, 'backpack');
		backpack.scale.setTo(0.2, 0.2);

		backpack_description = this.game.add.image(440, 40, 'bag-description');
		backpack_description.scale.setTo(0.1, 0.1);

		inventory_passport = this.game.add.image(600, 370, 'inventory-passport');
		inventory_passport.anchor.setTo(0.5, 0.5);
		inventory_passport.scale.setTo(0.05, 0.05);
		inventory_passport.inputEnabled = true;
		inventory_passport.events.onInputDown.add(this.startState, {_game: this.game, state: 'Passport'});

		inventory_camera = this.game.add.image (815, 370, 'inventory-camera');
		inventory_camera.anchor.setTo(0.5, 0.5);
		inventory_camera.scale.setTo(0.05, 0.05);
		inventory_camera.inputEnabled = true;
		inventory_camera.events.onInputDown.add(this.startState, {_game: this.game, state: 'Camera'});

		inventory_sketchbook = this.game.add.image(610, 550, 'inventory-sketchbook');
		inventory_sketchbook.anchor.setTo(0.5, 0.5);
		inventory_sketchbook.scale.setTo(0.05, 0.05);
		inventory_sketchbook.inputEnabled = true;
		inventory_sketchbook.events.onInputDown.add(this.startState, {_game: this.game, state: 'Sketchbook'});

		inventory_bear = this.game.add.image(810, 550, 'inventory-bear');
		inventory_bear.anchor.setTo(0.5, 0.5);
		inventory_bear.scale.setTo(0.05, 0.05);
		inventory_bear.inputEnabled = true;
		inventory_bear.events.onInputDown.add(this.startState, {_game: this.game, state: 'Bear'});

		backText = this.game.add.text(20, 20, 'back', { font: '24px Arial', fill: '#ffffff'});
		backText.inputEnabled = true;
		backText.events.onInputDown.add(this.startState, {_game: this.game, state: 'Main'});
	},
	update: function() {
		if (inventory_passport.input.pointerOver()) {
			inventory_passport.scale.setTo(0.06, 0.06);
		} else {
			inventory_passport.scale.setTo(0.05, 0.05);
		}

		if (inventory_camera.input.pointerOver()) {
			inventory_camera.scale.setTo(0.06, 0.06);
		} else {
			inventory_camera.scale.setTo(0.05, 0.05);
		}

		if (inventory_sketchbook.input.pointerOver()) {
			inventory_sketchbook.scale.setTo(0.06, 0.06);
		} else {
			inventory_sketchbook.scale.setTo(0.05, 0.05);
		}

		if (inventory_bear.input.pointerOver()) {
			inventory_bear.scale.setTo(0.06, 0.06);
		} else {
			inventory_bear.scale.setTo(0.05, 0.05);
		}
	},
	startState: function() {
		this._game.state.start(this.state);
	}
};
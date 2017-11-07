var Backpack = function(game) {
	backText = null;
	background = null;
	backpack = null;
	backpack_description = null;
	inventory_bear = null;
	inventory_camera = null;
	inventory_passport = null;
	inventory_sketchbook = null;
	bear_tooltip = null;
	camera_tooltip = null;
	passport_tooltip = null;
	sketchbook_tooltip = null;
};

Backpack.prototype = {
	preload: function() {
		background = this.game.add.image(0, 0, 'background');
	},
	create: function() {
		backpack = this.game.add.image(20, 40, 'backpack');

		backpack_description = this.game.add.image(440, 40, 'bag-description');

		inventory_passport = this.game.add.image(600, 370, 'inventory-passport');
		inventory_passport.anchor.setTo(0.5, 0.5);
		inventory_passport.scale.setTo(0.8, 0.8);
		inventory_passport.inputEnabled = true;
		inventory_passport.events.onInputDown.add(this.startState, {_game: this.game, state: 'Passport'});
		inventory_passport.input.useHandCursor = true;

		passport_tooltip = this.game.add.text(-1000, -1000, 'passport', {font: '18px Schoolbell', fill: '#FFD700'});
		passport_tooltip.alpha = 0;
		passport_tooltip.stroke = '#333333';
		passport_tooltip.strokeThickness = 1;
		passport_tooltip.setShadow(2, 2, '#333333', 3);

		inventory_camera = this.game.add.image (815, 370, 'inventory-camera');
		inventory_camera.anchor.setTo(0.5, 0.5);
		inventory_camera.scale.setTo(0.8, 0.8);
		inventory_camera.inputEnabled = true;
		inventory_camera.events.onInputDown.add(this.startState, {_game: this.game, state: 'Camera'});
		inventory_camera.input.useHandCursor = true;

		camera_tooltip = this.game.add.text(-1000, -1000, 'camera', {font: '18px Schoolbell', fill: '#FFD700'});
		camera_tooltip.alpha = 0;
		camera_tooltip.stroke = '#333333';
		camera_tooltip.strokeThickness = 1;
		camera_tooltip.setShadow(2, 2, '#333333', 3);

		inventory_sketchbook = this.game.add.image(610, 550, 'inventory-sketchbook');
		inventory_sketchbook.anchor.setTo(0.5, 0.5);
		inventory_sketchbook.scale.setTo(0.8, 0.8);
		inventory_sketchbook.inputEnabled = true;
		inventory_sketchbook.events.onInputDown.add(this.startState, {_game: this.game, state: 'Sketchbook'});
		inventory_sketchbook.input.useHandCursor = true;

		sketchbook_tooltip = this.game.add.text(-1000, -1000, 'sketchbook', {font: '18px Schoolbell', fill: '#FFD700'});
		sketchbook_tooltip.alpha = 0;
		sketchbook_tooltip.stroke = '#333333';
		sketchbook_tooltip.strokeThickness = 1;
		sketchbook_tooltip.setShadow(2, 2, '#333333', 3);

		inventory_bear = this.game.add.image(810, 550, 'inventory-bear');
		inventory_bear.anchor.setTo(0.5, 0.5);
		inventory_bear.scale.setTo(0.8, 0.8);
		inventory_bear.inputEnabled = true;
		inventory_bear.events.onInputDown.add(this.startState, {_game: this.game, state: 'Bear'});
		inventory_bear.input.useHandCursor = true;

		bear_tooltip = this.game.add.text(-1000, -1000, 'Koko', {font: '18px Schoolbell', fill: '#FFD700'});
		bear_tooltip.alpha = 0;
		bear_tooltip.stroke = '#333333';
		bear_tooltip.strokeThickness = 1;
		bear_tooltip.setShadow(2, 2, '#333333', 3);

		backText = this.game.add.text(12, 12, 'back', { font: '24px Schoolbell', fill: '#FFD700'});
		backText.stroke = '#333333';
		backText.strokeThickness = 1;
		backText.setShadow(2, 2, '#333333', 3);
		backText.inputEnabled = true;
		backText.events.onInputDown.add(this.startState, {_game: this.game, state: 'Main'});
		backText.input.useHandCursor = true;

	},
	update: function() {
		passport_tooltip.alpha = 0;
		passport_tooltip.x = -1000;
		passport_tooltip.y = -1000;

		camera_tooltip.alpha = 0;
		camera_tooltip.x = -1000;
		camera_tooltip.y = -1000;

		sketchbook_tooltip.alpha = 0;
		sketchbook_tooltip.x = -1000;
		sketchbook_tooltip.y = -1000;

		bear_tooltip.alpha = 0;
		bear_tooltip.x = -1000;
		bear_tooltip.y = -1000;

		if (inventory_passport.input.pointerOver()) {
			inventory_passport.scale.setTo(1, 1);
			passport_tooltip.alpha = 1;
			passport_tooltip.x = this.game.input.x - 18;
			passport_tooltip.y = this.game.input.y - 36;
		} else {
			inventory_passport.scale.setTo(0.8, 0.8);
			passport_tooltip.alpha = 0;
			passport_tooltip.x = -1000;
			passport_tooltip.y = -1000;
		}

		if (inventory_camera.input.pointerOver()) {
			inventory_camera.scale.setTo(1, 1);
			camera_tooltip.alpha = 1;
			camera_tooltip.x = this.game.input.x - 18;
			camera_tooltip.y = this.game.input.y - 36;
		} else {
			inventory_camera.scale.setTo(0.8, 0.8);
			camera_tooltip.alpha = 0;
			camera_tooltip.x = -1000;
			camera_tooltip.y = -1000;
		}

		if (inventory_sketchbook.input.pointerOver()) {
			inventory_sketchbook.scale.setTo(1, 1);
			sketchbook_tooltip.alpha = 1;
			sketchbook_tooltip.x = this.game.input.x - 18;
			sketchbook_tooltip.y = this.game.input.y - 36;
		} else {
			inventory_sketchbook.scale.setTo(0.8, 0.8);
			sketchbook_tooltip.alpha = 0;
			sketchbook_tooltip.x = -1000;
			sketchbook_tooltip.y = -1000;
		}

		if (inventory_bear.input.pointerOver()) {
			inventory_bear.scale.setTo(1, 1);
			bear_tooltip.alpha = 1;
			bear_tooltip.x = this.game.input.x - 18;
			bear_tooltip.y = this.game.input.y - 36;
		} else {
			inventory_bear.scale.setTo(0.8, 0.8);
			bear_tooltip.alpha = 0;
			bear_tooltip.x = -1000;
			bear_tooltip.y = -1000;
		}
	},
	startState: function() {
		passport_tooltip.alpha = 0;
		passport_tooltip.x = -1000;
		passport_tooltip.y = -1000;

		camera_tooltip.alpha = 0;
		camera_tooltip.x = -1000;
		camera_tooltip.y = -1000;

		sketchbook_tooltip.alpha = 0;
		sketchbook_tooltip.x = -1000;
		sketchbook_tooltip.y = -1000;

		bear_tooltip.alpha = 0;
		bear_tooltip.x = -1000;
		bear_tooltip.y = -1000;
		this._game.state.start(this.state);
	}
};
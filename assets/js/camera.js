var Camera = function(game) {
	backText = null;
	background = null;
	camera = null;
	photos = null;

	previousPhoto = null;
	nextPhoto = null;
};

Camera.prototype = {
	create: function() {
		background = this.game.add.image(0, 0, 'background');

		photos = this.game.add.sprite(382, 382, 'photos');
		photos.anchor.setTo(0.5, 0.5);
		photos.scale.setTo(0.5, 0.5);

		camera = this.game.add.image(this.game.world.width / 2, this.game.world.height / 2, 'camera');
		camera.anchor.setTo(0.5, 0.5);
		camera.scale.setTo(0.29, 0.29);

		backText = this.game.add.text(20, 20, 'back', {font: '24px Arial', fill: '#ffffff'});
		backText.inputEnabled = true;
		backText.events.onInputDown.add(this.startState, {_game: this.game, state: 'Backpack'});

		previousPhoto = this.game.add.graphics(140, 560);
		previousPhoto.beginFill(0xFFFFFF, 0);
		previousPhoto.moveTo(0, 0);
		previousPhoto.lineTo(0, 28);
		previousPhoto.lineTo(64, 28);
		previousPhoto.lineTo(64, 0);
		previousPhoto.lineTo(0, 0);
		previousPhoto.endFill();
		previousPhoto.inputEnabled = true;
		previousPhoto.events.onInputDown.add(this.togglePhotos, {shift: -1});

		nextPhoto = this.game.add.graphics(512, 560);
		nextPhoto.beginFill(0xFFFFFF, 0);
		nextPhoto.moveTo(0, 0);
		nextPhoto.lineTo(0, 28);
		nextPhoto.lineTo(64, 28);
		nextPhoto.lineTo(64, 0);
		nextPhoto.lineTo(0, 0);
		nextPhoto.endFill();
		nextPhoto.inputEnabled = true;
		nextPhoto.events.onInputDown.add(this.togglePhotos, {shift: 1});
	},
	togglePhotos: function() {
		photos.frame + this.shift == -1 ? photos.frame = 4 : photos.frame += this.shift;
	},
	startState: function() {
		this._game.state.start(this.state);
	}
};
var Preload = function(game) {
	text = null;
	dots = '';
};

Preload.prototype = {
	preload: function() {
		text = this.game.add.text(
			0,
			0,
			'Loading' + dots,
			{
				font: '32px Arial',
				fill: '#ffffff',
				align: 'center',
				boundsAlignH: 'center',
				boundsAlignV: 'middle'
			}
		);

		text.setTextBounds(0, 0, this.game.world.width, this.game.world.height);

		var counter = function() {
			dots += '.';

			if (dots == '....') dots = '';

			text.setText('Loading' + dots);
		}

		this.game.time.events.loop(Phaser.Timer.SECOND * 0.7, counter, this);

		// load static images
		this.game.load.image('background', 'assets/images/background.jpg');
		this.game.load.image('camera1', 'assets/images/camera/camera1.jpg');
		this.game.load.image('camera2', 'assets/images/camera/camera2.jpg');
		this.game.load.image('camera3', 'assets/images/camera/camera3.jpg');
		this.game.load.image('camera4', 'assets/images/camera/camera4.jpg');
		this.game.load.image('camera5', 'assets/images/camera/camera5.jpg');
		this.game.load.image('sketch1', 'assets/images/sketchbook/sketch1.jpg');
		this.game.load.image('sketch2', 'assets/images/sketchbook/sketch2.jpg');
		this.game.load.image('sketch3', 'assets/images/sketchbook/sketch3.jpg');
		this.game.load.image('sketch4', 'assets/images/sketchbook/sketch4.jpg');
		this.game.load.image('sketch5', 'assets/images/sketchbook/sketch5.jpg');
		this.game.load.image('sketch6', 'assets/images/sketchbook/sketch6.jpg');

		// load sprites
		this.game.load.spritesheet('girl', 'assets/images/sprites/girl_sprite.png', 191, 382, 2);
		this.game.load.image('drone', 'assets/images/sprites/drone.png');
		this.game.load.image('smoke1', 'assets/images/sprites/smoke1.png');
		this.game.load.image('smoke2', 'assets/images/sprites/smoke2.png');
		this.game.load.image('phone', 'assets/images/sprites/phone.png');
		this.game.load.image('backpack', 'assets/images/sprites/backpack.png');
		this.game.load.image('bag-description', 'assets/images/sprites/evacuation_bag_description.png');
		this.game.load.image('inventory-bear', 'assets/images/sprites/inventory_bear.png');
		this.game.load.image('inventory-camera', 'assets/images/sprites/inventory_camera.png');
		this.game.load.image('inventory-passport', 'assets/images/sprites/inventory_passport.png');
		this.game.load.image('inventory-sketchbook', 'assets/images/sprites/inventory_sketchbook.png');
		this.game.load.image('passport', 'assets/images/sprites/passport.png');
		this.game.load.image('passport-text', 'assets/images/sprites/passport_text.png');
		this.game.load.image('camera', 'assets/images/sprites/camera.png');
		this.game.load.spritesheet('photos', 'assets/images/sprites/photos.png', 1024, 683, 5);

		// load sounds
		this.game.load.audio('jet', ['assets/audio/jet.mp3', 'assets/audio/jet.ogg']);
		this.game.load.audio('city-ambience', ['assets/audio/city-ambience.mp3', 'assets/audio/city-ambience.ogg']);
		this.game.load.audio('fire', ['assets/audio/fire.mp3', 'assets/audio/fire.ogg']);
	},
	create: function() {
		text.destroy();
		this.game.state.start('Main');		
	}
};
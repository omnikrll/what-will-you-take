var Loader = function(game) {
	background = null;
	loadingText = null;
	dots = '';
	titleText = null;
	music = null;
	creditsButton = null;
	startButton = null;
};

Loader.prototype = {
	preload: function() {
		background = this.game.add.image(this.game.world.width / 2, this.game.world.height / 2, 'titleImg');
		background.anchor.setTo(0.5, 0.5);
		music = this.game.add.audio('music');
		music.loopFull(0.1);

		loadingText = this.game.add.text(
			0,
			0,
			'Loading' + dots,
			{
				font: '42px Schoolbell',
				fill: '#FFD700',
				align: 'left',
				boundsAlignH: 'center',
				boundsAlignV: 'middle'
			}
		);
		loadingText.stroke = '#333333';
		loadingText.strokeThickness = 1;
		loadingText.setShadow(2, 2, '#333333', 3);
		loadingText.setTextBounds(0, 0, this.game.world.width, this.game.world.height);

		var counter = function() {
			dots += '.';

			if (dots == '....') dots = '';

			loadingText.setText('Loading' + dots);
		}

		this.game.time.events.loop(Phaser.Timer.SECOND * 0.7, counter, this);

		this.game.load.image('background', 'assets/images/background.jpg');
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
		this.game.load.spritesheet('photos', 'assets/images/sprites/photos.png', 512, 342, 5);
		this.game.load.spritesheet('sketchbook', 'assets/images/sprites/sketchbook_sprite.png', 543, 698, 4);
		this.game.load.spritesheet('sketches', 'assets/images/sprites/sketches.png', 355, 505, 6);
		this.game.load.image('letter1', 'assets/images/sprites/letter1.jpg');
		this.game.load.image('letter2', 'assets/images/sprites/letter2.jpg');
		this.game.load.image('bear1', 'assets/images/bear2.jpg');
		this.game.load.image('bear2', 'assets/images/bear5.jpg');

		// load sounds
		this.game.load.audio('music', ['assets/audio/Leish.mp3', 'assets/audio/Leish.ogg']);
		this.game.load.audio('ambience', ['assets/audio/ambience.mp3', 'assets/audio/ambience.ogg']);
		this.game.load.audio('cameraSound1', ['assets/audio/camera1.mp3', 'assets/audio/camera1.ogg']);
		this.game.load.audio('cameraSound2', ['assets/audio/camera2.mp3', 'assets/audio/camera2.ogg']);
		this.game.load.audio('fire', ['assets/audio/fire.mp3', 'assets/audio/fire.ogg']);
		this.game.load.audio('jet', ['assets/audio/jet.mp3', 'assets/audio/jet.ogg']);
		this.game.load.audio('pageturn', ['assets/audio/pageturn.mp3', 'assets/audio/pageturn.ogg']);
		this.game.load.audio('phoneSound1', ['assets/audio/phone1.mp3', 'assets/audio/phone1.ogg']);
		this.game.load.audio('phoneSound2', ['assets/audio/phone2.mp3', 'assets/audio/phone2.ogg']);
		this.game.load.audio('zipper', ['assets/audio/zipper.mp3', 'assets/audio/zipper.ogg']);
	},
	create: function() {
		loadingText.destroy();

		titleText = this.game.add.text(this.game.world.width - 72, 48, 'What Will You Take?', {font: '64px Schoolbell', fill: '#FFD700'});
		titleText.anchor.setTo(1, 0);
		titleText.stroke = '#333333';
		titleText.strokeThickness = 1;
		titleText.setShadow(2, 2, '#333333', 3);

		creditsButton = this.game.add.text(this.game.world.width - 72, 348, 'credits', {font: '24px Schoolbell', fill: '#FFD700'});
		creditsButton.anchor.setTo(1, 0);
		creditsButton.stroke = '#333333';
		creditsButton.strokeThickness = 1;
		creditsButton.setShadow(2, 2, '#333333', 3);
		creditsButton.inputEnabled = true;
		creditsButton.events.onInputDown.add(function() {
			this.game.state.start('Credits');
		}, this);

		startButton = this.game.add.text(this.game.world.width - 72, this.game.world.height - 128, 'start', {font: '42px Schoolbell', fill: '#FFD700'});
		startButton.anchor.setTo(1, 0);
		startButton.stroke = '#333333';
		startButton.strokeThickness = 1;
		startButton.setShadow(2, 2, '#333333', 3);
		startButton.inputEnabled = true;
		startButton.events.onInputDown.add(function() {
			// music.pause();
			this.game.state.start('Main');
		}, this);

		// this.game.state.start('Main');		
	}
};
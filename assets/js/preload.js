var Preload = function(game) {
	text = null;
};

Preload.prototype = {
	preload: function() {
		text = game.add.text(100, 100, 'Loading...', {font: '32px Arial', fill: '#ffffff'});
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
		// load videos (tk)


		// load sprites
		this.game.load.spritesheet('girl', 'assets/images/sprites/girl_sprite.png', 290, 422, 2);
		this.game.load.spritesheet('drone', 'assets/images/sprites/drone.png', 220, 176, 1);
		this.game.load.spritesheet('smoke', 'assets/images/sprites/smoke_sprite.png', 235, 290, 2);
	},
	create: function() {
		text.destroy();
		this.game.state.start('Main');		
	}
};
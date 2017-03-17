var Sketchbook = function(game) {
	backText = null;
	background = null;
	sketchbook = null;
	sketches = null;
	previousSketch = null;
	nextSketch = null;
	pageturn = null;
};

Sketchbook.prototype = {
	preload: function() {
		background = this.game.add.image(0, 0, 'background');		
	},
	create: function() {
		pageturn = this.game.add.audio('pageturn');
		pageturn.volume = 0.1;

		sketchbook = this.game.add.sprite(this.game.world.width / 2, this.game.world.height / 2, 'sketchbook');
		sketchbook.anchor.setTo(0.5, 0.5);
		// sketchbook.scale.setTo(0.53, 0.53);
		sketchbook.inputEnabled = true;
		sketchbook.events.onInputDown.add(this.openSketchbook, this);

		sketchbook.animations.add('turnPage', [1,2,3], 10, false);
		sketchbook.animations.add('turnBack', [2,1,3], 10, false);

		backText = this.game.add.text(12, 12, 'back', {font: '24px Schoolbell', fill: '#FFD700'});
		backText.stroke = '#333333';
		backText.strokeThickness = 1;
		backText.setShadow(2, 2, '#333333', 3);
		backText.inputEnabled = true;
		backText.events.onInputDown.add(function() {
			this.game.state.start('Backpack');
		}, this);
	},
	openSketchbook: function() {
		sketchbook.events.onInputDown.removeAll();
		sketchbook.animations.play('turnPage');
		sketchbook.animations.currentAnim.onComplete.add(function() {
			sketches = this.game.add.sprite((this.game.world.width / 2) + 16, (this.game.world.height / 2) + 60, 'sketches');
			sketches.anchor.setTo(0.5, 0.5);

			sketchbook.events.onInputDown.add(this.nextSketch);
		}, this);

		pageturn.play();
	},
	nextSketch: function() {
		sketches.alpha = 0;
		sketchbook.animations.play('turnPage');

		sketchbook.animations.currentAnim.onComplete.add(function() {
			sketches.frame++;
			sketches.alpha = 1;
		}, this);

		pageturn.play();
	}
};
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

		sketchbook = this.game.add.sprite(this.game.world.width / 2, this.game.world.height / 2, 'sketchbook');
		sketchbook.anchor.setTo(0.5, 0.5);
		// sketchbook.scale.setTo(0.53, 0.53);
		sketchbook.inputEnabled = true;
		sketchbook.events.onInputDown.add(this.openSketchbook, this);

		sketchbook.animations.add('turnPage', [1,2,3], 10, false);
		sketchbook.animations.add('turnBack', [2,1,3], 10, false);

		backText = this.game.add.text(20, 20, 'back', {font: '24px Arial', fill: '#ffffff'});
		backText.inputEnabled = true;
		backText.events.onInputDown.add(function() {
			this.game.state.start('Backpack');
		}, this);
	},
	openSketchbook: function() {
		sketchbook.inputEnabled = false;
		sketchbook.animations.play('turnPage');
		sketchbook.animations.currentAnim.onComplete.add(function() {
			sketches = this.game.add.sprite((this.game.world.width / 2) + 16, (this.game.world.height / 2) + 60, 'sketches');
			sketches.anchor.setTo(0.5, 0.5);
			// sketches.scale.setTo(0.37, 0.37);

			previousSketch = this.game.add.text(200, this.game.world.height - 60, 'previous', {font: '16px Arial', fill: '#ffffff'});
			previousSketch.inputEnabled = true;
			previousSketch.events.onInputDown.add(this.toggleSketch, {shift: -1});

			nextSketch = this.game.add.text(this.game.world.width - 240, this.game.world.height - 60, 'next', {font: '16px Arial', fill: '#ffffff'});
			nextSketch.inputEnabled = true;
			nextSketch.events.onInputDown.add(this.toggleSketch, {shift: 1});
		}, this);

		pageturn.play();
	},
	toggleSketch: function() {
		var shift = this.shift,
			turn = shift == 1 ? 'turnPage' : 'turnBack';

		sketches.alpha = 0;
		sketchbook.animations.play(turn);

		sketchbook.animations.currentAnim.onComplete.add(function() {
			sketches.frame + shift == -1 ? sketches.frame = 5 : sketches.frame += shift;
			sketches.alpha = 1;
		}, this);

		pageturn.play();
	}
};
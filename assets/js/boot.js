var Boot = function(game) {
	fontReady = false;
	WebFontConfig = {

	    //  'active' means all requested fonts have finished loading
	    //  We set a 1 second delay before calling 'createText'.
	    //  For some reason if we don't the browser cannot render the text the first time it's created.
	    active: function() { game.time.events.add(Phaser.Timer.SECOND, function() {
	    	fontReady = true;
	    }, this); },

	    //  The Google Fonts we want to load (specify as many as you like in the array)
	    google: {
	      families: ['Schoolbell']
	    }

	};
};

Boot.prototype = {
	preload: function() {
    this.game.load.image('titleImg', 'assets/images/Lara.jpg');
    this.game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
		this.game.load.audio('music', ['assets/audio/Zayak.mp3', 'assets/audio/Zayak.ogg']);
	},
	create: function() {
		console.log('waiting...');
	},
	update: function() {
		if (fontReady) this.game.state.start('Loader');
	}
};
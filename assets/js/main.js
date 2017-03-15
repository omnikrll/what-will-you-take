var Main = function(game) {
	background = null;
	girl = null;
	drone = null;
	smoke = null;

	ambience = null;
	jet = null;
	fire = null;

	backpackClickZone = null;
	phoneClickZone = null;

	backpackToolTip = null;
	phoneToolTip = null;
};

Main.prototype = {
	create: function() {
		// add images
		background = this.game.add.sprite(0, 0, 'background');
		ambience = this.game.add.audio('city-ambience');
		ambience.loopFull(0.6);

		this.addSmoke();
		this.addDrone();
		this.addGirl();
		this.addBackpack();
		this.addPhone();
	},

	addGirl: function() {
		girl = this.game.add.sprite(158, this.game.world.height - 368, 'girl');		
		girl.inputEnabled = true;	
	},

	addDrone: function() {
		drone = this.game.add.sprite(this.game.world.width, 0, 'drone');

		var flight = this.game.add.tween(drone).to({x: -356}, 8000, Phaser.Easing.Linear.None, true);

		jet = this.game.add.audio('jet');
		jet.volume = 0.4;

		var flyDrone = function() {
			drone.x = this.game.world.width;
			flight.start();
			jet.play();
		};

		flyDrone();
		this.game.time.events.loop(Phaser.Timer.SECOND * 21, flyDrone, this);
	},

	addSmoke: function() {
		var timer = 2400,
			_alpha = 0.3,
			_x = this.game.world.width - 340,
			_y = (this.game.world.height / 2) - 180;

		fire = this.game.add.audio('fire');

		smoke2 = this.game.add.sprite(_x, _y, 'smoke2');
		smoke2.alpha = _alpha;
		smoke1 = this.game.add.sprite(_x, _y, 'smoke1');

		var fadeInSmoke1 = this.game.add.tween(smoke1).to({alpha: 1}, timer, Phaser.Easing.Sinusoidal.InOut, true),
			fadeOutSmoke1 = this.game.add.tween(smoke1).to({alpha: _alpha}, timer, Phaser.Easing.Sinusoidal.InOut, true);

		fadeInSmoke1.chain(fadeOutSmoke1);
		fadeOutSmoke1.chain(fadeInSmoke1);

		var fadeInSmoke2 = this.game.add.tween(smoke2).to({alpha: 1}, timer, Phaser.Easing.Sinusoidal.InOut, true, timer / 2),
			fadeOutSmoke2 = this.game.add.tween(smoke2).to({alpha: _alpha}, timer, Phaser.Easing.Sinusoidal.InOut, true, timer / 2);

		fadeInSmoke2.chain(fadeOutSmoke2);
		fadeOutSmoke2.chain(fadeInSmoke2);

		var clearFadeInDelay = function() {
			fadeInSmoke2.delay(0);
		};

		var clearFadeOutDelay = function() {
			fadeOutSmoke2.delay(0);
		};

		fadeInSmoke2.onStart.add(clearFadeInDelay, this);
		fadeOutSmoke2.onStart.add(clearFadeOutDelay, this);

		fadeOutSmoke1.start();
		fadeInSmoke2.start();
		fire.loopFull(0.4);
	},

	addBackpack: function() {
		//add geometry for clickable areas for backpack / phone
		backpackClickZone = this.game.add.graphics(178, this.game.world.height - 248);
		backpackClickZone.beginFill(0xFFFFFF, 0);

		backpackClickZone.moveTo(0, 0);
		backpackClickZone.lineTo(0, 44);
		backpackClickZone.lineTo(68, 20);
		backpackClickZone.lineTo(110, 30);
		backpackClickZone.lineTo(128, 60);
		backpackClickZone.lineTo(128, 0);
		backpackClickZone.lineTo(68, 10);
		backpackClickZone.lineTo(0, 0);
		backpackClickZone.endFill();

		backpackClickZone.inputEnabled = true;

		var openBackpack = function() {
			this.game.state.start('Backpack');
		};

		backpackClickZone.events.onInputDown.add(openBackpack, this);

		backpackToolTip = this.game.add.text(-1000, -1000, 'open backpack', {font: '18px Arial', fill: '#ffffff'});
	},

	addPhone: function() {

		phoneClickZone = this.game.add.graphics(294, this.game.world.height - 64);
		phoneClickZone.beginFill(0xFFFFFF, 0);

		phoneClickZone.moveTo(4, 0);
		phoneClickZone.lineTo(0, 16);
		phoneClickZone.lineTo(42, 28);
		phoneClickZone.lineTo(48, 12);
		phoneClickZone.lineTo(4, 0);
		phoneClickZone.endFill();

		phoneClickZone.inputEnabled = true;

		var openPhone = function() {
			ambience.stop();
			jet.stop();
			fire.stop();
			this.game.state.start('Phone');
		};

		phoneClickZone.events.onInputDown.add(openPhone, this);

		phoneToolTip = this.game.add.text(-1000, -1000, 'open phone', {font: '18px Arial', fill: '#ffffff'});
	},

	update: function() {
		if (girl.input.pointerOver()) {
			girl.frame = 1;
		} else {
			girl.frame = 0;
		}

		if (backpackClickZone.input.pointerOver()) {
			girl.frame = 1;
			backpackToolTip.x = this.game.input.x - 18;
			backpackToolTip.y = this.game.input.y - 36;
		} else {
			backpackToolTip.x = -1000;
			backpackToolTip.y = -1000;
		}

		if (phoneClickZone.input.pointerOver()) {
			girl.frame = 1;
			phoneToolTip.x = this.game.input.x - 18;
			phoneToolTip.y = this.game.input.y - 36;
		} else {
			phoneToolTip.x = -1000;
			phoneToolTip.y = -1000;
		}
	}
};
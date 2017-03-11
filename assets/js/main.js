var Main = function(game) {
	background = null;
	girl = null;
	drone = null;
	smoke = null;

	backpackClickZone = null;
	phoneClickZone = null;

	backpackToolTip = null;
	phoneToolTip = null;
};

Main.prototype = {
	create: function() {
		// add images
		background = this.game.add.sprite(0, 0, 'background');
		girl = this.game.add.sprite(158, this.game.world.height - 368, 'girl');		
		drone = this.game.add.sprite(this.game.world.width - 286, 0, 'drone');
		smoke = this.game.add.sprite(this.game.world.width - 320, (this.game.world.height / 2) - 180, 'smoke');

		girl.inputEnabled = true;

		var mouseDown = function() {
			girl.frame = 1;
		};

		var mouseUp = function() {
			girl.frame = 0;
		};

		girl.events.onInputDown.add(mouseDown, this);
		girl.events.onInputUp.add(mouseUp, this);

		this.addBackpack();
		this.addPhone();
	},

	update: function() {
		// click to phone and backpack screens
		if (backpackClickZone.input.pointerOver()) {
			backpackToolTip.x = this.game.input.x - 18;
			backpackToolTip.y = this.game.input.y - 36;
		} else {
			backpackToolTip.x = -1000;
			backpackToolTip.y = -1000;
		}
		if (phoneClickZone.input.pointerOver()) {
			phoneToolTip.x = this.game.input.x - 18;
			phoneToolTip.y = this.game.input.y - 36;
		} else {
			phoneToolTip.x = -1000;
			phoneToolTip.y = -1000;
		}
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
			this.game.state.start('Phone');
		};

		phoneClickZone.events.onInputDown.add(openPhone, this);

		phoneToolTip = this.game.add.text(-1000, -1000, 'open phone', {font: '18px Arial', fill: '#ffffff'});
	}
};
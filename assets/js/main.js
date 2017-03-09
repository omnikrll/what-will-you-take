var Main = function(game) {
	background = null;
	girl = null;
	drone = null;
	smoke = null;
};

Main.prototype = {
	create: function() {
		background = this.game.add.sprite(0, 0, 'background');
		// background.scale.setTo(900, 600);
		girl = this.game.add.sprite(120, this.game.world.height - 400, 'girl');		
		drone = this.game.add.sprite(this.game.world.width - 286, 0, 'drone');
		smoke = this.game.add.sprite(this.game.world.width - 320, (this.game.world.height / 2) - 180, 'smoke');
	},
	
};
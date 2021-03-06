var Phone = function(game) {
	backText = null;
	background = null;

	phoneSound2 = null;

	vines = [
		{
			url: 'assets/video/vine1.mp4',
			date: 'Jul 26, 2015',
			text: 'Through back Eid days in the colorful neighborhood in #Gaza. Children know how to be happy!'
		},
		{
			url: 'assets/video/vine2.mp4',
			date: 'Jun 28, 2015',
			text: 'Night at the beach! #Gaza #LoveWins'
		},
		{
			url: 'assets/video/vine3.mp4',
			date: 'Mar 6, 2015',
			text: 'Two children are playing inside a destroyed mosque after they made a swing to play there in #Khuzaa after the last Israeli attack on Gaza.'
		},
		{
			url: 'assets/video/vine4.mp4',
			date: 'Feb 6, 2015',
			text: 'Colorful rocks in Gaza sea port. #Gaza #sea'
		},
		{
			url: 'assets/video/vine5.mp4',
			date: 'Aug 19, 2014',
			text: "My father's journalism office which was shelled by Israeli tanks during the attack on Gaza. He works for foreign agencies. #gaza_under_attack"
		},
		{
			url: 'assets/video/vine6.mp4',
			date: 'Aug 7, 2014',
			text: "Faces of the children in a shelter school for UNRWA in Jabalia refugee camp. #gaza_under_attack #Jabalia"
		}
	];

	phoneBackdrop = null;
	video = null;
	videoSprite = null;
	videoDate = null;
	videoText = null;
	style = {
		font: '14px Arial',
		fill: '#000000',
		align: 'left',
		boundsAlignH: 'left',
		boundsAlignRight: 'top',
		wordWrap: true,
		wordWrapWidth: 260
	};

	phone = null;

	curVideo = vines[0];
	curVideoIdx = 0;
	previousVideo = null;
	nextVideo = null;
};

Phone.prototype = {
	preload: function() {
		background = this.game.add.image(0, 0, 'background');
		this.game.load.video('video', curVideo.url);
		phoneSound2 = this.game.add.audio('phoneSound2');
	},
	create: function() {
		phoneBackdrop = this.game.add.graphics(320, 100);
		phoneBackdrop.beginFill(0xFFFFFF, 1);

		phoneBackdrop.moveTo(0, 58);
		phoneBackdrop.lineTo(240, 0);
		phoneBackdrop.lineTo(400, 460);
		phoneBackdrop.lineTo(120, 540);
		phoneBackdrop.lineTo(0, 58);
		phoneBackdrop.endFill();

		video = this.game.add.video('video');
		videoSprite = video.addToWorld(320, 250);
		videoSprite.angle = -17;
		videoSprite.scale.setTo(0.57, 0.57);

		videoDate = this.game.add.text(460, 180, curVideo.date, {font: '14px Arial', fill: '#000000'});
		videoDate.angle = -17;
		videoText = this.game.add.text(420, 510, curVideo.text, style);
		videoText.setTextBounds(0, 0, 260, 100);
		videoText.angle = -17;

		video.volume = 0.6;
		video.play(true);

		phone = this.game.add.image(-108, -30, 'phone');
		// phone.scale.setTo(0.33, 0.33);

		previousVideo = this.game.add.graphics(480, this.game.world.height - 50);
		previousVideo.beginFill(0x000000, 0);
		previousVideo.moveTo(0, 0);
		previousVideo.lineTo(60, -20);
		previousVideo.lineTo(68, 10);
		previousVideo.lineTo(8, 30);
		previousVideo.lineTo(0, 0);
		previousVideo.endFill();
		previousVideo.inputEnabled = true;
		previousVideo.events.onInputDown.add(this.setVideo, {shift: -1}); 

		nextVideo = this.game.add.graphics(643, this.game.world.height - 100);
		nextVideo.beginFill(0x000000, 0);
		nextVideo.moveTo(0, 0);
		nextVideo.lineTo(60, -20);
		nextVideo.lineTo(68, 10);
		nextVideo.lineTo(8, 30);
		nextVideo.lineTo(0, 0);
		nextVideo.endFill();
		nextVideo.inputEnabled = true;
		nextVideo.events.onInputDown.add(this.setVideo, {shift: 1}); 

		backText = this.game.add.text(12, 12, 'back', { font: '24px Schoolbell', fill: '#FFD700' });
		backText.stroke = '#333333';
		backText.strokeThickness = 1;
		backText.setShadow(2, 2, '#333333', 3);
		backText.inputEnabled = true;
		backText.events.onInputDown.add(this.startState, {_game: this.game, state: 'Main'});
	},

	setVideo: function() {
		phoneSound2.play();

		var _idx = curVideoIdx + this.shift;

		if (_idx == vines.length) _idx = 0;
		if (_idx == -1) _idx = vines.length - 1;

		curVideoIdx = _idx;
		curVideo = vines[_idx];

		video.stop();
		video.changeSource(curVideo.url);
		videoDate.setText(curVideo.date);
		videoText.setText(curVideo.text);
		video.volume = 0.6;
		video.play(true);
	},

	startState: function() {
		video.stop();
		this._game.state.start(this.state);
	}
};
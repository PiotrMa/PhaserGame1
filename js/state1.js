
demo.state1 = function(){};
demo.state1.prototype = {
	preload: function(){},
	create: function(){
		this.game.stage.backgroundColor = '#33FF8D';
		alert('Changing to state2');

		addEventStateListener();
		//game.state.start('state2');
	},
	update: function(){

	}
};
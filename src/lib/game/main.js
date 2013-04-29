ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',
    'plugins.touch-button',

    "game.levels.title",
    "game.levels.one"
)
.defines(function(){

LDMenu = ig.Game.extend({

    buttons: [],
    buttonImage: new ig.Image('media/buttons.png'),

	clearColor: "#FFFFFF",
	font: new ig.Font( 'media/ubuntu-mono-light.png' ),
	
	
	init: function() {
		ig.input.bind(ig.KEY.Z, "action");

        var x = ig.system.width - 64;
            y = ig.system.height - 64;

        ig.input.bind(ig.KEY.Z, "action");

        this.buttons = [
            new ig.TouchButton("action", x, y, 64, 64, this.buttonImage, 0)
        ];

        this.loadLevel(LevelTitle);
	},
	
	update: function() {
		// Update all entities and backgroundMaps
		this.parent();
	},
	
	draw: function() {
        var i, x, y;

		// Draw all entities and backgroundMaps
		this.parent();

        for (i = 0; i < this.buttons.length; i++) {
            this.buttons[i].draw();
        }
		
		// Add your own drawing code here
		x = ig.system.width/2,
		y = ig.system.height/2;
	}
});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', LDMenu, 60, 640, 480, 1 );

});

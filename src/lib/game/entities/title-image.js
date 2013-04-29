ig.module (
    'game.entities.title-image'
)
.requires(
    'impact.entity'
)
.defines(function()
{

    EntityTitleImage = ig.Entity.extend({

        size: { x: 256, y: 256 },
        animSheet: new ig.AnimationSheet('media/title2.png', 256, 256),

        init: function(x, y, settings) {
            this.parent(x, y, settings);

            this.addAnim("idle", 1, [0]);
        },

        update: function() {
            this.currentAnim = this.anims.idle;

            if (ig.input.pressed("action")) {
                ig.game.loadLevel(LevelOne);
            }

            this.parent();
        }


    });

});
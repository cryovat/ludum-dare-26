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
        animSheet: new ig.AnimationSheet('media/title.png', 256, 256),
        font: new ig.Font("media/ubuntu-mono-light.png"),

        init: function(x, y, settings) {
            this.parent(x, y, settings);

            this.addAnim("idle", 1, [0]);
        },

        update: function() {
            this.parent();

            var text = "Press Action (Z) to start game",
                px = this.pos.x + this.size.x / 2,
                py = this.pos.y + this.font.height;

            if (ig.ua.mobile) {
                text = "Press \u2605 to start game";
            }

            this.font.draw("ohai", 40, 40, ig.Font.ALIGN.CENTER);

            if (ig.input.pressed("action")) {
                ig.game.loadLevel(LevelOne);
            }

        }


    });

});
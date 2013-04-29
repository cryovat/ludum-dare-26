ig.module(
        'game.entities.omega'
    )
    .requires(
        'impact.entity'
    )
    .defines(function () {
        EntityOmega = ig.Entity.extend({

            size: { x: 512, y: 512},

            animSheet: new ig.AnimationSheet('media/omega.png', 512, 512),

            init: function (x, y, settings) {
                this.parent(x, y, settings);

                this.addAnim("idle", 1, [0]);
                ig.game.clearColor = "#000";
            }
        });

    });
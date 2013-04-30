ig.module(
        'game.entities.eye'
    )
    .requires(
        'impact.entity'
    )
    .defines(function () {
        EntityEye = ig.Entity.extend({

            size: { x: 192, y: 192},
            offset: { x: 96, y: 0},

            animSheet: new ig.AnimationSheet('media/doomeye.png', 384, 192),

            type: ig.Entity.TYPE.B,
            checkAgainst: ig.Entity.TYPE.A,
            collides: ig.Entity.COLLIDES.PASSIVE,

            init: function (x, y, settings) {
                this.parent(x, y, settings);

                this.addAnim("closed", 1, [1]);
                this.addAnim("open", 1, [0]);
            },

            check: function (other) {

                this.parent(other);

                if (this.currentAnim === this.anims.closed) {
                    this.currentAnim = this.anims.open;
                }
            }
        });

    });
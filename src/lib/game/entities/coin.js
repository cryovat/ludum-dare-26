ig.module(
        'game.entities.coin'
    )
    .requires(
        'impact.entity'
    )
    .defines(function () {
        EntityCoin = ig.Entity.extend({

            size: { x: 32, y: 32 },
            animSheet: new ig.AnimationSheet('media/coin.png', 32, 32),
            currentIndex: 0,

            targetVel: { x: 180, y: 0 },

            type: ig.Entity.TYPE.B,
            checkAgainst: ig.Entity.TYPE.A,
            collides: ig.Entity.COLLIDES.PASSIVE,

            init: function (x, y, settings) {
                this.parent(x, y, settings);

                this.addAnim(0, 1, [0]);
            }
        });

    });
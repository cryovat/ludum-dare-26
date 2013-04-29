ig.module(
        'game.entities.key'
    )
    .requires(
        'impact.entity'
    )
    .defines(function () {
        EntityKey = ig.Entity.extend({

            size: { x: 16, y: 16},
            origin: { x: 8, y: 8},

            lockType: "a",
            animSheet: new ig.AnimationSheet('media/keysandlocks.png', 32, 32),

            type: ig.Entity.TYPE.B,
            checkAgainst: ig.Entity.TYPE.A,
            collides: ig.Entity.COLLIDES.PASSIVE,

            init: function (x, y, settings) {
                this.parent(x, y, settings);

                var that = this;

                ["a", "b", "c", "d"].forEach(function (el, idx) {

                    that.addAnim(el, 1, [8 + idx]);

                });

                this.currentAnim = this.anims[this.lockType];
            },

            check: function (other) {
                var type = this.lockType;

                ig.game.getEntitiesByType(EntityLock).forEach(function (e) {
                    e.turnKey(type);
                })

                this.kill();
            }
        });

    });
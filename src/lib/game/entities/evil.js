ig.module(
        'game.entities.evil'
    )
    .requires(
        'impact.entity'
    )
    .defines(function () {
        EntityEvil = ig.Entity.extend({

            size: { x: 64, y: 64},
            offset: { x: 32, y: 32},

            animSheet: new ig.AnimationSheet('media/evil.png', 128, 128),

            type: ig.Entity.TYPE.B,
            checkAgainst: ig.Entity.TYPE.A,
            collides: ig.Entity.COLLIDES.PASSIVE,

            maxVel: { x: 300, y: 300},

            init: function (x, y, settings) {
                this.parent(x, y, settings);

                this.addAnim("idle", 0.25, [0, 1]);
            },

            update: function () {
                this.parent();

                var playas = ig.game.getEntitiesByType(EntityPlayer),
                    p1 = playas[0];

                if (p1) {
                    var angle = this.angleTo(p1);

                    this.accel = {
                        x: Math.cos(angle) * 50,
                        y: Math.sin(angle) * 50
                    };
                }

            },

            check: function (other) {

                this.parent(other);

                ig.game.loadLevel(LevelEnd);
            }
        });

    });
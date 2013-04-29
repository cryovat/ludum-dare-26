ig.module(
        'game.entities.lock'
    )
    .requires(
        'impact.entity'
    )
    .defines(function () {
        EntityLock = ig.Entity.extend({

            size: { x: 32, y: 32},

            lockType: "a",
            open: true,

            animSheet: new ig.AnimationSheet('media/keysandlocks.png', 32, 32),

            type: ig.Entity.TYPE.B,
            checkAgainst: ig.Entity.TYPE.A,
            collides: ig.Entity.COLLIDES.NEVER,

            init: function (x, y, settings) {

                var that = this;

                ["a", "b", "c", "d"].forEach(function (el, idx) {

                    that.addAnim(el + "_open", 1, [idx]);
                    that.addAnim(el + "_locked", 1, [idx + 4]);

                });

                this.parent(x, y, settings);


                if (this.open === "false") {
                    this.open = false;
                }

                this.open = !this.open;
                this.turnKey(this.lockType);
            },

            turnKey: function (type) {
                if (type === this.lockType) {

                    this.open = !this.open;

                    this.collides = this.open ?
                        ig.Entity.COLLIDES.NEVER :
                        ig.Entity.COLLIDES.FIXED;

                    this.currentAnim =  this.anims[this.lockType + (this.open ? "_open" : "_locked")];
                }
            }
        });

    });
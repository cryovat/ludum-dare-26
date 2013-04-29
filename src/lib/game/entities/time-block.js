ig.module(
        'game.entities.time-block'
    )
    .requires(
        'impact.entity'
    )
    .defines(function () {
        EntityTimeBlock = ig.Entity.extend({

            size: { x: 32, y: 32},

            open: true,

            animSheet: new ig.AnimationSheet('media/timeblock.png', 32, 32),

            type: ig.Entity.TYPE.B,
            checkAgainst: ig.Entity.TYPE.A,
            collides: ig.Entity.COLLIDES.NEVER,

            init: function (x, y, settings) {

                this.parent(x, y, settings);

                this.addAnim("closed", 0.5, [0, 1, 2, 3], true);
                this.addAnim("open", 0.5, [4, 5, 6,7 ], true);

                this.currentAnim = this.anims.open;

                if (this.open === "false") {
                    this.open = false;
                }

                this.timer = new ig.Timer();
                this.timer.set(2);

                this.open = !this.open;
                this.flip();
            },

            update: function() {

                this.parent();

                this.timer.tick();

                if (this.timer.delta() > 0) {
                    this.timer.reset();
                    console.log("RESET");
                    this.flip();
                }
            },

            flip: function() {
                this.open = !this.open;

                if (this.open) {
                    this.currentAnim = this.anims.open;
                    this.collides = ig.Entity.COLLIDES.NEVER;
                } else {
                    this.currentAnim = this.anims.closed;
                    this.collides = ig.Entity.COLLIDES.FIXED;
                }

                this.currentAnim.rewind();
            }
        });

    });
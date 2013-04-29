ig.module(
        'game.entities.player'
    )
    .requires(
        'impact.entity'
    )
    .defines(function () {
        var clamp = function (n) {
            var sign = n >= 0 ? 1 : -1,
                fn = Math.floor(Math.abs(n));

            return fn > 170 ? sign * 180 : 0;
        };

        EntityPlayer = ig.Entity.extend({

            size: { x: 32, y: 32 },
            animSheet: new ig.AnimationSheet('media/player.png', 32, 32),
            currentIndex: 0,

            targetAcc: { x: 180, y: 0 },

            type: ig.Entity.TYPE.A,
            checkAgainst: ig.Entity.TYPE.B,
            collides: ig.Entity.COLLIDES.PASSIVE,

            init: function (x, y, settings) {
                this.parent(x, y, settings);

                this.addAnim(0, 0.15, [0,1,2,3,2,1]);
                this.addAnim(1, 0.15, [4,5,6,7,6,5]);
                this.addAnim(2, 0.15, [8,9,10,11,10,9]);
                this.addAnim(3, 0.15, [12,13,14,15,14,13]);

                this.accel.x = this.targetAcc.x;
                this.accel.y = this.targetAcc.y;
                this.vel = { x: this.targetAcc.x, y: this.targetAcc.y};
                this.maxVel = {x: 180, y: 180};
            },

            isStopped: function () {
                return this.vel.x === 0 && this.vel.y === 0;
            },

            update: function () {

                if (this.isStopped() && ig.input.pressed("action")) {

                    var acc = this.targetAcc,
                        tgt,
                        angle = -Math.PI / 2,
                        ca = Math.cos(angle),
                        sa = Math.sin(angle),
                        ci = this.currentIndex;

                    tgt = {
                        x: clamp((acc.x * ca) - (acc.y * sa)),
                        y: clamp((acc.x * sa) + (acc.y * ca))
                    };

                    this.accel = {
                        x: tgt.x * 2,
                        y: tgt.y * 2
                    };

                    this.targetAcc = tgt;

                    this.currentIndex = ci + 1 < 4 ? ci + 1 : 0;

                    this.currentAnim = this.anims[this.currentIndex];
                }

                this.parent();
            }


        });

    });
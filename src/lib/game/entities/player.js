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
        }


        EntityPlayer = ig.Entity.extend({

            size: { x: 32, y: 32 },
            animSheet: new ig.AnimationSheet('media/player.png', 32, 32),
            currentIndex: 0,

            targetVel: { x: 180, y: 0 },

            type: ig.Entity.TYPE.A,
            checkAgainst: ig.Entity.TYPE.B,
            collides: ig.Entity.COLLIDES.PASSIVE,

            init: function (x, y, settings) {
                this.parent(x, y, settings);

                this.addAnim(0, 1, [0]);
                this.addAnim(1, 1, [4]);
                this.addAnim(2, 1, [8]);
                this.addAnim(3, 1, [12]);

                console.log(this.anims);

                this.vel.x = this.targetVel.x;
                this.vel.y = this.targetVel.y;
                this.maxVel = {x: 180, y: 180};
            },

            isStopped: function () {
                return this.vel.x === 0 && this.vel.y === 0;
            },

            update: function () {

                if (this.isStopped() && ig.input.pressed("action")) {

                    var vel = this.targetVel,
                        tgt,
                        angle = -Math.PI / 2,
                        ca = Math.cos(angle),
                        sa = Math.sin(angle),
                        ci = this.currentIndex;

                    tgt = {
                        x: clamp((vel.x * ca) - (vel.y * sa)),
                        y: clamp((vel.x * sa) + (vel.y * ca))
                    };

                    this.vel = {
                        x: tgt.x,
                        y: tgt.y
                    }

                    this.targetVel = tgt;

                    this.currentIndex = ci + 1 < 4 ? ci + 1 : 0;

                    console.log(this.currentIndex);

                    this.currentAnim = this.anims[this.currentIndex];
                }

                this.parent();
            }


        });

    });
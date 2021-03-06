ig.module(
        'game.entities.exit'
    )
    .requires(
        'impact.entity'
    )
    .defines(function () {

        EntityExit = ig.Entity.extend({

           size: {x: 32, y: 32},
           destination: "",
           checkAgainst: ig.Entity.TYPE.A,

           _wmScalable: true,
           _wmDrawBox: true,
           _wmBoxColor: 'rgba(0,255,0,0.5)',

            check: function(other) {

                var dest = this.destination;

                if (typeof dest !== "string" || dest.length === 0) {
                    throw new Error("Destination not set for exit at " + this.pos.x + "x" + this.pos.y);
                } else {

                    var level = window[dest];
                    if (level) {
                        ig.game.loadLevel(level);
                    } else {
                        throw new Error("Level '" + dest + "' not found!");
                    }
                }
            }


        });

    });
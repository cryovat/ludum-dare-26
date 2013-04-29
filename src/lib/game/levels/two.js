ig.module( 'game.levels.two' )
.requires( 'impact.image','game.entities.player','game.entities.exit','game.entities.key','game.entities.lock' )
.defines(function(){
LevelTwo=/*JSON[*/{"entities":[{"type":"EntityPlayer","x":64,"y":224},{"type":"EntityExit","x":624,"y":352,"settings":{"size":{"x":16,"y":32},"destination":"LevelThree"}},{"type":"EntityKey","x":464,"y":160},{"type":"EntityLock","x":288,"y":384}],"layer":[{"name":"background","width":20,"height":15,"linkWithCollision":false,"visible":1,"tilesetName":"media/whiteout.png","repeat":false,"preRender":false,"distance":"1","tilesize":32,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,20,0,24,22,22,22,22,22,22,23,0,0],[0,0,0,0,0,0,0,24,25,0,0,0,0,0,0,0,0,0,0,0],[22,22,22,22,23,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,16,0],[2,2,2,2,3,0,0,0,0,0,0,0,11,0,0,0,0,0,6,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,21,23],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,7,0,19,0,0,0,0,0,0,1,2,3],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0],[0,0,0,0,0,0,0,0,4,2,3,0,0,0,0,0,0,11,0,0]]},{"name":"collision","width":20,"height":15,"linkWithCollision":false,"visible":1,"tilesetName":"","repeat":false,"preRender":false,"distance":1,"tilesize":32,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[34,34,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0],[1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,34,34],[0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0]]}]}/*]JSON*/;
LevelTwoResources=[new ig.Image('media/whiteout.png')];
});
ig.module( 'game.levels.one' )
.requires( 'impact.image','game.entities.player','game.entities.exit' )
.defines(function(){
LevelOne=/*JSON[*/{"entities":[{"type":"EntityPlayer","x":64,"y":224},{"type":"EntityExit","x":624,"y":352,"settings":{"size":{"x":16,"y":32},"destination":"LevelTwo"}}],"layer":[{"name":"background","width":20,"height":15,"linkWithCollision":false,"visible":1,"tilesetName":"media/whiteout.png","repeat":false,"preRender":false,"distance":"1","tilesize":32,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,20,0,0,0,0,0,0,0,0,24,22,23,0,0,0,0,0,0,0],[0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[22,25,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0],[2,5,0,0,0,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0],[0,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,21,22],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,4,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2],[0,0,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0]]},{"name":"collision","width":20,"height":15,"linkWithCollision":false,"visible":1,"tilesetName":"","repeat":false,"preRender":false,"distance":1,"tilesize":32,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}]}/*]JSON*/;
LevelOneResources=[new ig.Image('media/whiteout.png')];
});
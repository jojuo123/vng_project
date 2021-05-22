// /**
//  * Created by GSN on 7/9/2015.
//  */
//
//
//
// var PacmanScreen = cc.Layer.extend({
//     _itemMenu:null,
//     _beginPos:0,
//     isMouseDown:false,
//     start_X:0,
//     start_Y:0,
//     coin_start_X:0,
//     coin_start_Y:0,
//     num_ghost:0,
//
//     ctor:function() {
//         this._super(cc.color(0,0,0,255), cc.color(98,99,117,255) );
//         var size = cc.director.getVisibleSize();
//         this.score = 0;
//         //this.num_ghost = 1;
//         this.isPowered = false;
//         //cc.SPRITE_DEBUG_DRAW = 2;
//         this.current_char_dir = -1;
//
//
//
//
//         var xPos = (size.width - 220)/2;
//         // this.lblLog = gv.commonText(fr.Localization.text("score: 0"), xPos, size.height*0.2);
//         // this.addChild(this.lblLog);
//
//         this.nodeAnimation = new cc.Node();
//         this.nodeAnimation.setPosition(xPos, size.height*0.5);
//         this.nodeAnimation.setScaleX(-1);
//         this.addChild(this.nodeAnimation);
//         this.ghost = [];
//
//         this.map_ind = [];
//         this.initMap("/Map/map1.txt");
//
//         this.character = null;
//         this.lblResult = new cc.LabelTTF("Score: 0", "Arial");
//         this.lblResult.setFontSize(26);
//         this.lblResult.setPosition(cc.p(size.width / 2, size.height / 2));
//         this.lblResult.setColor(cc.color(255, 0, 0));
//         this.addChild(this.lblResult);
//
//         this.initCharacter();
//
//         this.coin = null;
//         this.initCoin();
//         //this.initButton();
//
//
//         //this.initGhost(1);
//         var btnBack = gv.commonButton(100, 30, size.width - 70, size.height - 10,"Back");
//         this.addChild(btnBack, 1);
//         btnBack.addClickEventListener(this.onSelectBack.bind(this));
//         var btnDown = gv.commonButton(40, 40, size.width - 160, 52,"D");
//         btnDown.setTitleFontSize(20);
//         //this.addChild(btnDown);
//         btnDown.addClickEventListener(this.downC.bind(this));
//
//         var btnLeft = gv.commonButton(40, 40, size.width - 250, 52,"L");
//         btnLeft.setTitleFontSize(20);
//         //this.addChild(btnLeft);
//         btnLeft.addClickEventListener(this.leftC.bind(this));
//
//         var btnUp = gv.commonButton(40, 40, size.width - 160, 52 + 90,"U");
//         btnUp.setTitleFontSize(20);
//         //this.addChild(btnUp);
//         btnUp.addClickEventListener(this.upC.bind(this));
//
//         var btnRight = gv.commonButton(40, 40, size.width - 70, 52,"R");
//         btnRight.setTitleFontSize(20);
//         //this.addChild(btnRight);
//         btnRight.addClickEventListener(this.rightC.bind(this));
//
//
//        this.scheduleUpdate();
//        this.schedule(this.checkColision);
//        this.schedule(this.functionCallBack, time_interval_ghost);
//        this.schedule(this.checkGhostCollision);
//        this.schedule(this.continueMove, time_interval);
//     },
//     onLoad: function()
//     {
//
//     },
//     update: function(dt)
//     {
//
//     },
//     upC : function()
//     {
//         //this.current_char_dir = 1;
//         this.character.change_direction(1);
//     },
//     downC : function()
//     {
//         //this.current_char_dir = 0;
//         this.character.change_direction(0);
//     },
//     leftC : function()
//     {
//         this.character.change_direction(3);
//         // this.current_char_dir = 3;
//     },
//     rightC: function () {
//         // this.current_char_dir = 2;
//         this.character.change_direction(2);
//     },
//     continueMove: function (dt)
//     {
//         switch (this.character._dir)
//         {
//             case 0:
//                 this.downEvent();
//                 break;
//             case 1:
//                 this.upEvent();
//                 break;
//             case 2:
//                 this.rightEvent();
//                 break;
//             case 3:
//                 this.leftEvent();
//                 break;
//         }
//     },
//     downEvent:function()
//     {
//         if (this.checkMoveable(RoundedCoord_X(this.character.x, this.character._dir), RoundedCoord_Y(this.character.y - grid_size, this.character._dir)))
//             this.character.setPosition(RoundedCoord_X(this.character.x, this.character._dir), RoundedCoord_Y(this.character.y - grid_size, this.character._dir));
//     },
//     onSelectBack:function(sender)
//     {
//         this.unscheduleAllCallbacks();
//         fr.view(ScreenMenu);
//     },
//     initCharacter:function()
//     {
//         if(this.character)
//             this.character.removeFromParent(true);
//         this.character = new CharacterSprite("/Images/character.png");
//         this.addChild(this.character);
//         this.character.setAnchorPoint(0.5, 0.5);
//         this.character.x = ToScreenCoord_X(this.start_X);
//         this.character.y = ToScreenCoord_Y(this.start_Y);
//         this.character.visible = true;
//         this.character.setColor(cc.hexToColor('#DEFF00'));
//
//     },
//     leftEvent:function()
//     {
//         // if (this.boundaryCheck(this.character.x - grid_size, this.character.y) && this.checkValid(this.character.x - grid_size, this.character.y)) {
//         //     var _x = this.character.x;
//         //     var _y = this.character.y;
//         //     this.character.setPosition(_x - grid_size, _y);
//         // }
//         if (this.checkMoveable(RoundedCoord_X(this.character.x - grid_size, this.character._dir), RoundedCoord_Y(this.character.y, this.character._dir)))
//             this.character.setPosition(RoundedCoord_X(this.character.x - grid_size, this.character._dir), RoundedCoord_Y(this.character.y, this.character._dir));
//     },
//     upEvent:function()
//     {
//         if (this.checkMoveable(RoundedCoord_X(this.character.x, this.character._dir), RoundedCoord_Y(this.character.y + grid_size, this.character._dir)))
//             this.character.setPosition(RoundedCoord_X(this.character.x, this.character._dir), RoundedCoord_Y(this.character.y + grid_size, this.character._dir));
//         // if (this.boundaryCheck(this.character.x, this.character.y + grid_size) && this.checkValid(this.character.x, this.character.y + grid_size))
//         //     this.character.setPosition(this.character.x, this.character.y + grid_size);
//     },
//     rightEvent:function()
//     {
//         if (this.checkMoveable(RoundedCoord_X(this.character.x + grid_size, this.character._dir), RoundedCoord_Y(this.character.y, this.character._dir)))
//             this.character.setPosition(RoundedCoord_X(this.character.x + grid_size, this.character._dir), RoundedCoord_Y(this.character.y, this.character._dir));
//         // if (this.boundaryCheck(this.character.x + grid_size, this.character.y) && this.checkValid(this.character.x + grid_size, this.character.y))
//         //     this.character.setPosition(this.character.x + grid_size, this.character.y);
//     },
//     initCoin:function()
//     {
//         this.coin = new cc.Sprite("Images/Target.png");
//
//         this.coin.setPosition(ToScreenCoord_X(this.coin_start_X), ToScreenCoord_Y(this.coin_start_Y));
//         this.addChild(this.coin);
//         this.coin.visible = true;
//     },
//     checkColision:function(dt)
//     {
//         if (cc.rectIntersectsRect(this.character.getBoundingBox(), this.coin.getBoundingBox()))
//         {
//             console.log("Hits");
//
//             var size = cc.director.getVisibleSize();
//             var newX = ToScreenCoord_X(Math.floor(Math.random() * (size.width / bound_size)));
//             var newY = ToScreenCoord_Y(Math.floor(Math.random() * (size.height / bound_size)));
//             while (!this.checkMoveable(newX, newY))
//             {
//                 newX = ToScreenCoord_X(Math.floor(Math.random() * (size.width / bound_size)));
//                 newY = ToScreenCoord_Y(Math.floor(Math.random() * (size.height / bound_size)));
//             }
//             this.coin.setPosition(newX, newY);
//             this.score += 1;
//             this.lblResult.setString("score: "+this.score);
//
//
//             if (this.num_ghost < Math.min(MAX_GHOST, this.score))
//             {
//                 this.unschedule(this.functionCallBack);
//                 this.unschedule(this.checkGhostCollision);
//                 this.ghost.push(new GhostSprite("/Images/en1.png"));
//                 var _x = ToScreenCoord_X(Math.floor(Math.random() * (size.width / bound_size)));
//                 var _y = ToScreenCoord_Y(Math.floor(Math.random() * (size.height / bound_size)));
//                 while ((ToGridCoord_X(_x) == ToGridCoord_X(this.character.x) && ToGridCoord_Y(_y) == ToGridCoord_Y(this.character.y)) || !this.checkMoveable(_x, _y) || Distance(ToGridCoord_X(_x), ToGridCoord_Y(_y), ToGridCoord_X(this.character.x), ToScreenCoord_Y(this.character.y)) <= 3)
//                 {
//                     _x = ToScreenCoord_X(Math.floor(Math.random() * (size.width / bound_size)));
//                     _y = ToScreenCoord_Y(Math.floor(Math.random() * (size.height / bound_size)));
//                 }
//
//                 this.ghost[this.ghost.length - 1].setPosition(_x, _y);
//                 this.ghost[this.ghost.length - 1].visible = true;
//                 this.addChild(this.ghost[this.ghost.length - 1]);
//                 this.ghost[this.ghost.length - 1].visible = true;
//                 this.num_ghost+=1;
//                 this.schedule(this.functionCallBack, time_interval_ghost);
//                 this.schedule(this.checkGhostCollision);
//             }
//
//             if (this.score % 3 == 0)
//             {
//                 this.isPowered = true;
//                 this.character.setColor(cc.hexToColor('#00FF00'));
//                 this.scheduleOnce(this.downgrade, 5);
//             }
//
//             return true;
//         }
//         else
//         {
//             return false;
//         }
//     },
//     checkGhostCollision: function(dt)
//     {
//         //this.unschedule(this.checkColision);
//         var size = cc.director.getVisibleSize();
//         for (var i = 0; i < this.ghost.length; ++i)
//         {
//             if (!this.ghost[i].visible) continue;
//             if (cc.rectIntersectsRect(this.character.getBoundingBox(), this.ghost[i].getBoundingBox()))
//             {
//                 //console.log("Hits");
//                 //random position
//                 if (!this.isPowered)
//                 {
//                     this.unscheduleAllCallbacks();
//                     console.log("dead");
//
//                     fr.view(ScreenMenu);
//                 }
//                 else
//                 {
//                     this.ghost[i].visible = false;
//                     this.num_ghost--;
//                 }
//                 // var newX = Math.floor(Math.random() * (size.width / grid_size));
//                 // var newY = Math.floor(Math.random() * (size.height / grid_size));
//                 // this.coin.setPosition(newX * grid_size + 50, newY * grid_size + 50);
//                 // this.score += 1;
//                 return true;
//             }
//         }
//         //this.schedule(this.checkColision);
//     },
//
//     functionCallBack: function(dt) {
//         //this.unschedule(this.checkColision);
//         for (var i = 0; i < this.ghost.length; ++i)
//         {
//             this.ghostMove(this.ghost[i], i);
//         }
//         //this.schedule(this.checkColision);
//     },
//     boundaryCheck: function(x, y){
//         var size = cc.director.getVisibleSize();
//         if (x > size.width - (bound_size)/ 2 || x < (bound_size) / 2) return false;
//         else if (y > size.height - (bound_size) / 2 || y < (bound_size) / 2) return false;
//         else
//         {
//             //console.log("bound true");
//             return true;
//         }
//     },
//     checkValid: function(x, y)
//     {
//         //this.unschedule(this.continueMove);
//         for (let i = 0; i < this.map_ind.length; i++)
//         {
//             if (x - bound_size / 2 >= this.map_ind[i].x + bound_size / 2 || x + bound_size / 2 <= this.map_ind[i].x - bound_size / 2)
//             {
//                 continue;
//             }
//             if (y - bound_size / 2 >= this.map_ind[i].y + bound_size / 2 || y + bound_size / 2 <= this.map_ind[i].y - bound_size / 2)
//             {
//                 continue;
//             }
//             // console.log("i = "+i);
//             // console.log(this.map_ind[i].x + " and " + this.map_ind[i].y);
//             return false;
//         }
//         //console.log("valid true");
//         return true;
//     },
//     checkMoveable: function(x, y)
//     {
//         //if (this.boundaryCheck(x, y) == false) console.log("bound fail");
//         //console.log(x + " " + y);
//         return this.boundaryCheck(x, y) && this.checkValid(x, y);
//     },
//     addGhost: function(x, y) {
//
//         this.ghost.push(new GhostSprite("/Images/en1.png"));
//
//         //screen pos
//         this.ghost[this.ghost.length - 1].setPosition(x, y);
//
//         this.ghost[this.ghost.length - 1].setVisible(true);
//         this.addChild(this.ghost[this.ghost.length - 1]);
//     },
//     ghostMove: function(item, index)
//     {
//         if (!item.canMove()) return;
//         let dir = -1;
//         if (item._dir == -1) {
//             dir = Math.floor(Math.random() * 4);
//             item._dir = dir;
//         }
//         else {
//             dir = item._dir;
//         }
//         switch(dir)
//         {
//             case 0:
//                 if (this.checkMoveable(item.x + grid_size_ghost, item.y))
//                     item.setPosition(item.x + grid_size_ghost, item.y);
//                 else
//                 {
//                     dir = Math.floor(Math.random() * 4);
//                     item._dir = dir;
//                 }
//                 break;
//             case 1:
//                 if (this.checkMoveable(item.x - grid_size_ghost, item.y))
//                     item.setPosition(item.x - grid_size_ghost, item.y);
//                 else
//                 {
//                     dir = Math.floor(Math.random() * 4);
//                     item._dir = dir;
//                 }
//                 break;
//             case 2:
//                 if (this.checkMoveable(item.x, item.y + grid_size_ghost))
//                     item.setPosition(item.x, item.y + grid_size_ghost);
//                 else
//                 {
//                     dir = Math.floor(Math.random() * 4);
//                     item._dir = dir;
//                 }
//                 break;
//             case 3:
//                 if (this.checkMoveable(item.x, item.y - grid_size_ghost))
//                     item.setPosition(item.x, item.y - grid_size_ghost);
//                 else
//                 {
//                     dir = Math.floor(Math.random() * 4);
//                     item._dir = dir;
//                 }
//                 break;
//         }
//     },
//     downgrade: function(dt)
//     {
//         this.isPowered = false;
//         this.character.setColor(cc.hexToColor('#DEFF00'));
//     },
//     initMap: function(file)
//     {
//         this.map = [];
//         var size = cc.director.getVisibleSize();
//
//         this.loadMaps(file);
//         this.setMap();
//     },
//     loadMaps: function(file)
//     {
//         var self = this;
//         cc.loader.load(file, (err, assets) =>
//             {
//                 var lines = assets.toString().split(/\r\n|\n/);
//
//                 for (var i = 0; i < lines.length; ++i)
//                 {
//                     self.map.push(lines[i]);
//                 }
//             }
//         );
//     },
//     setMap: function()
//     {
//         var start_XY = this.map[0].split(' ');
//         this.start_X = start_XY[0];
//         this.start_Y = start_XY[0];
//         var coin_start_XY = this.map[1].split(' ');
//         this.coin_start_X = coin_start_XY[0];
//         this.coin_start_Y = coin_start_XY[1];
//
//         this.num_ghost = parseInt(this.map[2]);
//         for (var i = 3; i < this.num_ghost+3; i++)
//         {
//             var ele = this.map[i].split(' ');
//             var _x = ele[0];
//             var _y = ele[1];
//             this.addGhost(ToScreenCoord_X(_x), ToScreenCoord_Y(_y));
//         }
//
//         var N = this.map.length - this.num_ghost - 3;
//         this.map_ind = new Array(N);
//
//         for (var i = this.num_ghost + 3; i < this.map.length; i++)
//         {
//             var ele = this.map[i].split(' ');
//             var _x = ele[0];
//             var _y = ele[1];
//             this.map_ind[i - this.num_ghost - 3] = new cc.Sprite("/Images/wall.png");
//             //console.log(_x + " this is " + _y + " in " + (i - this.num_ghost - 3));
//             this.map_ind[i - this.num_ghost - 3].setPosition(ToScreenCoord_X(_x), ToScreenCoord_Y(_y));
//             this.map_ind[i - this.num_ghost - 3].visible = true;
//             this.addChild(this.map_ind[i -this.num_ghost - 3]);
//         }
//     },
//     onEnter: function () {
//         this._super();
//         var self = this;
//         // add keyboard event listener
//         cc.eventManager.addListener({
//
//             event: cc.EventListener.KEYBOARD,
//
// // When there is a key being pressed down, judge if it's the designated directional button and set up acceleration in the corresponding direction
//             onKeyPressed: function(keyCode, event) {
//                 switch(keyCode) {
//                     case cc.KEY.left:
//                         self.leftC();
//                         console.log("ccc");
//                         break;
//                     case cc.KEY.down:
//                         self.downC();
//                         break;
//                     case cc.KEY.up:
//                         self.upC();
//                         break;
//                     case cc.KEY.right:
//                         self.rightC();
//                         break;
//                 }
//             }
//         }, this)
//     },
//     // upC : function()
//     // {
//     //     //this.current_char_dir = 1;
//     //     this.character.change_direction(1);
//     // },
//     // downC : function()
//     // {
//     //     //this.current_char_dir = 0;
//     //     this.character.change_direction(0);
//     // },
//     // leftC : function()
//     // {
//     //     this.character.change_direction(3);
//     //     // this.current_char_dir = 3;
//     // },
//     // rightC: function () {
//     //     // this.current_char_dir = 2;
//     //     this.character.change_direction(2);
//     // },
// });
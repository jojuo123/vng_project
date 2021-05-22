/**
 * Created by GSN on 7/6/2015.
 */

var ScreenMenu = cc.Layer.extend({
    _itemMenu:null,
    _beginPos:0,
    isMouseDown:false,

    ctor:function() {
        this._super();
        var size = cc.director.getVisibleSize();

        var yBtn = 3*size.height/5;

        // var btnNetwork = gv.commonButton(200, 64, cc.winSize.width/4, yBtn,"Network");
        // this.addChild(btnNetwork);
        // btnNetwork.addClickEventListener(this.onSelectNetwork.bind(this));
        //
        // var btnLocalization = gv.commonButton(200, 64, cc.winSize.width/2, yBtn,"Localize");
        // this.addChild(btnLocalization);
        // btnLocalization.addClickEventListener(this.onSelectLocalization.bind(this));

        var btnPlay = gv.commonButton(200, 64, 3*cc.winSize.width/6, yBtn,"Play");
        this.addChild(btnPlay);
        btnPlay.addClickEventListener(this.onPlayClick.bind(this));

    },
    onEnter:function(){
        this._super();
    },
    onSelectNetwork:function(sender)
    {
        fr.view(ScreenNetwork);
    },
    onSelectLocalization:function(sender)
    {
        fr.view(ScreenLocalization);
    },
    onPlayClick:function(sender)
    {
        fr.view(PacmanScreen);
    }

});


var Gameplay = cc.Layer.extend({
    layer_map:null,

    ctor: function()
    {
        this._super()

    },
    onEnter: function()
    {
        this._super();
        this.layer_map = new Map(MapPath);
        this.addChild(this.layer_map);
    }
})
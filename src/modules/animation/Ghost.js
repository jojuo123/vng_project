
var GhostSprite = cc.Sprite.extend({
    _dir: -1,
    _move_prob:0.0,
    ctor:function(file)
    {
        this._super(file);
        this._dir = -1;
        this._move_prob = Math.random();
    },
    setDir: function(x)
    {
        this._dir = x;
    },
    canMove: function()
    {
        var p = Math.random();
        return (p < this._move_prob);
    },
    getDir: function()
    {
        return this._dir;
    }
});
var CharacterSprite = cc.Sprite.extend({
    _dir : -1,
    ctor:function(file)
    {
        this._super(file);
        //this.setScale(3);
    },
    change_direction:function(dir)
    {
        this._dir = dir;
    // case 0:
    //     this.downEvent();
    //     break;
    // case 1:
    //     this.upEvent();
    //     break;
    // case 2:
    //     this.rightEvent();
    //     break;
    // case 3:
    //     this.leftEvent();
    //     break;
        switch (dir)
        {
            case 0:
                this.setTexture("/Images/characterDown.png");
                //this.runAction(cc.RotateTo(0, 90));
                break;
            case 1:
                this.setTexture("/Images/characterUp.png");
                //this.runAction(cc.rotateTo(0, -90));
                break;
            case 2:
                this.setTexture("/Images/characterRight.png");
                //this.runAction(cc.RotateTo(0, -180));
                break;
            case 3:
                this.setTexture("/Images/character.png");
                //this.runAction(cc.RotateTo(0, 0));
                break;
        }
    }
});
var COIN_TAG = 1;
let MAX_GHOST = 6;
let grid_size = 3;
let grid_size_ghost = 20;
let bound_size = 40;
let time_interval = 0.1;
let time_interval_ghost = 0.05;

var ToScreenCoord_X = function (x)
{
    return x * bound_size + bound_size/2;
}
var ToScreenCoord_Y = function (y)
{
    return y * bound_size + bound_size/2;
}

var ToGridCoord_X = function (x)
{
    return Math.ceil((x - bound_size / 2) / bound_size);
}

var ToGridCoord_Y = function (y)
{
    return Math.ceil((y - bound_size / 2) / bound_size);
}

var RoundedCoord_X = function (x, dir)
{
    let tmp = (x - bound_size / 2) / bound_size;
    if (dir == 2)
        tmp = Math.ceil(tmp);
    else if (dir == 3)
        tmp = Math.floor(tmp);
    else
        tmp = Math.round(tmp);
    return ToScreenCoord_X(tmp);
    //return ToScreenCoord_X(Math.round((x - bound_size / 2) / bound_size));
}

var RoundedCoord_Y = function (y, dir)
{
    let tmp = (y - bound_size / 2) / bound_size;
    if (dir == 1)
        tmp = Math.ceil(tmp);
    else if (dir == 0)
        tmp = Math.floor(tmp);
    else
        tmp = Math.round(tmp);
    return ToScreenCoord_Y(tmp);
    //return ToScreenCoord_Y(Math.round((y - bound_size / 2) / bound_size));
}

var Distance = function (x0, y0, x1, y1)
{
    return Math.min(Math.abs(x0 - x1), Math.abs(y1 - y0));
}
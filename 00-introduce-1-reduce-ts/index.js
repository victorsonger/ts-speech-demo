"use strict";
var shopCar = [1.234, 2.584, 3.451, 4.462];
var shopCarSum = shopCar.reduce(function (prev, curr) {
    return (Number(prev.toFixed(2))) + (Number(curr.toFixed(2)));
}, 0);
console.log(shopCarSum);

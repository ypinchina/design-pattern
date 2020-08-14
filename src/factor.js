"use strict";
// 工厂模式
var Factor = /** @class */ (function () {
    function Factor(name) {
    }
    Factor.prototype.init = function () {
        console.log('product init');
    };
    Factor.prototype.fun1 = function () {
        console.log('production1');
    };
    Factor.prototype.fun2 = function () {
        console.log('production2');
    };
    return Factor;
}());
var creator = /** @class */ (function () {
    function creator() {
    }
    creator.prototype.create = function (name) {
        return new Factor(name);
    };
    return creator;
}());
var create = new creator();
var p1 = create.create('p1');
p1.init();
p1.fun1();
p1.fun2();

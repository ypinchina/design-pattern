"use strict";
var SingleObject = /** @class */ (function () {
    function SingleObject() {
    } //不允许在外部创建新的实例
    SingleObject.getInstance = function () {
        if (!this.instance) {
            this.instance = new SingleObject();
        }
        return this.instance;
    };
    return SingleObject;
}());
var a1 = SingleObject.getInstance();
var b1 = SingleObject.getInstance();
console.log(a1 === b1); //true 仅有一个实例

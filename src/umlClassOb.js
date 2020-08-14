"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//多态  子类的不同实现
var Person = /** @class */ (function () {
    function Person(name, house) {
        this.name = name;
        this.house = house;
    }
    Person.prototype.saysomething = function () {
        console.log('im a person');
    };
    return Person;
}());
var A = /** @class */ (function (_super) {
    __extends(A, _super);
    function A(name, house) {
        return _super.call(this, name, house) || this;
    }
    A.prototype.saysomething = function () {
        console.log('im  A');
    };
    return A;
}(Person));
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B(name, house) {
        return _super.call(this, name, house) || this;
    }
    B.prototype.saysomething = function () {
        console.log('im  B');
    };
    return B;
}(Person));
var House = /** @class */ (function () {
    function House(house) {
        this.city = house;
    }
    House.prototype.showCity = function () {
        return null;
    };
    return House;
}());
var ahouse = new House('beijing');
var a = new A('a', ahouse);
// 具体UML构图见 processon.com

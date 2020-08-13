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
// 面向对象    
//面向对象三要素
var People = /** @class */ (function () {
    function People(name, age) {
        this.name = name;
        this.age = age;
        this.weight = 120; //体重120斤 不让外人访问这个， 也可以通过参数传入
    }
    People.prototype.eat = function () {
        console.log(this.name + " eat something");
    };
    People.prototype.say = function () {
        console.log("my name is " + this.name + ", age " + this.age);
    };
    return People;
}());
//继承
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, num) {
        var _this = _super.call(this, name, age) || this;
        _this.num = num;
        _this.girlFriend = 'xiaoli'; // 小丽
        return _this;
    }
    Student.prototype.study = function () {
        console.log(this.name + " study");
    };
    return Student;
}(People));
var yp = new Student('yipeng', 26, 55);
yp.say();
console.log(yp.num);
yp.study();
// console.log(yp.weight)  weight属性受保护 报错
// console.log(yp.girlFriend) 私有属性报错

// 面向对象    
//面向对象三要素
class People {
    age: Number
    name: String
    protected weight : Number //本类和子类可用 外部不能用
    constructor (name: String, age: Number) {
        this.name = name
        this.age = age
        this.weight = 120 //体重120斤 不让外人访问这个， 也可以通过参数传入
    }
    eat() {
        console.log(`${this.name} eat something`)
    }
    say() {
        console.log(`my name is ${this.name}, age ${this.age}`)
    }
}
//继承

class Student extends People{
    num: Number
    private girlFriend: String
    constructor(name:String, age: Number, num: Number) {
        super(name, age)
        this.num = num
        this.girlFriend = 'xiaoli' // 小丽
    }
    study() {
        console.log(`${this.name} study`)
    }
}
let yp = new Student('yipeng', 26, 55)
yp.say()
console.log(yp.num)
yp.study()
// console.log(yp.weight)  weight属性受保护 报错
// console.log(yp.girlFriend) 私有属性报错
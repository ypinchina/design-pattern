//多态  子类的不同实现
class Person {
    name:String
    house:House
    constructor (name:String, house:House) {
        this.name = name
        this.house = house
    }
    saysomething() {
        console.log('im a person')
    }
}
class A extends Person{
    constructor(name: String, house: House) {
        super(name, house)
    }
    saysomething() {
        console.log('im  A')
    }
}
class B extends Person{
    constructor(name: String, house: House) {
        super(name, house)
    }
    saysomething() {
        console.log('im  B')
    }
}
class House {
    city: String
    constructor(house:String) {
        this.city = house
    }
    showCity () {
        return null
    }
}
let ahouse = new House('beijing')
let a = new A('a', ahouse)
// 具体UML构图见 processon.com
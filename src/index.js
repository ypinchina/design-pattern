class Person {
    constructor (name) {
        this.name = name
    }
    say() {
        console.log(this.name)
    }
}
let yp = new Person('yipeng')
yp.say()
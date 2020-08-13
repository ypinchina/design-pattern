class Texi {
    num: Number
    name: String
    constructor(num: Number, name: String) {
        this.num = num
        this.name = name
    }
}
class FastTexi extends Texi {
    price: Number
    constructor(num: Number, name: String) {
        super(num, name)
        this.price = 1
    }
}
class SpecialTexi  extends Texi {
    price: Number
    constructor(num: Number, name: String) {
        super(num, name)
        this.price = 2
    }
}
class Trip {
    texi: Texi
    constructor(texi: Texi){
        this.texi = texi
    }
    start() {
        console.log(`此车的车牌号是${this.texi.num}, 车型是${this.texi.name}`)
    }
    end() {
        console.log(`车费是${this.texi.price * 5}`)
    }
}
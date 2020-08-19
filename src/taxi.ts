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
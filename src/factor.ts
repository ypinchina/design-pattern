// 工厂模式
class Factor{
    constructor(name:String) {

    }
    init(): void {
        console.log('product init')
    }
    fun1(): void{
        console.log('production1')
    }
    fun2(): void{
        console.log('production2')
    }
}


class creator {
    create(name: String) {
        return new Factor(name)
    }
}

let create = new creator()
let p1 = create.create('p1')
p1.init()
p1.fun1()
p1.fun2()
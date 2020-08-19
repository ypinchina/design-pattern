class SingleObject {
    private constructor() {}//不允许在外部创建新的实例
    private static instance: SingleObject
    static getInstance() {
        if(!this.instance) {
            this.instance = new SingleObject()
        }
        return this.instance
    }
}
let a1 = SingleObject.getInstance()
let b1 = SingleObject.getInstance()
console.log(a1 === b1) //true 仅有一个实例
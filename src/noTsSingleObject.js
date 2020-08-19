class SingleObject1 {
    login() {
        console.log('login')
    }
}
SingleObject1.getInstance = (function() {
    let instance
    return function (){
        if(!instance) {
            instance = new SingleObject1()
        }
        return instance
    }
})()

let s1 = SingleObject1.getInstance()
let s2 = new SingleObject1()
let s3 = SingleObject1.getInstance()
console.log('s1 === s3', s1 === s3)
console.log('s1 === s2', s1 === s2)
s1.login()
s2.login()
class Jquery {
    constructor(selector) {
        let slice = Array.prototype.slice
        let dom = slice.call(document.querySelectorAll(selector))
        let len = dom ? dom.length : 0
        for (let i = 0; i< len; i++){
            this[i] = dom[i]
        }
        this.length = len
        this.selector = selector
    }
    addClass(className) {
        //
        if(this.length) {
            if(this.length === 1) {
                this[0].setAttribute('class', className)
            } else {
                
            }
        } else {
            console.log(`can not find the porperty of addClass`)
        }
        console.log(this)
    }
    append() {

    }
    //后续的N个API
}
window.$ = function(selector) {
    return new Jquery(selector)
}
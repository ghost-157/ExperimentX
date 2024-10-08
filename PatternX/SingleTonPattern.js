//!SECTION singleton pattern
class SingleTonPattern{
    #_personDetails;
    _debug;
    
    //why constructor need the return 
    //return is called the return override. we can able to over the properties and its method in using the return the instance
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor
    constructor(debug) {
        this._debug = debug
        if (!SingleTonPattern.instance) {
            SingleTonPattern.instance = this;
            this.#_personDetails = new Map();
        }
        return SingleTonPattern.instance;
    }

    static createInstance(debug){
        if(!SingleTonPattern.instance){
            SingleTonPattern.instance = new SingleTonPattern(debug)
        }
        return SingleTonPattern.instance
    }

    addPersonDetails(personName, personAge){
        this._debug.debugInfo('add person details called')
        this.#_personDetails.set(personName, personAge)
    }

    showAllPersonDetails(){
        for(var [key, value] of this.#_personDetails){
            console.info(`$$$ Person name: ${key}, age: ${value} $$$`)
        }
    }
    
}
module.exports = SingleTonPattern

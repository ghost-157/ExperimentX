//!SECTION FactoryPattern pattern
class CarFactoryPattern{
    static getCar(carsType){
      switch(carsType.toLowerCase()){
        case 'suv':
            return new SUV()
        case 'sedan':
            return new Sedan()
        default:
            console.error('you requested car model is not avaiable!')
      }  
    }
}

class SUV{
    constructor(){
        console.info('suv car is created')
    }
}

class Sedan{
    constructor(){
        console.info('sedan car is created')
    }
}

module.exports = CarFactoryPattern


//abstract class
class Varient{
    getCarVarient(){}
}

//factory class
class CarAFPattern{
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

class SUV extends Varient{
    constructor(){
        super()
        console.info('suv car is created')
    }
    getCarVarient(){
        console.info('we have both diesel and petrol varient along with 5,7 and 9 seaters.')
    }
}

class Sedan extends Varient{
    constructor(){
        super()
        console.info('sedan car is created')
    }
    getCarVarient(){
        console.info('we have only the petrol varient along with 5 seaters.')
    }
}


module.exports = CarAFPattern
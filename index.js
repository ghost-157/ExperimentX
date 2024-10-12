const debug = require('./debug')
const {SingleTonPatternX: pattern, FactoryPatternX, AbstractFactoryPatternX } = require('./PatternX')

debug.debugInfo('applications start')
//!SECTION singleton pattern
//#region singleTon example code 
// const pattern2 = require('./test')

// pattern2.addPersonDetails('batman', '25')

// debug.debugInfo('first time trying to create the instance for the class')

// const patternInstance = pattern.createInstance(debug)

// patternInstance.addPersonDetails('Mano', '25')

// const patternInstance1 = pattern.createInstance(debug)

// patternInstance1.addPersonDetails('ghost', '25')

// //creating the straight instance
// const patterns = new pattern(debug)

// patterns.addPersonDetails('ghost157', '25')

// const patterns1 = new pattern(debug)

// patterns1.addPersonDetails('ghost2502', '25')

// patterns.showAllPersonDetails()
//#endregion
//!SECTION factory pattern
//#region factory pattern example start here
// FactoryPatternX.getCar('SUV')
// FactoryPatternX.getCar('Sedan')
// FactoryPatternX.getCar('Pickup truck')


//#endregion factory pattern completed
//!SECTION abstract factory pattern
//#region abstract factory pattern example start here
// const SUV = AbstractFactoryPatternX.getCar('SUV')
// SUV.getCarVarient()
//#endregion end here

debug.debugInfo('applications end')
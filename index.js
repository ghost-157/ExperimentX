const debug = require('./debug')
const pattern = require('./PatternX')

const pattern2 = require('./test')

pattern2.addPersonDetails('batman', '25')

debug.debugInfo('applications start')
//#region singleTon example code 
debug.debugInfo('first time trying to create the instance for the class')

const patternInstance = pattern.createInstance(debug)

patternInstance.addPersonDetails('Mano', '25')

const patternInstance1 = pattern.createInstance(debug)

patternInstance1.addPersonDetails('ghost', '25')

//creating the straight instance
const patterns = new pattern(debug)

patterns.addPersonDetails('ghost157', '25')

const patterns1 = new pattern(debug)

patterns1.addPersonDetails('ghost2502', '25')

patterns.showAllPersonDetails()
//#endregion


debug.debugInfo('applications end')
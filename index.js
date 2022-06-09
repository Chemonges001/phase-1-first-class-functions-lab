// Code your solution in this file!

const returnFirstTwoDrivers = function (drivers){
    return drivers.slice (0,2)
}
const returnLastTwoDrivers = function (drivers){
    return drivers.slice (-2)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(){
    const fareMultiplier = createFareMultiplier;
    return function(value){ 
        return fareMultiplier*value

    }
}
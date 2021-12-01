const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
const firstTwoDrivers = drivers.slice(0, 2);
const lastTwoDrivers = drivers.slice(-2);

const returnFirstTwoDrivers = function(){
    return firstTwoDrivers;
}

const returnLastTwoDrivers = function(){
    return lastTwoDrivers;
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare, multiplier1){
    return function(multiplier1){
        let fareMultiplier = fare*multiplier1;
        return fareMultiplier;
    }
}   

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, cb){
    return cb(drivers);
 }


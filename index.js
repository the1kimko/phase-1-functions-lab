// Code your solution in this file!
function distanceFromHqInBlocks(location) {
    const hq = 42;

    return Math.abs(location - hq);
}

function distanceFromHqInFeet(location) {
    const blockFeet = 264;
    
    return distanceFromHqInBlocks(location) * blockFeet;
}

function distanceTravelledInFeet(start, finish) {
    const passengerTravel = Math.abs(start - finish);
    const blockFeet = 264;

    return passengerTravel * blockFeet;
}

function calculatesFarePrice(start, finish) {
   const distance = distanceTravelledInFeet(start, finish);
   
   if (distance < 400) {
    return 0;
   } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
   } else if (distance > 2000 && distance <= 2500) {
    return 25;
   } else {
    return 'cannot travel that far';
   }
}
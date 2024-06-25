// Code your solution in this file!

function distanceFromHqInBlocks(pickup){
    const hq = 42

    if (pickup > hq){        
        return pickup - hq;                
    } else {
        return hq - pickup;             
    }    
}

function distanceFromHqInFeet(distance){
    return distanceFromHqInBlocks(distance) * 264;
}

function distanceTravelledInFeet(start, destination){    
    if (destination > start){
        return (destination - start) * 264;
    } else {
        return (start - destination) * 264;
    }
}

function calculatesFarePrice(start, destination){

    const distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400){
        return 0;
    } else if (distance <= 2000){
        return (distance - 400 )* 2 / 100;
    } else if (distance > 2000 && distance < 2500){
        return 25;
    } else {
        return 'cannot travel that far';
    }
}


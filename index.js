// Code your solution in this file!
function distanceFromHqInBlocks(somevalue) {
  if (somevalue > 42) {
    return somevalue - 42;
  } else {
    return 42-somevalue

  }
}

function distanceFromHqInFeet(somevalue) {

    return distanceFromHqInBlocks(somevalue) * 264
  }

function distanceTravelledInFeet(start, destination) {

  if (start > destination) {
    return (start - destination) * 264
  } else {
    return (destination - start)*264
  }
}

function calculatesFarePrice(start, destination) {
    let feet = distanceTravelledInFeet(start, destination);
    if(feet<400){
        return 0;
    }
    if(feet>400 && feet<2000){
        return (feet-400)*0.02
    }
    if(feet>2000 && feet<2500){
        return 25;
    }
    if(feet>2500){
        return "cannot travel that far";
    }
  }

// Code your solution in this file!
const headquartersLocation = 42;
function distanceFromHqInBlocks(pickUpLocation) {
  if (pickUpLocation >= headquartersLocation) {
    return pickUpLocation - headquartersLocation;
  } else {
    return headquartersLocation - pickUpLocation;
  }
}
function distanceFromHqInFeet(pickUpLocation) {
  const distanceInBlocks = distanceFromHqInBlocks(pickUpLocation);
  return distanceInBlocks * 264;
}
function distanceTravelledInFeet(headquartersLocation, pickUpLocation) {
    distanceTravelledInFeet = Math.abs(pickUpLocation - headquartersLocation)  * 264;
    return distanceTravelledInFeet;
}
function calculatesFarePrice(start, destination) {
  const feetPerBlock = 264;
  const distanceInFeet = Math.abs(destination - start) * feetPerBlock;

  if (distanceInFeet <= 400) {
    return 0;
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    return (distanceInFeet - 400) * 0.02;
  } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}

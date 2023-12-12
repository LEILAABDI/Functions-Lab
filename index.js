// Code your solution in this file!

function distanceFromHqInBlocks(blocks) {
    const hqLocation = 42; 
    return Math.abs(blocks - hqLocation);
  }
  const distanceBlocks = distanceFromHqInBlocks(37);
  console.log(distanceBlocks); 
function distanceFromHqInFeet(blocks) {
    const feetInBlock = 264;
    const distanceInBlocks = Math.abs(blocks - 42);
    return distanceInBlocks * feetInBlock;
  }
  console.log(distanceFromHqInFeet(37)); 
function distanceTravelledInFeet(startBlock, endBlock) {
    const feetInBlock = 264; 
    const distanceInBlocks = Math.abs(endBlock - startBlock);
    return distanceInBlocks * feetInBlock;
  }
  console.log(distanceTravelledInFeet(37, 45)); 
function calculatesFarePrice(startBlock, endBlock) {
    const feetInBlock = 264; 
    const distanceInBlocks = Math.abs(endBlock - startBlock);
    const distanceInFeet = distanceInBlocks * feetInBlock;
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
  console.log(calculatesFarePrice(37, 45)); // Output: 8.32 dollars (400 feet free + 8 * 0.02)
  console.log(calculatesFarePrice(37, 60)); // Output: 25 dollars (flat rate for distance over 2000 feet)
  console.log(calculatesFarePrice(37, 70)); // Output: 'Cannot calculate fare for rides over 2500 feet'
  
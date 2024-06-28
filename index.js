// Code your solution in this file!

// MY Constants
const hqLocation = 42;
const blockLengthInFeet = 264;

function distanceFromHqInBlocks(block) {
  return Math.abs(block - hqLocation);
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * blockLengthInFeet;
}


function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * blockLengthInFeet;
}

function calculatesFarePrice(start, destination) {
  const distanceInFeet = distanceTravelledInFeet(start, destination);

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
            //   first attempt  (kindly provide me with feedback why my methods below all failed)
/*function distanceFromHqInBlocks( blocks) {
   returns the number of blocks given a value
   const hq = 42;
   return Math.abs(blocks - hq);
 }
 function distanceFromHqInFeet(blocks) { 
   call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
   distanceFromHqInBlocks(blocks);
  
   passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
   const blockInFeet = 264;
   the return value of distanceFromHqInBlocks can then be used to calculate feet
   return distanceFromHqInBlocks(blocks) * blockInFeet;
   function distanceFromHqInFeet(blocks) {
      const blockInFeet = 264;
      return distanceFromHqInBlocks(blocks) * blockInFeet;
    }

 }

 function distanceTravelledInFeet(start, destination) {
   returns the number of feet traveled
   function distanceTravelledInFeet(start, destination) {
      const blockInFeet = 264;
      return Math.abs(destination - start) * blockInFeet;
    }
 }
*/


//  function calculatesFarePrice(start, destination) {
//    //returns the fare for the customer
//    const distanceInFeet = distanceTravelledInFeet(start, destination);

   // if (distanceInFeet <= 400) {
   //    return 0;
//    }
//    else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
//       return (distanceInFeet - 400) * 0.02;}
//       else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
//          return 25;}
//          else {
//             return 'cannot travel that far';
//           }  
// }
/*const start =34;
const destination =28;
function calculatesFarePrice(start, destination) {
   const totalFeet = distanceTravelledInFeet(start, destination);
 
   if (totalFeet <= 400) {
     return 0;
   } else if (totalFeet > 400 && totalFeet <= 2000) {
     return (totalFeet - 400) * 0.02;
   } else if (totalFeet > 2000) {
     return 25;
   }
 }*/


let fuelReady = false; // New variable to store fuel readiness
let crewAndComputerReady = false; // New variable to store crew and computer readiness

let fuelLevel = 27000;
let crewStatus = true;
let computerStatus = 'green';

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   fuelReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   fuelReady = false;
}
console.log("fuelReady = ", fuelReady);

if (crewStatus && computerStatus === 'green'){
   console.log('Crew & computer cleared.');
   crewAndComputerReady = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   crewAndComputerReady = false;
}
console.log("crewAndComputerReady = ", crewAndComputerReady);

// Now, we can determine launch readiness based on fuel and crew & computer readiness separately
let launchReady = fuelReady && crewAndComputerReady;
console.log("launchReady = ", launchReady);
if (launchReady) {
   console.log('10, 9, 8, 7, 6, 5, 4, 3, 2, 1...');
   console.log('Liftoff!');
} else {
   console.log('Launch scrubbed.');
}
let engineIndicatorLight = 'Not red blinking';
let fuelLevel = 21000;
let engineTemperature = 1200;
let commandOverride = true;

if (fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight === 'red blinking') {
  console.log("ENGINE FAILURE IMMINENT!");
}

else if (fuelLevel <= 5000 && engineTemperature > 2500) {
  console.log("Check fuel level. Engines running hot.");
}
else if (fuelLevel > 20000 && engineTemperature <= 2500) {
  console.log("Full tank. Engines good.");
}
else if (fuelLevel > 10000 && engineTemperature <= 2500) {
  console.log("Fuel level above 50%. Engines good.");
}

else if (fuelLevel > 5000 && engineTemperature <= 2500) {
  console.log("Fuel level above 25%. Engines good.");
}
else {
  console.log("Fuel and engine status pending...");
}

console.log("-------------------------------------------------------");
  

if (commandOverride === false) {
    console.log("shuttle should only launch if the fuel and engine check or ok");
  }
  
  else {
    console.log("shuttle will launch regardless of the fuel and engine status.");
  }

  console.log("----------------------------------------------------");
  
  if (fuelLevel > 20000 && engineIndicatorLight !== 'red blinking' || commandOverride === true) {
    console.log("cleared to launch");
  }
  else {
    console.log("launch scrubbed");
  }
  
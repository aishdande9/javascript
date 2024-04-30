let engineIndicatorLight = "red blinking";
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 200;
let shuttleSpeed = 15000;


if (engineIndicatorLight === "green") {
    console.log("engines have started");
  } else if (engineIndicatorLight === "green blinking") {
    console.log("engines are preparing to start");
  } else {
    console.log("engines are off");
  } 
console.log("-------------------------------------------------------------------------");
  
if (crewStatus) {
    console.log("crew Ready");
  }
  else {
    console.log("Crew Not Ready");
  }
  console.log("-------------------------------------------------------------------------");

  
  if (computerStatusCode === 200) {
    console.log("Please stand by. Computer is rebooting.");
  }
  else if (computerStatusCode === 400) {
    console.log("Success! Computer online.");
  }
  else {
    console.log("ALERT: Computer offline!");
  }
  console.log("-------------------------------------------------------------------------");

  if (shuttleSpeed > 17500) {
    console.log("ALERT: Escape velocity reached!");
  }
  else if (shuttleSpeed < 8000) {
    console.log("ALERT: Cannot maintain orbit!");
  }
  else 
  {
    console.log("Stable speed");
  }
  console.log("-------------------------------------------------------------------------");

  if (crewStatus && computerStatusCode === 200 && spaceSuitsOn)
  
  {
    console.log("all systems go");
  } else {
    console.log("WARNING. Not ready");
  }
  

  console.log("-------------------------------------------------------------------------");
 
 
  if (!crewStatus | computerStatusCode !== 200 | !spaceSuitsOn) {
    console.log("WARNING. Not ready");
  } else {
    console.log("all systems go");
  }
  console.log("-------------------------------------------------------------------------");
  
  console.log("Yes");    
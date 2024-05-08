const date	="Monday 2019-03-18";
const time	="10:05:34 AM";
const astronautCount	= 7;
const astronautStatus = 	"ready";
const averageAstronautMassKg	= 80.7;
const crewMassKg	= astronautCount * averageAstronautMassKg;
const fuelMassKg	= 760000;
const shuttleMassKg	= 74842.31;
const totalMassKg	= crewMassKg + fuelMassKg + shuttleMassKg;
const maximumMassLimit	= 850000;
const fuelTempCelsius = 	-225;
const minimumFuelTemp= 	-300;
const maximumFuelTemp=	-150;
const fuelLevel	= 100;
const weatherStatus	= "clear";
const preparedForLiftOff = 	true;
// if astronautCount is no greater than 7
// if astronautStatus is ready
// if the totalMassKg is less than the maximumMassLimit of 85000
// if the fuelTempCelsius is no less than -300 OR no greater than -150
// if fuelLevel is at 100%
// if weatherStatus is clear

if(!astronautCount<7){
   
    if(astronautStatus === "ready"){
        
        if(totalMassKg<maximumMassLimit){
          
            if(!(fuelTempCelsius<-300)||(fuelTempCelsius>-150)){
                
                if(fuelLevel===100){
                   
                    if(weatherStatus==="clear"){
                        console.log("All Systems are a go! Intializing space shuttle launch sequence..")
                    }
                }

            }
        }

    }
}
console.log("------------------------------------------------------------------------");
// date
// time
// astronautCount
// crewMassKg
// fuelMassKg
// shuttleMassKg
// totalMasskg
// fuelTempCelsius
// weatherStatus
// Wish your astronauts a safe flight!

console.log("Date :"+" "+date);
console.log("Time :"+" "+time);
console.log("AstronautCount :"+" "+astronautCount);
console.log("crewMassKg :"+" "+crewMassKg);
console.log("fuelMassKg :"+" "+fuelMassKg);
console.log("shuttleMassKg :"+" "+shuttleMassKg);
console.log("totalMasskg :"+" "+totalMassKg);
console.log("fuelTempCelsius :"+" "+fuelTempCelsius+"°c");
console.log("weatherStatus :"+" "+weatherStatus);

console.log("-----------------------------------------------------------------------------");
console.log("Have a safe flight Astronauts...!!!!")






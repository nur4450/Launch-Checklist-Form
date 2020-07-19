// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
window.addEventListener('load', function(){
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(json){
      const missionTarget = document.getElementById("missionTarget");
      let randomNum = Math.floor(Math.random() * json.length);
      missionTarget.innerHTML = `
      <h2>Mission Destination</h2>
      <ol>
        <li>Name: ${json[randomNum].name}</li>
        <li>Diameter: ${json[randomNum].diameter}</li>
        <li>Star: ${json[randomNum].star}</li>
        <li>Distance from Earth: ${json[randomNum].distance}</li>
        <li>Number of Moons: ${json[randomNum].moons}</li>
      </ol>
      <img src="${json[randomNum].image}">
`;
});
});
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let CoPilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");
      let launchStatus = document.getElementById("launchStatus");
      let div = document.getElementById("faultyItems");
      let letters = /^[A-Za-z]+$/;
      let numbers = /^[0-9]+$/;
      let form = document.querySelector("form");
      let button= document.getElementById("formSubmit");
      
        
            button.addEventListener("click", function(){
      
            if (pilotNameInput.value === "" ||  CoPilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "" ) {
               alert("All fields are required!");
               event.preventDefault();
            }else if(!pilotNameInput.value.match(letters) || !CoPilotNameInput.value.match(letters) || !fuelLevelInput.value.match(numbers) || !cargoMassInput.value.match(numbers)){
               alert("Make sure to enter valid information for each field!")
               event.preventDefault();
            }else{
               div.style.visibility = "visible";
               let pilotName = pilotNameInput.value[0].toUpperCase() + pilotNameInput.value.slice(1,pilotNameInput.value.length);
               let coPilotName = CoPilotNameInput.value[0].toUpperCase() + CoPilotNameInput.value.slice(1,CoPilotNameInput.value.length);
               pilotStatus.innerHTML = `Pilot ${pilotName} is ready for launch`;
               copilotStatus.innerHTML = `Co-Pilot ${coPilotName} is ready for launch`;
               launchStatus.innerHTML = "Shuttle Not Ready For Launch";
               launchStatus.style.color = "red";
            }
   
            
         
            if(cargoMassInput.value < 10000 && fuelLevelInput.value > 10000){
               fuelStatus.innerHTML = "Fuel level high enough for launch";
               cargoStatus.innerHTML = "Cargo mass low enough for launch";
               launchStatus.innerHTML = "Shuttle is ready for launch";
               launchStatus.style.color = "green";
               event.preventDefault();
           }else if(fuelLevelInput.value < 10000 && cargoMassInput.value < 10000){
               fuelStatus.innerHTML = "Fuel level too low for launch";
               cargoStatus.innerHTML = "Cargo mass low enough for launch";
           event.preventDefault();
           }else if(fuelLevelInput.value < 10000 && cargoMassInput.value > 10000){
            fuelStatus.innerHTML = "Fuel level too low for launch";
            cargoStatus.innerHTML = "Cargo mass too much for launch";
           event.preventDefault();
           }else if(fuelLevelInput.value > 10000 && cargoMassInput.value > 10000 ){
              fuelStatus.innerHTML = "Fuel level high enough for launch";
              cargoStatus.innerHTML = "Cargo mass too much for launch";
              event.preventDefault();
           }else if(fuelLevelInput.value > 10000 && cargoMassInput.value < 10000 ){
            fuelStatus.innerHTML = "Fuel level high enough for launch";
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
            event.preventDefault();
           }
        
      });
   });


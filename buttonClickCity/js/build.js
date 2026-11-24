//console log just to test that your JS is linked properly
console.log("JS is linked");

//create a variable for the number of buildings in the city and start it at zero
let numBuilding= 0;

//send a message to the page to inform the user of how many buildings there are in their city. This will happen right away when the page loads
document.getElementById("city").innerHTML = "You now have" + numBuilding + "building in your city!";

//Think of this as a group of instructions that will always run together
//Create a function that will run when the first button is clicked
//This gets trigger by the submit button in the form. This trigger is known as an EVENT! (Button click event)
//It will:
//-- Print a message to teh console
//--Add one to the variable that is tracking the number of buildings
//---Print a message with the number of buildings
//---Place an image graphic into the other div
function addBuilding1(event) {
  event.preventDefault();  
  console.log("We are in the fucntion Buildone"); 
  
  numBuilding = numBuilding + 1;

  document.getElementById('city').innerHTML += "You now have" + numBuilding + " buildings in your city!";

  //add an image into a div
  document.getElementById('cityGraphic').innerHTML += '<img src="images/BuildingBlock1.png" alt="Building one" style=width:30%">';
}

//Create a function for the second button that prints a message with the number of buildings and the graphic for the second building
function addBuilding2(event) {
    event.preventDefault();
  console.log("fucntion Buildtwo"); 
  
  numBuilding = numBuilding + 1;

  document.getElementById('city').innerHTML = "You now have" + numBuilding + " buildings in your city!";

  //add an image into a div
  document.getElementById('cityGraphic').innerHTML += '<img src="images/BuildingBlock2.png" alt="Building two">';
}

//Create a function for the third button that prints a message with the number of buildings and the graphic for the second building
function addBuilding3(event) {
  event.preventDefault();
  console.log("We are in the fucntion Buildthree"); 

  numBuilding = numBuilding + 1;


  document.getElementById('city').innerHTML += "You now have" + numBuilding + " buildings in your city!";

  //add an image into a div
  document.getElementById('cityGraphic').innerHTML += "<img src='images/BuildingBlock3.png' alt='Building three'>";
}

//Create a function for the fourth button that prints a message with the number of buildings and the graphic for the second building
function addBuilding4(event) {
  event.preventDefault();
  console.log("We are in the fucntion Buildfour"); 

  numBuilding = numBuilding + 1;


  document.getElementById('city').innerHTML += "You now have" + numBuilding + " buildings in your city!";

  //add an image into a div
  document.getElementById('cityGraphic').innerHTML += "<img src='images/BuildingBlock4.png' alt='Building three'>";
}

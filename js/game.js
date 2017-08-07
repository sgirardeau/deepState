import Actor from ./actor.js;
import Event from ./event.js;

import actorExamples from ./actor.js;
import eventExamples from ./event.js;


var roll = function(sides){
  return Math.round(Math.random() * sides);
}

var player = {
  agents: [],
  enemies: [],
  places: [],
  events: [] //added events variable so we dont need another object just for it
  assets: {
    money: [0,0],
    influence: {
      usa: 0,
      mex: 0,
      drug: 0
    },
    drugs: {
      cocaine: 0,
      marijuana: 0,
      heroin: 0,
      mdma: 0,
      meth: 0
    }
  },
  score: 0
}





console.log('☠ Deep State ☠'); //lets use skulls as much as possible ☠☠☠☠☠☠☠

//copied into game loop
// function listDirections(){
//     console.log('What will you do?\n Actors: 1    Events: 2   Quit Forever: 3');
// }

//list all events
function listEvents(){
  console.API.clear()
  console.log('Current events: (0 to go back)');
  player.events.forEach((e,i)=>{
    console.log((i+1) + ": " + e.title);
  });
}
//list all actors
function listActors(){
  console.API.clear()
  console.log('Available actors: (0 to go back)');
  player.events.forEach((e,i)=>{
    console.log((i+1) + ": " + e.name);

  });
}

//selectEvent and selectActor can be merged eventually

//event menu
function selectEvent(){
  var selection, input;
  var eContinue = true;

  listEvents();
  eInput = raw_input();

  if (eInput.parseInt() === 0){
    eContinue = false;
  } else
  if eInput.parseInt() > 1 && eInput.parseInt() <= player.events - 1){
    //run selection
  } else
  if eInput.parseInt() === NaN) {
    //error, select valid number
    console.log("Invalid input, press enter to continue");
    raw_input();
  }

}
//actor menu
function selectActor(){
  var selection, input
  var aContinue = true;

  listActors();
  while (aContinue === true){
    aInput = raw_input();

    if (aInput.parseInt() === 0){
      aContinue = false;
    } else
    if (aInput.parseInt() > 1 && aInput.parseInt() <= player.actors - 1){
      //run selection

    } else
    if (aInput.parseInt() === NaN) {
      //error, select valid number
      console.log("Invalid input, press enter to continue");
      raw_input();
    }
  }
}





//main game loop alpha

//create basic variables
  //roll initial characters
  //roll first mission
var gContinue = true;
while(gContinue){
  var input;
  console.API.clear()
  console.log('What will you do?\n Actors: 1    Events: 2   Quit Forever: 3');
  input = raw_input();

  if (input.parseInt() === 1){
    listActors();
    selectActor();
  } else
  if (input.parseInt() === 2){
    selectEvent();
  } else
  if (input.parseInt() === 3){
    gContinue = false;
  }
  else{
   console.API.clear()
    console.log('Enter a valid command');
    listDirections();
  }
}

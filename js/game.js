// import Actor from './actor.js';
// import Event from './event.js';
//
// import actorExamples from ./actor.js;
// import eventExamples from ./event.js;

var roll = function(sides){
  return Math.round(Math.random() * sides);
};

var player = {
  agents: [],
  enemies: [],
  places: [],
  events: [], //added events variable so we dont need another object just for it
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
};

console.log('☠ Deep State ☠'); //lets use skulls as much as possible ☠☠☠☠☠☠☠

//copied into game loop
// function listDirections(){
//     console.log('What will you do?\n Actors: 1    Events: 2   Quit Forever: 3');
// }

//list all events
function listEvents(){
  console.clear();
  console.log('Current events: (0 to go back)');
  player.events.forEach((e,i)=>{
    console.log((i+1) + ": " + e.title);
  });
}
//list all actors
function listActors(){
  console.clear()
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
  eInput = parseInt(raw_input());

  if (eInput === 0){
    eContinue = false;
  } else
  if (eInput > 1 && eInput <= player.events - 1){
    //run selection
    console.log(player.events[eInput]);
  } else
  if (eInput === NaN) {
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
    aInput = parseInt(raw_input());

    if (aInput.parseInt() === 0){
      aContinue = false;
    } else
    if (aInput.parseInt() > 1 && aInput <= player.actors - 1){
      //run selection
      console.log(player.actors[aInput]);
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
  console.clear();
  console.log('What will you do?\n Actors: 1    Events: 2   Quit Forever: 3');
  input = readline(); //uh oh

  if (parseInt(input) === 1){
    listActors();
    selectActor();
  } else
  if (parseInt(input) === 2){
    selectEvent();
  } else
  if (parseInt(input) === 3){
    gContinue = false;
  }
  else{
   console.clear();
    console.log('Enter a valid command');
    listDirections();
  }
}

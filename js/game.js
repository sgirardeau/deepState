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

function listDirections(){
    console.log('What will you do?\n Actors: 1    Events: 2   Quit Forever: 3');
}
function listEvents(){
   console.API.clear()
  console.log('Current events: (0 to go back)');
  player.events.forEach((e,i)=>{
    console.log((i+1) + ": " + e.title);
  });
}

function listActors(){
 console.API.clear()
  console.log('Available actors: (0 to go back)');
  player.events.forEach((e,i)=>{
    console.log((i+1) + ": " + e.name);

  });
}

function selectEvent(){
  var selection, input;
  eInput = raw_input();

  if (eInput.parseInt() === 0){
    //go back
  } else
  if eInput.parseInt() > 1 && eInput.parseInt() <= player.events - 1){
    //run selection
  } else
  if eInput.parseInt() === NaN) {
    //error, select valid number
  }

}

function selectActor(){
  var selection, input;
  aInput = raw_input();

  if (aInput.parseInt() === 0){
    //go back
  } else
  if (aInput.parseInt() > 1 && aInput.parseInt() <= player.actors - 1){
    //run selection
  } else
  if (aInput.parseInt() === NaN) {
    //error, select valid number
  }

}





//main game loop alpha

//create basic variables
  //roll initial characters
  //roll first mission
var gContinue = true;
while(gContinue){
  var input;

  input = raw_input();

  if (input.parseInt() === 1){
    listActors();
    selectActor();
  } else
  if (input.parseInt() === 2){
    listEvents();
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

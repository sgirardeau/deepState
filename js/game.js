var roll = function(sides){
  return Math.round(Math.random() * sides);
}

var player = {
  agents: [],
  enemies: [],
  places: [],
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

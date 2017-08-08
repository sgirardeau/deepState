//Actor Class - The basic stub class from which all specalized classes are built.
class Actor {
  constructor(first, last, age, gender, race, nat) {
    this.first = first;
    this.last = last;
    this.fullName = this.first + " " + this.last;
    this.age = age;
    this.gender = gender;
    this.nat = nat;
    this.atr = {
      str: 10,
      agl: 10,
      int: 10,
      per: 10,
      cha: 10,
      loy: 10
    };
    this.perks = [];
    this.actions = {
      investigate: actions.investigate,
      tail: actions.tail,
      recruit: actions.recruit
    };
  };
}

class Thug extends Actor {
  constructor(first, last, age, gender, race , nat) {
    super(first, last, age, gender, nat);
    super.fullName;
    super.atr;
    super.perks;
    super.actions;
    this.actions.kill = actions.kill;
    this.actions.extort = actions.extort;
  };
}

class businessMan extends Actor {
  constructor(first, last, age, gender, race, nat) {
    super(first, last, age, gender, race, nat);
    super.fullName;
    super.atr;
    super.perks;
    super.actions;
    this.actions.launder = actions.launder;
  }
}

var actions = {
  investigate: function(atk, def) {
    console.log(atk.first + " investigates " + def.first + ".");
    let atkChance = (atk.atr.int * roll(20));
    let defChance = (def.atr.per * roll(20));
    if(atkChance > defChance){
      return true;
    }
    return false;
  },
  tail: function (atk, def) {
    return true;
  },
  recruit: function(atk, def) {
    return true;
  },
  kill: function(atk, def) {
    return true;
  },
  extort: function(atk, def) {
    return true;
  },
  launder: function(atk) {
    return true;
  },
}
//Still looking for how to implement perks. MOAR TO CUM.


//Some test characters

var scott = new Actor('Scott', 'Knox', 27, true, 'white', 'usa');
var steve = new Actor('Steve', 'Wilcox', 30, true, 'black', 'usa');
var ralph = new Thug('Ralph', 'Biggums', 35, true, 'white', 'usa');
var james = new Thug('James', 'Marion', 29, true, 'white', 'usa');

let examples = [scott,steve,ralph,james];

// module.exports =
export Actor as Actor;
//export examples as actorExamples;

//Actor Class
class Actor {
  constructor(first, last, age, gender, race, nat) {
    this.name = [first,last];
    this.fullName = this.name[0] + " " + this.name[1];
    this.age = age;
    this.gender = gender;
    this.loyality: 0;
    this.atr = {
      atk: 10,
      def: 10,
      int: 10,
      per: 10,
      cha: 10,
      tec: 5
    };
    this.perks = [];
    this.actions = [actions.investigate, actions.kill];
  }
}

class Thug extends Actor {
  constructor(first, last, age, gender, race , nat) {
    this.actions = [investigate, tail, layLow, extort, kill];
  }
}


var playerStats = {
  agents: [jose, mark];
  enemies: [hector, hank];

}

var actions = {
  investigate: function(atk, def) {
    let atkChance = (atk.modifiers * roll(20));
    let defChance = (def.modifiers * roll(20));
    if(atk.chance > def.change){
      return true;
    }
    else {
      return false;
    }
  }
  kill: function(atk, def) {
    var atkChance =
    if(atkChance > def.chance){}
  }
}

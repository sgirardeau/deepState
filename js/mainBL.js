/* Data stores for things like inventory items */
var movie = {
  script: {
    tagline: [
                "I am not afraid to get my hands dirty",
                "Let's keep this professional",
                "Go ahead and forget it",
                "I wouldn't if I were you",
                "Let's get down to business",
                "Keep it short and sweet",
                "Don't make me repeat it",
                "What do you have for me"
              ],
    adverbs: [
        "wild",
        "careful",
        "trained",
        "quick",
        "expert",
        "sneaky"
      ]
  }
};

var script = {
  tagline: [
              "I am not afraid to get my hands dirty",
              "Let's keep this professional",
              "Go ahead and forget it",
              "I wouldn't if I were you",
              "Let's get down to business",
              "Keep it short and sweet",
              "Don't make me repeat it",
              "What do you have for me"
            ],
  adverbs: [
      "wild",
      "careful",
      "trained",
      "quick",
      "expert",
      "sneaky"
    ]
};

/*Weapon schema is as follows: array consisting of weapon damage and then an
attack verb */
var weaponList = {
  fist: [1,'swing'],
  pistol: [10,'shot'],
  rifle: [14,'shot'],
  hammer: [5, 'swing']
};

/* Helper Functions -- in the global for now */
var action = {
  roll: function(m){
    return Math.floor(Math.random() * m);
  },
  attack: function(atk, def){
    var dmg = 0,
        atkChance = (atk.atr.atk * action.roll(10)),
        defChance = (def.atr.def * action.roll(10)),
        msg = '';
    /*This calculates if the atk lands or not */
    if(atkChance > defChance){
      dmg = (atkChance -defChance) * atk.weapon[0];
    }
    /*Checks for any dmg applied by the attack */
    if(dmg > 0){
      def.hp -= dmg;
      msg = atk.name[0] + " takes a " + script.adverbs[action.roll(script.adverbs.length)] + " " + atk.weapon[1] + " at " + def.name[0] + ". The attack hits for " + dmg + " damage";
    }
    else {
      msg = atk.name[0] + " takes a " + script.adverbs[action.roll(script.adverbs.length)] + " " + atk.weapon[1] + " at " + def.name[0] + ". The attack misses.";
    }

    return msg;
  },
  combat: function(atk,def){
    while(atk.hp > 0 && def.hp > 0){
      action.attack(atk,def);
    }
  },
  feed: function(msg){
    $('.terminal').append(msg);
  }
};


class Actor {
  constructor(first, last, age, gender, race, nat) {
    this.name = [first,last];
    this.fullName = this.name[0] + " " + this.name[1];
    this.age = age;
    this.gender = gender;
    this.atr = {
      atk: 10,
      def: 10,
      int: 10,
      per: 10,
      cha: 10,
      tec: 5
    };
    this.weapon = weaponList.fist;
    this.hp = 1000;
  }
  greeting() {
    action.feed("Hello, my name is " + this.fullName + ". " + script.tagline[action.roll(script.tagline.length)] + ".");
  }
}

//Test Character
var char = new Actor('Mike', 'Jones', 37, true, 1, 'USA');
var e1 = new Actor('Jim', 'Holloway', 24, true, 1, 'USA');

action.attack(char,e1);

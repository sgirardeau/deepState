  var game = {
    script: {
      tagline: ["I am not afraid to get my hands dirty",
                "Let's keep this professional",
                "Go ahead and forget it",
                "I wouldn't if I were you",
                "Let's get down to business",
                "Keep it short and sweet",
                "Don't make me repeat it",
                "What do you have for me"
              ],
      adverbs: ["wild",
                "careful",
                "trained",
                "quick",
                "expert",
                "sneaky"
               ]
    },
    items: {
      weaponList: {
        fist: [1,'swing'],
        pistol: [10,'shot'],
        rifle: [14,'shot'],
        hammer: [5, 'swing']
      },
      clothing: {
        tshirt: [5],
        pants: [4]
      }
    },
    action: {
      roll: function(m){
        return Math.floor((Math.random() * m) + 1);
      },
      attack: function(atk,def){
        let msg = '',
            atkTest = (atk.stat.atk) * game.action.roll(10),
            defTest = (def.stat.def) * game.action.roll(11);
        if(atkTest > defTest){
          def.hp -= (atkTest - defTest) * atk.weapon[0];
          msg = msg = atk.name[0] + " takes a " + game.script.adverbs[game.action.roll(game.script.adverbs.length)] + " " + atk.weapon[1] + " at " + def.name[0] + ".";
        }
        else {
          msg = atk.name[0] + " takes a " + game.script.adverbs[game.action.roll(game.script.adverbs.length)] + " " + atk.weapon[1] + " at " + def.name[0] + ". The attack misses.";
        }
        $('.terminal').append(msg + "\n");
      }
    }
  };

  class Actor {
    constructor(first, last, age, gender, race, nat) {
      this.name = [first,last];
      this.fullName = this.name[0] + " " + this.name[1];
      this.age = age;
      this.gender = gender;
      this.stat = {
        atk: 10,
        def: 10,
        int: 10,
        per: 10,
        cha: 10,
        tec: 5
      };
      this.weapon = game.items.weaponList.fist;
      this.hp = 1000;
    }
    greeting() {
      console.log("Hello, my name is " + this.fullName + ". " + game.script.tagline[game.action.roll(game.script.tagline.length)] + ".");
    }
  }

  //Test Character
  var char = new Actor('Mike', 'Jones', 37, true, 1, 'USA');
  var e1 = new Actor('Jim', 'Holloway', 24, true, 1, 'USA');

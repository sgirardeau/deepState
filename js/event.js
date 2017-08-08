class Event{
  constructor(title, description, time, success, failure, risk, threshold, reqStats, reqPeople, skillReqs, costs){
    this.title = title;
    this.description = description;
    this.time = time;
    this.success = success;
    this.failure = failure;
    this.risk = risk;
    this.threshold = threshold;
    this.reqStats = reqStats;
    this.reqPeople = reqPeople;
    this.skillReqs = skillReqs;
    this.costs = costs;
  }
}
//variables are placeholders
var killDude = new Event('Kill dude', 'Go to the east side and kill dude, he sucks.', 4, cash[100], cash[-100], 4, 300,null,kill,0);
var tailDude = new Event('Tail dude', 'Go to the west side and follow dude, he sucks.', 2, cash[5], cash[-100], 2, 300,null,tail,0);
var extortDude = new Event('Extort dude', 'Go to church and steal the colelction plate, it sucks.', 1, cash[100], cash[-100], 1, 300,null,extort,0);

export {Event, example};
//export example as exampleEvents;

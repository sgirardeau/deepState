class event{
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
var exampleEvent = new Event('Kill dude', 'Go to the east side and kill dude, he sucks.', 4, cash[100], cash[-100], 4, 300,null,kill,0);

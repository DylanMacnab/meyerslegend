console.log('meyers legend is starting');

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);

// GET Example

// T.get('search/tweets', { q: 'meyers leonard', count: 3 }, function(err, data, response) {
//   var tweets = data.statuses;
//   tweets.forEach((tweet, i) => {
//    console.log(tweet.text)
//   });
// });


// POST Example
T.post('statuses/update', { status: 'this tweet is coming to you somewhere on spaceship earth.'}, function(err, data, response) {
  console.log(data.text);
});
console.log('meyers legend is starting');

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);

// GET Example

T.get('search/tweets', { q: 'donald trump', count: 3 }, function(err, data, response) {
  var tweets = data.statuses[0].text;
  console.log(tweets)
});
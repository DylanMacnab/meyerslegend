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

/*
// POST Example //

// run the tweet it once before it runs
tweetIt();
// run this tweetIt function at this interval
setInterval(tweetIt, 1000*30);

function tweetIt() {
  var r = Math.floor(Math.random() * 100);
  var tweet = {
    status: `This is a random number: ${r}`
  }
  T.post('statuses/update', tweet, (err, data, response) => {
    if (err) {
      console.log(err);
    } else {
      console.log(tweet);
    }
  });
}
*/

// STREAM Example

// create stream
var stream = T.stream('user');

function followed(eventMsg) {
  var name = eventMsg.source.name;
  var screenName = eventMsg.source.screen_name;
  tweetIt(name, screenName);
}

function tweetIt(name, screenName) {
  var tweet = {
    status: `@${screenName} thanks for following!`
  }
  T.post('statuses/update', tweet, (err, data, response) => {
    if (err) {
      console.log(err);
    } else {
      console.log(tweet);
    }
  });
}

// anytime someone follows me -- event handler on the stream with followed callback
stream.on('follow', followed);



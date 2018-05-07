console.log('meyers legend is starting');

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);




// GET Example
/*
Simple git example showing how to search for people that tweeted "mayers leonard"
This enpoint returns 3 tweets and calls a callback function.
*/
// T.get('search/tweets', { q: 'meyers leonard', count: 3 }, function(err, data, response) {
//   var tweets = data.statuses;
//   tweets.forEach((tweet, i) => {
//    console.log(tweet.text)
//   });
// });

/*





// POST Example //
/*
Post a tweet example with a random number.
Takes post type, data, and callback function with error catching.
*/

/*
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






// STREAM Example:
/*
In this example when someone follows this account
the bot will tweet at the new follower using the
event of the on('follow') event that gets passed
via the stream. The callback function followed is
called and the tweetIt function is passed data to
reply to the new follower.
*/
/*
// create stream
var stream = T.stream('user');
// when someone follows (event handler on twitter stream with callback)
stream.on('follow', followed);

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
*/





// Reply Bot Example
/*
This example shows how to write use the tweet event to reply to a user
*/

// set twit stream user connection
var stream = T.stream('user');
// tweet event handler
stream.on('tweet', tweetEvent);

function tweetEvent(eventMsg) {
  // creates tween.json file with eventMsg data
  // var fs = require('fs');
  // var json = JSON.stringify(eventMsg , null, 2);
  // fs.writeFile("tweet.json", json);

  var replyTo = eventMsg.in_reply_to_screen_name;
  var text = eventMsg.text;
  var from = eventMsg.user.screen_name;
  // only responds if tweet was a reply to my account
  if (replyTo === 'meyers_legend') {
    var newTweet = `@${from} thank you for tweeting me!`;
    tweetIt(newTweet)
  }
}

function tweetIt(text) {
  var tweet = {
    status: text
  }
  T.post('statuses/update', tweet, (err, data, response) => {
    if (err) {
      console.log(err);
    } else {
      console.log(tweet);
    }
  });
}

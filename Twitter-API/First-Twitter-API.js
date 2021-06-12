const Twitter = require('twitter');

const client = new Twitter({
    consumer_key: 'yqFbqzlMe9tls3p1WLk2aFHLP',
    consumer_secret: 'WKp3P2sAdNLi7rnAIA8rUvPMtJ0k2Gkob4jIko9GyNURzx31SO',
    access_token_key: '1368155511711883264-fhLdbvv4kK35oD5ZLrKzH65qwuTsoV',
    access_token_secret: 'mFLgghusrLMHQmpbyfVVtobyX2AElMlVwEmL4OkLhWRoD'
});

// var params = {screen_name: 'nodejs'};
// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//     if (!error) {
//     console.log(tweets);
//     }
// });
let status = {status:'何回目のAPIツイートですかね'};
// client.post('statuses/update', status, function(error, tweet, response){
//     if (error) console.log('error');
//     else console.log(tweet.user.description)
// });
var params = {screen_name: 'techacademy',count:1};
client.get('statuses/user_timeline', params, function(error, tweets, response){
	if(!error){		
		client.post('favorites/create', {id :tweets[0].id_str}, (error, tweets, response) =>{});
        console.log(tweets[0]);
	}else{
		console.log(error);
	}
});
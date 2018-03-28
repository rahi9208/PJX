let AWS = require('aws-sdk');
let request = require('request');
exports.handler = function (event, context, callback) {
	let proxyResponse = {
		 isBase64Encoded: false,
		statusCode: 200,
		headers: {
			
		},
		body: ''
	};
	var options = {
		url: event.queryStringParameters.url,
		headers: event.headers
	};
	request(event.queryStringParameters.url, function (error, response, body) {
		if (!error) {
			proxyResponse.statusCode = response.statusCode;
			proxyResponse.body = body;
			proxyResponse.headers = response.headers;
			callback(null, response);
		}else{
			console.log(error);
			proxyResponse.body =error;
			callback(response, null);
		}
	});
}
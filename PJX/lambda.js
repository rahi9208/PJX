let AWS = require('aws-sdk');
let request = require('request');
exports.handler = function (event, context, callback) {
	let proxyResponse = {
		statusCode: 200,
		headers: {
			"x-custom-header": "my custom header value"
		},
		body: ''
	};
	var options = {
		url: event.queryStringParameters.url,
		headers: event.headers
	};
	request(event.queryStringParameters.url, function (error, response, body) {
		proxyResponse.statusCode = response.statusCode;
		proxyResponse.body = body;
		proxyResponse.headers=response.headers;
		callback(null, response);
	});
}
var connectHandler = WebApp.connectHandlers; // get meteor-core's connect-implementation

// attach connect-style middleware for response header injection
Meteor.startup(function () {
  connectHandler.use(function (req, res, next) {
	res.setHeader("access-control-allow-origin", "*");
	res.setHeader("Access-Control-Allow-Methods","*");
	res.setHeader("Access-Control-Allow-Headers","X-Requested-With,*");
    res.setHeader('Strict-Transport-Security', 'max-age=2592000; includeSubDomains'); // 2592000s / 30 days
	console.log(req.method +  '       ' + req.url)
	var resObj = getRequest(req.method,req.url)
	if(resObj){
		res.setHeader("access-control-allow-origin", "*");
		res.setHeader ('Content-Type','application/json');
		Meteor.setTimeout(function(){
			res.writeHead(resObj.status)
			
			res.end(JSON.stringify(resObj.response))
		},parseInt(resObj.delay))
	}else {
    	return next();
	}	
  })
})

function getRequest(method,api) {
	var item = RoutesDB.findOne({method:method.toLowerCase(),api:api.toLowerCase()})
	return item
}
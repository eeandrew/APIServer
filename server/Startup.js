var connectHandler = WebApp.connectHandlers; // get meteor-core's connect-implementation

// attach connect-style middleware for response header injection
Meteor.startup(function () {
  connectHandler.use(function (req, res, next) {
	res.setHeader("access-control-allow-origin", "*");
	res.setHeader("Access-Control-Allow-Methods","*");
	res.setHeader("Access-Control-Allow-Headers","Content-Type");
    res.setHeader('Strict-Transport-Security', 'max-age=2592000; includeSubDomains'); // 2592000s / 30 days
    return next();
  })
})
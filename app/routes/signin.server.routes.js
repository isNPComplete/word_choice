//file that describes routes or definition of URIs (request url and response) for the about pg
module.exports = function(app) {
	//we are requiring the aobut controller
    var signin = require('../controllers/server/signin.server.controller');
    //when use requests /about , we respond with the function about.render, which is one
    //of the module.exports function revealed in the about.server module
    app.get('/signin', signin.render);
    app.get('/signin.client.controller.js', signin.getClientController);
};
var sampleController = require("./controllers/sampleController")

module.exports = function(app,uuid){



	function isLogIn(req, resView, next) {
		// Simple Checker.

		if(true){
	  		next();
		}else{
			resView.redirect('/');
		}

	  
	}


	app.get('/', function (req, resView) {
	  	sampleController.index(resView,req)
	})


	app.get('/bloodCenter/bloodRequest',isLogIn, function (req, resView) {
		sampleController.test(resView,req,kaiseki)
	})


}
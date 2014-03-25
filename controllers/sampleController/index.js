imageBaseURL= require('../../config').imageBaseURL

exports.getPrivacy=function(resView){
	resView.render('layout.jade')
}


exports.index=function(resView,request){
	  resView.render('index',
	  	{ title : 'Home',
	    imageURL:imageBaseURL,
	    testMessage:'Hello Universe :D !'
		}
	  )
}


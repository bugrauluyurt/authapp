Template.navbar.events({
	"click .logout-btn": function(err){
		Meteor.logout(function(err){
			if (err) {
				FlashMessages.sendError(err.reason);
			} else {
				FlashMessages.sendSuccess('You are now logged out');
				Router.go('/');
			}
		});
		
	}
});
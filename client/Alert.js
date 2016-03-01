Alert = {
	showAlert: function() {
		if(Session.get('show-alert')) return
		Session.set('show-alert',true)
		Meteor.setTimeout(function(){
			Session.set('show-alert',false)
		},500)
	},
}

Template.Alert.helpers({
	showAlert : function() {
		return Session.get('show-alert') ? 'show' : '';
	}
})
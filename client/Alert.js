Alert = {
	showAlert: function(msg) {
		if(Session.get('show-alert')) return
		Session.set('show-alert',true)
		Session.set('alert-msg',msg)
		Meteor.setTimeout(function(){
			Session.set('show-alert',false)
			Session.set('alert-msg','')
		},500)
	},
}

Template.Alert.helpers({
	showAlert : function() {
		return Session.get('show-alert') ? 'show' : '';
	},
	alertMsg : function() {
		return Session.get('alert-msg')
	}
})
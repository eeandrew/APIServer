Template.InputForm.events({
	'click .form-delete' : function() {
		if(Session.get('current-active-item') !== null) {
			RoutesDB.remove({_id:Session.get('current-active-item')})
			Slide.closeSlide()
			Alert.showAlert('Success')
		}
	},
	'click  .form-add' : function() {
		var newAPI = {};
		newAPI.api = Template.instance().find('.api-input').value
		newAPI.method = Template.instance().find('.method-input').value.toLowerCase() || 'get'
		newAPI.delay = parseInt(Template.instance().find('.delay-input').value || 0)
		newAPI.status = parseInt(Template.instance().find('.status-code-input').value || 200)
		newAPI.response =parseString2JSON(Template.instance().find('.response-input').value)
		if(Session.get('current-active-item') !== null) {
			RoutesDB.update({_id:Session.get('current-active-item')},newAPI)
		}else {
			var newID = RoutesDB.insert(newAPI)
			Slide.openSlide(newID)
		}
		Alert.showAlert('Success')
	}
})

function parseString2JSON(str) {
	try {
		return $.parseJSON(str)
	}catch(e) {
		console.log(e.message)
		Alert.showAlert(e.message)
	}
}

Template.InputForm.helpers({
	currentItem : function() {
		if(Session.get('current-active-item')) {
			return RoutesDB.findOne({_id:Session.get('current-active-item')})
		}else 
			return null
	},
	newForm : function() {
		return Session.get('current-active-item') !== null
	},
	newBtnTxt : function() {
		return Session.get('current-active-item') !== null ? '保存' : '新增'
	},
	json2String : function(jsonObj) {
		if(!jsonObj) return null
		return JSON.stringify(jsonObj)
	}
})
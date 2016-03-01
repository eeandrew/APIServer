Template.Slide.helpers({
	active : function() {
		return Session.get('slide-open') ? 'active' : null
	}
})

function onDocumentClick(e) {
	if(!document.querySelector('.slide-wrapper').contains(e.target)){
		Slide.closeSlide()
	}
}

Template.Slide.onRendered(function(){
	document.addEventListener('click',onDocumentClick.bind(this))
})

Template.Slide.onDestroyed(function(){
	document.removeEventListener('click',onDocumentClick.bind(this))
})

Slide = {
	openSlide : function(id) {
		Session.set('slide-open',true)
		Session.set('current-active-item',id)
	},
	closeSlide : function(id) {
		Session.set('slide-open',false)
		Session.set('current-active-item',null)
	}
}
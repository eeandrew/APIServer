Template.ApiList.helpers({
	apis : function(){
		return RoutesDB.find();
	}
})

Template.ApiListItem.events({
	'click .api-list-item' : function(e) {
		e.stopPropagation();
		Slide.openSlide(this.item._id)
	}
})


Template.registerHelper('lowerOrUpper',function(originStr,type){
	switch(type) {
		case 'L' :
		return originStr.toLowerCase()
		case 'U' :
		return originStr.toUpperCase()
	}
})
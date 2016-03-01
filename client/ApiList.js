Template.ApiList.helpers({
	apis : function(){
		var mockData = [{
			api:'/service/test',method:'get',timeout:1000,_id:1
		},{
			api:'/service/test',method:'post',timeout:0,_id:2
		},{
			api:'/service/public',method : 'get',timeout:2000,_id:3
		}]
		return mockData
	}
})

Template.ApiListItem.events({
	'click .api-list-item' : function(e) {
		e.stopPropagation();
		console.log(this.item)
		Slide.openSlide(12)
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
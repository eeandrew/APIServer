Template.ApiList.helpers({
	apis : function(){
		var mockData = [{
			api:'/service/test',method:'get',timeout:1000
		},{
			api:'/service/test',method:'post',timeout:0
		},{
			api:'/service/public',method : 'get',timeout:2000
		}]
		return mockData
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
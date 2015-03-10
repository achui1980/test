import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		var params = {
			"page":"0",
			"pageCount":"100",
		    "domain":"Word",
		    "params":[{
		    	name:'isPassed',
		    	op:'=',
		    	value:0
		    }]
		}
		return this.mystore.find('/wordservice/list',params,'POST').then(function(result){
			return result.data;
		});
	},
	renderTemplate: function(controller) {
        this.render('words.index', {
            controller: controller
        });
    }
});

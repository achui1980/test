import Ember from 'ember';
//import Word from 'guess/models/word';

export default Ember.Route.extend({
	model: function(){
		var params = {
			"page":"0",
			"pageCount":"100",
		    "domain":"Word"
		}
		return this.mystore.find('/wordservice/list',params,'POST').then(function(result){
			return result.data;
		});
	}
});

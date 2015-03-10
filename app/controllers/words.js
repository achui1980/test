import Ember from 'ember';

export default Ember.ArrayController.extend({
	remaining:function(){
		return this.get('length');
	}.property('length'),

	actions:{
		revert:function(){
			this.setEach('isPassed',0);
			var list = this.filter(function(item) {
				return item.isPassed === 0;
			});
			this.mystore.update('/wordservice/op/Word',list);
		}
	}
	
});

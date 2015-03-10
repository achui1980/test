import Ember from 'ember';

export default Ember.ObjectController.extend({
	needs:['words'],
	isEditing:false,
	actions:{
		removeWord:function(){
			var word = this.get('model');
			var controller = this.get('controllers.words');
			controller.removeObject(word);
			this.mystore.delete('/wordservice/op/Word',[word])
			//word.deleteRecord();
			//word.save();
		},
		editWord:function(){
			this.set('isEditing',true);
		},
		acceptChanges:function(){
			var word = this.get('model');
			this.set('isEditing',false);
			this.mystore.update('/wordservice/op/Word',[word]);
		}
	}
});

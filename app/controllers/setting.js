import Ember from 'ember';

export default Ember.ObjectController.extend({
	actions:{
		submitWord:function(){
			var store = this.get('store');
			var word = $('#word').val(),
				explain = $('#explain').val(),
				importVocs = $('#import').val();
			var vocabularies = [];
			if(!Ember.isEmpty(importVocs)){
				var list = importVocs.split('\n');
				list.forEach(function(item){
				     console.log(item);
					 var vocabulary = {
                        word: item,
                        explain: "",
                        isPassed:0
                    };
                    vocabularies.push(vocabulary);
				})
			}else {
			    var vocabulary = {
			        word: word,
			        explain: explain,
			        isPassed:0
			    };
			    vocabularies.push(vocabulary);
			}
			var self = this;
			this.mystore.create('/wordservice/op/Word',vocabularies).then(function(){
				self.transitionToRoute('words');
			});
		}
	}
});

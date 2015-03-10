import Ember from 'ember';
var index = 0;
export default Ember.ArrayController.extend({
	_getExplain:function(word){
		var url = "http://fanyi.youdao.com/openapi.do?keyfrom=achui1980&key=1525660742&type=data&doctype=jsonp&version=1.1&q="+word.word+"&callback=?";
		$.getJSON(url,function(data){
			console.log(data);
			var explain = '';
			if(data.basic){
				for(var i =0; i<data.basic.explains.length; i++){
					explain += data.basic.explains[i] + '<br/>';
				}
				explain += "<br/>pronunciation:"+data.basic.phonetic+"<br/>";
			}else{
				explain = 'Unknown';
			}
			$('#explain').html(explain);
		});
	},
	actions:{
		next:function(){
			var list = this.filterBy('isPassed',0);
			var word = list.objectAt(0);
			if(word){
				$('#word').html(word.word);
				this._getExplain(word);
				word.isPassed = 1;
				this.mystore.update('/wordservice/op/Word',[word]);
			}else{
				$('#word').html('END');
				$('#explain').html('');
				index = 0;
			}
		},
		pass:function(){
			var list = this.filterBy('isPassed',0);
			var word = list.objectAt(index++);
			if(word){
				$('#word').html(word.word);
				this._getExplain(word);
				//word.isPassed = 0;
				//this.mystore.update('/wordservice/op/Word',[word]);
			}else{
				$('#word').html('END');
				$('#explain').html('');
				index = 0;
			}
		}
	}
});

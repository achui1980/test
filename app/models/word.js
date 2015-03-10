import Ember from 'ember';
import ENV from 'guess/config/environment';
var Word = Ember.Object.extend({});

Word.reopenClass({
	findAll:function(){
		return $.ajax({
				url:ENV.APP.HOST+'/words'
			});
	}
});
// Word.reopenClass({
//     FIXTURES: [{
//         id: 1,
//         word: "apple",
//         explain:"苹果"
//     }, {
//         id: 2,
//         word: "peach",
//         explain:"桃子"
//     }, {
//         id: 3,
//         word: "pear",
//         explain:"梨子"
//     }]
// });

export default Word;
import Ember from 'ember';
import ENV from 'guess/config/environment';
var adapter = Ember.Object.extend({
	find : function(url,params,method,headers){
		return this.restAjax(url,params,headers,method);
	},

	create: function(url,params,headers){
		return this.restAjax(url,params,headers,'POST');
	},

	update:function(url,params,headers){
		return this.restAjax(url,params,headers,'PUT');
	},

	delete:function(url,params,headers){
		return this.restAjax(url,params,headers,'DELETE');
	},

	restAjax:function(url,params,headers,method){
		var promise = $.ajax({
			beforeSend:function(request){
				headers = headers == null ? [{
					key:'Content-Type',
					value:'application/json'
				}] : headers;
				headers.forEach(function(header){
					request.setRequestHeader(header.key, header.value);
				});
			},
			url: ENV.APP.HOST+url,
			type: method == null?'POST':method,
			data:JSON.stringify(params)
		});
		// if(successCallback){
		// 	promise.then(successCallback);
		// }
		// if(errorCallback){
		// 	promise.then(errorCallback);
		// }
		return promise;
	}
});


export default adapter;

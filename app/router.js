import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.resource("words",{path:'/'},function(){
		this.route('passed');
		this.route('remain');
	});
	this.route('setting');
	this.route('play');
});

export default Router;

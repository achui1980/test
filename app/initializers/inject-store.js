import Adapter from 'guess/adapters/application';

export function initialize(container, app) {
  // application.inject('route', 'foo', 'service:foo');
  var adapter = container.lookup("adapter:application");
  app.register('mystore:main', Adapter);
  app.inject('route', 'mystore', 'mystore:main');
  app.inject('controller', 'mystore', 'mystore:main');
};

export default {
  name: 'inject-store',
  initialize: initialize
};

import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('pizzerias', function() {
    this.route('show', { path: '/:id' });
    this.route('edit', { path: '/:id/edit' });
    this.route('add');
  });
  this.route('pizzas', function() {
    this.route('add');
    this.route('edit', { path: '/:id/edit' });
  });
});

export default Router;

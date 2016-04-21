import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('new', function () {
    this.route('announcement');
    this.route('call');
    this.route('event');
    this.route('job');
  });
  this.route('home',{path:''});
});

export default Router;

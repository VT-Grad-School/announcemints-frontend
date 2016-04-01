import Ember from 'ember';

var postingTypes = [{
  id: 1,
  name: 'announcement',
  link: 'new.announcement',
  description: 'This type describes a posting that you want to make about this, that, and the other.'
}, {
  id: 2,
  name: 'call',
  link: 'new.call',
  description: 'This type describes a posting that you want to make about this, that, and the other.'
}, {
  id: 3,
  name: 'event',
  link: 'new.event',
  description: 'This type describes a posting that you want to make about this, that, and the other.'
}, {
  id: 4,
  name: 'job',
  link: 'new.job',
  description: 'This type describes a posting that you want to make about this, that, and the other.'
}];

export default Ember.Route.extend({
  model() {
    return postingTypes;
  }
});
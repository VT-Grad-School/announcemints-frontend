import Ember from 'ember';

var postingTypes = [{
  id: 1,
  name: 'Announcement',
  description: 'This type describes a posting that you want to make about this, that, and the other.'
}, {
  id: 2,
  name: 'Call',
  description: 'This type describes a posting that you want to make about this, that, and the other.'
}, {
  id: 3,
  name: 'Event',
  description: 'This type describes a posting that you want to make about this, that, and the other.'
}, {
  id: 4,
  name: 'Job',
  description: 'This type describes a posting that you want to make about this, that, and the other.'
}];

export default Ember.Route.extend({
  model() {
    return postingTypes;
  }
});
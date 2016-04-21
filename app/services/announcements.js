import Ember from 'ember';

export default Ember.Service.extend({
  isServiceFactory: true,
  current() {
    return new Ember.RSVP.Promise(function(resolve) {
      Ember.run.later(function() {
        resolve([{
          id: 1,
          title: 'announcement1',
          url: 'goog.le',
          contact: 'Steve the bee',
          description: 'This type describes a posting that you want to make about this, that, and the other.'
        }, {
          id: 2,
          title: 'announcement2',
          url: 'goog.le',
          contact: 'Steve the bee',
          description: 'This type describes a posting that you want to make about this, that, and the other.'
        }, {
          id: 3,
          title: 'announcement3',
          url: 'goog.le',
          contact: 'Steve the bee',
          description: 'This type describes a posting that you want to make about this, that, and the other.'
        }, {
          id: 4,
          title: 'announcement4',
          url: 'goog.le',
          contact: 'Steve the bee',
          description: 'This type describes a posting that you want to make about this, that, and the other.'
        }]);
      }, 1000);
    });
  }
});

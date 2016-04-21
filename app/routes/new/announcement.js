import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.store.createRecord('announcement', {
      title: '',
      description: '',
      contact: '',
      url: '',
      created_at: new Date(),
      updated_at: new Date(),
      start_date: null,
      start_time: null,
      end_date: null,
      end_time: null
    });
  },
  setupController: function (controller, model) {
    controller.set('newAnnouncement', model);
  }
});

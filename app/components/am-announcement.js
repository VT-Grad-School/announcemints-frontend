import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['am-announcement', 'col-md-12'],

  announcements: Ember.inject.service(),

  announcementsList: false,

  showAnnouncement: Ember.on('didInsertElement', function() {
     this.get('announcements').current().then((announcements) => {
        this.set('announcementsList', announcements);
     });
  })

});

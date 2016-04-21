export default Ember.Controller.extend({
  // newAnnouncement: {
  //   title: '',
  //   description: '',
  //   link: '',
  //   contact: ''
  // }, // defined in route
  actions: {
    submitAnnouncement(event) {
      console.log('submitAnnouncement');
      console.log(event);
      console.log(this.get('newAnnouncement'));
      console.log(this.get('newAnnouncement').get('title'));
      console.log(this.get('newAnnouncement').get('description'));
      console.log(this.get('newAnnouncement').get('url'));
      console.log(this.get('newAnnouncement').get('contact'));
      event.preventDefault();
      this.get('newAnnouncement').save();
    }
  }
});
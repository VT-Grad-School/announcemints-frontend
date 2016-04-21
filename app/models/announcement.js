import DS from 'ember-data';

export default DS.Model.extend({
  // id: DS.attr(),
  title: DS.attr(),
  description: DS.attr(),
  contact: DS.attr(),
  url: DS.attr(),
  created_at: DS.attr(),
  updated_at: DS.attr(),
  start_date: DS.attr(),
  start_time: DS.attr(),
  end_date: DS.attr(),
  end_time: DS.attr()
});

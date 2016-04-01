import Ember from 'ember';

export function capitalize([params]/*, hash*/) {
  return params.capitalize();
}

export default Ember.Helper.helper(capitalize);

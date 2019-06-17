import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    host: 'http://localhost:7778',
    //namespace: 'api/v1'
});

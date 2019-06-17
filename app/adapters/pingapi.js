import DS from 'ember-data';
import {computed} from '@ember/object';

export default DS.RESTAdapter.extend({
    host : 'http://localhost:7778',
    pathForType() { return 'pingapi'; },
    heaeders : computed(function(){
        return  {
            'login' : 'john',
            'password' : 'doe'
        };
    })
});

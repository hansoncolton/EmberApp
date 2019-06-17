import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return this.store.findRecord('scientists',1); //['Marie Curie', 'Mae Jemison','Albert Hofmann'];
    }
});

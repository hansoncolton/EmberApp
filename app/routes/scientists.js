import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return this.store.findAll('scientist'); //['Marie Curie', 'Mae Jemison','Albert Hofmann'];
    }
});

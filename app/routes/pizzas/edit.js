import Route from '@ember/routing/route';

export default Route.extend({
    model(params) {
        return this.store.findRecord('pizza', params.id);
    },
    actions: {
        willTransition() {
            this.controller.get('model').rollbackAttributes();
        }
    }
});

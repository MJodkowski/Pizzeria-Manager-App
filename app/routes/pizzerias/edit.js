import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
    model(params) {
        return RSVP.hash({
            pizzeria: this.store.findRecord('pizzeria', params.id),
            pizzerias: this.store.findAll('pizzeria'),
            pizzas: this.store.findAll('pizza')
        })
    },
    actions: {
        willTransition() {
            this.controller.get('model.pizzeria').rollbackAttributes();
        }
    }
});

import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
    model() {
        return RSVP.hash({
            pizzeria: this.store.createRecord('pizzeria'),
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

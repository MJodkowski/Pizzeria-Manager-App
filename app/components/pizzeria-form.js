import Component from '@ember/component';
import { A } from '@ember/array';
import { inject as service } from '@ember/service';
import { throwErr, validateInputs } from '../utils/utils';

export default Component.extend({
    geocode: service(),
    populatePizzaArr() {
        this.get('checkedPizzas').addObjects(this.model.pizzas);
        if (this.model.pizzeria.menu) {
            this.get('checkedPizzas').map(pizza => {
                this.model.pizzeria.menu.find(item => item.name === pizza.name ?
                    pizza.set('isChecked', true) : false)
                return pizza;
            });
        } else {
            this.get('checkedPizzas').map(pizza => {
                pizza.set('isChecked', false)
                return pizza;
            });
        }
    },
    init() {
        this._super(...arguments);
        this.set('checkedPizzas', A());
    },
    didInsertElement() {
        this.populatePizzaArr();
    },
    errMessage: '',
    actions: {
        async savePizzeria(pizzeria) {
            let pizzaArr = [];
            this.get('checkedPizzas').forEach(pizza => {
                if (pizza.isChecked) {
                    pizzaArr.push({ name: pizza.name, ingredients: pizza.ingredients, price: pizza.price });
                }
            });
            pizzeria.set('menu', pizzaArr);
            pizzeria.set('coords', await this.geocode.fetchCoordinates(pizzeria.get('address')));
            if (throwErr.call(this, validateInputs(pizzeria))) {
                return;
            }
            if (this.model.pizzerias.reduce((hits, pizz) => {
                if (pizz.name.toLowerCase() === pizzeria.name.toLowerCase()) {
                    hits++;
                }
                return hits;
            }, 0) > 1) {
                throwErr.call(this, "Zapisano już pizzerię o takiej nazwie");
                return;
            }
            await pizzeria.save();
            this.transition('pizzerias.index');
        }
    }
});

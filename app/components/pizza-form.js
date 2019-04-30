import Component from '@ember/component';
import { A } from '@ember/array';
import { throwErr, validateInputs } from '../utils/utils';


export default Component.extend({
    populateArr() {
        this.get('ingredients').addObjects(this.pizza.ingredients);
    },
    init() {
        this._super(...arguments);
        this.set('ingredients', A());
    },
    didInsertElement() {
        this.populateArr();
    },
    ingredient: '',
    errMessage: '',
    actions: {  
        removeIngredient(remIng) {
            this.get('ingredients').removeObject(remIng);
        },
        addIngredient () {
            if (!this.get('ingredient')) {
                throwErr.call(this, 'Proszę wpisać nazwę składnika.');
            } else if (!this.get('ingredients').includes(this.get('ingredient'))) {
                this.get('ingredients').pushObject(this.get('ingredient'));
                this.set('ingredient', '');
            } else {
                throwErr.call(this, 'Składnik już został dodany');
            }
        },
        async savePizza(pizza) {
            pizza.set('ingredients', this.get('ingredients'));
            if (throwErr.call(this, validateInputs(pizza))) {
                return;
            }
            await pizza.save();
            this.transition('pizzas.index');
        },
    }
});

import Component from '@ember/component';
import { A } from '@ember/array';
import { throwErr, validateInputs } from '../utils/utils';


export default Component.extend({
    // didInsertElement() {
    //     this.populateArr();
    // },
    // actions: {
    //     removeIngredient(ing) {
    //         this.removeIngredient(ing);
    //     },
    //     savePizza(pizza) {
    //         this.onSave(pizza);
    //     },
    //     addIngredient(ingredient) {
    //         this.addIngredient(ingredient);
    //     }
    // }
    init() {
        this._super(...arguments);
        this.set('ingredients', A());
    },
    ingredient: '',
    errMessage: '',
    actions: {
        populateArr() {
            if (this.model.ingredients !== undefined) {
                this.get('ingredients').addObjects(this.model.ingredients);
            }
        },
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

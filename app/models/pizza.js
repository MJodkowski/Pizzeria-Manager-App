import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    ingredients: DS.attr(),
    price: DS.attr('number'),
});

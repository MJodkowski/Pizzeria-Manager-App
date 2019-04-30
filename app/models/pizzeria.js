import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
    name: DS.attr('string'),
    city: DS.attr('string'),
    street: DS.attr('string'),
    number: DS.attr('number'),
    address: computed('city', 'street','number', function() {
        return `${this.city}, ${this.street} ${this.number}`;
     }),
    hoursFrom: DS.attr('string'),
    hoursTo: DS.attr('string'),
    menu: DS.attr(),
    coords: DS.attr()
});

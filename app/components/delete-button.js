import Component from '@ember/component';

export default Component.extend({
    actions: {
        delete(record) {
            record.destroyRecord();
            record.save();
        } 
    }
});

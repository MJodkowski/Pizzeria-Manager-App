import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | pizzerias/edit', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:pizzerias/edit');
    assert.ok(route);
  });
});

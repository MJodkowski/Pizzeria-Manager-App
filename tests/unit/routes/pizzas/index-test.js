import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | pizzas/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:pizzas/index');
    assert.ok(route);
  });
});

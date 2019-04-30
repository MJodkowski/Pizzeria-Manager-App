import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | pizzerias/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:pizzerias/index');
    assert.ok(route);
  });
});

import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("Integration | Helper | trim-description", function(hooks) {
  setupRenderingTest(hooks);

  test("it works", async function(assert) {
    this.set("inputValue", "This is a test");

    await render(hbs`{{trim-description inputValue 11}}`);

    assert.equal(this.element.textContent.trim(), "This is a ...");
  });
});

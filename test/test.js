const assert = require("assert");
const dump = require("../index.js");

it("dump`` should log empty string", function() {
  assert.equal(dump``, "");
});
it("dump`0` should log '0'", function() {
  assert.equal(dump`0`, "0");
});
it("dump`${0}` should log '0'", function() {
  assert.equal(dump`${0}`, "0");
});
it("dump`${[]}` should log '[]'", function() {
  assert.equal(dump`${[]}`, "[]");
});
it("dump`${{}}` should log '{}'", function() {
  assert.equal(dump`${{}}`, "{}");
});
it('dump`==> ${a}\\n${b}` should log \'==> {\n  "b": {\n    "a": 0\n  },\n  "c": 2\n}\n{\n  "a": 0\n}\'', function() {
  const b = { a: 0 };
  const a = { b, c: 2 };
  assert.equal(
    dump`==> ${a}\n${b}`,
    '==> {\n  "b": {\n    "a": 0\n  },\n  "c": 2\n}\n{\n  "a": 0\n}'
  );
});
it("dump() without args should log ERROR", function() {
  assert.equal(dump(), "ERROR: [dump call] first parameter must be an array");
});
it("dump(0) should log ERROR", function() {
  assert.equal(dump(0), "ERROR: [dump call] first parameter must be an array");
});
it("dump('0') should log ERROR", function() {
  assert.equal(
    dump("0"),
    "ERROR: [dump call] first parameter must be an array"
  );
});
it("dump([],0) should log empty string", function() {
  assert.equal(dump([], 0), "");
});

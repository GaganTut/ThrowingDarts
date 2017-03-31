/* jshint esversion: 6 */

const chai = require("chai");
const expect = chai.expect;

const score = require("../darts.js");

describe("scoreThrows", () => {

  it("should be a function", () => {
    expect(score).to.be.a("function");
  });

  it("should return a number", () => {
    expect(score([5])).to.be.a("number");
  });

  it("should only take in an array", () => {
    expect(score.bind(null, 5)).to.throw(Error);
    expect(score.bind(null, "Hello")).to.throw(Error);
    expect(score.bind(null, {5: 5})).to.throw(Error);
    expect(score.bind(null, null)).to.throw(Error);
    expect(score.bind(null, NaN)).to.throw(Error);
  });

  it("should return 0 if array is empty", () => {
    expect(score([])).to.equal(-1);
  });

  it("should only take in array of valid numbers", () => {
    expect(score.bind(null, [null, 5, 6])).to.throw(Error);
    expect(score.bind(null, ["hello", 8, "you"])).to.throw(Error);
    expect(score.bind(null, [2, undefined])).to.throw(Error);
    expect(score.bind(null, [4, undefined, [4]])).to.throw(Error);
    expect(score.bind(null, [{4:4}, 90, "ok"])).to.throw(Error);
  });

  it("should calculate the score correctly", () => {
    expect(score([1, 5, 11])).to.equal(15);
    expect(score([15, 20, 30])).to.equal(0);
    expect(score([1, 2, 1, 4, 4, 2])).to.equal(160);
  });
});
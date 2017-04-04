'use strict';

const chai = require('chai');
const expect = require('chai').expect;
const extract = require('../src');

const data = [
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5]
];

describe('Extract Index Test Suite', function () {
  it('can extract one column', function () {
    expect(extract(data, [0])).to.eql([[1, 1, 1, 1, 1]]);
    expect(extract(data, [1])).to.eql([[2, 2, 2, 2, 2]]);
    expect(extract(data, [2])).to.eql([[3, 3, 3, 3, 3]]);
    expect(extract(data, [3])).to.eql([[4, 4, 4, 4, 4]]);
    expect(extract(data, [4])).to.eql([[5, 5, 5, 5, 5]]);
  });

  it('can extract multiple columns', function () {
    expect(extract(data, [0, 4])).to.eql([
      [1, 1, 1, 1, 1],
      [5, 5, 5, 5, 5]
    ]);

    expect(extract(data, [0, 4, 3])).to.eql([
      [1, 1, 1, 1, 1],
      [5, 5, 5, 5, 5],
      [4, 4, 4, 4, 4]
    ]);

    expect(extract(data, [0, 4, 3, 2, 1])).to.eql([
      [1, 1, 1, 1, 1],
      [5, 5, 5, 5, 5],
      [4, 4, 4, 4, 4],
      [3, 3, 3, 3, 3],
      [2, 2, 2, 2, 2]
    ]);
  });

  it('throws an error if the master array is not an array', function () {
    expect(() => extract('x', [])).to.throw(Error);
  });

  it('throws an error if the indexes to extract is not an array', function () {
    expect(() => extract(data, 4)).to.throw(Error);
  });

  it('throws an error if the master array is empty', function () {
    expect(() => extract([], [])).to.throw(Error);
  });

  it('throws an error if the indexes to extract are empty', function () {
    expect(() => extract(data, [])).to.throw(Error);
  });

  it('throws an error if the master array is missing', function () {
    expect(() => extract()).to.throw(Error);
  });

  it('throws an error if the indexes to extract are missing', function () {
    expect(() => extract(data)).to.throw(Error);
  });
});
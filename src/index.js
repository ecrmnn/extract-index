'use strict';

module.exports = (array, indexes) => {
  if (!Array.isArray(array)) {
    throw Error(array + ' must be an array');
  }

  if (typeof array === 'undefined' || !array.length) {
    throw Error(array + ' can not be empty');
  }

  if (!Array.isArray(indexes)) {
    throw Error(indexes + ' must be an array');
  }

  if (typeof indexes === 'undefined' || !indexes.length) {
    throw Error(indexes + ' can not be empty');
  }

  const result = [];

  indexes.forEach(index => {
    const values = [];
    array.forEach(subArray => values.push(subArray[index]));
    result.push(values);
  });

  return result;
};
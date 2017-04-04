# extract-index
> Extract values from an array of arrays by index

[![Travis](https://img.shields.io/travis/ecrmnn/extract-index.svg?style=flat-square)](https://travis-ci.org/ecrmnn/extract-index.svg?branch=master)
[![npm version](https://img.shields.io/npm/v/extract-index.svg?style=flat-square)](http://badge.fury.io/js/extract-index)
[![npm downloads](https://img.shields.io/npm/dm/extract-index.svg?style=flat-square)](http://badge.fury.io/js/extract-index)
[![npm license](https://img.shields.io/npm/l/extract-index.svg?style=flat-square)](http://badge.fury.io/js/extract-index)

### Installation
```bash
npm install extract-index --save
```

### Usage
```javascript
const extract = require('extract-index');

const data = [
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5]
];

extract(data, [0]);
//=> [[1, 1, 1, 1, 1]]

extract(data, [2]);
//=> [[3, 3, 3, 3, 3]]

extract(data, [0, 4]);
//=> [
//=>   [1, 1, 1, 1, 1],
//=>   [5, 5, 5, 5, 5]
//=> ]

extract(data, [0, 4, 3]);
//=> [
//=>   [1, 1, 1, 1, 1],
//=>   [5, 5, 5, 5, 5],
//=>   [4, 4, 4, 4, 4]
//=> ]
```

### License
MIT © [Daniel Eckermann](http://danieleckermann.com)
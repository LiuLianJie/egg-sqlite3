# egg-sqlite3

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-sqlite3.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-sqlite3
[travis-image]: https://img.shields.io/travis/eggjs/egg-sqlite3.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-sqlite3
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-sqlite3.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-sqlite3?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-sqlite3.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-sqlite3
[snyk-image]: https://snyk.io/test/npm/egg-sqlite3/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-sqlite3
[download-image]: https://img.shields.io/npm/dm/egg-sqlite3.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-sqlite3

<!--
Description here.
-->

## Install

```bash
$ npm i egg-sqlite3 --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.sqlite3 = {
  enable: true,
  package: 'egg-sqlite3',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.sqlite3 = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)

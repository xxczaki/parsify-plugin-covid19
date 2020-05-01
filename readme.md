# Parsify Plugin COVID 19

[![Build Status](https://travis-ci.com/xxczaki/parsify-plugin-covid19.svg?branch=master)](https://travis-ci.com/xxczaki/parsify-plugin-covid19) 
[![Coverage Status](https://coveralls.io/repos/github/xxczaki/parsify-plugin-covid19/badge.svg?branch=master)](https://coveralls.io/github/xxczaki/parsify-plugin-covid19?branch=master)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)

## About

This plugin adds COVID 19-related functions to Parsify:

```
confirmed()  //=> returns number of confirmed cases (global)
deaths()     //=> returns number of deaths (global)
```

## Install

```
$ npm install @parsify/core @parsify/math parsify-plugin-covid19
```

## Usage

```js
import Parsify from '@parsify/core';
import parsifyMathPlugin, {mathParser} from '@parsify/math';
import parsifyCovid19Plugin from 'parsify-plugin-covid19';

const parsify = new Parsify([
    parsifyCovid19Plugin(mathParser),
    parsifyMathPlugin()
]);
```

**Note: the plugin order is important!**

## API

#### parsifyCovid19Plugin(parser)

###### parser

Type: `Parser`

`@parsify/math` exported parser.

## License

MIT

# Parsify Plugin Hello World

[![Build Status](https://travis-ci.com/parsify-dev/plugin-boilerplate-typescript.svg?branch=master)](https://travis-ci.com/parsify-dev/plugin-boilerplate-typescript) 
[![Coverage Status](https://coveralls.io/repos/github/parsify-dev/plugin-boilerplate-typescript/badge.svg?branch=master)](https://coveralls.io/github/parsify-dev/plugin-boilerplate-typescript?branch=master)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)

## About

This plugin displays the `hello world!` message, when the user enters `hello` expression.

## Install

```
$ npm install @parsify/core parsify-plugin-hello-world
```

## Usage

```js
import Parsify from '@parsify/core';
import parsifyPluginHelloWorld from 'parsify-plugin-hellow-world';

const parsify = new Parsify([
    parsifyPluginHelloWorld();
]);
```

## API

#### parsifyPluginHelloWorld(options?)

##### options

Type: `object`

Any of the options below

###### upperCase

Type: `boolean`\
Default: `false`

Whether the output should be upper case or not.

## License

MIT

import test from 'ava';

import parsifyExamplePlugin from './src';

test('general', async t => {
	t.is(await parsifyExamplePlugin()('hello'), 'hello world!');
});

test('with options', async t => {
	t.is(await parsifyExamplePlugin({upperCase: true})('hello'), 'HELLO WORLD!');
});

test('if an error occurs, just output the expression', async t => {
	t.is(await parsifyExamplePlugin()('foo / bar'), 'foo / bar');
});

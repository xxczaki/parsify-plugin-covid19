import test from 'ava';
import Parsify from '@parsify/core';
import parsifyMathPlugin, {mathParser} from '@parsify/math';

import parsifyCovid19Plugin from './src';

test('general', async t => {
	const parsify = new Parsify([
		parsifyCovid19Plugin(mathParser),
		parsifyMathPlugin()
	]);

	t.not(await parsify.parse('confirmed()'), 'confirmed()');
	t.not(await parsify.parse('deaths()'), 'deaths()');
});

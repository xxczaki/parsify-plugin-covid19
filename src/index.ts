import {Parser} from '@parsify/math';
import pMemoize from 'p-memoize';

import {fetcher} from './utils/fetcher';

const memFetcher = pMemoize(fetcher);

export default (parser: Parser) => async (expression: string): Promise<string> => {
	const data = await memFetcher();

	parser.set('confirmed', () => {
		return data.latest.confirmed;
	});
	parser.set('deaths', () => {
		return data.latest.deaths;
	});

	return expression;
};

import {Parser} from '@parsify/math';
import pMemoize from 'p-memoize';

import {fetcher} from './utils/fetcher';

const memFetcher = pMemoize(fetcher);

export default (parser: Parser) => async (expression: string): Promise<string> => {
	const data = await memFetcher();

	parser.set('confirmed', data.results[0].total_cases);
	parser.set('recoveries', data.results[0].total_recovered);
	parser.set('deaths', data.results[0].total_deaths);

	return expression;
};

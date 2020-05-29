import fetch from 'isomorphic-unfetch';

interface Data {
	results: [
		{
			'total_cases': number;
			'total_recovered': number;
			'total_deaths': number;
		}
	];
	stat: string;
}

export const fetcher = async (): Promise<Data> => {
	const response = await fetch('https://thevirustracker.com/free-api?global=stats');
	const data = await response.json();

	return data;
};

import fetch from 'isomorphic-unfetch';

interface Data {
	latest: {
		confirmed: number;
		deaths: number;
	};
}

export const fetcher = async (): Promise<Data> => {
	const response = await fetch('https://coronavirus-tracker-api.herokuapp.com/v2/latest');
	const data = await response.json();

	return data;
};

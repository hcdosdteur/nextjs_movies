import {URL as API_URL} from '../app/page';

async function getMovie(id: string) {
	const response = await fetch(`${API_URL}/${id}`, {
		cache: 'force-cache',
	});
	const data = await response.json();
	return data;
}

export default async function MovieInfo({id}: {id: string}) {
	const movie = await getMovie(id);

	return <h4>{JSON.stringify(movie)}</h4>;
}

import {URL as API_URL} from '../app/page';

async function getVideos(id: string) {
	const response = await fetch(`${API_URL}/${id}/videos`, {
		cache: 'force-cache',
	});
	const data = await response.json();
	return data;
}

export default async function MovieVideos({id}: {id: string}) {
	const videos = await getVideos(id);

	return <h4>{JSON.stringify(videos)}</h4>;
}

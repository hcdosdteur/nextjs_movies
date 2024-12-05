import {Suspense} from 'react';
import MovieInfo from '../../../components/movie-info';
import MovieVideos from '../../../components/movie-videos';

export default async function MovieDetail({params}) {
	const {id} = await params;

	return (
		<div>
			<Suspense fallback={<div>Loading movie info...</div>}>
				<MovieInfo id={id} />
			</Suspense>
			<Suspense fallback={<div>Loading movie videos...</div>}>
				<MovieVideos id={id} />
			</Suspense>
		</div>
	);
}

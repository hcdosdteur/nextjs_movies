import { Suspense } from 'react';
import MovieInfo, { getMovie } from '../../../components/movie-info';
import MovieVideos from '../../../components/movie-videos';

export async function generateMetadata({ params }) {
	const { id } = await params;
	const movie = await getMovie(id);

	return {
		title: movie.title,
	};
}

export default async function MovieDetail({ params }) {
	const { id } = await params;

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

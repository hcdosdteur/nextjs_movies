import Link from 'next/link';

export const metadata = {
	title: 'Movies',
};

export const URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

async function getMovies() {
	const response = await fetch(URL, {
		cache: 'force-cache',
	});
	const data = await response.json();
	return data;
}

export default async function HomePage() {
	const movies = await getMovies();

	return (
		<div>
			{movies.map((movie) => (
				<li key={movie.id}>
					<Link href={`/movies/${movie.id}`}>{movie.title}</Link>
				</li>
			))}
		</div>
	);
}

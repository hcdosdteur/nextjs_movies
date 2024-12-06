// 'use cache';

import Link from 'next/link';
import Movie from '../components/movie';

import styles from '../styles/Home.module.css';

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
		<div className={styles.container}>
			{movies.map((movie) => (
				<Movie
					key={movie.id}
					id={movie.id}
					poster_path={movie.poster_path}
					title={movie.title}
				/>
			))}
		</div>
	);
}

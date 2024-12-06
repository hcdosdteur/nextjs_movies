// 'use cache';

import Movie from '../components/movie';

import styles from '../styles/home.module.css';

import { URL } from '../app/constants';

export const metadata = {
	title: 'Movies',
};

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

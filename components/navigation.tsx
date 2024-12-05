'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';

export default function Navigation() {
	const path = usePathname();
	console.log(path);
	return (
		<nav>
			<ul>
				<li>
					<Link href="/">Home</Link> {path === '/' ? '(current)' : ''}
				</li>
				<li>
					<Link href="/about-us">About Us</Link>{' '}
					{path === '/about-us' ? '(current)' : ''}
				</li>
			</ul>
		</nav>
	);
}

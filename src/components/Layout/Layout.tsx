import { Outlet } from 'react-router-dom';
import styles from './layout.module.scss';
import { Navbar } from '../Navbar/Navbar';
import { SearchBar } from '../SearchBar/SearchBar';

export const Layout = () => {
	return (
		<div className={styles.container}>
			<header>
				<Navbar />
				<SearchBar />
			</header>
			<main className={styles.main}>
				<Outlet />
			</main>
		</div>
	);
};

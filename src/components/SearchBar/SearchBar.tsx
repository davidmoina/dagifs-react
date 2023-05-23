import styles from './searchBar.module.scss';
import { ImSearch } from 'react-icons/im';

export const SearchBar = () => {
	return (
		<form className={styles.searchContainer}>
			<input
				className={styles.input}
				type='text'
				placeholder='Search all the GIFs'
			/>
			<button type='submit' className={styles.button}>
				<ImSearch className={styles.icon} />
			</button>
		</form>
	);
};

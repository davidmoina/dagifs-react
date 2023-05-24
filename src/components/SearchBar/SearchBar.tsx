import { useRef, ChangeEvent } from 'react';
import styles from './searchBar.module.scss';
import { ImSearch } from 'react-icons/im';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const SearchBar = () => {
	const debounceRef = useRef<number | undefined>();
	const navigate = useNavigate();

	const [, setSearchParams] = useSearchParams();

	const onQueryChanged = async (e: ChangeEvent<HTMLInputElement>) => {
		if (debounceRef.current) {
			clearTimeout(debounceRef.current);
		}

		debounceRef.current = setTimeout(() => {
			setSearchParams({ text: e.target.value });
		}, 350);
	};

	return (
		<div className={styles.searchContainer} onClick={() => navigate('/search')}>
			<input
				className={styles.input}
				type='text'
				placeholder='Search all the GIFs'
				onChange={onQueryChanged}
			/>
			<button className={styles.button}>
				<ImSearch className={styles.icon} />
			</button>
		</div>
	);
};

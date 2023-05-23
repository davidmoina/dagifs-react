import { GifsContainer } from '../../container/GifsContainer/GifsContainer';
import styles from './homeView.module.scss';

export const HomeView = () => {
	return (
		<>
			<h2 className={styles.title}>All the gifs</h2>
			<GifsContainer />
		</>
	);
};

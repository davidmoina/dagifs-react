import styles from './userView.module.scss';
import { GifsContainer } from '../../container/GifsContainer/GifsContainer';

export const UserView = () => {
	return (
		<div className={styles.userContainer}>
			<aside className={styles.userImage}>
				<img src='https://media.giphy.com/avatars/default1/200h.gif' alt='' />
			</aside>
			<section className={styles.userDetails}>
				<div className={styles.user}>
					<h2>davidmoina</h2>
					<p>@davidmoina</p>
				</div>
				<div className={styles.personalGifsSection}>
					<h3 className={styles.title}>All the gifs</h3>
					<GifsContainer />
				</div>
			</section>
		</div>
	);
};

import styles from './userView.module.scss';
import { GifsContainer } from '../../container/GifsContainer/GifsContainer';
import { useQuery } from '@tanstack/react-query';
import { getUserGifs } from '../../api/gifsApi';

export const UserView = () => {
	const { data: userGifs } = useQuery({
		queryKey: ['userGifs'],
		queryFn: () => getUserGifs('646cfc7f4ce2a456edc9e0ec'),
	});

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
					<h3 className={styles.title}>All your gifs</h3>
					<GifsContainer data={userGifs} />
				</div>
			</section>
		</div>
	);
};

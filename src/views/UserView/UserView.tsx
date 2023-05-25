import styles from './userView.module.scss';
import { GifsContainer } from '../../container/GifsContainer/GifsContainer';
import { useQuery } from '@tanstack/react-query';
import { getUserGifs } from '../../api/gifsApi';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';

export const UserView = () => {
	const { data: userGifs } = useQuery({
		queryKey: ['userGifs'],
		queryFn: () => getUserGifs('646cfc7f4ce2a456edc9e0ec'),
	});

	const { user } = useContext(AuthContext);

	return (
		<div className={styles.userContainer}>
			<aside className={styles.userImage}>
				<img src={user?.avatar_url} alt='' />
			</aside>
			<section className={styles.userDetails}>
				<div className={styles.user}>
					<h2>{user?.username}</h2>
					<p>@{user?.display_name ? user.display_name : user?.username}</p>
				</div>
				<div className={styles.personalGifsSection}>
					<h3 className={styles.title}>All your gifs</h3>
					<GifsContainer data={userGifs?.data} />
					<h3 className={styles.title}>Your favorites</h3>
					<GifsContainer data={userGifs?.favorites} />
				</div>
			</section>
		</div>
	);
};

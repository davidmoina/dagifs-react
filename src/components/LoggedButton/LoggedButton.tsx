import styles from './loggedButton.module.scss';
import { FiChevronDown } from 'react-icons/fi';

export const LoggedButton = () => {
	return (
		<div className={styles.container}>
			<img
				className={styles.userAvatar}
				src='https://media.giphy.com/avatars/default1/200h.gif'
				alt=''
			/>
			<span>davidmoina</span>
			<FiChevronDown className={styles.arrow} />
			<div className={styles.menu}>
				<p>Collections</p>
				<p>Favorites</p>
				<hr />
				<p>Settings</p>
				<p>Log out</p>
			</div>
		</div>
	);
};

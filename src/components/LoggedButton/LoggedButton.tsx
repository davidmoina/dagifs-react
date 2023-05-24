import { useNavigate } from 'react-router-dom';
import styles from './loggedButton.module.scss';
import { FiChevronDown } from 'react-icons/fi';

interface Props {
	username?: string;
	image?: string;
}

export const LoggedButton = ({ username, image }: Props) => {
	const navigate = useNavigate();

	return (
		<div className={styles.container}>
			<img className={styles.userAvatar} src={image} alt='' />
			<span onClick={() => navigate('/user')}>{username}</span>
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

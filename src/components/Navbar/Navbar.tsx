import { LoggedButton } from '../LoggedButton/LoggedButton';
import styles from './navbar.module.scss';

export const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<div className={styles.leftContainer}>
				<h1>DAGIFS</h1>
				<ul>
					<li>Reactions</li>
					<li>Entertainment</li>
					<li>Sports</li>
				</ul>
			</div>
			<div className={styles.rightContainer}>
				<button className={styles.uploadButton}>Upload</button>
				<button className={styles.loginButton}>Log in</button>
				<LoggedButton />
			</div>
		</nav>
	);
};

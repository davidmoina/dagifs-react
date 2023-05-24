import { NavLink, useNavigate } from 'react-router-dom';
import { LoggedButton } from '../LoggedButton/LoggedButton';
import styles from './navbar.module.scss';

export const Navbar = () => {
	const navigate = useNavigate();

	return (
		<nav className={styles.navbar}>
			<div className={styles.leftContainer}>
				<h1 onClick={() => navigate('/')}>DAGIFS</h1>
				<ul>
					<li>
						<NavLink
							className={({ isActive }) => (isActive ? styles.active : '')}
							to='/animals'
						>
							Animals
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) => (isActive ? styles.active : '')}
							to='/entertainment'
						>
							Entertainment
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) => (isActive ? styles.active : '')}
							to='/sports'
						>
							Sports
						</NavLink>
					</li>
				</ul>
			</div>
			<div className={styles.rightContainer}>
				<button
					onClick={() => navigate('/upload')}
					className={styles.uploadButton}
				>
					Upload
				</button>
				{/* <button className={styles.loginButton}>Log in</button> */}
				<LoggedButton />
			</div>
		</nav>
	);
};

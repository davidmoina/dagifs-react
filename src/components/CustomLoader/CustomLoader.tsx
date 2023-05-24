import styles from './customLoader.module.scss';

export const CustomLoader = () => {
	return (
		<section className={styles.section}>
			<div className={styles.loader}>
				<p>loading</p>
				<div className={styles.words}>
					<span className={styles.word}>images</span>
					<span className={styles.word}>gifs</span>
					<span className={styles.word}>fun</span>
					<span className={styles.word}>cards</span>
					<span className={styles.word}>smiles</span>
				</div>
			</div>
		</section>
	);
};

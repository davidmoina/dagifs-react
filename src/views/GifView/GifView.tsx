import styles from './gifView.module.scss';
import { FaHeart, FaShareAlt } from 'react-icons/fa';
import { ImEmbed } from 'react-icons/im';

const GifView = () => {
	return (
		<>
			<div className={styles.container}>
				<aside className={styles.aside}>
					<div className={styles.user}>
						<img
							className={styles.userAvatar}
							src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsCc5E-o4z6uPnn8qn_ITbrlxdJ5kdmbztmg&usqp=CAU'
							alt=''
						/>
						<div className={styles.userInfo}>
							<p>davidmoina</p>
							<p>@davidmoina</p>
						</div>
					</div>

					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum a
						nostrum, ex nisi repellendus esse quis facilis quasi rerum impedit?
					</p>
				</aside>
				<section className={styles.gifContent}>
					<figure>
						<figcaption className={styles.title}>Baby Thank You GIF</figcaption>
						<img
							className={styles.gifImg}
							src='https://media2.giphy.com/media/BYoRqTmcgzHcL9TCy1/giphy.gif?cid=b0d27405xqnf6nxjkpjx5rq43q9u74awid7otko2rf0a0t1j&ep=v1_gifs_trending&rid=giphy.gif&ct=g'
							alt=''
						/>
					</figure>
					<aside className={styles.gifAside}>
						<div className={styles.option}>
							<span>
								<FaHeart />
							</span>
							<p>Favorite</p>
						</div>
						<div className={styles.option}>
							<span>
								<FaShareAlt />
							</span>
							<p>Share</p>
						</div>
						<div className={styles.option}>
							<span>
								<ImEmbed />
							</span>
							<p>Embed</p>
						</div>
					</aside>
				</section>
			</div>
		</>
	);
};

export default GifView;

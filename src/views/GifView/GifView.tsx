import { useQuery } from '@tanstack/react-query';
import styles from './gifView.module.scss';
import { FaHeart, FaShareAlt } from 'react-icons/fa';
import { ImEmbed } from 'react-icons/im';
import { useParams } from 'react-router-dom';
import { getOneGif } from '../../api/gifsApi';
import { BiLink } from 'react-icons/bi';

const GifView = () => {
	const { gifId } = useParams();

	const { data } = useQuery({
		queryKey: ['oneGif'],
		queryFn: () => getOneGif(gifId || ''),
	});

	console.log(data);

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
							<p>
								{data?.user?.display_name
									? data?.user?.display_name
									: data?.username}
							</p>
							<p>@{data?.username}</p>
						</div>
					</div>
					<div className={styles.sourceTitle}>
						<h5>Source</h5>
						<BiLink />
					</div>
					{data?.source && (
						<a target='_blank' href={data.source} className={styles.source}>
							{data.source}
						</a>
					)}
				</aside>
				<section className={styles.gifContent}>
					<figure>
						<figcaption className={styles.title}>{data?.title}</figcaption>
						<img className={styles.gifImg} src={data?.image_url} alt='' />
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

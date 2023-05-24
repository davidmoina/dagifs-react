import { useQuery } from '@tanstack/react-query';
import styles from './gifView.module.scss';
import { FaHeart, FaShareAlt } from 'react-icons/fa';
import { ImEmbed } from 'react-icons/im';
import { useParams } from 'react-router-dom';
import { getOneGif } from '../../api/gifsApi';
import { BiLink, BiEditAlt } from 'react-icons/bi';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-hot-toast';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { Modal } from '../../components/Modal/Modal';
import { useModal } from '../../hooks/useModal';
import { EditForm } from '../../components/EditForm/EditForm';

const GifView = () => {
	const { gifId } = useParams();
	const currentUrl = window.location.href;

	const { isOpen, closeModal, openModal } = useModal();

	const { user } = useContext(AuthContext);

	const { data } = useQuery({
		queryKey: ['oneGif'],
		queryFn: () => getOneGif(gifId || ''),
	});

	const handleShare = () => {
		toast.success('Copied to clipboard');
	};

	return (
		<>
			<div className={styles.container}>
				<aside className={styles.aside}>
					<div className={styles.user}>
						<img
							className={styles.userAvatar}
							src={data?.user?.avatar_url}
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
						<div className={styles.titleContainer}>
							<figcaption className={styles.title}>{data?.title}</figcaption>

							{user?.username === data?.user?.username && (
								<div onClick={openModal}>
									<BiEditAlt className={styles.editIcon} />
								</div>
							)}
						</div>
						<img className={styles.gifImg} src={data?.image_url} alt='' />
					</figure>
					<aside className={styles.gifAside}>
						<div className={styles.option}>
							<span>
								<FaHeart />
							</span>
							<p>Favorite</p>
						</div>

						<CopyToClipboard text={currentUrl}>
							<div onClick={handleShare} className={styles.option}>
								<span>
									<FaShareAlt />
								</span>
								<p>Share</p>
							</div>
						</CopyToClipboard>

						<div className={styles.option}>
							<span>
								<ImEmbed />
							</span>
							<p>Embed</p>
						</div>
					</aside>
				</section>
			</div>
			{isOpen && (
				<Modal isOpen={isOpen} closeModal={closeModal}>
					<EditForm
						description={data?.description}
						image={data?.image_url}
						source={data?.source}
						tags={data?.tags}
						title={data?.title}
						_id={data?._id}
					/>
				</Modal>
			)}
		</>
	);
};

export default GifView;

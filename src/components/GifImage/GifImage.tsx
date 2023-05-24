import { useNavigate } from 'react-router-dom';
import styles from './gifImage.module.scss';

interface Props {
	image_url?: string;
	title: string;
	id?: string;
}

export const GifImage = ({ id, image_url, title }: Props) => {
	const navigate = useNavigate();

	return (
		<img
			onClick={() => navigate(`/gif/${id}`)}
			className={styles.image}
			src={image_url}
			alt={title}
		/>
	);
};

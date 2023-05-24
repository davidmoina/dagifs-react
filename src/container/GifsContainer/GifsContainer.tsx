import { Gif } from '../../interfaces/gifs';
import styles from './gifsContainer.module.scss';

interface Props {
	data: Gif<string>[];
}

export const GifsContainer = ({ data }: Props) => {
	return (
		<div className={styles.gifsContainer}>
			{data?.map(({ image_url, title, _id }) => (
				<img className={styles.image} key={_id} src={image_url} alt={title} />
			))}
		</div>
	);
};

import { GifImage } from '../../components/GifImage/GifImage';
import { Gif } from '../../interfaces/gifs';
import styles from './gifsContainer.module.scss';

interface Props {
	data: Gif<string>[];
}

export const GifsContainer = ({ data }: Props) => {
	return (
		<div className={styles.gifsContainer}>
			{data?.map(({ image_url, title, _id }) => (
				<GifImage key={_id} title={title} id={_id} image_url={image_url} />
			))}
		</div>
	);
};

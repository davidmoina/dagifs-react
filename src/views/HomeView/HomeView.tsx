import { useInfiniteQuery } from '@tanstack/react-query';
import styles from './homeView.module.scss';
import { getAllGifs } from '../../api/gifsApi';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Gif } from '../../interfaces/gifs';
import { CustomLoader } from '../../components/CustomLoader/CustomLoader';
import { GifImage } from '../../components/GifImage/GifImage';

export const HomeView = () => {
	const {
		data: gifsData,
		hasNextPage,
		fetchNextPage,
		isLoading,
	} = useInfiniteQuery({
		queryKey: ['gifs'],
		queryFn: getAllGifs,
		getNextPageParam: lastPage => {
			return lastPage.nextPage;
		},
		refetchOnWindowFocus: false,
	});

	const gifs: Gif<string>[] =
		gifsData?.pages.reduce(
			(prevGifs, page) => prevGifs.concat(page.docs),
			[]
		) || [];

	return (
		<>
			<h2 className={styles.title}>All the gifs</h2>

			{isLoading ? (
				<CustomLoader />
			) : (
				<InfiniteScroll
					dataLength={gifs.length}
					hasMore={hasNextPage || isLoading}
					next={() => fetchNextPage()}
					loader={<p>Loading...</p>}
					className={styles.gifsContainer}
				>
					{gifs &&
						gifs.map(({ image_url, title, _id }) => (
							<GifImage
								key={_id}
								image_url={image_url}
								title={title}
								id={_id}
							/>
						))}
				</InfiniteScroll>
			)}
		</>
	);
};

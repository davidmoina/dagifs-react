import { useQuery } from '@tanstack/react-query';
import { GifsContainer } from '../../container/GifsContainer/GifsContainer';
import { getFilteredGifs } from '../../api/gifsApi';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

export const CategoriesView = () => {
	const { tag } = useParams();

	const { data: gifsArr, refetch } = useQuery({
		queryKey: ['filteredGifs'],
		queryFn: () => getFilteredGifs(tag || 'animals'),
	});

	useEffect(() => {
		if (gifsArr) {
			refetch();
		}
	}, [tag]);

	return (
		<>
			<h2 style={{ color: 'white' }}>{tag} gifs</h2>
			<GifsContainer data={gifsArr} />
		</>
	);
};

import { useQuery } from '@tanstack/react-query';
import { GifsContainer } from '../../container/GifsContainer/GifsContainer';
import { getSearchGifs } from '../../api/gifsApi';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

export const SearchView = () => {
	const [searchParams] = useSearchParams();

	const searchText = searchParams.get('text') || '';
	console.log(searchText);

	const { data: gifsArr, refetch } = useQuery({
		queryKey: ['searchGifs'],
		queryFn: () => getSearchGifs(searchText),
	});

	useEffect(() => {
		if (gifsArr) {
			refetch();
		}
	}, [searchText]);

	return (
		<>
			<h2 style={{ color: 'white' }}>Search</h2>
			<GifsContainer data={gifsArr} />
		</>
	);
};

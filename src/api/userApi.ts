const baseUrl = import.meta.env.VITE_APP_BASE_URL;

export const getUser = async (id: string) => {
	const response = await fetch(`${baseUrl}/users/${id}`);
	const result = await response.json();

	return result;
};

export const addGifToUserFavorites = async ({
	gifId,
	userId,
}: {
	gifId: string;
	userId: string;
}) => {
	const response = await fetch(`${baseUrl}/users`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			gifId,
			userId,
		}),
	});
	const result = await response.json();

	return result;
};

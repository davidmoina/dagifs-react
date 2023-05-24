const baseUrl = import.meta.env.VITE_APP_BASE_URL;

export const getAllGifs = async ({ pageParam = 1 }) => {
	const response = await fetch(`${baseUrl}/gifs/paginate?page=${pageParam}`);
	const result = await response.json();

	return result;
};

export const addGif = async (data: FormData) => {
	const response = await fetch(`${baseUrl}/gifs`, {
		method: 'POST',
		body: data,
	});
	const result = await response.json();

	return result.data;
};

export const getUserGifs = async (id: string) => {
	const response = await fetch(`${baseUrl}/gifs/user/${id}`);
	const result = await response.json();

	return result.data;
};

export const getFilteredGifs = async (tag: string) => {
	const response = await fetch(`${baseUrl}/gifs/filter/${tag}`);
	const result = await response.json();

	return result.data;
};

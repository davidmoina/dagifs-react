import { Gif } from '../interfaces/gifs';
import { InputsUpload } from '../interfaces/inputsUpload';
import { User } from '../interfaces/user';

const baseUrl = import.meta.env.VITE_APP_BASE_URL;

export const getAllGifs = async ({ pageParam = 1 }) => {
	const response = await fetch(`${baseUrl}/gifs/paginate?page=${pageParam}`);
	const result = await response.json();

	console.log(result);

	return result;
};

export const getOneGif = async (id: string): Promise<Gif<User>> => {
	const response = await fetch(`${baseUrl}/gifs/${id}`);
	const result = await response.json();

	return result;
};

export const addGif = async (data: FormData) => {
	try {
		const response = await fetch(`${baseUrl}/gifs`, {
			method: 'POST',
			body: data,
		});
		const result = await response.json();

		return result.data;
	} catch (error) {
		return (error as Error).message;
	}
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

export const getSearchGifs = async (text: string) => {
	if (text.length < 3) return [];

	const response = await fetch(`${baseUrl}/gifs/search?text=${text}`);
	const result = await response.json();

	return result;
};

export const editGif = async ({
	id,
	data,
}: {
	id: string;
	data: InputsUpload;
}) => {
	try {
		const response = await fetch(`${baseUrl}/gifs/${id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});
		const result = await response.json();

		return result;
	} catch (error) {
		return (error as Error).message;
	}
};

export const deleteGif = async (id: string) => {
	try {
		const response = await fetch(`${baseUrl}/gifs/${id}`, {
			method: 'DELETE',
		});
		const result = await response.json();

		return result;
	} catch (error) {
		return (error as Error).message;
	}
};

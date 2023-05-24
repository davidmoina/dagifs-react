const baseUrl = import.meta.env.VITE_APP_BASE_URL;

export const getUser = async (id: string) => {
	const response = await fetch(`${baseUrl}/users/${id}`);
	const result = await response.json();

	return result;
};

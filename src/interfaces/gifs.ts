export interface Gif<T> {
	_id?: string;
	title: string;
	description?: string;
	image_url?: string;
	username: string;
	views?: number;
	user?: T;
	source: string;
	giphyId?: string;
	tags?: string[];
}

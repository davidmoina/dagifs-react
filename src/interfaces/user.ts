export interface User {
	_id: string;
	display_name: string;
	avatar_url: string;
	username: string;
}
export interface userRegistered extends User {
	email: string;
	rol: string;
	password: string;
	favorites: string[];
}

import { useState, useEffect } from 'react';
import { AuthContext } from './AuthContext';
import { useQuery } from '@tanstack/react-query';
import { getUser } from '../../api/userApi';
import { User } from '../../interfaces/user';

interface Props {
	children: JSX.Element | JSX.Element[];
}

export const AuthProvider = ({ children }: Props) => {
	const [user, setUser] = useState<User | null>(null);

	const { data } = useQuery({
		queryKey: ['user'],
		queryFn: () => getUser('646cfc7f4ce2a456edc9e0ec'),
	});

	useEffect(() => {
		setUser(data);
	}, [data]);

	return (
		<AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
	);
};

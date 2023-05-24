import { createContext } from 'react';
import { User } from '../../interfaces/user';

interface ContextType {
	user: User | null;
}

export const AuthContext = createContext<ContextType>({} as ContextType);

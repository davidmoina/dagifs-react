import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoutes = () => {
	const user = true;

	if (!user) {
		return <Navigate to='/' />;
	}

	return <Outlet />;
};

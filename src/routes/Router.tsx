import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PrivateRoutes } from '../components/PrivateRoutes/PrivateRoutes';
import { Layout } from '../components/Layout/Layout';
import { HomeView } from '../views/HomeView/HomeView';
import GifView from '../views/GifView/GifView';
import { UserView } from '../views/UserView/UserView';
import { UploadPage } from '../pages/UploadPage/UploadPage';

export const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<PrivateRoutes />}>
					<Route path='/' element={<Layout />}>
						<Route index element={<HomeView />} />
						<Route path='/gif' element={<GifView />} />
						<Route path='/user' element={<UserView />} />
					</Route>
					<Route path='/upload' element={<UploadPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

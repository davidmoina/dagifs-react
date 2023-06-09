import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PrivateRoutes } from '../components/PrivateRoutes/PrivateRoutes';
import { Layout } from '../components/Layout/Layout';
import { HomeView } from '../views/HomeView/HomeView';
import GifView from '../views/GifView/GifView';
import { UserView } from '../views/UserView/UserView';
import { UploadPage } from '../pages/UploadPage/UploadPage';
import { CategoriesView } from '../views/CategoriesView/CategoriesView';
import { SearchView } from '../views/SearchView/SearchView';

export const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<PrivateRoutes />}>
					<Route path='/' element={<Layout />}>
						<Route index element={<HomeView />} />
						<Route path='/:tag' element={<CategoriesView />} />
						<Route path='/gif/:gifId' element={<GifView />} />
						<Route path='/user' element={<UserView />} />
						<Route path='/search' element={<SearchView />} />
						<Route path='/search' element={<SearchView />} />
					</Route>
					<Route path='/upload' element={<UploadPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

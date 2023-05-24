import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Router } from './routes/Router';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext/AuthProvider';

const queryClient = new QueryClient();

function App() {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<AuthProvider>
					<Router />
					<ReactQueryDevtools />
					<Toaster />
				</AuthProvider>
			</QueryClientProvider>
		</>
	);
}

export default App;

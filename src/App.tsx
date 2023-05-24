import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Router } from './routes/Router';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient();

function App() {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<Router />
				<ReactQueryDevtools />
				<Toaster />
			</QueryClientProvider>
		</>
	);
}

export default App;

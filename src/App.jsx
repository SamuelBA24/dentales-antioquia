import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import PublicLayout from './layouts/PublicLayout';

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<PublicLayout />}>
						<Route index element={<Home />} />
						<Route path="*" element={<NotFound />} />
					</Route>
				</Routes>
			</Router>
		</>
	);
}
export default App
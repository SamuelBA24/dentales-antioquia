import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import PublicLayout from './layouts/PublicLayout';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<PublicLayout />}>
						<Route index element={<Home />} />
            <Route path="login" element={<Login />} />
						<Route path="register" element={<Register />} />

						<Route path="*" element={<NotFound />} />
					</Route>
				</Routes>
			</Router>
		</>
	);
}
export default App
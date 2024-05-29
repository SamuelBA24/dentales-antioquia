import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { UserContext } from './context/userContext';


import Home from './pages/Home';
import NotFound from './pages/NotFound';
import PublicLayout from './layouts/PublicLayout';
import Login from './pages/Login';
import Register from './pages/Register';
import { useState } from 'react';
import PrivateLayout from './layouts/PrivateLayout';
import Catalogo from './pages/Catalogo';

function App() {
  const [user, setUser] = useState({
		name: '',
		email: '',
		password: '',
	});

	return (
		<>
			<UserContext.Provider value={{ user, setUser }}>
				<Router>
					<Routes>
						<Route path="/" element={<PublicLayout />}>
							<Route index element={<Home />} />
							<Route path="login" element={<Login />} />
							<Route path="register" element={<Register />} />
							<Route path="*" element={<NotFound />} />
						</Route>
						<Route path="/dentales" element={<PrivateLayout />}>
							<Route path="catalogo" element={<Catalogo />} />
						</Route>
					</Routes>
				</Router>
			</UserContext.Provider>
		</>
	);
}
export default App
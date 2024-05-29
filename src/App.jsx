import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { UserContext } from './context/userContext';
import { UsersContext } from './context/usersContext';


import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Layout from './layouts/Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import { useState } from 'react';

import Catalogo from './pages/Catalogo';
import Contacto from './pages/Contacto';
import Carrito from './pages/Carrito';

function App() {
	const [users, setUsers] = useState([]);

	const [user, setUser] = useState({
		name: '',
		email: '',
		password: '',
		isActive: false,
		productsSelected: [],
	});

	return (
		<>
			<UsersContext.Provider value={{ users, setUsers }}>
				<UserContext.Provider value={{ user, setUser }}>
					<Router>
						<Routes>
							<Route path="/" element={<Layout />}>
								<Route index element={<Home />} />
								<Route path="login" element={<Login />} />
								<Route path="register" element={<Register />} />
								<Route path="contacto" element={<Contacto />} />
								<Route path="catalogo" element={<Catalogo />} />
								<Route path="carrito" element={<Carrito />} />

								<Route path="*" element={<NotFound />} />
							</Route>
						</Routes>
					</Router>
				</UserContext.Provider>
			</UsersContext.Provider>
		</>
	);
}
export default App
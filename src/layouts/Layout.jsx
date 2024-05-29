import { Outlet, NavLink, Link } from 'react-router-dom';
import icon from '../assets/img/icon.png';
import { useUsersContext } from "../context/usersContext"
import { useUserContext } from '../context/userContext';

const Layout = () => {
	const { users, setUsers } = useUsersContext();
	const { user, setUser } = useUserContext();

	const publicRoutes = [
		{
			name: 'Inicio',
			path: '/',
		},
		{
			name: 'Iniciar sesión',
			path: '/login',
		},
		{
			name: 'Registrar',
			path: '/register',
		},
	];

	const privateRoutes = [
		{
			name: 'Inicio',
			path: '/',
		},
		{
			name: 'Catalogo',
			path: '/catalogo',
		},
	];

	const quantityProducts = () => {
		let quantity = 0;
		if (!user.productsSelected) return;
		user.productsSelected.forEach((product) => {
			quantity += product.quantity;
		});
		return quantity;
	};

	const quantity = quantityProducts();

	const handleLogout = () => {
		const usersUpdated = users.map((user) => {
			if (user.email === user.email) {
				return {
					...user,
					isActive: false,
				};
			}
			return user;
		});
		setUsers(usersUpdated);
		setUser({
			name: '',
			email: '',
			password: '',
			isActive: false,
			productsSelected: [],
		});

		alert('Sesión cerrada');
	};

	return (
		<main className="min-h-screen bg-slate-100">
			<nav className="flex flex-wrap  justify-center md:justify-between items-center px-10 ">
				<section className="flex items-center">
					<Link to={'/'} className="flex items-center">
						<img src={icon} alt="icon" className="max-w-16 " />
						<h1 className="ml-2  text-3xl">Insumos</h1>
					</Link>
				</section>
				<ul className="flex gap-5 font-medium">
					{user.isActive ? (
						<>
							<li>
								<NavLink
									className={({ isActive }) =>
										isActive ? 'text-blue-600' : 'text-gray-600 ' + " flex gap-2 items-center"
									}
									to={'/carrito'}
								>
									<p>{quantity}</p>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart"
									>
										<path stroke="none" d="M0 0h24v24H0z" fill="none" />
										<path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
										<path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
										<path d="M17 17h-11v-14h-2" />
										<path d="M6 5l14 1l-1 7h-13" />
									</svg>
								</NavLink>
							</li>
							{privateRoutes.map((route, index) => (
								<li key={index}>
									<NavLink
										to={route.path}
										className={({ isActive }) =>
											isActive ? 'text-blue-600' : 'text-gray-600 '
										}
									>
										{route.name}
									</NavLink>
								</li>
							))}
							<li>
								<button className="text-gray-600" onClick={handleLogout}>
									Cerrar Sesión
								</button>
							</li>
						</>
					) : (
						publicRoutes.map((route, index) => (
							<li key={index}>
								<NavLink
									to={route.path}
									className={({ isActive }) =>
										isActive ? 'text-blue-600' : 'text-gray-600 '
									}
								>
									{route.name}
								</NavLink>
							</li>
						))
					)}
				</ul>
			</nav>
			<Outlet />
			<footer className="bg-blue-600 min-h-28 flex justify-center items-center ">
				<p className="text-white text-center text-xl">
					Copyright © Dentales Antioquia
				</p>
			</footer>
		</main>
	);
};

export default Layout;
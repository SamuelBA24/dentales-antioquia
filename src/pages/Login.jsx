import { Link, useNavigate } from 'react-router-dom';
import PasswordInput from '../components/PasswordInput';
import { useUsersContext } from '../context/usersContext';
import { useUserContext } from '../context/userContext';
import { useEffect } from 'react';

const Login = () => {
	const { users } = useUsersContext();
	const { user, setUser } = useUserContext();
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

		const { email, password } = e.target.elements;

		if (!email.value) {
			alert('Ingresa un correo electrónico');
			return;
		}

		if (!password.value) {
			alert('Ingresa una contraseña');
			return;
		}

		const userFound = users.find(
			(user) => user.email === email.value && user.password === password.value
		);

		if (!userFound) {
			alert('Correo electrónico o contraseña incorrectos');
		}

		userFound.isActive = true;
		setUser(userFound);

		
		return navigate('/catalogo');
	};

	useEffect(()=>{
		if(user.isActive){
			navigate('/catalogo')
		}
	},[])

	return (
		<main className="min-h-screen flex flex-col items-center">
			<Link to={'/'} className="mt-10">
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
					className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M5 12l14 0" />
					<path d="M5 12l6 6" />
					<path d="M5 12l6 -6" />
				</svg>
			</Link>
			<section className="mx-auto max-w-3xl mt-10 ">
				<h2 className="text-3xl font-bold text-center mx-auto max-w-2xl">
					Iniciar sesión
				</h2>
				<form
					className="flex flex-col gap-5 mt-5"
					onSubmit={(e) => handleSubmit(e)}
				>
					<div className="flex flex-col">
						<label htmlFor="email">Correo electrónico</label>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="Correo electrónico"
							className="p-2 border border-gray-300 rounded-lg"
						/>
					</div>
					<div className="flex flex-col">
						<label htmlFor="password">Contraseña</label>
						<PasswordInput />
					</div>
					<button
						type="submit"
						className="bg-blue-600 text-white p-2 rounded-lg w-64 mx-auto"
					>
						Iniciar sesión
					</button>
                    
				</form>
				<p>
					¿No estas registrado?,{' '}
					<Link to="/register" className="text-blue-600 mt-2 font-semibold">
						Registrate
					</Link>
				</p>
			</section>
		</main>
	);
};

export default Login;
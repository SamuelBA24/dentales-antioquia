import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div className='min-h-screen flex justify-center items-center flex-col'>
			<h1 className='text-5xl'>Esta página no existe</h1>
			<Link to="/" className="text-blue-700 text-3xl ">Volver al inicio</Link>
		</div>
	);
};

export default NotFound;
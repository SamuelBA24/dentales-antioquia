import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div>
			<h1>Esta página no existe</h1>
			<Link to="/">Volver al inicio</Link>
		</div>
	);
};

export default NotFound;
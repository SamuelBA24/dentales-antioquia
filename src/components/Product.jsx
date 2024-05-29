import { useUserContext } from '../context/userContext';

const Product = ({ name, image, price, salePrice, link }) => {
	const { user, setUser } = useUserContext();

	const handleAddToCart = () => {
		const productsSelected = Array.isArray(user.productsSelected)
			? user.productsSelected
			: [];
		const updatedUser = {
			...user,
			productsSelected: [
				...productsSelected,
				{ name, image, price, salePrice, link, quantity: 1 },
			],
		};
		setUser(updatedUser);
		localStorage.setItem('user', JSON.stringify(updatedUser));
	};

	const handleRemoveFromCart = (name) => {
		const updatedProductsSelected = user.productsSelected.filter(
			(product) => product.name !== name
		);
		const updatedUser = {
			...user,
			productsSelected: updatedProductsSelected,
		};
		setUser(updatedUser);
		localStorage.setItem('user', JSON.stringify(updatedUser));
	};
	return (
		<article className="max-w-56 h-auto border border-gray-300 hover:border-gray-400 p-5 rounded-md bg-white flex flex-col justify-center transition-all duration-150 ease-in-out gap-3">
			<img src={image} alt={name} />
			<h2 className="text-center font-bold text-xl">{name}</h2>
			<p className="text-center text-gray-600">
				{
					<span className={`${salePrice ? 'line-through text-gray-400' : ''}`}>
						${price}
					</span>
				}{' '}
				{salePrice && <span>${salePrice}</span>}
			</p>

			{user.isActive &&
				(user.productsSelected &&
				user.productsSelected.find((product) => product.name === name) ? (
					<button
						className="bg-gray-500 text-white font-bold py-2 rounded-md"
						onClick={() => handleRemoveFromCart(name)}
					>
						Producto en el carrito
					</button>
				) : (
					<button
						className="bg-blue-500 text-white font-bold py-2 rounded-md"
						onClick={handleAddToCart}
					>
						Agregar al carrito
					</button>
				))}
		</article>
	);
};

export default Product;
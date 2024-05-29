import { useUserContext } from '../context/userContext';

const Carrito = () => {
	const { user, setUser } = useUserContext();

	const handleRemoveFromCart = (name) => {
		const updatedProductsSelected = user.productsSelected.filter(
			(product) => product.name !== name
		);

		const updatedUser = {
			...user,
			productsSelected: updatedProductsSelected,
		};

		setUser(updatedUser);
	};

	const handleIncreaseQuantity = (name) => {
		const updatedProductsSelected = user.productsSelected.map((product) => {
			if (product.name === name) {
				return {
					...product,
					quantity: product.quantity + 1,
				};
			}
			return product;
		});

		const updatedUser = {
			...user,
			productsSelected: updatedProductsSelected,
		};

		setUser(updatedUser);
	};

	const handleDecreaseQuantity = (name) => {
		const updatedProductsSelected = user.productsSelected.map((product) => {
			if (product.name === name) {
				return {
					...product,
					quantity: product.quantity - 1,
				};
			}
			return product;
		});

		const updatedProductsSelectedFiltered = updatedProductsSelected.filter(
			(product) => product.quantity > 0
		);

		const updatedUser = {
			...user,
			productsSelected: updatedProductsSelectedFiltered,
		};
		setUser(updatedUser);
	};

	const total = () => {
		let total = 0;
		user.productsSelected.forEach((product) => {
			total += product.price * product.quantity;
		});
		return total;
	};

	return (
		<main className="min-h-screen">
			<header className="h-52 bg-blue-600 text-white flex justify-center items-center ">
				<h1 className="text-5xl font-bold text-center">Carrito</h1>
			</header>

			{<p className="text-center text-3xl font-bold my-3">Total: {total() } </p>}

			<ul className="flex flex-wrap gap-7 my-16 max-w-3xl mx-auto">
				{user.productsSelected.map((product, index) => (
					<li key={index}>
						<article className="max-w-56 h-auto border border-gray-300 hover:border-gray-400 p-5 rounded-md bg-white flex flex-col justify-center transition-all duration-150 ease-in-out gap-3">
							<h2 className="text-center font-bold text-2xl">{product.name}</h2>
							<img src={product.image} alt={product.name} />
							<p className="text-center">
								{product.salePrice ? (
									<>
										<span>{product.salePrice}</span>{' '}
										<span className="line-through">{product.price}</span>
									</>
								) : (
									<span>{product.price}</span>
								)}
							</p>
							<section className="flex gap-2 justify-center items-center">
								<button
									onClick={() => handleDecreaseQuantity(product.name)}
									className="p-3 bg-red-600 text-white font-bold"
								>
									-
								</button>
								<span className="font-bold">{product.quantity}</span>
								<button
									onClick={() => handleIncreaseQuantity(product.name)}
									className="p-3 bg-green-600 text-white font-bold"
								>
									+
								</button>
							</section>
							<button
								onClick={() => handleRemoveFromCart(product.name)}
								className="p-2 bg-red-700 text-white"
							>
								Eliminar
							</button>
						</article>
					</li>
				))}
			</ul>
		</main>
	);
};

export default Carrito;
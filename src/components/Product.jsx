const Product = ({ name, image, price, salePrice, link }) => {
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

			<button
				href={link}
				className="font-medium border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white  p-2 rounded-md text-center transition-all duration-150 ease-in-out"
			>
				Ver mas
			</button>
		</article>
	);
};

export default Product;
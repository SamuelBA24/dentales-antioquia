import Product from '../components/Product';
import { useUserContext } from '../context/userContext';

const Catalogo = () => {

	const products = [
		{
			name: 'Blanqueamiento Dental Perox Carba 1 jer Potenza',
			image:
				'https://fordental.co/wp-content/uploads/2023/06/Blanqueamiento-Potenza-al-22-.jpg',
			price: '22.750',
			salePrice: '21.117',
			link: 'item1.html',
		},
		{
			name: 'Micromotor Dental 35.000 rpm Fastrong',
			image:
				'https://fordental.co/wp-content/uploads/2023/07/Micromotor-Dental-.jpg',
			price: '533.000',
			salePrice: '485.030',
			link: '#',
		},
		{
			name: 'Abrebocas Separador De Carrillo Sencillo',
			image:
				'https://fordental.co/wp-content/uploads/2023/06/AbrebocasSeparadorDeCarrilloSencillo.jpg',
			price: '4.433',
			salePrice: '4.034',
			link: '#',
		},
		{
			name: 'Micro aplicadores amarillo 640 x',
			image:
				'https://fordental.co/wp-content/uploads/2023/06/Micro-aplicadores-amarillo-640-%C3%97-640-px.png',
			price: '9.735',
			salePrice: null,
			link: '#',
		},
		{
			name: 'Espejos Faciales',
			image:
				'https://fordental.co/wp-content/uploads/2023/06/EspejosFaciales.jpg',
			price: '22.000',
			salePrice: '20.500',
			link: '#',
		},
		{
			name: 'Fresa Arkansas Para Pulir Resina X Ud',
			image:
				'https://fordental.co/wp-content/uploads/2023/06/FresaArkansasParaPulirResinaXUd.jpg',
			price: '4.550',
			salePrice: null,
			link: '#',
		},
		{
			name: 'Adhesivo Dental Fix Para Brackets Jga 4 Gr + Acido Maquira',
			image:
				'https://fordental.co/wp-content/uploads/2023/06/Adhesivo-Fix-Para-Brackets-Jga-4-Gr-Acido-Maquira.jpg',
			price: '72.147',
			salePrice: '69.392',
			link: '#',
		},
		{
			name: 'Sutura Seda Caja X 12 Sobres',
			image:
				'https://fordental.co/wp-content/uploads/2023/06/Sutura30CajaX12Sobres.jpg',
			price: '19.854',
			salePrice: null,
			link: '#',
		},
	];

	return (
		<main>
			<section className="flex flex-col justify-center items-center bg-blue-700 text-center text-white  h-72 ">
				<h1 className="text-4xl lg:text-6xl font-bold">Nuestro Catalogo</h1>
				<p className="text-gray-300 text-xl mt-6">Productos de callidad</p>
			</section>

			<section className="max-w-6xl mx-auto flex flex-wrap justify-center  gap-16 my-10">
				{products.map(({ name, image, price, salePrice, link }, index) => (
					<Product
						name={name}
						image={image}
						price={price}
						salePrice={salePrice}
						link={link}
						key={index}
					/>
				))}
			</section>
		</main>
	);
};

export default Catalogo;

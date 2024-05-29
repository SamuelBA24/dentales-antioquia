import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'flowbite-react';
import dentist1 from '../assets/img/dentist1.jpg';
import dentist2 from '../assets/img/dentist2.jpg';
import dentist3 from '../assets/img/dentist3.jpg';

const Home = () => {
	const [isOpen, setIsOpen] = useState({
		0: false,
		1: false,
		2: false,
	});

	const info = [
		{
			title: 'Dentales Antioquia',
			content:
				'Somos un grupo económico dedicado a importar y comercializar en forma exclusiva productos para ortodoncia, distribuyéndolos a los profesionales especializados en esta área. Durante el tiempo que llevamos posicionados en el mercado hemos dado a conocer las bondades de nuestros productos, garantizando su excelente calidad y brindando una asesoría integral a todos nuestros clientes, pues para ello contamos con personal idóneo capacitado y una infraestructura adecuada para el desarrollo de nuestra labor.',
		},
		{
			title: 'Visión',
			content:
				'Convertir dentales antioquia, como empresa lider en la distribución de productos, equipos e insumos odontologicos y todos los requerimientos del sector salud en antioquia Colocar putnos de servicio en las principales ciudades de la costa para atender las necesidades y requerimientos con mayor rapidez.',
		},
		{
			title: 'Misión',
			content:
				'Atender las necesidades y requerimientos de los odontólogos, medicos e instituciones, de manera rapida y oportuna con los mejores estandares de calidad, manteniendo altos niveles de etica y profesionalismo al alcance de los clientes. Crear un ambiente de confianza,lealtad y seguridad dentro y fuera de la organización para nuestro personal y nuestra clientela se sientan participe del crecimiento de Dentales Antioquia.',
		},
	];

	const carrouselInfo = [
		{
			imgSrc: dentist1,
			alt: 'Imagen dentista 1',
			link: '/catalogo',
			text: 'Catalogo',
		},
		{
			imgSrc: dentist2,
			alt: 'Imagen dentista 2',
			link: '/contacto',
			text: 'Contacto',
		},
		{
			imgSrc: dentist3,
			alt: 'Imagen dentista 3',
			link: '/login',
			text: 'Iniciar sesión',
		},
	];

	const handleIsOpen = (index) => {
		setIsOpen((prevState) => ({
			...prevState,
			[index]: !prevState[index],
		}));
	};

	return (
		<main>
			<section className="h-56 sm:h-64 xl:h-80 2xl:max-h-96  mx-auto md:max-w-4xl">
				<Carousel slide={false}>
					{carrouselInfo.map(({ imgSrc, alt, link, text }, index) => (
						<section
							className="relative flex justify-center items-center"
							key={index}
						>
							<img src={imgSrc} alt={alt} className="aspect-auto" />
							<Link
								to={link}
								className=" absolute text-3xl md:text-5xl font-bold z-30 top-1 left-0 p-10 bg-white bg-opacity-50 hover:bg-opacity-70 transition-all duration-150"
								style={{
									top: '50%',
									left: '50%',
									transform: 'translate(-50%, -50%)',
								}}
							>
								{text}
							</Link>
						</section>
					))}
				</Carousel>
			</section>

			<section className="mx-auto max-w-5xl mt-10">
				{info.map((item, index) => (
					<details
						key={index}
						className=" hover:cursor-pointer bg-white p-2"
						open={isOpen[index]}
					>
						<summary
							className="h-24 flex items-center justify-between text-gray-700 hover:bg-slate-200"
							onClick={() => handleIsOpen(index)}
						>
							<h2 className="text-4xl font-bold p-4">{item.title}</h2>
							{isOpen[index] ? (
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
									className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-up"
								>
									<path stroke="none" d="M0 0h24v24H0z" fill="none" />
									<path d="M6 15l6 -6l6 6" />
								</svg>
							) : (
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
									className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"
								>
									<path stroke="none" d="M0 0h24v24H0z" fill="none" />
									<path d="M6 9l6 6l6 -6" />
								</svg>
							)}
						</summary>
						<p className="my-7 text-pretty">{item.content}</p>
					</details>
				))}
			</section>
		</main>
	);
};

export default Home;
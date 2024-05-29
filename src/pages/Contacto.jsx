const Contacto = () => {
	const handleSubmit = (e) => {
		e.preventDefault();

		alert('Mensaje enviado exitosamente');
	};
	return (
		<main className="min-h-screen flex flex-col justify-center items-center">
			<h1 className="text-3xl font-bold">Contacto</h1>

			<p>¡Hola! ¿En qué podemos ayudarte?</p>
			<section className="mx-auto max-w-3xl my-3">
				<form className="mt-8" onSubmit={(e) => handleSubmit(e)}>
					<div className="grid grid-cols-1 gap-6">
						<div>
							<label
								htmlFor="name"
								className="block text-sm font-medium text-gray-700"
							>
								Nombre
							</label>
							<div className="mt-1">
								<input
									type="text"
									id="name"
									name="name"
									className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
									placeholder="Ingrese su nombre"
								/>
							</div>
						</div>
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium text-gray-700"
							>
								Correo electrónico
							</label>
							<div className="mt-1">
								<input
									id="email"
									name="email"
									type="email"
									autoComplete="email"
									className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
									placeholder="Ingrese su correo electrónico"
								/>
							</div>
						</div>
						<div>
							<label
								htmlFor="message"
								className="block text-sm font-medium text-gray-700"
							>
								Mensaje
							</label>
							<div className="mt-1">
								<textarea
									id="message"
									name="message"
									rows={4}
									className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
									placeholder="Ingrese su mensaje"
								/>
							</div>
						</div>
						<div className=" ">
							<button
								type="submit"
								className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
							>
								Enviar
							</button>
						</div>
					</div>
				</form>
			</section>

			<p>¡Gracias por contactarnos!</p>

			<h2>¡Siguenos en nuestras redes sociales!</h2>

			<ul className="flex gap-2">
				<li className="text-blue-600 underline">
					<a href="https://www.facebook.com">Facebook</a>
				</li>
				<li className="text-blue-600 underline">
					<a href="https://www.instagram.com">Instagram</a>
				</li>
				<li className="text-blue-600 underline">
					<a href="https://www.twitter.com">Twitter</a>
				</li>
			</ul>
		</main>
	);
};

export default Contacto;
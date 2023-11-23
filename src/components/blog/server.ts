// import OpenAI from "openai";

// const openai = new OpenAI({
// 	apiKey: import.meta.env.PUBLIC_OPENAI_API_KEY,
// 	dangerouslyAllowBrowser: true
// });

export const getFilters = () => {
  return  [
		{
			name: 'Todos los artículos',
			id: '1'
		},
		// {
		// 	name: 'solo AI',
		// 	id: '2'
		// },
		// {
		// 	name: 'programación',
		// 	id: '3'
		// },
		// {
		// 	name: 'cuida la vista',
		// 	id: '4'
		// }
	];
}


export const getArticles = () => {
  return [
		{
			title: 'Introducción a Python',
			image: 'imagen1.jpg',
			description: 'Aprende los conceptos básicos y potencial de Python en la programación.',
			id: '1'
		},
		{
			title: 'Machine Learning Explicado',
			image: 'imagen2.jpg',
			description:
				'Descubre cómo funciona el aprendizaje automático y su aplicación en el mundo real.',
			id: '2'
		},
		{
			title: 'Ciberseguridad: Principios Básicos',
			image: 'imagen3.jpg',
			description:
				'Conoce los fundamentos esenciales para proteger sistemas y datos de amenazas cibernéticas.',
			id: '3'
		},
		{
			title: 'Introducción a Python',
			image: 'imagen1.jpg',
			description: 'Aprende los conceptos básicos y potencial de Python en la programación.',
			id: '44'
		},
		{
			title: 'Machine Learning Explicado',
			image: 'imagen2.jpg',
			description:
				'Descubre cómo funciona el aprendizaje automático y su aplicación en el mundo real.',
			id: '45'
		},
		{
			title: 'Ciberseguridad: Principios Básicos',
			image: 'imagen3.jpg',
			description:
				'Conoce los fundamentos esenciales para proteger sistemas y datos de amenazas cibernéticas.',
			id: '46'
		},
		{
			title: 'Desarrollo Web Moderno',
			image: 'imagen18.jpg',
			description:
				'Explora las tendencias actuales en el desarrollo web y las herramientas más utilizadas.',
			id: '47'
		},
		{
			title: 'Ética en la Inteligencia Artificial',
			image: 'imagen19.jpg',
			description: 'Aspectos éticos y consideraciones fundamentales en el desarrollo de la IA.',
			id: '48'
		},
		{
			title: 'Blockchain y su Impacto',
			image: 'imagen20.jpg',
			description: 'Comprende la tecnología blockchain y su influencia en diferentes industrias.',
			id: '49'
		},
		{
			title: 'Desarrollo Web Moderno',
			image: 'imagen18.jpg',
			description:
				'Explora las tendencias actuales en el desarrollo web y las herramientas más utilizadas.',
			id: '18'
		},
		{
			title: 'Ética en la Inteligencia Artificial',
			image: 'imagen19.jpg',
			description: 'Aspectos éticos y consideraciones fundamentales en el desarrollo de la IA.',
			id: '19'
		},
		{
			title: 'Blockchain y su Impacto',
			image: 'imagen20.jpg',
			description: 'Comprende la tecnología blockchain y su influencia en diferentes industrias.',
			id: '20'
		},
		// Nuevos artículos
		{
			title: 'Big Data: Análisis masivo de datos',
			image: 'imagen21.jpg',
			description:
				'Descubre cómo se procesan y analizan grandes volúmenes de datos para obtener información valiosa.',
			id: '21'
		},
		{
			title: 'Aprendizaje Profundo (Deep Learning)',
			image: 'imagen22.jpg',
			description:
				'Sumérgete en las redes neuronales profundas y sus aplicaciones en la inteligencia artificial.',
			id: '22'
		},
		{
			title: 'Arquitectura de Computadores',
			image: 'imagen23.jpg',
			description:
				'Conoce los principios fundamentales del diseño y funcionamiento de computadoras.',
			id: '23'
		},
		{
			title: 'Desarrollo de Aplicaciones Móviles',
			image: 'imagen24.jpg',
			description: 'Aspectos clave para crear aplicaciones móviles eficientes y funcionales.',
			id: '24'
		},
		{
			title: 'Robótica: Futuro y Avances',
			image: 'imagen25.jpg',
			description:
				'Avances y perspectivas futuras en la creación de robots para diversas aplicaciones.',
			id: '25'
		},
		{
			title: 'Cloud Computing: Fundamentos',
			image: 'imagen26.jpg',
			description: 'Principios básicos y ventajas de la computación en la nube en el mundo actual.',
			id: '26'
		},
		{
			title: 'Programación Funcional con Haskell',
			image: 'imagen27.jpg',
			description: 'Explora el paradigma funcional utilizando Haskell como lenguaje principal.',
			id: '27'
		},
		{
			title: 'Seguridad en Redes Informáticas',
			image: 'imagen28.jpg',
			description: 'Conceptos y prácticas para mantener seguras las redes de comunicación.',
			id: '28'
		},
		{
			title: 'Realidad Aumentada: Aplicaciones',
			image: 'imagen29.jpg',
			description: 'Usos y aplicaciones de la realidad aumentada en diversos campos tecnológicos.',
			id: '29'
		},
		{
			title: 'Introducción a la Programación Orientada a Objetos',
			image: 'imagen30.jpg',
			description: 'Conceptos iniciales y ventajas de la programación orientada a objetos.',
			id: '30'
		}
	];
}


// export async function generateMarkdown(topic:string) {
// 	const completion = await openai.chat.completions.create({
//     messages: [
// 			{ role: "system", content: "eres un experto creador de blog con markdown, tu tarea es hablar sobre el tema indicado por el usuario y crear un markdown" },
//       {
//         role: "user",
//         content: topic
//       }
// 		],
//     model: "gpt-3.5-turbo",
// 		// max_tokens: 500,
//   });

// 	console.log("OPEN AI: ", completion.choices[0]);
	
// }
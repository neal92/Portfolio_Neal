import React from "react";

interface ContactProps {
	language: 'fr' | 'en';
}

const Contact: React.FC<ContactProps> = ({ language }) => {
		const t = {
			en: {
				contact: 'Contact',
				reach: 'Feel free to reach out to me via the form below!',
				name: 'Name',
				email: 'Email',
				message: 'Message',
				send: 'Send',
			},
			fr: {
				contact: 'Contact',
				reach: 'N’hésitez pas à me contacter via le formulaire ci-dessous !',
				name: 'Nom',
				email: 'Email',
				message: 'Message',
				send: 'Envoyer',
			}
		};
		return (
			<section id="contact" className="py-16 px-4 bg-gray-100">
				<div className="max-w-2xl mx-auto text-center">
					<h2 className="text-3xl font-bold mb-4">{t[language].contact}</h2>
					<p className="mb-8">{t[language].reach}</p>
					<form className="space-y-4">
						<input type="text" placeholder={t[language].name} className="w-full p-2 border rounded" required />
						<input type="email" placeholder={t[language].email} className="w-full p-2 border rounded" required />
						<textarea placeholder={t[language].message} className="w-full p-2 border rounded" rows={5} required></textarea>
						<button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">{t[language].send}</button>
					</form>
					<p className="mb-4">
					  {language === 'fr'
					    ? "Vous pouvez aussi m'écrire directement à "
					    : "You can also email me directly at "}
					  <a href="mailto:adrien.martin@example.com" className="text-blue-600 underline">adrien.martin@example.com</a>
					</p>
				</div>
			</section>
		);
};

export default Contact;
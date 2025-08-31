import React from "react";

const Contact: React.FC = () => {
	return (
		<section id="contact" className="py-16 px-4 bg-gray-100 dark:bg-slate-900">
			<div className="max-w-2xl mx-auto text-center text-slate-800 dark:text-white">
				<h2 className="text-3xl font-bold mb-4 text-slate-800 dark:text-white">Contact</h2>
				<p className="mb-8 text-slate-800 dark:text-white">Feel free to reach out to me via the form below!</p>
				<form className="space-y-4">
					<input type="text" placeholder="Name" className="w-full p-2 border rounded bg-white dark:bg-slate-800 text-slate-800 dark:text-white" required />
					<input type="email" placeholder="Email" className="w-full p-2 border rounded bg-white dark:bg-slate-800 text-slate-800 dark:text-white" required />
					<textarea placeholder="Message" className="w-full p-2 border rounded bg-white dark:bg-slate-800 text-slate-800 dark:text-white" rows={5} required></textarea>
					<button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 transition">Send</button>
				</form>
				<br />
				<p className="mb-4 text-slate-800 dark:text-white">
					You can also email me directly at <a href="mailto:nealbristol2002@gmail.com" className="text-blue-600 underline">nealbristol2002@gmail.com</a>
				</p>
			</div>
		</section>
	);
};

export default Contact;
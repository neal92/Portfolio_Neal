import React from "react";
// Animation fade-in au scroll
const FadeInSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const ref = React.useRef<HTMLDivElement>(null);
	const [isVisible, setIsVisible] = React.useState(false);

	React.useEffect(() => {
		const observer = new window.IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.1 }
		);
		if (ref.current) {
			observer.observe(ref.current);
		}
		return () => observer.disconnect();
	}, []);

	return (
		<div
			ref={ref}
			className={`transition-opacity transition-transform duration-2000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}
		>
			{children}
		</div>
	);
};

const Contact: React.FC = () => {
	const [message, setMessage] = React.useState('');
	const messageRef = React.useRef<HTMLTextAreaElement>(null);

	React.useEffect(() => {
		// Récupérer le message depuis sessionStorage
		const storedMessage = sessionStorage.getItem('contactMessage');
		if (storedMessage) {
			setMessage(storedMessage);
			sessionStorage.removeItem('contactMessage');
			// Focus sur le champ message après un court délai
			setTimeout(() => {
				messageRef.current?.focus();
			}, 300);
		}
	}, []);

	// Observer les changements de hash pour vider le message
	React.useEffect(() => {
		const handleHashChange = () => {
			if (window.location.hash !== '#contact') {
				setMessage('');
			}
		};
		window.addEventListener('hashchange', handleHashChange);
		return () => window.removeEventListener('hashchange', handleHashChange);
	}, []);

	return (
				<FadeInSection>
					<section id="contact" className="py-16 sm:py-20 px-4 bg-gradient-to-b from-gray-100 to-white dark:from-slate-900 dark:to-slate-800 pb-0">
						<div className="max-w-2xl mx-auto">
							<div className="glass dark:glass-dark rounded-3xl shadow-2xl p-6 sm:p-8 text-center">
								<h2 className="text-2xl sm:text-3xl font-extrabold mb-2 sm:mb-3 text-blue-700 dark:text-blue-400 tracking-tight">Contact</h2>
								<p className="mb-4 sm:mb-6 text-sm sm:text-base text-slate-700 dark:text-slate-300">Let's build something great together! Send me a message or connect via social networks below.</p>
												 <form
													 action="https://formspree.io/f/xldwvzvg"
													 method="POST"
													 className="space-y-6"
												 >
									<div className="flex items-center bg-white dark:bg-slate-800 rounded-xl shadow px-4 py-3 mb-2">
										<span className="mr-3 text-blue-500 dark:text-blue-300">
											<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="7" r="4"/><path d="M5.5 21a6.5 6.5 0 0 1 13 0"/></svg>
										</span>
										<input type="text" name="name" placeholder="Name" className="w-full bg-transparent outline-none text-slate-800 dark:text-white" required />
									</div>
									<div className="flex items-center bg-white dark:bg-slate-800 rounded-xl shadow px-4 py-3 mb-2">
										<span className="mr-3 text-blue-500 dark:text-blue-300">
											<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M2 7l10 7 10-7"/></svg>
										</span>
										<input type="email" name="email" placeholder="Email" className="w-full bg-transparent outline-none text-slate-800 dark:text-white" required />
									</div>
									<div className="bg-white dark:bg-slate-800 rounded-xl shadow px-4 py-3 mb-2 flex flex-col items-start">
										<span className="mb-2 flex items-center justify-center" style={{ minWidth: '28px', minHeight: '28px' }}>
											<svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 dark:text-blue-300">
												<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
											</svg>
										</span>
										<textarea 
											name="message" 
											placeholder="Message" 
											className="w-full bg-transparent outline-none text-slate-800 dark:text-white" 
											rows={4} 
											required
											ref={messageRef}
											value={message}
											onChange={(e) => setMessage(e.target.value)}
										></textarea>
									</div>
									<button type="submit" className="w-full py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:scale-105 hover:shadow-blue-500/30 transition-all duration-300">Send Message</button>
								</form>
								<div className="mt-10 flex flex-col items-center gap-4">
									<span className="text-base text-slate-500 dark:text-slate-400">Or contact me directly:</span>
									<a href="mailto:nealbristol2002@gmail.com" className="text-blue-600 dark:text-blue-400 underline font-semibold">nealbristol2002@gmail.com</a>
									<div className="flex gap-6 mt-4">
										<a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-blue-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow hover:scale-110 transition">
											<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 7.5c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.74c0 .27.16.58.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>
										</a>
										<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-blue-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow hover:scale-110 transition">
											<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M8 11v5M8 8v.01M12 16v-5M16 16v-3a4 4 0 0 0-8 0"/></svg>
										</a>
									</div>
								</div>
							</div>
						</div>
					</section>
				</FadeInSection>
			);
};

export default Contact;
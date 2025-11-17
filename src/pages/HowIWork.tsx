import React from 'react';
import { CheckCircle2, Rocket, Code, TestTube, Zap, Shield, Headphones, Server } from 'lucide-react';

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
      className={`transition-opacity transition-transform duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}
    >
      {children}
    </div>
  );
};

const HowIWork: React.FC = () => {
  const process = [
    {
      step: '1',
      title: 'Discovery Call',
      description: 'Free 30-minute consultation to understand your needs and goals',
      icon: Headphones,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      step: '2',
      title: 'Planning & Design',
      description: 'Create a detailed project plan with mockups and timeline',
      icon: Code,
      color: 'from-purple-500 to-pink-500',
    },
    {
      step: '3',
      title: 'Development',
      description: 'Build your project with clean code and modern technologies',
      icon: Rocket,
      color: 'from-orange-500 to-red-500',
    },
    {
      step: '4',
      title: 'Testing & Launch',
      description: 'Rigorous testing and smooth deployment to production',
      icon: TestTube,
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const pricing = [
    {
      name: 'Basic Development',
      price: '€350',
      description: 'You provide all specifications',
      features: [
        'Frontend & Backend development',
        'Database integration',
        'Based on your specifications',
        'Your design/template required',
        'Technical requirements needed',
        'No design or planning included',
      ],
      highlight: false,
      badge: 'Budget-Friendly',
    },
    {
      name: 'Full Service',
      price: '€550',
      description: 'Complete development with support',
      features: [
        'Complete project planning',
        'Custom mockup & design',
        'Specifications document included',
        'Frontend & Backend development',
        'Database integration',
        'Full guidance & support',
      ],
      highlight: true,
      badge: 'Most Popular',
    },
    {
      name: 'Custom Project',
      price: 'Contact Me',
      description: 'Tailored solutions for unique needs',
      features: [
        'Complex functionality',
        'Advanced integrations',
        'Large-scale applications',
        'E-commerce platforms',
        'Custom API development',
        'Personalized quote',
      ],
      highlight: false,
      badge: 'Enterprise',
    },
  ];

  const support = [
    {
      icon: Shield,
      title: 'Guaranteed Support',
      description: '30 days free support after launch',
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Respect deadlines and milestones',
    },
    {
      icon: Server,
      title: 'Hosting Partner',
      description: 'Simple & affordable hosting solutions included',
    },
  ];

  return (
    <div className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-br from-pink-100 to-orange-100 dark:from-pink-900 dark:to-orange-900 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <FadeInSection>
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block p-1 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-900 dark:to-purple-900 rounded-full mb-4 sm:mb-6">
              <div className="bg-white dark:bg-slate-900 px-4 py-1 sm:px-5 sm:py-1.5 rounded-full">
                <span className="text-xs font-semibold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                  How I Work
                </span>
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-4 sm:mb-6 leading-tight">
              Simple Process, Quality Results
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              From initial consultation to final launch, I guide you through every step with transparency and professionalism
            </p>
          </div>
        </FadeInSection>

        {/* Process Steps */}
        <FadeInSection>
          <div className="mb-16 sm:mb-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {process.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="relative">
                    {/* Connector line (hidden on mobile, last item) */}
                    {index < process.length - 1 && (
                      <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-slate-300 to-slate-200 dark:from-slate-700 dark:to-slate-800 z-0"></div>
                    )}
                    
                    <div className="relative bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 dark:border-slate-800">
                      {/* Step number */}
                      <div className={`absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                        {item.step}
                      </div>
                      
                      {/* Icon */}
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-4 mx-auto`}>
                        <Icon className="text-white" size={32} />
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-white mb-2 text-center">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 text-center leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeInSection>

        {/* Pricing Section */}
        <FadeInSection>
          <div className="mb-16 sm:mb-20">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 dark:text-white mb-8 sm:mb-12 text-center">
              Transparent Pricing
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {pricing.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
                    plan.highlight
                      ? 'border-purple-500 dark:border-purple-600 transform scale-105'
                      : 'border-slate-200 dark:border-slate-800 hover:-translate-y-2'
                  }`}
                >
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className={`px-4 py-1 rounded-full text-xs font-bold shadow-lg ${
                      plan.highlight 
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                        : plan.badge === 'Budget-Friendly'
                        ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white'
                        : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                    }`}>
                      {plan.badge}
                    </span>
                  </div>
                  
                  <div className="text-center mb-6">
                    <h4 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white mb-2">
                      {plan.name}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                      {plan.description}
                    </p>
                    <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {plan.price}
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="text-green-500 mr-2 flex-shrink-0 mt-0.5" size={18} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button
                    className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                      plan.highlight
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>

        {/* Support & Hosting */}
        <FadeInSection>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-900 dark:to-purple-900 rounded-3xl p-8 sm:p-12 shadow-2xl">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-8 sm:mb-12 text-center">
              Complete Support & Hosting
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {support.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-white" size={32} />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-blue-100">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-10 text-center">
              <p className="text-white text-base sm:text-lg mb-6">
                <strong>Hosting Partner:</strong> I collaborate with a reliable hosting provider to offer you simple, 
                fast, and secure hosting at just <strong>€5/month</strong>, including domain name and maintenance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 sm:px-6 py-3 text-white text-sm sm:text-base">
                  ✓ Domain name included
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 sm:px-6 py-3 text-white text-sm sm:text-base">
                  ✓ Regular maintenance
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 sm:px-6 py-3 text-white text-sm sm:text-base">
                  ✓ SSL Certificate
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 sm:px-6 py-3 text-white text-sm sm:text-base">
                  ✓ 99.9% Uptime
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
};

export default HowIWork;

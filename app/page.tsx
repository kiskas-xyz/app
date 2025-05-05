'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    let lastScroll = window.scrollY;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsHeaderVisible(currentScroll < lastScroll || currentScroll < 100);
      lastScroll = currentScroll;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 bg-white shadow-sm border-b flex justify-between items-center px-8 py-6 ${isHeaderVisible ? '' : '-translate-y-full'}`}>
        <h1 className="text-3xl font-bold tracking-tight">Kiskas</h1>
        <nav className="space-x-6 text-sm font-medium text-gray-600">
          <a href="#features" className="hover:text-black transition">Features</a>
          <a href="#pricing" className="hover:text-black transition">Pricing</a>
          <a href="#how" className="hover:text-black transition">How It Works</a>
          <a href="#contact" className="hover:text-black transition">Contact</a>
        </nav>
      </header>

      <section className="relative text-center py-44 px-6 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,0,0,0.03)_0%,_transparent_70%)] pointer-events-none"></div>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          <div className="md:w-1/2 text-left">
            <h2 className="text-5xl font-extrabold mb-6 leading-tight">Simplify Custom Email Setup</h2>
            <p className="text-lg mb-4 text-gray-700">
              {"Kiskas is a done-for-you service for custom domain emails. We handle all the setup so you don't have to."}
            </p>
            <p className="text-md text-gray-500 mb-8">
              {"Google Workspace charges £60 per user per year. Kiskas gives you 10 custom emails for just £15 a year. No catch."}
            </p>
            <a href="#contact" className="inline-block bg-black text-white px-8 py-4 rounded-full text-sm font-semibold shadow-md hover:bg-gray-900 transition">
              Get Started
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <svg className="w-full max-w-sm" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="200" height="200" rx="16" fill="#f9fafb" />
              <path d="M50 70h100v60H50z" fill="#e5e7eb" />
              <path d="M50 70l50 35 50-35" stroke="#d1d5db" strokeWidth="2" fill="none" />
              <path d="M75 115h50v5H75z" fill="#d1d5db" />
              <circle cx="100" cy="100" r="85" stroke="#e5e7eb" strokeWidth="4" />
            </svg>
          </div>
        </div>
      </section>

      <section id="features" className="py-44 px-6 bg-white text-center">
        <h3 className="text-3xl font-bold mb-16">Why Choose Kiskas?</h3>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="text-4xl mb-4">🛠️</div>
            <h4 className="text-xl font-semibold mb-2">We Handle Setup</h4>
            <p className="text-gray-600">{"No DNS or email headaches. We configure everything for you, manually and correctly."}</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="text-4xl mb-4">💰</div>
            <h4 className="text-xl font-semibold mb-2">Affordable Pricing</h4>
            <p className="text-gray-600">{"Start from just £15/year — up to 75% cheaper than Google Workspace for similar results."}</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="text-4xl mb-4">💬</div>
            <h4 className="text-xl font-semibold mb-2">24/7 Support</h4>
            <p className="text-gray-600">{"We’re always available to help, no matter your time zone or technical level."}</p>
          </div>
        </div>
      </section>

      <section id="how" className="py-44 px-6 bg-gray-50 text-center">
        <h3 className="text-3xl font-bold mb-16">How It Works</h3>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 text-left">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="text-2xl font-bold mb-2">1. Contact Us</div>
            <p className="text-gray-700">{"Send us your domain and preferred emails via your company email or form (Stripe integration coming soon)."}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="text-2xl font-bold mb-2">2. Payment</div>
            <p className="text-gray-700">{"Make your payment and get an instant booking link for a live setup call."}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="text-2xl font-bold mb-2">3. Live Setup</div>
            <p className="text-gray-700">{"Join the call and we’ll configure everything in under 10 minutes — free of charge."}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="text-2xl font-bold mb-2">Self-Setup Option</div>
            <p className="text-gray-700">{"Prefer DIY? Download our PDF guide and follow step-by-step instructions."}</p>
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-44 px-6 bg-gray-100 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.03)_0%,_transparent_70%)] pointer-events-none"></div>
        <div className="relative z-10">
          <h3 className="text-3xl font-bold mb-10">Let’s Get You Set Up</h3>
          <p className="mb-8 text-gray-600">{"Ready to start or have questions? Reach out and we’ll handle the rest."}</p>
          <a href="mailto:hello@kiskas.xyz" className="bg-black text-white px-8 py-4 rounded-full text-sm font-semibold shadow-md hover:bg-gray-900 transition">
            Contact Us
          </a>
        </div>
      </section>

      <footer className="py-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Kiskas. A product of DAS Technology Limited. All rights reserved.
      </footer>
    </main>
  );
}

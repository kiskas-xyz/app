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
            <p className="text-md text-gray-500 mb-8">Google Workspace charges £60 per user per year. Kiskas gives you 10 custom emails for just £15 a year. No catch.</p>
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
            <p className="text-gray-600">No DNS or email headaches. We configure everything for you, manually and correctly.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="text-4xl mb-4">💰</div>
            <h4 className="text-xl font-semibold mb-2">Affordable Pricing</h4>
            <p className="text-gray-600">Start from just £15/year — up to 75% cheaper than Google Workspace for similar results.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="text-4xl mb-4">💬</div>
            <h4 className="text-xl font-semibold mb-2">24/7 Support</h4>
            <p className="text-gray-600">We’re always available to help, no matter your time zone or technical level.</p>
          </div>
        </div>
      </section>

      <section id="savings" className="py-44 px-6 bg-gray-50 text-center">
        <h3 className="text-3xl font-bold mb-10">Cost Comparison for 10 Email Addresses</h3>
        <p className="mb-10 text-gray-600 max-w-3xl mx-auto text-lg">
          Want 10 emails on your domain? Here's what you'll pay per year with each provider:
        </p>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto text-left">
          <div className="bg-white p-6 rounded-xl shadow border-2 border-green-500">
            <h4 className="text-xl font-semibold mb-2">Kiskas</h4>
            <p className="text-3xl font-bold text-green-600">£30/year</p>
            <p className="text-sm text-gray-500">10 emails included — no extra charges</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="text-xl font-semibold mb-2">Google Workspace</h4>
            <p className="text-3xl font-bold text-red-600">£570/year</p>
            <p className="text-sm text-gray-500">£57 × 10 users</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="text-xl font-semibold mb-2">Zoho Mail Premium</h4>
            <p className="text-3xl font-bold text-red-600">£380/year</p>
            <p className="text-sm text-gray-500">£38 × 10 users</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="text-xl font-semibold mb-2">Namecheap Pro</h4>
            <p className="text-3xl font-bold text-red-600">£330/year</p>
            <p className="text-sm text-gray-500">£33 × 10 mailboxes</p>
          </div>
        </div>
      </section>




      <section id="how" className="py-44 px-6 bg-gray-50 text-center">
        <h3 className="text-3xl font-bold mb-16">How It Works</h3>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 text-left">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="text-2xl font-bold mb-2">1. Contact Us</div>
            <p className="text-gray-700">Send us your domain and preferred emails via your company email or form (Stripe integration coming soon).</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="text-2xl font-bold mb-2">2. Payment</div>
            <p className="text-gray-700">Make your payment and get an instant booking link for a live setup call.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="text-2xl font-bold mb-2">3. Live Setup</div>
            <p className="text-gray-700">Join the call and we’ll configure everything in under 10 minutes — free of charge.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="text-2xl font-bold mb-2">Self-Setup Option</div>
            <p className="text-gray-700">Prefer DIY? Download our PDF guide and follow step-by-step instructions.</p>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-44 px-6 bg-white text-center">
        <h3 className="text-3xl font-bold mb-10">Simple, Transparent Pricing</h3>
        <p className="mb-14 text-gray-500 max-w-xl mx-auto">Choose a plan that works for you — monthly flexibility or yearly savings.</p>
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-left">
          <div className="border rounded-2xl p-8 shadow-sm">
            <h4 className="text-xl font-semibold mb-2">Starter</h4>
            <p className="text-2xl font-bold mb-1">£3/mo</p>
            <p className="text-sm text-gray-500 mb-4">or £30/year</p>
            <ul className="mb-4 space-y-2 text-sm text-gray-600">
              <li>1 Domain</li>
              <li>Up to 10 Emails</li>
              <li>Manual DNS Setup</li>
              <li>Email Routing</li>
              <li>24/7 Support</li>
            </ul>
          </div>
          <div className="border rounded-2xl p-8 shadow-md bg-gray-50 relative">
            <span className="absolute top-4 right-4 bg-black text-white text-xs px-3 py-1 rounded-full">Most Popular</span>
            <h4 className="text-xl font-semibold mb-2">Pro</h4>
            <p className="text-2xl font-bold mb-1">£7/mo</p>
            <p className="text-sm text-gray-500 mb-4">or £70/year</p>
            <ul className="mb-4 space-y-2 text-sm text-gray-600">
              <li>Up to 3 Domains</li>
              <li>Up to 25 Emails</li>
              <li>Guided DNS or Nameserver Setup</li>
              <li>Email Routing</li>
              <li>24/7 Support</li>
            </ul>
          </div>
          <div className="border rounded-2xl p-8 shadow-sm">
            <h4 className="text-xl font-semibold mb-2">Business</h4>
            <p className="text-2xl font-bold mb-1">£15/mo</p>
            <p className="text-sm text-gray-500 mb-4">or £150/year</p>
            <ul className="mb-4 space-y-2 text-sm text-gray-600">
              <li>Up to 10 Domains</li>
              <li>Up to 100 Emails</li>
              <li>Full Setup & Management</li>
              <li>Priority Support</li>
              <li>24/7 Support</li>
            </ul>
          </div>
          <div className="border rounded-2xl p-8 shadow-sm bg-gray-100">
            <h4 className="text-xl font-semibold mb-2">Enterprise</h4>
            <p className="text-2xl font-bold mb-1">Custom</p>
            <p className="text-sm text-gray-500 mb-4">Billed annually or quarterly</p>
            <ul className="mb-4 space-y-2 text-sm text-gray-600">
              <li>Unlimited Domains</li>
              <li>Unlimited Emails</li>
              <li>Dedicated Account Manager</li>
              <li>Custom API & Automation</li>
              <li>24/7 Priority Support</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-44 px-6 bg-white text-center">
        <h3 className="text-3xl font-bold mb-10">Trusted By Real Users</h3>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <p className="text-gray-700 italic mb-4">“Working with Kiskas through Dastech has been a breeze. Fast, reliable and cost-effective.”</p>
            <h4 className="text-sm font-semibold">dastech.org.uk</h4>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <p className="text-gray-700 italic mb-4">“Kiskas helped us set up email routing for our restaurant clients. Super support!”</p>
            <h4 className="text-sm font-semibold">myqrmenu.co</h4>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <p className="text-gray-700 italic mb-4">“A great solution for dev communities. Kiskas made custom email simple.”</p>
            <h4 className="text-sm font-semibold">React Native Nigeria</h4>
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-44 px-6 bg-gray-100 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.03)_0%,_transparent_70%)] pointer-events-none"></div>
        <div className="relative z-10">
          <h3 className="text-3xl font-bold mb-10">Let’s Get You Set Up</h3>
          <p className="mb-8 text-gray-600">Ready to start or have questions? Reach out and we’ll handle the rest.</p>
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

import React, { useState, useEffect } from 'react';
import { Dumbbell, Calendar, Mail, User, Clock, ArrowRight, Menu, X, CheckCircle, Activity } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigateTo = (page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
  };
  
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-emerald-500 selection:text-white flex flex-col">
      {/* dd1Navigationwq */}
      <nav className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div 
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => navigateTo('home')}
            >
              <div className="bg-emerald-500 p-2 rounded-lg group-hover:bg-emerald-400 transition-colors">
                <Dumbbell className="h-6 w-6 text-zinc-950" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                Apex<span className="text-emerald-500">Fit</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['home', 'classes', 'contact'].map((page) => (
                  <button
                    key={page}
                    onClick={() => navigateTo(page)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${
                      currentPage === page
                        ? 'bg-zinc-800 text-emerald-400'
                        : 'text-zinc-300 hover:bg-zinc-800 hover:text-white'
                    } capitalize`}
                  >
                    {page}
                  </button>
                ))}
                <button onClick={() => navigateTo('classes')} className="bg-emerald-500 hover:bg-emerald-400 text-zinc-950 px-5 py-2.5 rounded-md text-sm font-bold transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                  Join Now
                </button>
              </div>
            </div>

            {/* Mobile menu buttonsd sd1*/}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800 focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-zinc-900 border-b border-zinc-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['home', 'classes', 'contact'].map((page) => (
                <button
                  key={page}
                  onClick={() => navigateTo(page)}
                  className={`block w-full text-left px-3 py-4 rounded-md text-base font-medium ${
                    currentPage === page
                      ? 'bg-zinc-800 text-emerald-400'
                      : 'text-zinc-300 hover:bg-zinc-800 hover:text-white'
                  } capitalize`}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow">
        {currentPage === 'home' && <HomePage navigateTo={navigateTo} />}
        {currentPage === 'classes' && <ClassesPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Footer */}
      <footer className="bg-zinc-900 border-t border-zinc-800 py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-zinc-400 text-sm">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Dumbbell className="h-5 w-5 text-emerald-500" />
            <span className="font-semibold text-zinc-300">ApexFit Studios</span>
          </div>
          <p>© 2026 ApexFit. All rights reserved. Built with React & .NET.</p>
        </div>
      </footer>
    </div>
  );
}

// --- PAGE COMPONENTS ---

function HomePage({ navigateTo }) {
  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Abstract Background Design */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl opacity-50 mix-blend-screen"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-zinc-600/20 rounded-full blur-3xl opacity-50 mix-blend-screen"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 lg:pt-32 lg:pb-40 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
              Push Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-500">Limits.</span><br />
              Define Your <span className="text-white">Future.</span>
            </h1>
            <p className="mt-4 text-xl text-zinc-400 max-w-2xl mx-auto lg:mx-0 mb-10">
              Join our premium fitness facility tailoemerald for all levels. Experience world-class coaching, state-of-the-art equipment, and a community that pushes you higher.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => navigateTo('classes')}
                className="bg-emerald-500 hover:bg-emerald-400 text-zinc-950 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center group shadow-[0_0_20px_rgba(16,185,129,0.4)]"
              >
                View Classes
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => navigateTo('contact')}
                className="bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 px-8 py-4 rounded-full font-bold text-lg transition-all"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="lg:w-1/2 mt-16 lg:mt-0 flex justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-full border border-zinc-800 bg-zinc-900/50 flex items-center justify-center p-8 backdrop-blur-sm">
               <div className="absolute inset-4 rounded-full border border-zinc-700/50 animate-[spin_60s_linear_infinite]"></div>
               <div className="absolute inset-12 rounded-full border border-dashed border-emerald-900/50 animate-[spin_40s_linear_infinite_reverse]"></div>
               <Activity className="w-32 h-32 text-emerald-500 opacity-80" />
               
               {/* Floating Stats Cards */}
               <div className="absolute top-10 -left-10 bg-zinc-800/90 backdrop-blur border border-zinc-700 p-4 rounded-xl shadow-xl flex items-center gap-3 animate-pulse">
                  <User className="text-emerald-400" />
                  <div>
                    <div className="font-bold text-xl">2.5k+</div>
                    <div className="text-xs text-zinc-400">Active Members</div>
                  </div>
               </div>

               <div className="absolute bottom-10 -right-10 bg-zinc-800/90 backdrop-blur border border-zinc-700 p-4 rounded-xl shadow-xl flex items-center gap-3">
                  <CheckCircle className="text-emerald-400" />
                  <div>
                    <div className="font-bold text-xl">50+</div>
                    <div className="text-xs text-zinc-400">Classes Weekly</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ClassesPage() {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [usingMockData, setUsingMockData] = useState(false);

  useEffect(() => {
    fetch('http://localhost:8080/api/classes')
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => {
        setClasses(data);
        setLoading(false);
      })
      .catch(err => {
        console.warn("Backend not reachable. Falling back to mock data.", err);
        setUsingMockData(true);
        setTimeout(() => {
          setClasses([
            { id: 1, name: "High-Intensity Interval Training (HIIT)", instructor: "Sarah J.", time: "Mon/Wed 6:00 PM", level: "Advanced" },
            { id: 2, name: "Sunrise Yoga Flow", instructor: "Mike T.", time: "Tue/Thu 7:00 AM", level: "All Levels" },
            { id: 3, name: "Strength & Conditioning", instructor: "Alex R.", time: "Mon/Fri 5:30 PM", level: "Intermediate" },
            { id: 4, name: "Cardio Kickboxing", instructor: "Emma W.", time: "Saturday 10:00 AM", level: "All Levels" },
            { id: 5, name: "Core Crusher", instructor: "David L.", time: "Tue/Thu 6:30 PM", level: "Intermediate" }
          ]);
          setLoading(false);
        }, 800);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-in slide-in-from-bottom-4 duration-500">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold mb-4">Class Schedule</h2>
        <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
          Find the perfect class to fit your goals and schedule. All classes are led by our certified expert trainers.
        </p>
        {usingMockData && (
          <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-sm border border-amber-500/20">
            <span className="w-2 h-2 rounded-full bg-amber-500 mr-2 animate-pulse"></span>
            Preview Mode: Using Mock Data (.NET API not detected)
          </div>
        )}
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map((cls) => (
            <div key={cls.id} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-emerald-500/50 transition-colors group">
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">{cls.name}</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-zinc-400">
                  <User className="h-5 w-5 mr-3 text-zinc-500" />
                  <span>{cls.instructor}</span>
                </div>
                <div className="flex items-center text-zinc-400">
                  <Clock className="h-5 w-5 mr-3 text-zinc-500" />
                  <span>{cls.time}</span>
                </div>
                <div className="flex items-center text-zinc-400">
                  <Activity className="h-5 w-5 mr-3 text-zinc-500" />
                  <span className="bg-zinc-800 px-2 py-1 rounded text-xs text-zinc-300 uppercase tracking-wider">{cls.level}</span>
                </div>
              </div>

              <button className="w-full bg-zinc-800 hover:bg-emerald-500 hover:text-zinc-950 text-white font-medium py-3 rounded-xl transition-all">
                Book Session
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function ContactPage() {
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      e.target.reset();
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-in slide-in-from-bottom-4 duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Contact Info */}
        <div>
          <h2 className="text-4xl font-extrabold mb-6">Get in Touch</h2>
          <p className="text-zinc-400 mb-10 text-lg">
            Have questions about our memberships, facilities, or personal training? Drop us a line and our team will get back to you within 24 hours.
          </p>

          <div className="space-y-8">
            <div className="flex items-start">
              <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
                <Mail className="h-6 w-6 text-emerald-500" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium text-white">Email Us</h4>
                <p className="text-zinc-400 mt-1">support@apexfit.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
                <Calendar className="h-6 w-6 text-emerald-500" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium text-white">Opening Hours</h4>
                <p className="text-zinc-400 mt-1">Mon-Fri: 5:00 AM - 11:00 PM<br/>Sat-Sun: 7:00 AM - 9:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">Full Name</label>
              <input 
                type="text" 
                id="name" 
                requiemerald
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">Email Address</label>
              <input 
                type="email" 
                id="email" 
                requiemerald
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">Message</label>
              <textarea 
                id="message" 
                rows="4" 
                requiemerald
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                placeholder="How can we help you achieve your goals?"
              ></textarea>
            </div>
            <button 
              type="submit" 
              disabled={formStatus === 'submitting'}
              className="w-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold py-4 rounded-xl transition-all disabled:opacity-70 flex items-center justify-center"
            >
              {formStatus === 'submitting' ? (
                <span className="flex items-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-zinc-950 mr-2"></div>
                  Sending...
                </span>
              ) : formStatus === 'success' ? (
                <span className="flex items-center text-zinc-900">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Message Sent!
                </span>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

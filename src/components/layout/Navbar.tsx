import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Moon, Sun, ChevronDown, Menu, X, Search, Phone } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 glass w-full py-3 px-4 md:px-8 shadow-sm">
      <div className="flex justify-between items-center max-w-[1400px] mx-auto">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="KVRK Logo" className="h-10 md:h-12 w-auto object-contain rounded-lg" />
        </Link>
        
        {/* Desktop Enterprise Navigation */}
        <div className="hidden xl:flex items-center gap-8 font-medium text-sm">
          <Link to="/" className="hover:text-secondary-500 transition-colors">Home</Link>
          
          <div className="group relative">
            <button className="flex items-center gap-1 hover:text-secondary-500 transition-colors py-4">
              Company <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full left-0 w-64 bg-white dark:bg-gray-800 dark:bg-gray-800 shadow-xl rounded-xl border border-gray-100 dark:border-gray-700 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 p-4 grid gap-2">
              <Link to="/about" className="p-2 hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 rounded-lg">About Us</Link>
              <Link to="/our-team" className="p-2 hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 rounded-lg">Our Team</Link>
              <Link to="/careers" className="p-2 hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 rounded-lg">Careers</Link>
              <Link to="/testimonials" className="p-2 hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 rounded-lg">Testimonials</Link>
            </div>
          </div>

          <div className="group relative">
            <button className="flex items-center gap-1 hover:text-secondary-500 transition-colors py-4">
              Services <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white dark:bg-gray-800 dark:bg-gray-800 shadow-xl rounded-xl border border-gray-100 dark:border-gray-700 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 p-6 grid grid-cols-2 gap-x-8 gap-y-3">
              <div>
                <h4 className="text-secondary-500 font-bold mb-2 uppercase text-xs">Core Services</h4>
                <Link to="/services" className="block py-1 hover:text-primary-500">Domestic Construction</Link>
                <Link to="/services" className="block py-1 hover:text-primary-500">House Renovation</Link>
                <Link to="/services" className="block py-1 hover:text-primary-500">Home Extensions</Link>
              </div>
              <div>
                <h4 className="text-secondary-500 font-bold mb-2 uppercase text-xs">Finishing</h4>
                <Link to="/services" className="block py-1 hover:text-primary-500">Interior Finishing</Link>
                <Link to="/services" className="block py-1 hover:text-primary-500">Exterior Finishing</Link>
                <Link to="/services" className="block py-1 hover:text-primary-500">Painting & Decorating</Link>
              </div>
            </div>
          </div>

          <div className="group relative">
            <button className="flex items-center gap-1 hover:text-secondary-500 transition-colors py-4">
              Resources <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full left-0 w-56 bg-white dark:bg-gray-800 dark:bg-gray-800 shadow-xl rounded-xl border border-gray-100 dark:border-gray-700 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 p-4 grid gap-2">
              <Link to="/blog" className="p-2 hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 rounded-lg">Blog & News</Link>
              <Link to="/faq" className="p-2 hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 rounded-lg">FAQs</Link>
              <Link to="/resources" className="p-2 hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 rounded-lg flex justify-between items-center">Brochure <span className="bg-primary-500 text-white text-[10px] px-2 py-0.5 rounded">PDF</span></Link>
            </div>
          </div>

          <Link to="/industries" className="hover:text-secondary-500 transition-colors">Industries</Link>
          <Link to="/sustainability" className="hover:text-secondary-500 transition-colors">Sustainability</Link>
          <Link to="/contact" className="hover:text-secondary-500 transition-colors">Contact</Link>
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">

          
          <div className="w-px h-6 bg-gray-300 mx-1"></div>


          <button onClick={() => navigate('/get-quote')} className="bg-primary-500 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-secondary-500 transition-all shadow-md transform hover:-translate-y-0.5">
            Get Quote
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="xl:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>
      
      {/* Mobile Drawer (Simplified) */}
      {mobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-800 dark:bg-gray-900 shadow-2xl border-t border-gray-100 dark:border-gray-700 p-6 flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold hover:text-primary-500 transition-colors">Home</Link>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold hover:text-primary-500 transition-colors">Company</Link>
          <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold hover:text-primary-500 transition-colors">Services</Link>
          <Link to="/industries" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold hover:text-primary-500 transition-colors">Industries</Link>
          <Link to="/sustainability" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold hover:text-primary-500 transition-colors">Sustainability</Link>
          <Link to="/testimonials" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold hover:text-primary-500 transition-colors">Testimonials</Link>
          <Link to="/resources" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold hover:text-primary-500 transition-colors">Resources</Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold hover:text-primary-500 transition-colors">Contact</Link>
          <div className="pt-4 border-t border-gray-100 dark:border-gray-700 mt-2 flex gap-4">

            <button onClick={() => { navigate('/get-quote'); setMobileMenuOpen(false); }} className="flex-1 bg-primary-500 text-white py-3 rounded-xl font-bold">
              Get Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

const Footer = () => {
  return (
    <footer className="bg-primary-500 text-white pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <h2 className="text-2xl font-bold text-accent-500 mb-4">KVRK Construction</h2>
          <p className="text-gray-300">Premium domestic building and finishing services.</p>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact</h3>
          <p className="text-gray-300">4 Lansdowne Road, Purley, CR8 2PA</p>
          <p className="text-gray-300">07405559769</p>
          <p className="text-gray-300">kvrkconstructionltd@gmail.com</p>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-4">Legal</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
        &copy; {new Date().getFullYear()} KVRK Construction Ltd. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-16">
        <div className="w-[80%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Logo and Brand */}
            <div className="col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-lime-400 rounded flex items-center justify-center">
                  <span className="text-black font-bold text-sm">🌱</span>
                </div>
                <span className="text-xl font-bold">grass</span>
              </div>
            </div>
  
            {/* Navigation Links */}
            <div className="col-span-1">
              <ul className="space-y-3">
                <li><a href="/home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
                <li><a href="/learn" className="text-gray-300 hover:text-white transition-colors">Learn</a></li>
                <li><a href="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
                <li><a href="/media-kit" className="text-gray-300 hover:text-white transition-colors">Media Kit</a></li>
                <li><a href="/documentation" className="text-gray-300 hover:text-white transition-colors">Documentation</a></li>
              </ul>
            </div>
  
            {/* Social Links */}
            <div className="col-span-1">
              <ul className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors">
                  <span>X</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors">
                  <span>📧</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors">
                  <span>📱</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors">
                  <span>🌐</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors">
                  <span>💬</span>
                </a>
              </ul>
            </div>
  
            {/* Certifications */}
            <div className="col-span-1">
              <div className="text-right">
                <p className="text-gray-400 text-sm mb-2">Member Of | Certified By</p>
                <div className="flex justify-end gap-2">
                  <div className="w-12 h-8 bg-blue-500 rounded flex items-center justify-center">
                    <span className="text-xs text-white font-bold">CERT</span>
                  </div>
                  <div className="w-12 h-8 bg-orange-500 rounded flex items-center justify-center">
                    <span className="text-xs text-white font-bold">ORG</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          {/* Copyright and Legal Links */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2025 Grass Opco Ltd. All trademarks used on this website are the property of Grass Opco Ltd. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                <a href="/terms" className="text-gray-400 hover:text-white transition-colors">General Terms and Conditions</a>
                <a href="/grass-policy" className="text-gray-400 hover:text-white transition-colors">Grass Policy</a>
                <a href="/cookie-settings" className="text-gray-400 hover:text-white transition-colors">Cookie Settings</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
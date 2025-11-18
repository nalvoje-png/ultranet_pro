import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6 text-center">
        {/* Simplified Logo for Footer */}
        <div className="flex justify-center mb-6">
           <div className="flex items-center">
              <span className="text-2xl font-bold text-indigo-400">Ultranet</span>
           </div>
        </div>
        <p>© {new Date().getFullYear()} UltraNet. Todos os direitos reservados.</p>
        <p className="text-sm text-gray-400 mt-2">Conectando você ao que importa.</p>
      </div>
    </footer>
  );
};

export default Footer;
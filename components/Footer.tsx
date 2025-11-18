import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-white py-12 border-t border-slate-700">
      <div className="container mx-auto px-6 text-center">
        {/* Simplified Logo for Footer */}
        <div className="flex justify-center mb-6">
           <div className="flex items-center">
              <span className="text-2xl font-bold text-white">Ultranet</span>
           </div>
        </div>
        <p>© {new Date().getFullYear()} UltraNet. Todos os direitos reservados.</p>
        <p className="text-sm text-slate-400 mt-2">Conectando você ao que importa.</p>
      </div>
    </footer>
  );
};

export default Footer;
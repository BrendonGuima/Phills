import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-8 border-t border-zinc-900 text-center relative z-10">
      <div className="container mx-auto px-4">
        <p className="text-zinc-600 text-sm font-light">
          &copy; {new Date().getFullYear()} Phills Photography. Todos os direitos reservados.
        </p>
        <p className="text-zinc-800 text-xs mt-2 uppercase tracking-widest">
           Desenvolvido com Paixão
        </p>
      </div>
    </footer>
  );
};

export default Footer;
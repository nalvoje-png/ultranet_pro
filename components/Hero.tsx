
import React from 'react';
import Button from './ui/Button';

const Hero: React.FC = () => {
  const scrollToForm = () => {
    document.getElementById('referral-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-white py-20 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          <span className="text-teal-500">Indique um Amigo</span> e <span className="text-orange-500">Navegue de Graça!</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Ganhe 1 mês de internet UltraNet grátis por cada amigo que contratar nosso plano. É simples, rápido e todo mundo sai ganhando!
        </p>
        <Button onClick={scrollToForm} variant="primary" className="text-lg">
          Quero Indicar Agora!
        </Button>
      </div>
    </section>
  );
};

export default Hero;

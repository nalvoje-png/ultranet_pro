import React from 'react';
import Card from './ui/Card';
import Button from './ui/Button';
import { Page } from '../App';

const StepIcon: React.FC<{ icon: string }> = ({ icon }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-teal-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
  </svg>
);

interface HowItWorksProps {
    setPage: (page: Page) => void;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ setPage }) => {
  const steps = [
    {
      icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
      title: "Passo 1: Indique",
      description: "Preencha o formulário com seus dados e os do seu amigo.",
    },
    {
      icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
      title: "Passo 2: Contato",
      description: "Nossa equipe entra em contato com seu amigo para apresentar nossos planos.",
    },
    {
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Passo 3: Ganhe!",
      description: "Seu amigo contratou? Você ganha um mês de mensalidade grátis!",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Como Funciona?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="text-center flex flex-col items-center">
              <StepIcon icon={step.icon} />
              <h3 className="text-xl font-bold mb-2 text-gray-800">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
            <Button variant="secondary" onClick={() => {
                window.scrollTo(0, 0);
                setPage('how-it-works');
            }}>
                Ver Regulamento e Dúvidas
            </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

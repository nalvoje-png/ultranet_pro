

import React, { useState } from 'react';
import Card from './ui/Card';
import Input from './ui/Input';
import Button from './ui/Button';
import Spinner from './ui/Spinner';
import { generateReferralMessage } from '../services/geminiService';

const ReferralSection: React.FC = () => {
  const [referrerName, setReferrerName] = useState('');
  const [customerId, setCustomerId] = useState('');
  const [friendName, setFriendName] = useState('');
  const [friendPhone, setFriendPhone] = useState('');
  
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedMessage, setGeneratedMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleGenerateMessage = async () => {
    setIsGenerating(true);
    const message = await generateReferralMessage(referrerName, friendName);
    setGeneratedMessage(message);
    setIsGenerating(false);
  };
  
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(generatedMessage);
    alert('Mensagem copiada para a área de transferência!');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      if (referrerName && customerId && friendName && friendPhone) {
        setSubmitStatus('success');
        // Reset form
        setReferrerName('');
        setCustomerId('');
        setFriendName('');
        setFriendPhone('');
        setGeneratedMessage('');
      } else {
        setSubmitStatus('error');
      }
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="referral-form" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="!shadow-2xl">
            <h2 className="text-3xl font-bold text-center mb-2 text-white">Indique um Amigo</h2>
            <p className="text-center text-slate-300 mb-8">Preencha os campos abaixo para concluir sua indicação.</p>

            {submitStatus === 'success' && (
              <div className="bg-green-500/10 border-l-4 border-green-400 text-green-300 p-4 mb-6 rounded-md" role="alert">
                <p className="font-bold">Indicação enviada com sucesso!</p>
                <p>Obrigado! Entraremos em contato com seu amigo em breve.</p>
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="bg-red-500/10 border-l-4 border-red-400 text-red-300 p-4 mb-6 rounded-md" role="alert">
                <p className="font-bold">Erro!</p>
                <p>Por favor, preencha todos os campos do formulário.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6 mb-8">
              <fieldset className="md:col-span-2 border p-4 rounded-lg border-slate-600">
                <legend className="px-2 font-semibold text-slate-300">Seus Dados (Quem Indica)</legend>
                <div className="grid md:grid-cols-2 gap-6 mt-2">
                  <Input id="referrerName" label="Seu Nome Completo" type="text" value={referrerName} onChange={(e) => setReferrerName(e.target.value)} required />
                  <Input id="customerId" label="Seu Código de Cliente ou CPF" type="text" value={customerId} onChange={(e) => setCustomerId(e.target.value)} required />
                </div>
              </fieldset>

              <fieldset className="md:col-span-2 border p-4 rounded-lg border-slate-600">
                <legend className="px-2 font-semibold text-slate-300">Dados do Amigo (Indicado)</legend>
                <div className="grid md:grid-cols-2 gap-6 mt-2">
                  <Input id="friendName" label="Nome Completo do Amigo" type="text" value={friendName} onChange={(e) => setFriendName(e.target.value)} required />
                  <Input id="friendPhone" label="Telefone do Amigo (com DDD)" type="tel" value={friendPhone} onChange={(e) => setFriendPhone(e.target.value)} required />
                </div>
              </fieldset>
              
              <div className="md:col-span-2 flex justify-center">
                <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto">
                  {isSubmitting ? <Spinner /> : 'Enviar Indicação'}
                </Button>
              </div>
            </form>

            <div className="border-t border-slate-700 pt-8">
                <h3 className="text-xl font-bold text-center mb-2 text-white">Precisa de uma ajuda para convidar?</h3>
                <p className="text-center text-slate-300 mb-4">Gere uma mensagem personalizada para enviar ao seu amigo!</p>
                <div className="flex justify-center mb-4">
                    <Button variant="secondary" onClick={handleGenerateMessage} disabled={isGenerating || !referrerName || !friendName}>
                        {isGenerating ? <Spinner /> : 'Gerar Mensagem com IA'}
                    </Button>
                </div>
                {generatedMessage && (
                    <div className="mt-4 bg-slate-700/50 p-4 rounded-lg">
                        <textarea
                            readOnly
                            value={generatedMessage}
                            className="w-full h-40 p-2 border border-slate-600 rounded-md bg-slate-700 text-white resize-none"
                        />
                        <div className="text-right mt-2">
                            <Button onClick={handleCopyToClipboard} className="px-4 py-2 text-sm">
                                Copiar Texto
                            </Button>
                        </div>
                    </div>
                )}
            </div>

          </Card>
        </div>
      </div>
    </section>
  );
};

export default ReferralSection;
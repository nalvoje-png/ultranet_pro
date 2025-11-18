import React from 'react';
import Card from './components/ui/Card';
import Accordion, { AccordionItem } from './components/ui/Accordion';

const CheckIcon = () => (
    <svg className="w-6 h-6 text-green-400 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
);

const HowItWorksPage: React.FC = () => {
  const faqItems = [
    {
      q: 'Posso indicar quantos amigos eu quiser?',
      a: 'Sim! Não há limite para o número de amigos que você pode indicar. Quanto mais amigos você trouxer para a UltraNet, mais meses de internet grátis você pode ganhar.',
    },
    {
      q: 'O mês grátis é cumulativo?',
      a: 'Sim. Se você indicar dois amigos e ambos contratarem nosso serviço no mesmo período, você ganhará dois meses de mensalidade grátis, que serão aplicados consecutivamente.',
    },
    {
      q: 'O que acontece se meu amigo cancelar o plano?',
      a: 'A indicação só é validada se o seu amigo permanecer como cliente ativo por pelo menos 30 dias e realizar o pagamento da primeira fatura. Se o cancelamento ocorrer antes desse período, o bônus não será concedido.',
    },
    {
      q: 'Como sei que minha indicação foi validada?',
      a: 'Você pode acompanhar o status de todas as suas indicações na área "Minhas Indicações" em nosso site. Assim que a indicação for validada, o status mudará para "Aprovada" e o crédito será agendado.',
    }
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-white">
          Regulamento da Promoção <span className="text-teal-400">Indique e Ganhe</span>
        </h1>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-8">
            <Card>
              <h2 className="text-2xl font-bold mb-4 text-white">Passo a Passo para Indicar</h2>
              <ol className="list-decimal list-inside space-y-3 text-slate-300">
                <li>Vá para a seção <span className="font-semibold text-orange-400">"Indique um Amigo"</span> na página inicial.</li>
                <li>Preencha seus dados (Nome e Código de Cliente/CPF).</li>
                <li>Preencha os dados do seu amigo (Nome e Telefone).</li>
                <li>Clique em "Enviar Indicação". Nossa equipe cuidará do resto!</li>
                <li>Opcional: Use nosso gerador de mensagens com IA para criar um convite personalizado e envie para seu amigo via WhatsApp ou redes sociais.</li>
              </ol>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold mb-4 text-white">Recebendo sua Recompensa</h2>
              <p className="text-slate-300">Após a validação da indicação, o processo é automático:</p>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start"><CheckIcon /> O desconto de 100% será aplicado na sua fatura do mês seguinte à validação.</li>
                <li className="flex items-start"><CheckIcon /> Você será notificado por e-mail quando o crédito for aplicado.</li>
                <li className="flex items-start"><CheckIcon /> Você pode acompanhar seus créditos e o status na sua área de cliente.</li>
              </ul>
            </Card>
          </div>

          <div className="space-y-8">
            <Card>
              <h2 className="text-2xl font-bold mb-4 text-white">Condições para Validação</h2>
              <p className="text-slate-300 mb-4">Para que a indicação seja um sucesso e você ganhe seu mês grátis, as seguintes condições devem ser atendidas:</p>
               <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><CheckIcon /> A pessoa indicada <span className="font-semibold">não pode</span> ser um cliente atual ou ex-cliente da UltraNet.</li>
                <li className="flex items-start"><CheckIcon /> O indicado precisa contratar um dos nossos planos de internet fibra óptica <span className="font-semibold">acima de 100 Mega</span>.</li>
                <li className="flex items-start"><CheckIcon /> A indicação só é validada após o amigo indicado <span className="font-semibold">pagar a primeira mensalidade</span> e permanecer ativo por no mínimo <span className="font-semibold">30 dias</span>.</li>
              </ul>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold mb-4 text-white">Perguntas Frequentes (FAQ)</h2>
              <Accordion>
                {faqItems.map(item => (
                  <AccordionItem key={item.q} title={item.q}>
                    <p>{item.a}</p>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksPage;
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Como funciona a terapia na prática?",
    answer: "O processo se inicia já na primeira sessão agendada, onde entendemos a demanda inicial e levantamos históricos relevantes.  Neste momento também estabelecemos a frequência ideal das sessões a depender da necessidade específica de cada paciente. A constância acordada é fundamental para construirmos vínculo e darmos o ritmo necessário ao processo terapêutico. As sessões duram em média 50 minutos."
  },
  {
    question: "Os atendimentos são online ou presenciais?",
    answer: "Os atendimentos são realizados na modalidade on-line para qualquer lugar que tenha acesso à internet, e presencial no Rio de Janeiro. Vale mencionar que o Conselho Federal de Psicologia reconhece a eficácia das duas modalidades de psicoterapia: online e presencial."
  },
  {
    question: "Quanto tempo dura o processo terapêutico?",
    answer: "Isso depende de cada paciente. A alta é sempre decidida em conjunto, partindo principalmente da iniciativa do paciente quando sente que alcançou seus objetivos."
  },
  {
    question: "A terapia é só para quem tem problemas graves?",
    answer: "Claro que não. O processo terapêutico geralmente se inicia a partir de uma queixa principal, que pode ser um dilema, um conflito emocional ou simplesmente um 'nó' que você precisa de ajuda para desatar. A terapia é uma caminhada de autoconhecimento, e o ritmo é sempre ditado por você. O único princípio realmente necessário é querer fazer a terapia."
  },
  {
    question: "Como faço para agendar minha primeira conversa?",
    answer: "É muito simples! Basta clicar em qualquer botão aqui na página. Você será direcionada para o meu WhatsApp, onde poderemos encontrar o melhor horário na agenda para a nossa primeira sessão."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-brand-beige relative z-10 border-t border-brand-lavender/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-widest text-brand-pink-dark font-semibold mb-2 block">
            Tire suas dúvidas
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-4xl text-brand-brown">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="flex flex-col gap-2 sm:gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index}
                className="bg-white border border-brand-lavender/40 rounded-xl overflow-hidden shadow-sm transition-colors duration-300 hover:border-brand-pink-light/60"
              >
                <button
                  onClick={() => toggleOpen(index)}
                  className="w-full px-5 py-4 flex items-center justify-between gap-3 text-left focus:outline-none select-none touch-manipulation cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-brand-brown text-sm sm:text-base">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-brand-offwhite text-brand-pink-dark border border-brand-lavender/30"
                  >
                    <ChevronDown size={16} />
                  </motion.div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 text-brand-olive-dark/80 text-sm leading-relaxed">
                        <div className="w-full h-px bg-brand-lavender/30 mb-4"></div>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

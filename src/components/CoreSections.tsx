import { HeartHandshake, Compass, Footprints, ShieldCheck, Sparkles, UserCheck, CheckCircle2 } from 'lucide-react';
import { FadeIn, Button } from './Shared';
import { motion } from 'motion/react';

/* =========================================================================
   3. ÁREAS DE ATUAÇÃO E ACOLHIMENTO
   ========================================================================= */
export const Situations = () => {
  const situations = [
    "Ansiedades e Sofrimentos emocionais",
    "Conflitos Relacionais",
    "Lutos e Perdas",
    "Autoconhecimento e Autonomia",
    "Decisões Importantes",
    "Vocação Pessoal e Caminhos Profissionais",
    "Questões Existenciais"
  ];

  const targetAudience = [
    "Adolescentes",
    "Adultos",
    "Casais",
    "Idosos"
  ];

  return (
    <section id="atuacao" className="pb-20 md:pb-28 pt-8 md:pt-12 bg-brand-offwhite relative z-10 border-b border-brand-lavender/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="max-w-3xl mb-12">
          <FadeIn>
            <span className="text-xs sm:text-sm uppercase tracking-widest text-brand-pink-dark font-semibold mb-3 block">
              Áreas de Atuação &amp; Acolhimento
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-brand-brown mb-4 leading-snug">
              Você não pode mudar o que aconteceu, mas pode decidir como conduzirá seus próximos passos.
            </h2>
            <p className="text-base sm:text-lg text-brand-olive-dark/80 font-light">
              Ajudo pessoas a encontrarem sentido nas mais diversas situações:
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-16">
          {situations.map((situation, index) => (
            <FadeIn key={index} delay={index * 0.08} duration={0.6}>
              <div className="p-5 sm:p-6 bg-white border border-brand-lavender/40 rounded-2xl shadow-xs hover:shadow-md hover:border-brand-pink-dark transition-all duration-300 group flex items-start gap-4 h-full">
                <div className="w-8 h-8 rounded-full bg-brand-beige/80 flex-shrink-0 flex items-center justify-center group-hover:bg-brand-pink-dark transition-colors duration-300 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-olive-dark group-hover:text-white transition-colors duration-300" />
                </div>
                <p className="text-brand-olive-dark font-medium text-base sm:text-lg leading-relaxed">
                  {situation}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
        
        {/* Modalidade de Atendimento Online */}
        <FadeIn delay={0.2} className="relative bg-brand-beige/50 rounded-[2.5rem] p-8 sm:p-12 text-center max-w-4xl mx-auto overflow-hidden">
          <div className="absolute top-0 left-0 w-40 h-40 bg-brand-pink-light/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-brand-lavender/30 rounded-full blur-3xl translate-x-1/4 translate-y-1/4 pointer-events-none"></div>

          <div className="relative z-10">
            <span className="text-xs uppercase tracking-widest text-brand-pink-dark font-semibold mb-2 block">
              Modalidade de Atendimento Online
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-brand-brown mb-4">
              Para quem é o atendimento
            </h3>
            <p className="text-sm sm:text-base text-brand-olive-dark/80 mb-8 max-w-xl mx-auto font-light">
              Sessões online, com flexibilidade e no conforto do seu ambiente:
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10">
              {targetAudience.map((audience, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.96 }}
                  className="py-3 px-6 rounded-full bg-white text-brand-brown font-medium text-sm sm:text-base shadow-sm border border-brand-beige/60 cursor-pointer transition-colors duration-300 hover:bg-brand-olive-dark hover:text-white hover:border-brand-olive-dark active:bg-brand-olive-dark active:text-white active:border-brand-olive-dark select-none touch-manipulation"
                >
                  {audience}
                </motion.div>
              ))}
            </div>

            <Button 
              href="https://wa.me/5521997089664?text=Ol%C3%A1%20Patr%C3%ADcia%2C%20gostaria%20de%20ajuda%20para%20iniciar%20minha%20terapia." 
              target="_blank"
              className="w-full sm:w-auto !bg-brand-olive-dark hover:!bg-brand-pink-dark shadow-md"
            >
              Quero ajuda
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

/* =========================================================================
   4. SEÇÃO DE MANIFESTO / CONCEITO TERAPÊUTICO
   ========================================================================= */
export const Manifesto = () => {
  return (
    <section id="conceito" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background Image Setup */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/fundo1-patricia.jpg" 
          alt="Fundo" 
          className="w-full h-full object-cover object-center"
        />
        {/* Gradiente claro (iluminação vinda de baixo) */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-white/10 to-transparent pointer-events-none" style={{ maskImage: 'linear-gradient(to top, black 0%, transparent 50%)', WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 50%)' }}></div>
        {/* Efeito blur que começa na base e termina suavemente no meio da foto */}
        <div className="absolute inset-0 backdrop-blur-[8px] pointer-events-none" style={{ maskImage: 'linear-gradient(to top, black 0%, transparent 50%)', WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 50%)' }}></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Quote in prominence */}
        <FadeIn className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="text-3xl sm:text-4xl text-white font-serif">“</span>
          </div>
          <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-white leading-snug md:leading-relaxed max-w-4xl mx-auto italic px-2">
            Você não precisa deixar de sentir; precisa conseguir continuar caminhando apesar do que sente.
          </blockquote>
          <div className="w-16 h-0.5 bg-white mx-auto mt-6"></div>
        </FadeIn>

        {/* Explanatory text box */}
        <FadeIn delay={0.2}>
          <div className="bg-brand-offwhite/90 backdrop-blur-xs p-6 sm:p-10 md:p-12 rounded-3xl border border-brand-lavender/40 shadow-sm">
            <div className="space-y-6 text-brand-olive-dark/90 leading-relaxed text-base sm:text-lg font-light">
              <p>
                <strong className="font-semibold text-brand-brown">Emoções não são certas ou erradas; são normais e necessárias.</strong> O que nos torna humanos é a capacidade de escolher como agir apesar do que sentimos.
              </p>
              <p>
                A terapia acolhe o que você sente e desenvolve o <strong className="font-semibold text-brand-olive-dark">autodistanciamento</strong>: a habilidade de observar o que você está sentindo sem se confundir com seu próprio sentimento.
              </p>
              <p className="border-l-2 border-brand-pink-dark pl-4 text-brand-brown font-medium italic">
                Meu papel é facilitar esse movimento e mobilizar recursos de autorregulação, para que você tome decisões mais conscientes, livres e responsáveis.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

/* =========================================================================
   5. A JORNADA DA TERAPIA (3 PILARES: ACOLHER, MOVER, DECIDIR)
   ========================================================================= */
export const TherapyJourney = () => {
  const pillars = [
    {
      step: "01",
      title: "Acolher",
      icon: HeartHandshake,
      text: "Se permita sentir, refletir e compreender sua história. É o momento de dar espaço ao que você sente, descobrir como você funciona e entender sua forma única de perceber o mundo."
    },
    {
      step: "02",
      title: "Mover",
      icon: Compass,
      text: "Ampliar o olhar e construir novas narrativas. Entender que você pode construir uma percepção e vivência mais saudável da sua vida é assumir que você é livre para decidir e responsável pela sua saúde. É recontar sua própria história."
    },
    {
      step: "03",
      title: "Decidir",
      icon: Footprints,
      text: "Assumir sua própria caminhada. Fazer escolhas alinhadas com quem você é e com seu sentido de vida. É sentir sem se perder. É ser apesar das circunstâncias."
    }
  ];

  return (
    <section id="jornada" className="py-20 md:py-28 bg-brand-offwhite relative z-10 border-b border-brand-lavender/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm uppercase tracking-widest text-brand-pink-dark font-semibold mb-3 block">
            Os 3 Pilares do Processo
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-brand-brown mb-4 leading-snug">
            A Jornada da Terapia
          </h2>
          <p className="text-base sm:text-lg text-brand-olive-dark/80 font-light">
            Estar vivo é estar em movimento. A terapia é um movimento constante de si mesmo.
          </p>
        </FadeIn>

        {/* 3 Clean Modern Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <FadeIn key={index} delay={index * 0.15} duration={0.8} className="h-full">
                <div className="bg-white p-7 sm:p-8 rounded-2xl border border-brand-lavender/40 shadow-xs hover:shadow-md hover:border-brand-pink-dark transition-all duration-300 flex flex-col justify-between h-full relative group overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-pink-light to-brand-pink-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-brand-beige/60 flex items-center justify-center text-brand-brown group-hover:bg-brand-pink-dark group-hover:text-white transition-colors duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-serif text-2xl font-normal text-brand-pink-dark/60 group-hover:text-brand-pink-dark transition-colors">
                        {pillar.step}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl text-brand-brown mb-4">
                      {pillar.title}
                    </h3>
                    <p className="text-brand-olive-dark/80 leading-relaxed text-sm sm:text-base font-light">
                      {pillar.text}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.4} className="text-center">
          <Button href="https://wa.me/5521997089664" target="_blank">
            Iniciar minha caminhada
          </Button>
        </FadeIn>
      </div>
    </section>
  );
};

/* =========================================================================
   6. METODOLOGIA, ÉTICA E PÚBLICO
   ========================================================================= */
export const Methodology = () => {
  const features = [
    {
      title: "Diálogo (Eu também falo)",
      description: "A terapia não é feita de silêncios constrangedores. Eu escuto, mas também converso. Rio, me emociono, questiono e ecoo o que você traz. É uma construção conjunta de reflexões.",
      icon: Sparkles
    },
    {
      title: "No Seu Ritmo",
      description: "A terapia é um processo colaborativo. Caminho junto, aponto possibilidades, te impulsiono a ir além, mas é você quem caminha e dita o tempo de cada passo. Não existem modelos prontos; cada processo é único.",
      icon: UserCheck
    },
    {
      title: "Apoio Direto e Concreto",
      description: "Trago leveza, mas não passo despercebida. Causo o movimento e o desconforto necessários para tirar você da paralisação, sem julgamentos e prezando pela confidencialidade.",
      icon: ShieldCheck
    },
    {
      title: "Ser Integral",
      description: "Acolhemos somatizações, emoções, cognições e valores. Sua espiritualidade é bem-vinda, pois ajuda a entender quem você é.",
      icon: HeartHandshake
    }
  ];

  return (
    <section id="metodologia" className="py-20 md:py-28 bg-brand-beige/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm uppercase tracking-widest text-brand-pink-dark font-semibold mb-3 block">
            Como Trabalhamos
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-brand-brown mb-4 leading-snug">
            Metodologia, Ética &amp; Cuidado
          </h2>
          <div className="w-20 h-0.5 bg-brand-pink-dark mx-auto"></div>
        </FadeIn>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-brand-offwhite p-7 sm:p-9 rounded-2xl h-full border border-brand-lavender/30 hover:border-brand-pink-light transition-colors relative overflow-hidden flex flex-col justify-start">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-beige flex items-center justify-center text-brand-brown flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl text-brand-brown">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-brand-olive-dark/80 leading-relaxed text-sm sm:text-base font-light">
                    {feature.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Botão Fale com a Psicóloga */}
        <FadeIn delay={0.2} className="text-center">
          <Button 
            href="https://wa.me/5521997089664?text=Ol%C3%A1%20Patr%C3%ADcia%2C%20gostaria%20de%20falar%20com%20voc%C3%AA%20sobre%20o%20atendimento." 
            target="_blank"
            className="w-full sm:w-auto !bg-brand-olive-dark hover:!bg-brand-pink-dark shadow-md"
          >
            Fale com a Psicóloga
          </Button>
        </FadeIn>
      </div>
    </section>
  );
};

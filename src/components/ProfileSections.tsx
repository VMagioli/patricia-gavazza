import { FadeIn, Button } from './Shared';
import { Award, BookOpen, UserCheck, Sparkles } from 'lucide-react';

export const About = () => {
  const credentials = [
    {
      icon: Award,
      text: "Graduada em Psicologia pela UFRJ"
    },
    {
      icon: BookOpen,
      text: "Pós-graduada em Logoterapia e Análise Existencial"
    },
    {
      icon: UserCheck,
      text: "Especialista em Atendimento Clínico Online"
    },
    {
      icon: Sparkles,
      text: "Registro Profissional CRP 05/40905"
    }
  ];

  return (
    <section id="sobre" className="py-20 md:py-28 bg-brand-offwhite border-b border-brand-lavender/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Photo Column with elegant styling */}
          <FadeIn direction="right" className="lg:col-span-5 relative flex flex-col items-center">
            <div className="relative w-full max-w-md mx-auto">
              <div className="aspect-[3/4] w-full rounded-3xl overflow-hidden relative shadow-xl border border-brand-lavender/40 bg-[#e8e0d5]">
                <img 
                  src="/DSC_5791.jpg" 
                  alt="Patrícia Gavazza - Psicóloga Clínica" 
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.currentTarget.src = "/imagem-home1.PNG";
                  }}
                />
                
                {/* Gradiente claro (iluminação vinda de baixo) */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-white/10 to-transparent pointer-events-none" style={{ maskImage: 'linear-gradient(to top, black 0%, transparent 50%)', WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 50%)' }}></div>
                
                {/* Efeito blur que começa na base e termina suavemente no meio da foto */}
                <div className="absolute inset-0 backdrop-blur-[8px] pointer-events-none" style={{ maskImage: 'linear-gradient(to top, black 0%, transparent 50%)', WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 50%)' }}></div>
              </div>
              
              {/* Badge */}
              <div className="absolute -bottom-4 -left-4 sm:left-6 bg-white p-4 rounded-2xl shadow-lg border border-brand-lavender/40 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-olive-dark">
                    Atendimento Online
                  </p>
                </div>
              </div>

              {/* Decorative aura */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-pink-light/30 rounded-full blur-2xl -z-10"></div>
            </div>
          </FadeIn>

          {/* Bio Column */}
          <div className="lg:col-span-7">
            <FadeIn>
              <span className="text-xs sm:text-sm uppercase tracking-widest text-brand-pink-dark font-semibold mb-3 block">
                Sobre Mim
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif text-brand-brown mb-6 leading-tight">
                Quem caminha ao seu lado: <br className="hidden sm:inline" />
                <span className="text-brand-olive-dark font-normal">Patrícia Gavazza</span>
              </h2>
              
              <div className="space-y-4 text-brand-olive-dark/85 leading-relaxed text-base sm:text-lg font-light mb-8">
                <p>
                  Sou Psicóloga pela UFRJ, Pós-graduada em Logoterapia e Análise Existencial, e especialista em atendimento clínico.
                </p>
                <p>
                  Acredito que o que nos torna humanos é a capacidade de refletir e buscar nosso ideal de ser. <strong className="font-medium text-brand-brown">Ofereço</strong> minha escuta e conhecimento técnico para te ajudar a entender como você funciona, sofre e vive.
                </p>
                <p className="font-medium text-brand-brown border-l-2 border-brand-pink-dark pl-4 italic">
                  A verdade é sua; meu papel é te ajudar a escolher caminhos mais saudáveis e com mais sentidos para se viver.
                </p>
              </div>

              {/* Qualifications grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {credentials.map((cred, i) => {
                  const Icon = cred.icon;
                  return (
                    <div key={i} className="flex items-center gap-3 p-3 bg-brand-beige/30 rounded-xl border border-brand-lavender/30">
                      <Icon className="w-4 h-4 text-brand-pink-dark flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-brand-olive-dark font-medium">
                        {cred.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              <Button 
                href="https://wa.me/5521997089664?text=Ol%C3%A1%20Patr%C3%ADcia%2C%20gostaria%20de%20conversar%20sobre%20o%20in%C3%ADcio%20da%20terapia."
                target="_blank"
              >
                Agende uma sessão inicial
              </Button>
            </FadeIn>
          </div>

        </div>

      </div>
    </section>
  );
};

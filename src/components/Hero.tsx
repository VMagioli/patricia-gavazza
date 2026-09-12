import { FadeIn, Button } from './Shared';

export const Hero = () => {
  return (
    <section className="relative h-[100dvh] min-h-[600px] w-full flex flex-col justify-end overflow-hidden bg-[#141210]">
      {/* Background Image - Maximum visibility in upper area */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/imagem-home1.PNG" 
          alt="Patrícia Gavazza - Psicóloga Clínica" 
          className="w-full h-full object-cover object-[center_15%] sm:object-[center_20%] md:object-center"
          onError={(e) => {
            e.currentTarget.src = "/imagem-home.PNG";
          }}
        />
        {/* Subtle bottom gradient to guarantee crisp readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141210] via-[#141210]/75 via-28% to-transparent pointer-events-none"></div>
      </div>

      {/* Soft bottom gradient to transition smoothly to the next section's offwhite background */}
      <div className="absolute bottom-0 left-0 right-0 h-56 sm:h-64 md:h-80 lg:h-[350px] bg-gradient-to-t from-brand-offwhite via-brand-offwhite/30 to-transparent pointer-events-none z-10"></div>

      {/* Bottom Content - Tightly anchored at the bottom but above the fadeout */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        <div className="max-w-2xl">
          <FadeIn delay={0.1}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-serif font-semibold text-brand-pink-light leading-snug md:leading-tight mb-4 text-balance">
              Dê o primeiro passo em direção a você.{' '}
              <span className="font-medium block sm:inline text-brand-pink-light bg-transparent">
                Torne-se o verdadeiro autor da sua história.
              </span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-sm sm:text-base md:text-lg text-white/85 mb-6 leading-relaxed font-light max-w-xl">
              Olhar para a própria existência exige coragem. A terapia é o espaço para se autodescobrir, abraçar suas verdades, desenvolver o domínio de si e reassumir sua caminhada.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex items-center">
              <Button 
                href="https://wa.me/5521997089664" 
                target="_blank"
                className="!bg-brand-pink-dark hover:!bg-brand-brown text-white shadow-xl text-center !px-7 !py-3.5 text-sm font-medium w-full sm:w-auto"
              >
                Agende uma sessão inicial
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

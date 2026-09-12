import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Instagram, MessageCircle, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { FadeIn, Button } from './Shared';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'A Jornada', href: '/#jornada' },
    { name: 'Metodologia', href: '/#metodologia' },
    { name: 'Sobre Mim', href: '/#sobre' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-brand-offwhite/95 backdrop-blur-md shadow-xs py-3.5' 
          : 'bg-gradient-to-b from-black/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex flex-col group"
        >
          <span className={`font-imperial text-4xl sm:text-[44px] transition-colors ${
            isScrolled ? 'text-brand-olive-dark group-hover:text-brand-pink-dark' : 'text-white group-hover:text-brand-pink-light'
          }`}>
            Patrícia Gavazza
          </span>
          <span className={`text-xs sm:text-[13px] font-medium tracking-widest uppercase transition-colors -mt-0.5 ${
            isScrolled ? 'text-brand-pink-dark' : 'text-brand-pink-light'
          }`}>
            Psicóloga Clínica
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-xs uppercase tracking-widest font-medium transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-brand-pink-dark hover:after:w-full after:transition-all after:duration-300 ${
                isScrolled 
                  ? 'text-brand-olive-dark hover:text-brand-pink-dark' 
                  : 'text-white/90 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <Button 
            href="https://wa.me/5521997089664" 
            target="_blank" 
            className={`!px-5 !py-2.5 !text-xs !tracking-wider uppercase ${
              isScrolled 
                ? '!bg-brand-olive-dark hover:!bg-brand-pink-dark text-white' 
                : '!bg-brand-pink-dark hover:!bg-brand-brown text-white'
            }`}
          >
            Agendar Sessão
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            isScrolled ? 'text-brand-olive-dark' : 'text-white'
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu principal"
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-brand-offwhite border-b border-brand-beige shadow-xl py-6 px-6 flex flex-col gap-4 lg:hidden">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base text-brand-olive-dark font-medium border-b border-brand-beige/60 pb-2.5 hover:text-brand-pink-dark transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button 
            href="https://wa.me/5521997089664" 
            target="_blank" 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="w-full text-center mt-2"
          >
            Agendar Sessão Inicial
          </Button>
        </div>
      )}
    </header>
  );
};

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', reason: '' });
  const [errors, setErrors] = useState({ name: '', reason: '' });

  const validate = () => {
    let valid = true;
    const newErrors = { name: '', reason: '' };
    if (!formData.name.trim()) {
      newErrors.name = 'Por favor, insira seu nome.';
      valid = false;
    }
    if (!formData.reason.trim()) {
      newErrors.reason = 'Por favor, informe o motivo do contato.';
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const text = `Olá Patrícia! Meu nome é ${formData.name} e gostaria de agendar um atendimento. Assunto: ${formData.reason}.`;
      const url = `https://wa.me/5521997089664?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank');
      setFormData({ name: '', reason: '' });
    }
  };

  return (
    <section id="contato" className="bg-brand-offwhite py-20 md:py-28 border-t border-brand-lavender/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        
        <FadeIn>
          <span className="text-xs sm:text-sm uppercase tracking-widest text-brand-pink-dark font-semibold mb-3 block">
            Contato &amp; Agendamento
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-serif mb-5 text-brand-brown leading-snug">
            Dê o primeiro passo em direção a você.
          </h2>
          <p className="text-brand-olive-dark/80 text-base sm:text-lg mb-8 max-w-lg font-light leading-relaxed">
            Entre em contato para agendar sua sessão inicial ou esclarecer quaisquer dúvidas sobre a modalidade de atendimento online.
          </p>
          
          <div className="flex flex-col gap-6 mb-8">
            <a 
              href="https://wa.me/5521997089664" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-brand-lavender/40 hover:border-brand-pink-dark transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-beige flex items-center justify-center text-brand-olive-dark group-hover:bg-brand-pink-dark group-hover:text-white transition-colors flex-shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-xs font-semibold tracking-widest text-brand-olive-dark/60 uppercase">WhatsApp Direto</p>
                <p className="text-base sm:text-lg text-brand-olive-dark font-medium group-hover:text-brand-pink-dark transition-colors">(21) 99708-9664</p>
              </div>
              <ArrowRight size={18} className="ml-auto text-brand-lavender group-hover:text-brand-pink-dark transition-colors" />
            </a>
            
            <a 
              href="https://www.instagram.com/patricia_gavazza_psicologa" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-brand-lavender/40 hover:border-brand-pink-dark transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-beige flex items-center justify-center text-brand-olive-dark group-hover:bg-brand-pink-dark group-hover:text-white transition-colors flex-shrink-0">
                <Instagram size={20} />
              </div>
              <div>
                <p className="text-xs font-semibold tracking-widest text-brand-olive-dark/60 uppercase">Instagram</p>
                <p className="text-base sm:text-lg text-brand-olive-dark font-medium group-hover:text-brand-pink-dark transition-colors">@patricia_gavazza_psicologa</p>
              </div>
              <ArrowRight size={18} className="ml-auto text-brand-lavender group-hover:text-brand-pink-dark transition-colors" />
            </a>
          </div>
        </FadeIn>

        {/* Quick Message Form */}
        <FadeIn delay={0.2} className="bg-white p-6 sm:p-8 md:p-10 rounded-3xl shadow-sm border border-brand-lavender/40">
          <div className="flex items-center gap-2 mb-6 text-brand-brown">
            <MessageCircle size={20} className="text-brand-pink-dark" />
            <h3 className="font-serif text-xl sm:text-2xl">Envie uma mensagem direta</h3>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-1.5 text-brand-olive-dark">
                Nome Completo
              </label>
              <input 
                type="text" 
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className={`w-full px-4 py-3 bg-brand-offwhite/50 border ${errors.name ? 'border-red-500' : 'border-brand-lavender/60'} rounded-xl focus:outline-none focus:border-brand-pink-dark focus:ring-1 focus:ring-brand-pink-dark transition-colors text-sm`}
                placeholder="Seu nome"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>
            
            <div>
              <label htmlFor="reason" className="block text-xs sm:text-sm font-medium mb-1.5 text-brand-olive-dark">
                Como posso te ajudar?
              </label>
              <textarea 
                id="reason"
                rows={4}
                value={formData.reason}
                onChange={(e) => setFormData({...formData, reason: e.target.value})}
                className={`w-full px-4 py-3 bg-brand-offwhite/50 border ${errors.reason ? 'border-red-500' : 'border-brand-lavender/60'} rounded-xl focus:outline-none focus:border-brand-pink-dark focus:ring-1 focus:ring-brand-pink-dark transition-colors resize-none text-sm`}
                placeholder="Gostaria de agendar uma sessão inicial para falar sobre..."
              />
              {errors.reason && <p className="text-red-500 text-xs mt-1">{errors.reason}</p>}
            </div>

            <Button type="submit" className="w-full mt-2 !py-3.5">
              Iniciar conversa no WhatsApp
            </Button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <>
      {/* Main Footer */}
      <footer className="bg-brand-olive-dark pt-16 pb-12 text-center flex flex-col items-center border-t border-brand-olive">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full flex flex-col items-center">
          <h2 className="font-imperial text-4xl sm:text-5xl text-brand-offwhite mb-1 font-normal">
            Patrícia Gavazza
          </h2>
          <p className="text-brand-beige/80 text-xs sm:text-sm tracking-wider uppercase mb-10">
            Psicóloga Clínica &bull; CRP 05/40905
          </p>

          <nav className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-12">
            <a href="/#jornada" className="text-xs sm:text-sm text-brand-beige/80 hover:text-brand-offwhite transition-colors uppercase tracking-wider">
              A Jornada
            </a>
            <a href="/#metodologia" className="text-xs sm:text-sm text-brand-beige/80 hover:text-brand-offwhite transition-colors uppercase tracking-wider">
              Metodologia
            </a>
            <a href="/#sobre" className="text-xs sm:text-sm text-brand-beige/80 hover:text-brand-offwhite transition-colors uppercase tracking-wider">
              Sobre Mim
            </a>
            <a href="/#contato" className="text-xs sm:text-sm text-brand-beige/80 hover:text-brand-offwhite transition-colors uppercase tracking-wider">
              Contato
            </a>
          </nav>

          <p className="text-xs text-brand-beige/60 mb-2">
            &copy; {new Date().getFullYear()} Patrícia Gavazza.
          </p>
          <p className="text-xs text-brand-beige/60 mb-2">
            &copy; {new Date().getFullYear()} Desenvolvido por MAGE Comunicação. Todos os direitos reservados.
          </p>
          <Link to="/privacidade" className="text-xs text-brand-beige/60 hover:text-brand-offwhite transition-colors mb-10 block">
            Política de Privacidade
          </Link>
          
          <p className="font-serif italic text-brand-beige/80 text-base sm:text-lg max-w-xl">
            "A liberdade de escolher nossa atitude perante à vida."
          </p>
          
        </div>
      </footer>
    </>
  );
};

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Search, Droplets, Paintbrush, Zap } from 'lucide-react';

export default function Hero() {
    const containerRef = useRef(null);
    const maskRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container || !maskRef.current) return;

        gsap.set(maskRef.current, {
            css: { maskSize: '0px', maskPosition: '50% 50%' }
        });

        const handleMouseMove = (e) => {
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            gsap.to(maskRef.current, {
                css: { maskPosition: `${x}px ${y}px` },
                duration: 0.1,
                ease: 'power2.out',
                overwrite: 'auto'
            });

            if (textRef.current) {
                const moveX = (e.clientX - window.innerWidth / 2) * -0.015;
                const moveY = (e.clientY - window.innerHeight / 2) * -0.015;
                gsap.to(textRef.current, { x: moveX, y: moveY, duration: 1, ease: 'power2.out' });
            }
        };

        const handleMouseEnter = () => {
            gsap.to(maskRef.current, { css: { maskSize: '350px' }, duration: 0.8, ease: 'power3.out' });
        };

        const handleMouseLeave = () => {
            gsap.to(maskRef.current, { css: { maskSize: '0px' }, duration: 0.5, ease: 'power3.in' });
            if (textRef.current) {
                gsap.to(textRef.current, { x: 0, y: 0, duration: 1, ease: 'power2.out' });
            }
        };

        container.addEventListener('mousemove', handleMouseMove);
        container.addEventListener('mouseenter', handleMouseEnter);
        container.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            container.removeEventListener('mousemove', handleMouseMove);
            container.removeEventListener('mouseenter', handleMouseEnter);
            container.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    const trendTags = ['Design Interior', 'Arquitetura', 'Eletricista', 'Limpeza', 'Pintura'];

    return (
        <section
            ref={containerRef}
            className="relative w-full min-h-screen overflow-hidden bg-background flex items-center justify-center cursor-none pt-24"
        >
            {/* Background Base Layer */}
            <div className="absolute inset-0 w-full h-full opacity-30 mix-blend-luminosity">
                <img
                    src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?q=80&w=1920&auto=format&fit=crop"
                    alt="Dark Background Base"
                    className="w-full h-full object-cover object-center grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent"></div>
            </div>

            {/* Reveal Layer */}
            <div
                ref={maskRef}
                className="absolute inset-0 w-full h-full z-10 pointer-events-none"
                style={{
                    WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)',
                    maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)',
                    WebkitMaskRepeat: 'no-repeat',
                    maskRepeat: 'no-repeat',
                    maskOrigin: 'border-box'
                }}
            >
                <img
                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1920&auto=format&fit=crop"
                    alt="Revealed Professional State"
                    className="w-full h-full object-cover object-center scale-105"
                />
                <div className="absolute inset-0 bg-accent/30 mix-blend-color"></div>
            </div>

            {/* Content */}
            <div className="relative z-20 w-full max-w-7xl px-6 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-12 pointer-events-none">

                {/* Left Side - Text Content */}
                <div ref={textRef} className="max-w-2xl space-y-8">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white leading-[0.95] tracking-tighter">
                        <span className="block opacity-0 animate-slide-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                            Excelência em
                        </span>
                        <span className="block opacity-0 animate-slide-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                            cada <span className="text-accent italic">detalhe</span>
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-400 font-light max-w-lg opacity-0 animate-fade-in leading-relaxed" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
                        A plataforma premium que conecta você aos profissionais mais qualificados do mercado. Segurança, rapidez e sofisticação para sua residência.
                    </p>

                    {/* Search Bar */}
                    <div className="opacity-0 animate-fade-in pointer-events-auto" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
                        <div className="flex items-stretch bg-surface border border-white/10 rounded-2xl overflow-hidden max-w-lg">
                            <div className="flex items-center pl-5 text-gray-500">
                                <Search className="w-5 h-5" />
                            </div>
                            <input
                                type="text"
                                placeholder="Qual serviço de alto padrão você busca?"
                                className="flex-1 bg-transparent px-4 py-4 text-sm text-white placeholder:text-gray-600 focus:outline-none cursor-interactive"
                            />
                            <button className="px-6 py-4 bg-accent text-background font-bold text-sm hover:bg-white transition-colors cursor-interactive whitespace-nowrap">
                                Buscar agora
                            </button>
                        </div>

                        {/* Trend Tags */}
                        <div className="flex items-center flex-wrap gap-3 mt-5">
                            <span className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">Tendências:</span>
                            {trendTags.map((tag) => (
                                <span key={tag} className="text-xs px-3 py-1.5 rounded-full border border-white/10 text-gray-400 hover:border-accent/50 hover:text-white transition-all cursor-interactive">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Side - Abstract Phone/App Preview (CSS-only illustration) */}
                <div className="hidden lg:flex opacity-0 animate-fade-in flex-col items-center" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
                    <div className="w-72 h-[480px] bg-surface/80 backdrop-blur-sm border border-white/10 rounded-[2rem] p-6 relative overflow-hidden pointer-events-auto">
                        {/* Fake Graph */}
                        <svg viewBox="0 0 240 300" className="w-full h-full opacity-60">
                            <path d="M0,150 Q60,50 120,200 T240,100" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" />
                            <path d="M0,180 Q60,80 120,230 T240,130" fill="none" stroke="rgba(226,254,16,0.3)" strokeWidth="2" strokeLinecap="round" />
                        </svg>

                        {/* Service Badges floating */}
                        <div className="absolute top-8 left-6 flex items-center space-x-2 bg-background/80 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1.5">
                            <Droplets className="w-3 h-3 text-accent" />
                            <span className="text-[10px] text-white font-bold uppercase">Hidráulica</span>
                        </div>
                        <div className="absolute top-1/3 right-4 flex items-center space-x-2 bg-background/80 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1.5">
                            <Paintbrush className="w-3 h-3 text-accent" />
                            <span className="text-[10px] text-white font-bold uppercase">Limpeza</span>
                        </div>
                        <div className="absolute bottom-1/4 left-1/3 flex items-center space-x-2 bg-background/80 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1.5">
                            <Paintbrush className="w-3 h-3 text-accent" />
                            <span className="text-[10px] text-white font-bold uppercase">Pintura</span>
                        </div>
                        <div className="absolute bottom-8 right-4 flex items-center space-x-2 bg-background/80 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1.5">
                            <Zap className="w-3 h-3 text-accent" />
                            <span className="text-[10px] text-white font-bold uppercase">Elétrica</span>
                        </div>
                    </div>

                    {/* Premium Plus Badge */}
                    <div className="mt-4 flex items-center space-x-3 bg-surface/80 backdrop-blur-sm border border-accent/20 rounded-2xl px-5 py-3 pointer-events-auto">
                        <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                            <Zap className="w-4 h-4 text-accent" />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-white uppercase tracking-wider">Premium Plus</p>
                            <p className="text-[10px] text-gray-500">Profissionais Certificados</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 left-6 lg:left-16 z-20 flex items-center space-x-4 opacity-0 animate-fade-in" style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}>
                <span className="text-xs uppercase tracking-[0.3em] font-bold text-gray-500">Scroll</span>
                <div className="w-16 h-[1px] bg-white/20 overflow-hidden">
                    <div className="w-full h-full bg-accent animate-scroll-line origin-left"></div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
          @keyframes slide-up {
            0% { opacity: 0; transform: translateY(100%); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes fade-in {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          @keyframes scroll-line {
            0% { transform: scaleX(0); transform-origin: left; }
            50% { transform: scaleX(1); transform-origin: left; }
            50.1% { transform: scaleX(1); transform-origin: right; }
            100% { transform: scaleX(0); transform-origin: right; }
          }
          .animate-slide-up { animation: slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
          .animate-fade-in { animation: fade-in 1s ease-out; }
          .animate-scroll-line { animation: scroll-line 2s ease-in-out infinite; }
        `}} />
        </section>
    );
}

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Search, MessageSquare, ShieldCheck } from 'lucide-react';

export default function HowItWorks() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        gsap.fromTo(
                            entry.target.querySelectorAll('.step-card'),
                            { opacity: 0, y: 60 },
                            { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out' }
                        );
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const steps = [
        {
            num: '01',
            title: 'ENCONTRE',
            description: 'Algoritmo inteligente e geolocalização precisa para encontrar os melhores experts no seu raio de atuação.',
            icon: Search,
        },
        {
            num: '02',
            title: 'NEGOCIE',
            description: 'Chat em tempo real criptografado. Envie mídia, descreva o problema e feche o valor sem sair do app.',
            icon: MessageSquare,
        },
        {
            num: '03',
            title: 'CONTRATE',
            description: 'Contratação segura. O pagamento é liberado após sua aprovação final. É qualidade garantida.',
            icon: ShieldCheck,
        },
    ];

    return (
        <section ref={sectionRef} className="w-full py-24 lg:py-32 bg-background px-6 lg:px-16 border-t border-white/5 relative overflow-hidden">
            {/* Section Label */}
            <div className="max-w-7xl mx-auto">
                <div className="mb-4">
                    <span className="text-[10px] text-gray-600 uppercase tracking-[0.3em] font-bold">Section</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-black text-white uppercase tracking-tight mb-3">
                    Como Funciona<span className="text-accent">?</span>
                </h2>
                <div className="w-12 h-1 bg-accent mb-8"></div>
                <p className="text-xs md:text-sm text-gray-500 uppercase tracking-[0.15em] font-bold max-w-lg leading-relaxed mb-16">
                    Simplificamos o processo para você focar no que importa. Qualidade e agilidade em um só lugar.
                </p>

                {/* Steps Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="step-card opacity-0 bg-surface border border-white/5 rounded-2xl p-8 relative group hover:border-accent/30 transition-all duration-500"
                        >
                            {/* Yellow Circle Icon */}
                            <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                                <step.icon className="w-5 h-5 text-background" strokeWidth={2.5} />
                            </div>

                            <h3 className="text-xl font-display font-black text-white uppercase tracking-wider mb-4">
                                {step.title}
                            </h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                {step.description}
                            </p>

                            {/* Big Background Number */}
                            <div className="absolute bottom-4 right-6 text-[120px] font-display font-black leading-none text-white/[0.03] select-none pointer-events-none">
                                {step.num}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

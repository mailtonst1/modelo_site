import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Hammer, SprayCan, Monitor, PartyPopper, GraduationCap, Palette, Briefcase, Heart } from 'lucide-react';

export default function PopularServices() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        gsap.fromTo(
                            entry.target.querySelectorAll('.service-card'),
                            { opacity: 0, y: 40, scale: 0.95 },
                            { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
                        );
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const services = [
        { icon: Hammer, title: 'Reformas', description: 'Renovação de interiores e obras estruturais com acabamento impecável.' },
        { icon: SprayCan, title: 'Limpeza', description: 'Higienização profunda e concierge para residências de alto padrão.' },
        { icon: Monitor, title: 'Assistência Técnica', description: 'Reparo especializado em eletrodomésticos e eletrônicos premium.' },
        { icon: PartyPopper, title: 'Eventos', description: 'Produção de ocasiões memoráveis com curadoria de especialistas.' },
        { icon: GraduationCap, title: 'Aulas', description: 'Mentoria personalizada em idiomas, música e disciplinas acadêmicas.' },
        { icon: Palette, title: 'Design', description: 'Projetos visuais e design de interiores por mentes criativas.' },
        { icon: Briefcase, title: 'Consultoria', description: 'Aconselhamento estratégico jurídico, financeiro e empresarial.' },
        { icon: Heart, title: 'Bem-estar', description: 'Cuidados holísticos, yoga e terapias para equilíbrio corpo e mente.' },
    ];

    return (
        <section ref={sectionRef} className="w-full py-24 lg:py-32 bg-background px-6 lg:px-16 border-t border-white/5">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-white uppercase tracking-tight mb-4">
                    Explore Nossa <span className="text-accent">Elite</span> de Serviços
                </h2>
                <p className="text-sm md:text-base text-gray-400 font-light max-w-2xl mx-auto leading-relaxed mb-16">
                    Soluções exclusivas para quem busca perfeição em cada detalhe. Navegue por todas as nossas especialidades.
                </p>

                {/* 4x2 Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="service-card opacity-0 bg-surface border border-white/5 rounded-2xl p-8 text-left group hover:border-accent/30 transition-all duration-500 cursor-interactive"
                        >
                            <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                                <service.icon className="w-5 h-5 text-accent" strokeWidth={2} />
                            </div>
                            <h3 className="text-base font-display font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                                {service.title}
                            </h3>
                            <p className="text-xs text-gray-500 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

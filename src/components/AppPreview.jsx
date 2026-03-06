import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { MapPin, Search, Star, Check } from 'lucide-react';

export default function AppPreview() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        gsap.fromTo(entry.target.querySelector('.preview-content'),
                            { opacity: 0, x: -40 },
                            { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' }
                        );
                        gsap.fromTo(entry.target.querySelector('.preview-phone'),
                            { opacity: 0, x: 40, scale: 0.95 },
                            { opacity: 1, x: 0, scale: 1, duration: 0.8, delay: 0.2, ease: 'power3.out' }
                        );
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const features = [
        'Mapa em tempo real com raio customizável',
        'Filtros avançados por preço e urgência',
        'Pagamento seguro via app',
    ];

    return (
        <section ref={sectionRef} className="w-full py-24 lg:py-32 bg-background px-6 lg:px-16 border-t border-white/5 relative overflow-hidden">
            {/* Subtle glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto">
                <div className="mb-4">
                    <span className="text-[10px] text-gray-600 uppercase tracking-[0.3em] font-bold">Section</span>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left - Text */}
                    <div className="preview-content opacity-0 flex-1 space-y-6">
                        <span className="text-xs text-accent uppercase tracking-[0.2em] font-bold">App Preview</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white leading-[1] tracking-tight">
                            Encontre quem resolve.<br />
                            <span className="text-white/80">Na sua tela.</span>
                        </h2>
                        <p className="text-base text-gray-400 font-light max-w-md leading-relaxed">
                            Nossa interface intuitiva mostra profissionais próximos a você em um mapa interativo.
                            Veja perfis detalhados, avaliações de outros clientes e feche negócio em poucos toques.
                        </p>

                        <ul className="space-y-4 pt-4">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-center space-x-3">
                                    <Check className="w-5 h-5 text-accent flex-shrink-0" strokeWidth={2.5} />
                                    <span className="text-sm text-gray-300">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right - Phone Mockup */}
                    <div className="preview-phone opacity-0 flex-shrink-0">
                        <div className="w-72 md:w-80 bg-surface border border-white/10 rounded-[2rem] p-4 relative overflow-hidden">
                            {/* Search Bar inside phone */}
                            <div className="flex items-center bg-background border border-white/10 rounded-xl px-4 py-3 mb-4">
                                <span className="text-xs text-gray-500 flex-1">Buscando: Eletricista</span>
                                <Search className="w-4 h-4 text-accent" />
                            </div>

                            {/* Fake Map */}
                            <div className="w-full h-64 bg-background/60 rounded-xl relative overflow-hidden">
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                                {/* Map Points */}
                                <div className="absolute top-1/3 left-1/3">
                                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center animate-pulse">
                                        <MapPin className="w-3 h-3 text-background" />
                                    </div>
                                </div>
                                <div className="absolute top-1/2 right-1/4">
                                    <div className="w-4 h-4 bg-white/20 rounded-full"></div>
                                </div>
                                <div className="absolute bottom-1/4 left-1/2">
                                    <div className="w-4 h-4 bg-white/20 rounded-full"></div>
                                </div>

                                {/* City Label */}
                                <div className="absolute bottom-4 right-4 text-right">
                                    <span className="text-sm font-bold text-white/40">São Paulo</span>
                                </div>
                            </div>

                            {/* Professional Card */}
                            <div className="mt-4 flex items-center space-x-3 bg-background border border-white/10 rounded-xl px-4 py-3">
                                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-sm">CS</div>
                                <div className="flex-1">
                                    <p className="text-xs font-bold text-white">Carlos S.</p>
                                    <div className="flex items-center space-x-1">
                                        <Star className="w-3 h-3 text-accent fill-accent" />
                                        <span className="text-[10px] text-gray-400">4.9 (120)</span>
                                    </div>
                                </div>
                                <span className="text-[10px] text-gray-500 font-bold">A 2km</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

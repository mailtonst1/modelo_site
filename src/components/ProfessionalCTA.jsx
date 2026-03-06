import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowUpRight } from 'lucide-react';

export default function ProfessionalCTA() {
    const ctaRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        gsap.fromTo(ctaRef.current,
                            { scale: 0.95, opacity: 0, y: 50 },
                            { scale: 1, opacity: 1, y: 0, duration: 1, ease: "power4.out" }
                        );
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (ctaRef.current) {
            observer.observe(ctaRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="py-24 lg:py-40 bg-background px-6 lg:px-16 w-full flex justify-center border-t border-white/5 relative overflow-hidden">

            {/* Background abstract typography mimicking racing aesthetics */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] text-center pointer-events-none opacity-[0.03] select-none">
                <h2 className="text-[20vw] font-display font-black leading-none text-white whitespace-nowrap overflow-hidden">
                    JOIN PRO HUB
                </h2>
            </div>

            <div
                ref={ctaRef}
                className="max-w-6xl w-full relative z-10 flex flex-col items-center justify-center p-8 lg:p-20 opacity-0 group"
            >
                <div className="absolute inset-0 bg-surface/80 backdrop-blur-xl rounded-[3rem] border border-white/10 overflow-hidden z-[-1]">
                    {/* Neon flash effect inside the container */}
                    <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent opacity-10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:opacity-20 transition-opacity duration-1000"></div>

                    {/* Decorative lines/grids mimicking high-end UI */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
                </div>

                <div className="relative z-10 text-center flex flex-col items-center max-w-3xl cursor-default space-y-8">
                    <div className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold tracking-[0.2em] uppercase">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                        <span>Programa Para Especialistas</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white tracking-tighter uppercase leading-[0.95]">
                        Sua agenda <br />
                        <span className="text-accent italic pr-2">Acelerada.</span>
                    </h2>

                    <p className="text-lg md:text-xl text-gray-400 font-light max-w-xl mx-auto leading-relaxed">
                        Tenha acesso a clientes qualificados, ferramentas de orçamentação e recebimento garantido. Ultrapasse a sua concorrência de forma implacável.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8 w-full sm:w-auto justify-center">
                        {/* Lando inspired button: Sharp, full width on click, aggressive hover state */}
                        <button className="relative w-full sm:w-auto px-10 py-5 bg-accent text-background font-bold text-lg rounded-none overflow-hidden group/btn hover:text-white transition-colors duration-300">
                            <span className="relative z-10 flex items-center justify-center space-x-3">
                                <span className="uppercase tracking-wider">Largar na Pole</span>
                                <ArrowUpRight className="w-6 h-6 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-black transform scale-y-0 origin-bottom group-hover/btn:scale-y-100 transition-transform duration-500 z-0"></div>
                        </button>
                        <button className="text-white hover:text-accent font-bold uppercase tracking-widest text-sm transition-colors duration-300 relative group/link pb-1">
                            Saiba Mais
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover/link:w-full"></span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

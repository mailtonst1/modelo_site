import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
    const sectionRef = useRef(null);
    const [openIndex, setOpenIndex] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        gsap.fromTo(
                            entry.target.querySelectorAll('.faq-item'),
                            { opacity: 0, y: 30 },
                            { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
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

    const faqItems = [
        {
            question: 'Como faço para contratar um profissional?',
            answer: 'Navegue pelas categorias ou use a barra de busca para encontrar o serviço desejado. Após escolher o profissional ideal com base em avaliações e portfólio, basta clicar em "Agendar" e seguir o fluxo de pagamento seguro.',
        },
        {
            question: 'Como os profissionais são verificados?',
            answer: 'Todos os profissionais passam por verificação de identidade, documentação profissional e análise de histórico. Além disso, mantemos um sistema contínuo de avaliações dos clientes.',
        },
        {
            question: 'Quais as formas de pagamento aceitas?',
            answer: 'Aceitamos cartão de crédito, débito, Pix e boleto bancário. Todos os pagamentos são intermediados pela plataforma para garantir segurança total.',
        },
        {
            question: 'Como funciona o chat rápido?',
            answer: 'O chat é criptografado de ponta a ponta. Você pode enviar mensagens, fotos e vídeos para descrever seu problema diretamente ao profissional antes de fechar o serviço.',
        },
        {
            question: 'Posso cancelar um serviço agendado?',
            answer: 'Sim, você pode cancelar até 24h antes do agendamento sem custo. Cancelamentos tardios podem ter uma taxa de acordo com a política do profissional.',
        },
    ];

    return (
        <section ref={sectionRef} className="w-full py-24 lg:py-32 bg-background px-6 lg:px-16 border-t border-white/5">
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <div className="mb-4 flex items-center space-x-3">
                    <div className="w-8 h-[2px] bg-accent"></div>
                    <span className="text-xs text-accent uppercase tracking-[0.2em] font-bold">Suporte ao Cliente</span>
                </div>

                <h2 className="text-3xl md:text-5xl font-display font-black text-white tracking-tight mb-4">
                    Perguntas <span className="text-accent">Frequentes</span>
                </h2>
                <p className="text-sm text-gray-400 font-light leading-relaxed mb-16 max-w-lg">
                    Tudo o que você precisa saber sobre nossa plataforma de serviços premium. Encontre respostas rápidas para as suas principais dúvidas.
                </p>

                {/* Accordion */}
                <div className="space-y-3">
                    {faqItems.map((item, index) => (
                        <div
                            key={index}
                            className="faq-item opacity-0 border border-white/5 rounded-xl overflow-hidden transition-all duration-300 hover:border-white/10"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                className="w-full flex items-center justify-between py-5 px-6 text-left cursor-interactive"
                            >
                                <span className={`text-sm font-bold transition-colors duration-300 ${openIndex === index ? 'text-accent' : 'text-white'}`}>
                                    {item.question}
                                </span>
                                <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-300 flex-shrink-0 ml-4 ${openIndex === index ? 'rotate-180 text-accent' : ''}`} />
                            </button>

                            <div className={`overflow-hidden transition-all duration-500 ${openIndex === index ? 'max-h-40' : 'max-h-0'}`}>
                                <p className="text-sm text-gray-400 leading-relaxed px-6 pb-5">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Support */}
                <div className="mt-12 bg-accent/10 border border-accent/20 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-lg font-display font-bold text-white mb-1">Ainda tem dúvidas?</h3>
                        <p className="text-xs text-gray-400">Nossa equipe de suporte está pronta para ajudar você a qualquer momento.</p>
                    </div>
                    <button className="px-6 py-3 bg-accent text-background font-bold text-sm rounded-xl hover:bg-white transition-colors cursor-interactive whitespace-nowrap">
                        Falar com o Suporte
                    </button>
                </div>
            </div>
        </section>
    );
}

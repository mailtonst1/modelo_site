import React from 'react';
import CustomCursor from '../components/CustomCursor';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import PopularServices from '../components/PopularServices';
import AppPreview from '../components/AppPreview';
import FAQ from '../components/FAQ';
import ProfessionalCTA from '../components/ProfessionalCTA';
import { Focus } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
    return (
        <>
            {/* Global Custom Cursor */}
            <CustomCursor />

            {/* Navigation - ProMatch */}
            <nav className="w-full px-6 lg:px-16 py-5 flex items-center justify-between fixed top-0 z-[100] bg-background/60 backdrop-blur-xl border-b border-white/5">
                <div className="flex items-center space-x-3 group cursor-interactive">
                    <div className="w-9 h-9 bg-accent rounded-lg flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                        <Focus className="w-5 h-5 text-background" strokeWidth={2.5} />
                    </div>
                    <span className="font-display font-black text-xl tracking-tight text-white uppercase">PROMATCH</span>
                </div>

                <div className="hidden md:flex items-center space-x-10 text-xs font-bold tracking-[0.15em] font-display uppercase">
                    <a href="#como-funciona" className="text-gray-400 hover:text-white transition-colors cursor-interactive relative group">
                        Como Funciona?
                        <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a href="#servicos" className="text-gray-400 hover:text-white transition-colors cursor-interactive relative group">
                        Serviços
                        <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-interactive relative group">
                        Ofereça seu Serviço
                        <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </div>

                <div className="flex items-center space-x-6 text-sm font-bold tracking-widest uppercase font-display">
                    <Link to="/login" className="hidden sm:block text-gray-400 hover:text-white transition-colors cursor-interactive">
                        Login
                    </Link>
                    <Link to="/login" className="px-6 py-2.5 bg-accent text-background hover:bg-white transition-colors duration-300 cursor-interactive rounded-full group text-xs">
                        <span className="block font-bold tracking-wider">COMEÇAR</span>
                    </Link>
                </div>
            </nav>

            <main className="relative z-10 w-full flex flex-col items-center">
                <Hero />
                <div id="como-funciona"><HowItWorks /></div>
                <div id="servicos"><PopularServices /></div>
                <AppPreview />
                <FAQ />
                <ProfessionalCTA />
            </main>

            {/* Footer */}
            <footer className="w-full bg-background border-t border-white/5 text-gray-500 py-16 px-6 lg:px-16 flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0 text-xs uppercase tracking-widest font-display font-medium">
                <div className="flex items-center gap-4">
                    <div className="w-6 h-6 bg-accent rounded-sm opacity-50 flex items-center justify-center">
                        <Focus className="w-3 h-3 text-background" />
                    </div>
                    <span>&copy; {new Date().getFullYear()} PROMATCH INC. TODOS OS DIREITOS RESERVADOS.</span>
                </div>

                <div className="flex space-x-8">
                    <a href="#" className="hover:text-accent transition-colors cursor-interactive">Legal</a>
                    <a href="#" className="hover:text-accent transition-colors cursor-interactive">Privacidade</a>
                    <a href="#" className="hover:text-accent transition-colors cursor-interactive">Sistemas</a>
                </div>
            </footer>
        </>
    );
}

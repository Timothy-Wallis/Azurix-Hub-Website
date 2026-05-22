import FullHeader from './assets/FullHeader.tsx';
import Hero from './assets/Hero.tsx';
import ToolSection from './assets/ToolSelection.tsx';
import ResearchSection from './assets/Research.tsx';
import Footer from './assets/Footer.tsx';
import AboutSection from './assets/About.tsx';
interface HomeProps {
    onNavigate: (page:  'home' | 'analytics' | 'settings' | 'login') => void;
    sidebarOpen: boolean;
    onToggleSidebar: () => void;
}
export default function Home({onNavigate, sidebarOpen, onToggleSidebar}: HomeProps) {
    return (
        <>
            <FullHeader onNavigate={onNavigate} sidebarOpen={sidebarOpen} onToggleSidebar={onToggleSidebar}/>
            <main className="main-content" id="mainContent">
                <Hero />
                <AboutSection />
                <ToolSection />
                <ResearchSection />
                <Footer />
            </main>
        </>
    )
}
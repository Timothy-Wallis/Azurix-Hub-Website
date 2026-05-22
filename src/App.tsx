
import { useEffect, useState, lazy, Suspense } from 'react';
import SignUp from './SignUp.tsx';

const Home = lazy(() => import('./Home.tsx'));
const Settings = lazy(() => import('./Settings.tsx'));
const Login = lazy(() => import('./Login.tsx'));

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'analytics' | 'settings' | 'collaboration' | 'signup' | 'login'>('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    // @ts-ignore
    import('./assets/app.js');
    // @ts-ignore
    import('./assets/script.js');
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      // Mobile: manage mobile-open class on sidebar via sidebarOpen state
      // This is handled in SideBarNav component
    } else {
      // Desktop: manage sidebar-collapsed class on body
      if (sidebarOpen) {
        document.body.classList.remove('sidebar-collapsed');
      } else {
        document.body.classList.add('sidebar-collapsed');
      }
    }
  }, [sidebarOpen, isMobile]);

  const handleNavigation = (nextPage: 'home' | 'analytics' | 'settings' | 'collaboration' | 'signup' | 'login') => {
    setCurrentPage(nextPage);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return <Suspense fallback={
    <div id="loadIcon">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>}>
    {currentPage == "home" && <Home onNavigate={handleNavigation} sidebarOpen={sidebarOpen} onToggleSidebar={toggleSidebar} />}
    {currentPage == "settings" && <Settings onNavigate={handleNavigation} sidebarOpen={sidebarOpen} onToggleSidebar={toggleSidebar}/>}
    {currentPage == "login" && <SignUp/>}
  </Suspense>

}

export default App

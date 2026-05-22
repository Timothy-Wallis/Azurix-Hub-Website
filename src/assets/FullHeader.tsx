import { type JSX } from "react";
import HeaderComponent from "./Header.tsx";
import MobileOverlay from "./MobileOverlay.tsx";
import SidebarNav from "./SideBarNav.tsx";
interface HomeProps {
    onNavigate: (page:  'home' | 'analytics' | 'settings' | 'login') => void;
    sidebarOpen: boolean;
    onToggleSidebar: () => void;
}
export default function FullHeader({onNavigate, sidebarOpen, onToggleSidebar}: HomeProps): JSX.Element {
    return (
        <>
            <HeaderComponent onNavigate={onNavigate} onToggleSidebar={onToggleSidebar}/>
            <MobileOverlay open={sidebarOpen} onClose={() => onToggleSidebar()}/>
            <SidebarNav open={sidebarOpen} onLinkClick={() => onToggleSidebar()} />
        </>
    )
}
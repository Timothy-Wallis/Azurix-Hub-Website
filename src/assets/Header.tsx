import { createElement, type JSX } from "react";
import SpanComponent from "./SpanComp.tsx";
interface HomeProps {
    onNavigate: (page:  'home' | 'analytics' | 'settings' | 'login') => void;
    onToggleSidebar: () => void;
}
export default function Header({onNavigate, onToggleSidebar}: HomeProps): JSX.Element {
    return (
        createElement('header', { className: 'site-header', id: 'siteHeader' },
            createElement('button', { className: 'menu-btn', id: 'menuBtn', "aria-label": "Toggle navigation menu", "aria-expanded": false, "aria-controls": "sidebar", onClick: onToggleSidebar },
                SpanComponent()
            ),
            createElement('a', { onClick: () => {
                onNavigate("home");
            }, className: 'brand-name', style: {"cursor": "pointer"}}, 'Iterum Sciences'),
            createElement('button', { className: 'theme-btn', id: 'themeBtn', "aria-label": "Switch to dark mode", style: {"cursor": "pointer"}, onClick: () => {
                const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
                const next = isDark ? 'light' : 'dark';
                document.documentElement.setAttribute('data-theme', next);
                localStorage.setItem('theme', next);
                const headerBtn = document.getElementById('themeBtn');
                if (headerBtn) {
                    headerBtn.setAttribute('aria-label', isDark ? 'Switch to dark mode' : 'Switch to light mode');
                }
            } },
                createElement('span', { className: 'theme-icon-light', "aria-hidden": true }, '🌙'),
                createElement('span', { className: 'theme-icon-dark', "aria-hidden": true }, '☀️')
            ),
            createElement('button', { className: 'btn btn-login', onClick: () => {
                onNavigate("login");
            }, style: {"cursor": "pointer"}}, 'Login')
        )
    )
}
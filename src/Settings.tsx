import Header from "./assets/Header"
interface SettingsProps {
  onNavigate: (page: 'home' | 'analytics' | 'settings' | 'login') => void;
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
}
export default function Settings(props: SettingsProps) {
  return (
    <div style={{ paddingLeft: '20px' }}>
      <Header onNavigate={props.onNavigate} onToggleSidebar={props.onToggleSidebar} />
      <h1 style={{ paddingTop: '60px' }}>Settings</h1>
      <p>This is the settings page. Here you can manage your application settings and preferences.</p>
      <p>More features will be added soon!</p>
    </div>
  )
}

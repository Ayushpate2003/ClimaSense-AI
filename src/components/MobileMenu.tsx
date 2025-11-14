import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { SidebarNavItem } from './SidebarNavItem';

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-6 left-6 z-50 glass-dark p-3 rounded-2xl hover:bg-white/20 transition-all"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 h-full w-64 glass-dark z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-24 pb-8">
          <nav className="flex-1 flex flex-col gap-2 px-4">
            <SidebarNavItem to="/dashboard" icon="layout-dashboard" label="Dashboard" onClick={() => setIsOpen(false)} />
            <SidebarNavItem to="/aqi" icon="wind" label="AQI Details" onClick={() => setIsOpen(false)} />
            <SidebarNavItem to="/forecast" icon="calendar" label="Forecast" onClick={() => setIsOpen(false)} />
            <SidebarNavItem to="/alerts" icon="bell" label="Alerts" onClick={() => setIsOpen(false)} />
            <SidebarNavItem to="/ai-insights" icon="sparkles" label="AI Insights" onClick={() => setIsOpen(false)} />

            <div className="mt-4 pt-4 border-t border-white/10">
              <SidebarNavItem to="#add" icon="plus" label="Add" onClick={() => setIsOpen(false)} />
              <SidebarNavItem to="#search" icon="search" label="Search" onClick={() => setIsOpen(false)} />
              <SidebarNavItem to="#notifications" icon="bell" label="Notifications" onClick={() => setIsOpen(false)} />
              <SidebarNavItem to="#profile" icon="user" label="Profile" onClick={() => setIsOpen(false)} />
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

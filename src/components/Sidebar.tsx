import { Home, Map, Calendar, Globe, Settings, LogOut, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocation, useNavigate } from "react-router-dom";
import climasenseLogo from "@/assets/climasense-logo.png";

const navigationItems = [
  { icon: Home, path: "/dashboard", label: "Dashboard - View current weather and forecasts" },
  { icon: Map, path: "/aqi", label: "AQI Map - Air quality monitoring worldwide" },
  { icon: Calendar, path: "/forecast", label: "Forecast - Detailed weather predictions" },
  { icon: Globe, path: "/alerts", label: "Alerts - Weather warnings and notifications" },
  { icon: Sparkles, path: "/ai-insights", label: "AI Insights - Smart weather analysis" },
];

export const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="hidden lg:flex fixed left-0 top-0 h-screen w-20 glass-dark border-r border-white/10 flex-col items-center py-6 z-50 backdrop-blur-xl">
      {/* Logo */}
      <div className="mb-8 w-16 h-16 flex items-center justify-center">
        <img src={climasenseLogo} alt="ClimaSense AI" className="w-full h-full object-contain" />
      </div>

      {/* Grid Menu Icon */}
      <button className="mb-8 w-12 h-12 rounded-xl glass hover:bg-white/15 hover:shadow-lg hover:shadow-white/20 transition-all duration-300 flex items-center justify-center group">
        <div className="grid grid-cols-2 gap-1">
          <div className="w-1.5 h-1.5 rounded-sm bg-white/60 group-hover:bg-white transition-all duration-300"></div>
          <div className="w-1.5 h-1.5 rounded-sm bg-white/60 group-hover:bg-white transition-all duration-300"></div>
          <div className="w-1.5 h-1.5 rounded-sm bg-white/60 group-hover:bg-white transition-all duration-300"></div>
          <div className="w-1.5 h-1.5 rounded-sm bg-white/60 group-hover:bg-white transition-all duration-300"></div>
        </div>
      </button>

      {/* Navigation Items */}
      <nav className="flex-1 flex flex-col gap-4">
        {navigationItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group relative",
                isActive
                  ? "bg-white/20 text-white shadow-lg shadow-white/20"
                  : "text-white/60 hover:bg-white/15 hover:text-white hover:shadow-lg hover:shadow-white/20"
              )}
              title={item.label}
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <item.icon className="h-5 w-5 relative z-10 group-hover:scale-110 transition-transform duration-300" />
            </button>
          );
        })}
      </nav>

      {/* Settings & Logout */}
      <div className="flex flex-col gap-4">
        <button
          onClick={() => navigate("/settings")}
          className={cn(
            "w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group relative",
            location.pathname === "/settings"
              ? "bg-white/20 text-white shadow-lg shadow-white/20"
              : "text-white/60 hover:bg-white/15 hover:text-white hover:shadow-lg hover:shadow-white/20"
          )}
          title="Settings - Customize your experience"
        >
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-green-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <Settings className="h-5 w-5 relative z-10 group-hover:scale-110 transition-transform duration-300" />
        </button>
        <button
          onClick={() => navigate("/")}
          className="w-12 h-12 rounded-xl text-white/60 hover:bg-white/15 hover:text-white hover:shadow-lg hover:shadow-white/20 transition-all duration-300 flex items-center justify-center group relative"
          title="Logout - Sign out of your account"
        >
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-red-400/10 to-orange-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <LogOut className="h-5 w-5 relative z-10 group-hover:scale-110 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
};

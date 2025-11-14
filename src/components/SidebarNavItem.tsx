import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Wind, 
  Calendar, 
  Bell, 
  Sparkles 
} from "lucide-react";

interface SidebarNavItemProps {
  to: string;
  icon: "layout-dashboard" | "wind" | "calendar" | "bell" | "sparkles";
  label: string;
  onClick?: () => void;
}

const iconMap = {
  "layout-dashboard": LayoutDashboard,
  "wind": Wind,
  "calendar": Calendar,
  "bell": Bell,
  "sparkles": Sparkles,
};

export const SidebarNavItem = ({ to, icon, label, onClick }: SidebarNavItemProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  const Icon = iconMap[icon];

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`group relative flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 ${
        isActive
          ? "bg-primary text-primary-foreground shadow-lg"
          : "text-muted-foreground hover:bg-white/10 hover:text-foreground"
      }`}
      title={label}
    >
      <Icon className="h-5 w-5" />
      <span className="text-sm font-medium lg:inline hidden">{label}</span>
      
      {/* Active indicator */}
      {isActive && (
        <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary-foreground rounded-r-full" />
      )}
    </Link>
  );
};

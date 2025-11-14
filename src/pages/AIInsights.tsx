import { WeatherBackground } from "@/components/WeatherBackground";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { MobileMenu } from "@/components/MobileMenu";
import { GlassCard } from "@/components/GlassCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sparkles } from "lucide-react";

const AIInsights = () => {
  return (
    <WeatherBackground condition="cloudy">
      <Sidebar />
      <MobileMenu />
      <div className="min-h-screen lg:ml-20">
        <Header userName="AI Climate Insights" />
        <main className="pt-24 px-4 lg:px-8 h-[calc(100vh-6rem)]">
          <ScrollArea className="h-full">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 animate-fade-in">AI Insights</h1>
          <GlassCard className="p-6 lg:p-8 animate-fade-in">
            <div className="flex items-center gap-4 mb-4">
              <Sparkles className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">AI Assistant</h3>
            </div>
            <p className="text-muted-foreground">AI-powered climate insights will be available here.</p>
          </GlassCard>
          </ScrollArea>
        </main>
      </div>
    </WeatherBackground>
  );
};

export default AIInsights;

import { Sparkles } from "lucide-react";

export const NotificationBar = () => {
  const message = "Free Shipping on orders above ₹999 • Use code GLOW15 for 15% off";
  
  return (
    <div className="bg-primary text-primary-foreground py-2.5 relative overflow-hidden">
      {/* Subtle shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="flex items-center gap-3 mx-8 text-xs md:text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              {message}
              <Sparkles className="w-4 h-4" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

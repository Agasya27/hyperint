import { Search, User, ShoppingBag } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-background border-b border-border/50 py-4">
      <div className="container flex items-center justify-between">
        {/* Logo - Centered */}
        <div className="flex-1" />
        <div className="text-center">
          <h1 className="font-serif text-2xl md:text-3xl font-semibold text-foreground tracking-wide">
            Are-zōu
          </h1>
          <p className="text-[10px] text-muted-foreground tracking-widest uppercase mt-0.5">
            By Ishita Saxena
          </p>
        </div>
        
        {/* Right Actions */}
        <div className="flex-1 flex items-center justify-end gap-4">
          <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
            <User className="w-5 h-5" />
          </button>
          <button className="p-2 text-muted-foreground hover:text-foreground transition-colors relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-primary text-primary-foreground text-[10px] font-medium rounded-full flex items-center justify-center">
              0
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
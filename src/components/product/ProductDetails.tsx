import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Shield, Truck, RotateCcw, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StarRating } from "@/components/ui/StarRating";
import visaLogo from "@/assets/visa-logo.png";

interface ProductDetailsProps {
  onOpenInsights: () => void;
}

const collapsibleSections = [
  { 
    id: "features", 
    title: "Key Features",
    content: "• 100% Natural Botanical Extracts\n• Cold-pressed Bergamot Oil\n• Vitamin E & Rosehip Seed Oil\n• Suitable for All Skin Types\n• Paraben & Sulfate Free"
  },
  { 
    id: "ingredients", 
    title: "Full Ingredients",
    content: "Prunus Armeniaca (Apricot) Kernel Oil, Rosa Canina (Rosehip) Seed Oil, Simmondsia Chinensis (Jojoba) Seed Oil, Citrus Aurantium Bergamia (Bergamot) Fruit Oil, Tocopherol (Vitamin E), Rosa Damascena (Rose) Flower Oil"
  },
  { 
    id: "shipping", 
    title: "Shipping Policy",
    content: "Free shipping on orders above ₹999. Standard delivery: 5-7 business days. Express delivery available at checkout."
  },
  { 
    id: "returns", 
    title: "Return & Exchange Policy",
    content: "7-day easy returns. If you're not satisfied with your purchase, return it within 7 days for a full refund."
  },
  { 
    id: "description", 
    title: "Description",
    content: "Radiance & Glow Face Oil is a luxurious blend of botanical oils designed to nourish, hydrate, and illuminate your skin. Infused with bergamot and rose essential oils, this face oil conjures sensorial moments of smell, touch, and sight. Perfect for your daily skincare ritual."
  },
];

export const ProductDetails = ({ onOpenInsights }: ProductDetailsProps) => {
  const [selectedSize, setSelectedSize] = useState("30ml");
  const [quantity, setQuantity] = useState(1);
  const [expandedSection, setExpandedSection] = useState<string | null>("features");
  const [isWishlisted, setIsWishlisted] = useState(false);

  const sizes = ["30ml", "50ml"];

  return (
    <div className="space-y-6">
      {/* Brand badge */}
      <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
        ✨ Are-zōu Exclusive
      </div>

      {/* Product Title */}
      <div>
        <h1 className="font-serif text-2xl md:text-3xl font-semibold text-foreground leading-tight">
          Radiance & Glow Face Oil
        </h1>
        <p className="text-muted-foreground mt-2">
          with Bergamot | Brightens, Hydrates & Glow | All Skin Types
        </p>
        
        {/* Rating summary */}
        <div className="flex items-center gap-3 mt-3">
          <StarRating rating={4.9} size="sm" showValue />
          <button 
            onClick={onOpenInsights}
            className="text-xs text-primary hover:underline"
          >
            Based on 198 Reviews
          </button>
        </div>
      </div>

      {/* Size Selector - DMD style */}
      <div>
        <p className="text-sm font-medium text-foreground mb-2">SIZE: {selectedSize}</p>
        <div className="flex gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-4 py-2 text-sm rounded-lg border transition-all ${
                selectedSize === size
                  ? "border-primary bg-primary/5 text-primary font-medium"
                  : "border-border text-muted-foreground hover:border-primary/50"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div>
        <p className="text-sm font-medium text-foreground mb-2">QUANTITY</p>
        <div className="flex items-center border border-border rounded-lg w-fit">
          <button 
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            −
          </button>
          <span className="px-4 py-2 font-medium text-foreground">{quantity}</span>
          <button 
            onClick={() => setQuantity(quantity + 1)}
            className="px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            +
          </button>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex gap-3">
        <Button className="flex-1 py-6 text-base font-medium">
          Add to Cart
        </Button>
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className={`p-3 rounded-lg border transition-all ${
            isWishlisted 
              ? "border-rose-muted bg-rose-whisper text-rose-muted" 
              : "border-border text-muted-foreground hover:border-rose-muted hover:text-rose-muted"
          }`}
        >
          <Heart className={`w-5 h-5 ${isWishlisted ? "fill-current" : ""}`} />
        </button>
      </div>

      {/* Trust badges - DMD style */}
      <div className="flex flex-wrap gap-4 py-4 border-y border-border">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Shield className="w-4 h-4 text-primary" />
          <span>100% Authentic</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Truck className="w-4 h-4 text-primary" />
          <span>Free Shipping</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <RotateCcw className="w-4 h-4 text-primary" />
          <span>7-Day Returns</span>
        </div>
      </div>

      {/* We Accept - Styled like reference image */}
      <div className="bg-card rounded-xl p-5 border border-border shadow-sm">
        <p className="text-lg font-serif font-semibold text-foreground mb-4 text-center">We Accept</p>
        <div className="flex items-center justify-center gap-3 flex-wrap">
          {/* Visa */}
          <div className="bg-white rounded-md px-3 py-2 border border-border shadow-sm">
            <img src={visaLogo} alt="Visa" className="h-5 w-auto" />
          </div>
          {/* Mastercard */}
          <div className="bg-white rounded-md px-3 py-2 border border-border shadow-sm">
            <svg viewBox="0 0 50 30" className="h-6 w-auto">
              <rect width="50" height="30" fill="white"/>
              <circle cx="18" cy="15" r="10" fill="#EB001B"/>
              <circle cx="32" cy="15" r="10" fill="#F79E1B"/>
              <path d="M25 7C27.5 9 29 12 29 15C29 18 27.5 21 25 23C22.5 21 21 18 21 15C21 12 22.5 9 25 7Z" fill="#FF5F00"/>
            </svg>
          </div>
          {/* American Express */}
          <div className="bg-[#016FD0] rounded-md px-3 py-2 border border-border shadow-sm">
            <span className="text-[10px] font-bold text-white leading-tight block">AMERICAN</span>
            <span className="text-[10px] font-bold text-white leading-tight block">EXPRESS</span>
          </div>
          {/* RuPay */}
          <div className="bg-white rounded-md px-4 py-2 border border-border shadow-sm">
            <span className="text-sm font-bold text-[#097A44]">Ru</span>
            <span className="text-sm font-bold text-[#F37021]">Pay</span>
          </div>
          {/* UPI */}
          <div className="bg-white rounded-md px-4 py-2 border border-border shadow-sm">
            <span className="text-sm font-bold text-[#3D3D3D]">UPI</span>
          </div>
        </div>
      </div>

      {/* Collapsible Sections - DMD style accordions */}
      <div className="space-y-0 border-t border-border">
        {collapsibleSections.map((section) => (
          <div key={section.id} className="border-b border-border">
            <button
              onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
              className="w-full flex items-center justify-between py-4 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              <span className="flex items-center gap-2">
                <span className="text-primary">▸</span>
                {section.title}
              </span>
              {expandedSection === section.id ? (
                <ChevronUp className="w-4 h-4 text-muted-foreground" />
              ) : (
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              )}
            </button>
            {expandedSection === section.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="pb-4"
              >
                <p className="text-sm text-muted-foreground whitespace-pre-line pl-5">
                  {section.content}
                </p>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

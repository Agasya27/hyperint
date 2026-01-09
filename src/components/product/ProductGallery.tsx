import { useState } from "react";
import { motion } from "framer-motion";
import { StarRating } from "@/components/ui/StarRating";
import { ZoomIn, ZoomOut } from "lucide-react";
import arezouProduct from "@/assets/arezou-product.png";

interface ProductGalleryProps {
  onOpenInsights: () => void;
}

export const ProductGallery = ({ onOpenInsights }: ProductGalleryProps) => {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div className="relative">
      {/* Main image with elegant frame */}
      <div 
        className={`relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-cream to-secondary cursor-zoom-in transition-transform duration-500 ${
          isZoomed ? "scale-110 cursor-zoom-out z-50" : ""
        }`}
        onClick={() => setIsZoomed(!isZoomed)}
      >
        <motion.img
          src={arezouProduct}
          alt="Are-zōu Radiance & Glow Face Oil"
          className="w-full h-full object-contain p-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Zoom indicator */}
        <button
          className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm p-2 rounded-full shadow-card border border-border/50"
          onClick={(e) => {
            e.stopPropagation();
            setIsZoomed(!isZoomed);
          }}
        >
          {isZoomed ? (
            <ZoomOut className="w-4 h-4 text-foreground" />
          ) : (
            <ZoomIn className="w-4 h-4 text-foreground" />
          )}
        </button>

        {/* Trust overlay badge */}
        <motion.div 
          className="absolute top-4 left-4 bg-primary/95 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-xl shadow-elevated"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <StarRating rating={4.9} size="sm" />
          <p className="text-xs mt-1 font-medium">2,500+ Happy Customers</p>
        </motion.div>

        {/* Quick review link */}
        <motion.button
          onClick={(e) => {
            e.stopPropagation();
            onOpenInsights();
          }}
          className="absolute bottom-4 right-4 bg-card/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-card border border-border/50 text-xs font-medium text-foreground hover:bg-card transition-colors"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          View 198 Reviews →
        </motion.button>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-sage-light/30 rounded-full blur-2xl -z-10" />
      <div className="absolute -top-3 -left-3 w-16 h-16 bg-warm-cream/50 rounded-full blur-xl -z-10" />
    </div>
  );
};
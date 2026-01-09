import { useState } from "react";
import { motion } from "framer-motion";
import { Star, MessageCircle, ShoppingBag, Heart, Leaf, Droplets, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StarRating } from "@/components/ui/StarRating";
import { TrustBadge } from "@/components/ui/TrustBadge";
import { FloatingTestimonial } from "@/components/reviews/FloatingTestimonial";
import heroProduct from "@/assets/hero-product.jpg";

interface ProductHeroProps {
  onOpenInsights: () => void;
}

/**
 * ProductHero - Design traced to reference images:
 * 
 * FROM IMAGE 1 (DMD Product Page):
 * - Rating badge overlay on product image (top-left "5.0 ★★★★★")
 * - "500+ Units Sold" trust badge overlaid on image (adapted to "2,800+ happy customers")
 * - Clean two-column layout: image left, details right
 * - Trust signals embedded within product display, not below
 * 
 * FROM IMAGES 2-6 (Radiance & Glow Face Oil):
 * - Teal/sage green as primary accent color
 * - "Recent Reviews" sidebar concept adapted as floating testimonial
 * - Rating summary with "198 reviews" and "280 sold this month" metrics
 * - Calm, wellness brand tone in typography and spacing
 */
export const ProductHero = ({ onOpenInsights }: ProductHeroProps) => {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Background gradient - cream/warm tones from Images 2-6 */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream-warm/50 via-background to-background" />
      
      <div className="container relative z-10 py-8 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Product Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main product image */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-elevated">
              <img
                src={heroProduct}
                alt="Radiance & Glow Face Oil"
                className="w-full h-full object-cover"
              />
              
              {/* 
                Trust overlay badge - FROM IMAGE 1 (DMD)
                The DMD page shows "5.0 ★★★★★" overlaid on top-left of product image
                This builds immediate trust before reading any details
              */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute top-4 left-4 bg-card/90 backdrop-blur-sm rounded-xl px-3 py-2 shadow-soft"
              >
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-foreground">4.8</span>
                  <span className="text-xs text-muted-foreground">· 262 reviews</span>
                </div>
              </motion.div>
              
              {/* 
                Units sold badge - FROM IMAGE 1 (DMD)
                DMD shows "500+ Units Sold" as trust signal on image
                Adapted for skincare: "2,800+ happy customers"
              */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute bottom-4 right-4 bg-sage/90 backdrop-blur-sm text-primary-foreground rounded-full px-4 py-2 shadow-soft"
              >
                <span className="text-sm font-medium">🌿 2,800+ happy customers</span>
              </motion.div>
            </div>

            {/* 
              Floating testimonial - FROM IMAGES 2-6
              The Radiance product page shows "Recent Reviews" sidebar
              Reimagined as floating card for non-traditional placement
            */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-8 -left-4 lg:-left-8 z-20 hidden md:block"
            >
              <FloatingTestimonial
                title="My skin literally glows now"
                excerpt="After 2 months of use, I wake up with naturally radiant skin. No makeup needed!"
                author="Priya S."
                rating={5}
                usageDuration="Using for 2 months"
                verified
                className="max-w-[280px]"
              />
            </motion.div>
          </motion.div>

          {/* Product Details Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Brand - FROM IMAGES 2-6 "Are-zou" brand styling */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-sm tracking-[0.2em] text-sage font-medium uppercase"
            >
              Arezza Botanicals
            </motion.p>

            {/* Title */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
              Radiance & Glow
              <span className="block text-3xl md:text-4xl lg:text-5xl text-charcoal-soft mt-2">
                Face Oil
              </span>
            </h1>

            {/* 
              Rating summary - FROM IMAGES 2-6
              Shows "★★★★★ 4.8 | 198 reviews | 280 sold this month"
              Exactly matching the reference layout
            */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-4 flex-wrap"
            >
              <button
                onClick={onOpenInsights}
                className="flex items-center gap-2 hover:bg-muted/50 rounded-lg px-2 py-1 -ml-2 transition-colors group"
              >
                <StarRating rating={4.8} showValue size="md" />
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  See insights →
                </span>
              </button>
              <TrustBadge variant="verified" text="198 Verified" />
              <span className="text-sm text-muted-foreground">280 sold this month</span>
            </motion.div>

            {/* Description - FROM IMAGES 2-6 "About Radiance & Glow Face Oil" section */}
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              A therapeutic aromatherapy-inspired serum crafted with bergamot, rosehip, and 
              lavender to restore your skin&apos;s natural luminosity.
            </p>

            {/* Key benefits - FROM IMAGES 2-6 "Key Benefits" bullet list */}
            <div className="space-y-4 py-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-sage-light flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-sage" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Instant Radiance</h3>
                  <p className="text-sm text-muted-foreground">Brightens dull skin from the first application</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-whisper flex items-center justify-center flex-shrink-0">
                  <Droplets className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Deep Nourishment</h3>
                  <p className="text-sm text-muted-foreground">7 cold-pressed oils for lasting hydration</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-cream-warm flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-5 h-5 text-charcoal-soft" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">100% Natural</h3>
                  <p className="text-sm text-muted-foreground">Suitable for all skin types including sensitive</p>
                </div>
              </div>
            </div>

            {/* Price - FROM IMAGES 2-6 */}
            <div className="flex items-center gap-6 pt-4">
              <div>
                <span className="text-3xl font-serif font-semibold text-foreground">₹1,299</span>
                <span className="text-lg text-muted-foreground line-through ml-2">₹1,599</span>
              </div>
              <span className="px-2 py-1 bg-rose-whisper text-accent-foreground text-sm font-medium rounded-lg">
                19% OFF
              </span>
            </div>

            {/* Action buttons - FROM IMAGES 2-6 teal "ADD TO CART" and "Buy Now" */}
            <div className="flex items-center gap-4 pt-2">
              <Button size="lg" className="flex-1 h-14 text-base font-medium">
                <ShoppingBag className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
              <Button size="lg" variant="outline" className="h-14 w-14 p-0">
                <Heart className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

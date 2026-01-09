import { motion } from "framer-motion";
import { Droplet } from "lucide-react";
import { ReviewWhisper } from "@/components/reviews/ReviewWhisper";

/**
 * IngredientsSection - Design decisions traced to reference images:
 * 
 * FROM IMAGE 5 (Radiance - Ingredients Tab):
 * - "Full Ingredients" section with categorized lists
 * - "Organic Cold Pressed Oils" and "Pure Essential Oils" groupings
 * - Individual ingredient bullets: Sunflower Oil, Apricot Kernel Oil, etc.
 * - Disclaimer text at bottom about natural product variations
 * 
 * FROM IMAGES 2-6 (Overall Radiance Page):
 * - Tab structure (Description, Ingredients, Directions, Reviews)
 * - Calm wellness aesthetic with generous white space
 * - Teal/sage accents for icons and highlights
 * 
 * INNOVATION - Review Integration:
 * - Instead of separate "Reviews" tab, reviews appear as whispers
 * - After ingredient list, a contextual testimonial about ingredient quality
 * - This validates ingredient claims with real customer voice
 */

const ingredients = [
  { name: "Rosehip Oil", benefit: "Rich in vitamins A & C for cell renewal", category: "cold-pressed", color: "bg-rose-whisper" },
  { name: "Bergamot Essential Oil", benefit: "Brightens and balances complexion", category: "essential", color: "bg-sage-light" },
  { name: "Lavender", benefit: "Soothes and promotes healing", category: "essential", color: "bg-rose-whisper" },
  { name: "Jojoba Oil", benefit: "Mimics skin's natural sebum", category: "cold-pressed", color: "bg-cream-warm" },
  { name: "Vitamin E", benefit: "Powerful antioxidant protection", category: "cold-pressed", color: "bg-gold/20" },
  { name: "Geranium", benefit: "Tones and tightens skin", category: "essential", color: "bg-sage-light" },
];

export const IngredientsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Subtle pattern - soft organic feel */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-sage-light blur-3xl" />
        <div className="absolute bottom-20 left-20 w-48 h-48 rounded-full bg-rose-whisper blur-3xl" />
      </div>

      <div className="container relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm tracking-[0.2em] text-sage font-medium uppercase">
            Crafted with Care
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-foreground mt-4 mb-4">
            Nature's Finest Ingredients
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A synergistic blend of organic cold-pressed oils and pure essential oils, 
            each selected for their transformative skin benefits.
          </p>
        </motion.div>

        {/* 
          Ingredient cards grid
          Adapted from IMAGE 5's bullet list format into visual cards
          Categories mirror "Organic Cold Pressed Oils" and "Pure Essential Oils"
        */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ingredients.map((ingredient, index) => (
            <motion.div
              key={ingredient.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-6 shadow-soft border border-border/50 hover:shadow-card transition-all duration-300 h-full">
                <div className={`w-12 h-12 rounded-xl ${ingredient.color} flex items-center justify-center mb-4`}>
                  <Droplet className="w-6 h-6 text-foreground/60" />
                </div>
                
                {/* Category badge - FROM IMAGE 5 groupings */}
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  {ingredient.category === "cold-pressed" ? "Cold Pressed Oil" : "Essential Oil"}
                </span>
                
                <h3 className="font-serif text-xl font-semibold text-foreground mt-1 mb-2">
                  {ingredient.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {ingredient.benefit}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 
          Disclaimer - FROM IMAGE 5
          "Being a natural and handmade product brand, the product's color/blase may 
          vary with every order. This does not affect the efficiency of the product."
        */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs text-muted-foreground text-center mt-8 max-w-xl mx-auto"
        >
          Being a natural and handmade product, slight variations in color may occur between batches. 
          This does not affect the product's efficacy.
        </motion.p>

        {/* 
          INNOVATION: Integrated review whisper after ingredients
          Instead of reviews in a separate tab (Images 2-6), 
          we place a contextual testimonial that validates ingredient quality
          This is a "trust moment" embedded in the narrative
        */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <div className="bg-cream-warm/50 rounded-3xl p-8">
            <p className="text-sm text-sage font-medium mb-4 tracking-wide uppercase">
              What customers say about our ingredients
            </p>
            <ReviewWhisper
              quote="The bergamot scent is divine and my skin has never looked this healthy. You can really feel the quality of the oils."
              author="Ananya S."
              rating={5}
              skinType="Combination"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

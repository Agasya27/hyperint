import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StarRating } from "@/components/ui/StarRating";
import { ReviewCardEnhanced } from "@/components/reviews/ReviewCardEnhanced";
import { Button } from "@/components/ui/button";
import { Grid3X3, List, Quote, Sparkles, CheckCircle2, Filter, TrendingUp } from "lucide-react";

interface ProductReviewsSectionProps {
  onOpenInsights: () => void;
}

const reviews = [
  {
    id: 1,
    author: "Priya S.",
    rating: 5,
    headline: "My skin has never felt softer",
    content: "I was skeptical at first, but after 2 weeks of consistent use, my skin is visibly brighter and more hydrated. The bergamot scent is divine!",
    date: "2 days ago",
    skinType: "Combination",
    usageDuration: "2 weeks",
    verified: true,
    helpful: 24,
    tags: ["Brightening", "Hydrating"]
  },
  {
    id: 2,
    author: "Ananya M.",
    rating: 5,
    headline: "Perfect for my nighttime routine",
    content: "I apply this before bed and wake up with such glowing skin. It absorbs quickly without feeling greasy.",
    date: "1 week ago",
    skinType: "Dry",
    usageDuration: "1 month",
    verified: true,
    helpful: 18,
    tags: ["Non-greasy", "Glow"]
  },
  {
    id: 3,
    author: "Sneha R.",
    rating: 4,
    headline: "Transformed my dull skin",
    content: "The team was very helpful and guided me throughout my purchase. Fast delivery and great packaging.",
    date: "3 weeks ago",
    skinType: "Oily",
    usageDuration: "3 weeks",
    verified: true,
    helpful: 12,
    tags: ["Good Service", "Premium"]
  },
  {
    id: 4,
    author: "Meera K.",
    rating: 5,
    headline: "Holy grail product!",
    content: "I received a fast response from the customer service team. The product quality is amazing!",
    date: "1 month ago",
    skinType: "Normal",
    usageDuration: "2 months",
    verified: true,
    helpful: 8,
    tags: ["Premium", "Natural"]
  },
  {
    id: 5,
    author: "Kavya D.",
    rating: 5,
    headline: "Worth every penny",
    content: "Finally a face oil that doesn't break me out! My sensitive skin loves this formula.",
    date: "5 days ago",
    skinType: "Sensitive",
    usageDuration: "3 weeks",
    verified: true,
    helpful: 15,
    tags: ["Sensitive Skin", "Gentle"]
  },
  {
    id: 6,
    author: "Riya P.",
    rating: 5,
    headline: "Obsessed with the glow",
    content: "My friends keep asking what I'm using differently. This oil gives the most natural, healthy glow!",
    date: "2 weeks ago",
    skinType: "Normal",
    usageDuration: "6 weeks",
    verified: true,
    helpful: 21,
    tags: ["Natural Glow", "Compliments"]
  },
];

const filterOptions = ["All", "5 Star", "4 Star", "Verified", "With Photos"];

export const ProductReviewsSection = ({ onOpenInsights }: ProductReviewsSectionProps) => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showAll, setShowAll] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const displayedReviews = showAll ? reviews : reviews.slice(0, viewMode === "grid" ? 6 : 4);

  return (
    <section className="py-16 bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="container">
        {/* Section Header - Unique editorial style */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-3">
            What Our Community Says
          </h2>
          <p className="text-muted-foreground mb-3">
            Join thousands who've discovered their glow with Are-zōu
          </p>
          <button 
            onClick={onOpenInsights}
            className="inline-flex items-center gap-1.5 text-primary text-sm font-medium hover:underline"
          >
            <Sparkles className="w-3.5 h-3.5" />
            View Insights
          </button>
        </motion.div>

        {/* Stats bar - unique horizontal layout */}
        <motion.div 
          className="flex flex-wrap justify-center gap-6 mb-10 p-6 bg-card rounded-2xl shadow-card border border-border/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center gap-3 px-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-xl font-bold text-primary">4.9</span>
            </div>
            <div>
              <StarRating rating={4.9} size="xs" />
              <p className="text-xs text-muted-foreground mt-0.5">Average Rating</p>
            </div>
          </div>
          
          <div className="w-px h-12 bg-border hidden sm:block" />
          
          <div className="flex items-center gap-3 px-4">
            <div className="w-12 h-12 rounded-full bg-sage-light flex items-center justify-center">
              <Quote className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground">198</p>
              <p className="text-xs text-muted-foreground">Total Reviews</p>
            </div>
          </div>
          
          <div className="w-px h-12 bg-border hidden sm:block" />
          
          <div className="flex items-center gap-3 px-4">
            <div className="w-12 h-12 rounded-full bg-sage-light flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground">94%</p>
              <p className="text-xs text-muted-foreground">Verified Purchases</p>
            </div>
          </div>
          
          <div className="w-px h-12 bg-border hidden sm:block" />
          
          <div className="flex items-center gap-3 px-4">
            <div className="w-12 h-12 rounded-full bg-sage-light flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground">97%</p>
              <p className="text-xs text-muted-foreground">Would Recommend</p>
            </div>
          </div>
        </motion.div>

        {/* Controls bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          {/* Filter pills */}
          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="w-4 h-4 text-muted-foreground" />
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-1.5 text-xs rounded-full transition-all ${
                  activeFilter === filter
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          
          {/* View toggle */}
          <div className="flex items-center gap-2 bg-secondary rounded-lg p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-md transition-all ${
                viewMode === "grid" 
                  ? "bg-card shadow-sm text-primary" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Grid3X3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-md transition-all ${
                viewMode === "list" 
                  ? "bg-card shadow-sm text-primary" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Reviews Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={viewMode}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={
              viewMode === "grid"
                ? "grid md:grid-cols-2 lg:grid-cols-3 gap-4"
                : "space-y-4 max-w-3xl mx-auto"
            }
          >
            {displayedReviews.map((review, i) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <ReviewCardEnhanced 
                  review={review} 
                  compact={viewMode === "list"} 
                  variant={i === 0 ? "featured" : "default"}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          {reviews.length > (viewMode === "grid" ? 6 : 4) && (
            <Button 
              variant="outline" 
              onClick={() => setShowAll(!showAll)}
              className="min-w-[180px]"
            >
              {showAll ? "Show Less" : `View All 198 Reviews`}
            </Button>
          )}
          
        </div>
      </div>
    </section>
  );
};
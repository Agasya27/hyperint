import { motion } from "framer-motion";
import { StarRating } from "@/components/ui/StarRating";
import { TrustBadge } from "@/components/ui/TrustBadge";
import { cn } from "@/lib/utils";

interface ReviewData {
  id: number;
  author: string;
  rating: number;
  headline: string;
  content: string;
  date: string;
  skinType?: string;
  usageDuration?: string;
  verified?: boolean;
  helpful?: number;
  tags?: string[];
}

interface ReviewCardEnhancedProps {
  review?: ReviewData;
  // Legacy props for backwards compatibility
  title?: string;
  content?: string;
  author?: string;
  date?: string;
  location?: string;
  rating?: number;
  skinType?: string;
  usageDuration?: string;
  customerType?: "New" | "Returning" | "Loyal";
  verified?: boolean;
  helpful?: number;
  tags?: string[];
  variant?: "default" | "featured" | "warm";
  compact?: boolean;
  className?: string;
}

/**
 * ReviewCardEnhanced - Adapted from Image 8 (Peanut butter review cards)
 * 
 * Key adaptations from reference:
 * - Emotional, story-driven titles in quotes (e.g., "Good Peanut Butter, Stress Eating ki Best Friend")
 * - Author name + date + location displayed together
 * - Metadata boxes for SIZE and CUSTOMER type
 * - Tags like "Premium", "Natural", "Pure" 
 * - Warm color palette adapted to skincare context
 */
export const ReviewCardEnhanced = ({
  review,
  title: propTitle,
  content: propContent,
  author: propAuthor,
  date: propDate,
  location,
  rating: propRating,
  skinType: propSkinType,
  usageDuration,
  customerType = "New",
  verified: propVerified = true,
  helpful: propHelpful = 0,
  tags: propTags = [],
  variant = "default",
  compact = false,
  className,
}: ReviewCardEnhancedProps) => {
  // Support both review object and individual props
  const title = review?.headline || propTitle || "";
  const content = review?.content || propContent || "";
  const author = review?.author || propAuthor || "";
  const date = review?.date || propDate || "";
  const rating = review?.rating || propRating || 5;
  const skinType = review?.skinType || propSkinType;
  const verified = review?.verified ?? propVerified;
  const helpful = review?.helpful ?? propHelpful;
  const tags = review?.tags || propTags;

  const isFeatured = variant === "featured";
  const isWarm = variant === "warm";

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -2, scale: 1.01 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "rounded-2xl transition-all duration-300 relative overflow-hidden group",
        isFeatured && "bg-gradient-to-br from-primary/5 via-sage-light/50 to-cream-warm shadow-card border-2 border-primary/20 p-6",
        isWarm && "bg-gradient-to-br from-amber/10 via-cream-warm to-rose-whisper/30 shadow-card p-5",
        !isFeatured && !isWarm && "bg-card shadow-soft border border-border/50 hover:shadow-card hover:border-primary/30 p-5",
        compact && "flex gap-4 items-start",
        className
      )}
    >
      {/* Featured badge */}
      {isFeatured && (
        <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] font-semibold px-3 py-1 rounded-bl-xl">
          ⭐ TOP REVIEW
        </div>
      )}

      {compact ? (
        // List view layout
        <>
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-sage-light flex items-center justify-center font-serif text-lg text-primary">
              {author.charAt(0)}
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-2">
              <div>
                <p className="font-medium text-foreground text-sm">{author}</p>
                <p className="text-xs text-muted-foreground">{date} • {skinType}</p>
              </div>
              <div className="flex items-center gap-1 bg-primary/10 px-2 py-0.5 rounded-full">
                <StarRating rating={rating} size="xs" />
              </div>
            </div>
            <h4 className="font-serif font-semibold text-foreground mb-1.5 italic">"{title}"</h4>
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{content}</p>
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-2">
                {tags.slice(0, 2).map((tag) => (
                  <span key={tag} className="text-[10px] px-2 py-0.5 bg-secondary text-muted-foreground rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </>
      ) : (
        // Grid view layout
        <>
          {/* Emotional headline */}
          <div className="flex items-start justify-between gap-3 mb-3">
            <h4 className={cn(
              "font-serif font-semibold leading-tight italic text-foreground",
              isFeatured ? "text-lg" : "text-base"
            )}>
              "{title}"
            </h4>
            <div className="flex-shrink-0 flex items-center gap-1 bg-primary/10 px-2 py-1 rounded-full">
              <StarRating rating={rating} size="xs" />
            </div>
          </div>

          {/* Content */}
          <p className={cn(
            "text-sm text-muted-foreground leading-relaxed mb-4",
            isFeatured ? "line-clamp-4" : "line-clamp-3"
          )}>
            {content}
          </p>

          {/* Author info */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-sage-light flex items-center justify-center font-serif text-sm text-primary">
              {author.charAt(0)}
            </div>
            <div>
              <p className="font-medium text-foreground text-sm">{author}</p>
              <p className="text-xs text-muted-foreground">{date}</p>
            </div>
          </div>

          {/* Metadata boxes */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            <div className="bg-sage-light/60 rounded-xl p-3 text-center">
              <span className="text-[10px] font-medium text-primary uppercase tracking-wider block mb-0.5">
                Skin Type
              </span>
              <p className="text-sm font-semibold text-foreground">{skinType || "Normal"}</p>
            </div>
            <div className="bg-rose-whisper/60 rounded-xl p-3 text-center">
              <span className="text-[10px] font-medium text-rose-muted uppercase tracking-wider block mb-0.5">
                Using For
              </span>
              <p className="text-sm font-semibold text-foreground">{usageDuration || "2 weeks"}</p>
            </div>
          </div>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-3">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-2.5 py-1 bg-charcoal text-primary-foreground text-xs rounded-full"
                >
                  ✨ {tag}
                </span>
              ))}
            </div>
          )}

          {/* Footer */}
          <div className="flex items-center justify-between pt-3 border-t border-border/30">
            {verified && <TrustBadge variant="verified" className="text-[10px]" />}
            {helpful > 0 && (
              <button className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                👍 {helpful} found helpful
              </button>
            )}
          </div>
        </>
      )}
    </motion.article>
  );
};

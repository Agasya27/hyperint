import { motion } from "framer-motion";
import { StarRating } from "@/components/ui/StarRating";
import { TrustBadge } from "@/components/ui/TrustBadge";
import { cn } from "@/lib/utils";

interface ReviewCardProps {
  title: string;
  content: string;
  author: string;
  date: string;
  rating: number;
  skinType?: string;
  usageDuration?: string;
  verified?: boolean;
  helpful?: number;
  variant?: "default" | "featured";
  className?: string;
}

export const ReviewCard = ({
  title,
  content,
  author,
  date,
  rating,
  skinType,
  usageDuration,
  verified = true,
  helpful = 0,
  variant = "default",
  className,
}: ReviewCardProps) => {
  const isFeatured = variant === "featured";

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "rounded-2xl p-5 transition-all duration-300",
        isFeatured
          ? "bg-gradient-to-br from-cream-warm to-rose-whisper/40 shadow-card border border-gold/20"
          : "bg-card shadow-soft border border-border/50 hover:shadow-card",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <h4 className={cn(
          "font-serif font-semibold leading-tight",
          isFeatured ? "text-lg" : "text-base"
        )}>
          "{title}"
        </h4>
        <div className="flex-shrink-0">
          <StarRating rating={rating} size="sm" />
        </div>
      </div>

      {/* Content */}
      <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
        {content}
      </p>

      {/* Metadata tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {skinType && (
          <span className="text-xs px-2.5 py-1 bg-sage-light/60 text-sage rounded-full">
            {skinType} skin
          </span>
        )}
        {usageDuration && (
          <span className="text-xs px-2.5 py-1 bg-rose-whisper text-accent-foreground rounded-full">
            {usageDuration}
          </span>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-border/50">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-sage-muted to-sage-light flex items-center justify-center">
            <span className="text-xs font-semibold text-sage">
              {author.charAt(0)}
            </span>
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">{author}</p>
            <p className="text-xs text-muted-foreground">{date}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          {verified && <TrustBadge variant="verified" className="text-[10px] px-2 py-0.5" />}
          {helpful > 0 && (
            <span className="text-xs text-muted-foreground">
              👍 {helpful}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
};

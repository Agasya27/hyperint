import { motion } from "framer-motion";
import { StarRating } from "@/components/ui/StarRating";
import { TrustBadge } from "@/components/ui/TrustBadge";
import { cn } from "@/lib/utils";

interface FloatingTestimonialProps {
  title: string;
  excerpt: string;
  author: string;
  rating: number;
  usageDuration?: string;
  verified?: boolean;
  className?: string;
  delay?: number;
}

export const FloatingTestimonial = ({
  title,
  excerpt,
  author,
  rating,
  usageDuration,
  verified = true,
  className,
  delay = 0,
}: FloatingTestimonialProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={cn(
        "testimonial-float bg-card/90 backdrop-blur-sm rounded-2xl p-5 shadow-card",
        "border border-border/50 max-w-sm cursor-default",
        className
      )}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <h4 className="font-serif text-lg font-semibold text-foreground leading-tight">
          "{title}"
        </h4>
        <StarRating rating={rating} size="sm" />
      </div>
      
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        {excerpt}
      </p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sage-light to-rose-whisper flex items-center justify-center">
            <span className="text-xs font-semibold text-sage">
              {author.charAt(0)}
            </span>
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">{author}</p>
            {usageDuration && (
              <p className="text-xs text-muted-foreground">{usageDuration}</p>
            )}
          </div>
        </div>
        {verified && <TrustBadge variant="verified" />}
      </div>
    </motion.div>
  );
};

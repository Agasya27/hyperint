import { motion } from "framer-motion";
import { StarRating } from "@/components/ui/StarRating";
import { cn } from "@/lib/utils";

interface ReviewWhisperProps {
  quote: string;
  author: string;
  rating: number;
  skinType?: string;
  className?: string;
}

export const ReviewWhisper = ({
  quote,
  author,
  rating,
  skinType,
  className,
}: ReviewWhisperProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "relative pl-4 border-l-2 border-gold/40 py-2",
        className
      )}
    >
      <p className="font-serif italic text-charcoal-soft text-sm leading-relaxed">
        "{quote}"
      </p>
      <div className="mt-2 flex items-center gap-3">
        <StarRating rating={rating} size="sm" />
        <span className="text-xs text-muted-foreground">— {author}</span>
        {skinType && (
          <span className="text-xs px-2 py-0.5 bg-rose-whisper rounded-full text-accent-foreground">
            {skinType}
          </span>
        )}
      </div>
    </motion.div>
  );
};

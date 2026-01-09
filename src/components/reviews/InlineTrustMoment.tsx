import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { StarRating } from "@/components/ui/StarRating";
import { cn } from "@/lib/utils";

interface InlineTrustMomentProps {
  quote: string;
  author: string;
  rating: number;
  highlight: string;
  className?: string;
}

export const InlineTrustMoment = ({
  quote,
  author,
  rating,
  highlight,
  className,
}: InlineTrustMomentProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "relative bg-gradient-to-br from-cream-warm to-rose-whisper/30",
        "rounded-3xl p-6 md:p-8",
        className
      )}
    >
      {/* Decorative quote */}
      <Quote className="absolute top-4 right-4 w-8 h-8 text-gold/20" />
      
      {/* Highlighted claim */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mb-4"
      >
        <span className="inline-block px-3 py-1 bg-sage/10 text-sage text-sm font-medium rounded-full">
          ✨ {highlight}
        </span>
      </motion.div>
      
      {/* Quote */}
      <p className="font-serif text-xl md:text-2xl text-foreground leading-relaxed mb-6 italic">
        "{quote}"
      </p>
      
      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-sage-light flex items-center justify-center">
          <span className="font-serif font-semibold text-sage">
            {author.charAt(0)}
          </span>
        </div>
        <div>
          <p className="font-medium text-foreground">{author}</p>
          <StarRating rating={rating} size="sm" />
        </div>
      </div>
    </motion.div>
  );
};

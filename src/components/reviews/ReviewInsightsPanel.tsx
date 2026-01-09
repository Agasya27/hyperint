import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, Users, Star, ShieldCheck, Clock, TrendingUp, MessageCircle, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface ReviewInsightsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * ReviewInsightsPanel - Explorable, Discovery-First Design
 * 
 * DESIGN PHILOSOPHY:
 * - NOT a dashboard with KPI tiles
 * - Feels like exploring community stories
 * - Progressive disclosure: click to reveal
 * - Each insight is a conversation starter
 */

type InsightCard = {
  id: string;
  icon: React.ReactNode;
  prompt: string;
  teaser: string;
  expandedContent: {
    stat?: string;
    detail: string;
    visual?: React.ReactNode;
  };
};

const insightCards: InsightCard[] = [
  {
    id: "rating",
    icon: <Star className="w-5 h-5" />,
    prompt: "How do people rate this?",
    teaser: "Overwhelmingly positive",
    expandedContent: {
      stat: "4.8",
      detail: "out of 5 stars — 89% gave 4 stars or higher",
      visual: (
        <div className="flex gap-1 mt-2">
          {[5, 4, 3, 2, 1].map((stars) => (
            <div key={stars} className="flex-1">
              <div className="h-12 bg-muted rounded-md overflow-hidden flex flex-col justify-end">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: stars === 5 ? "70%" : stars === 4 ? "20%" : "5%" }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className={cn(
                    "w-full rounded-t-sm",
                    stars >= 4 ? "bg-sage" : stars === 3 ? "bg-gold" : "bg-rose-muted/50"
                  )}
                />
              </div>
              <p className="text-[10px] text-center text-muted-foreground mt-1">{stars}★</p>
            </div>
          ))}
        </div>
      ),
    },
  },
  {
    id: "community",
    icon: <Users className="w-5 h-5" />,
    prompt: "Who's sharing their experience?",
    teaser: "262 real stories",
    expandedContent: {
      stat: "262",
      detail: "customers have shared their journey with this product",
    },
  },
  {
    id: "verified",
    icon: <ShieldCheck className="w-5 h-5" />,
    prompt: "Are these reviews genuine?",
    teaser: "83% verified purchases",
    expandedContent: {
      stat: "83%",
      detail: "of reviews are from verified purchases — real people, real results",
      visual: (
        <div className="mt-3 h-2 w-full bg-muted rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "83%" }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="h-full bg-sage rounded-full"
          />
        </div>
      ),
    },
  },
  {
    id: "recent",
    icon: <Clock className="w-5 h-5" />,
    prompt: "What's the latest feedback?",
    teaser: "13 reviews this month",
    expandedContent: {
      stat: "13",
      detail: "new reviews in the last 30 days — this community stays active",
      visual: (
        <div className="flex items-end gap-1 h-8 mt-3">
          {[3, 2, 4, 3, 5, 4, 3, 4, 5, 3, 4, 5, 4].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${(h / 5) * 100}%` }}
              transition={{ delay: 0.2 + i * 0.05 }}
              className="flex-1 bg-primary/60 rounded-t-sm"
            />
          ))}
        </div>
      ),
    },
  },
  {
    id: "sentiment",
    icon: <MessageCircle className="w-5 h-5" />,
    prompt: "What's the overall sentiment?",
    teaser: "Mostly delighted",
    expandedContent: {
      detail: "Here's what the community feels:",
      visual: (
        <div className="space-y-2 mt-3">
          <div className="flex items-center gap-3">
            <span className="text-xs w-16 text-sage font-medium">Loved it</span>
            <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "89%" }}
                transition={{ delay: 0.3 }}
                className="h-full bg-sage rounded-full"
              />
            </div>
            <span className="text-xs text-muted-foreground">89%</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs w-16 text-amber font-medium">Neutral</span>
            <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "7%" }}
                transition={{ delay: 0.4 }}
                className="h-full bg-gold rounded-full"
              />
            </div>
            <span className="text-xs text-muted-foreground">7%</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs w-16 text-rose-muted font-medium">Critical</span>
            <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "4%" }}
                transition={{ delay: 0.5 }}
                className="h-full bg-rose-muted rounded-full"
              />
            </div>
            <span className="text-xs text-muted-foreground">4%</span>
          </div>
        </div>
      ),
    },
  },
  {
    id: "trending",
    icon: <TrendingUp className="w-5 h-5" />,
    prompt: "What do people mention most?",
    teaser: "Glow, hydration, texture",
    expandedContent: {
      detail: "Top themes from customer stories:",
      visual: (
        <div className="flex flex-wrap gap-2 mt-3">
          {["✨ Radiant glow", "💧 Deep hydration", "🌿 Natural feel", "😊 Gentle on skin", "🌸 Lovely scent"].map((tag) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="px-3 py-1.5 bg-sage-light/50 text-sage text-xs rounded-full"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      ),
    },
  },
];

export const ReviewInsightsPanel = ({ isOpen, onClose }: ReviewInsightsPanelProps) => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const toggleCard = (id: string) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-charcoal/20 backdrop-blur-sm z-40"
          />
          
          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className={cn(
              "fixed right-0 top-0 h-full w-full max-w-md bg-card z-50",
              "shadow-elevated border-l border-border overflow-y-auto"
            )}
          >
            {/* Header */}
            <div className="sticky top-0 bg-card/95 backdrop-blur-sm border-b border-border p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">Community Insights</span>
                  </div>
                  <h2 className="font-serif text-2xl font-semibold text-foreground">
                    See what the community thinks
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-muted transition-colors"
                  aria-label="Close insights panel"
                >
                  <X className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-4">
              {/* Explorable Insight Cards */}
              {insightCards.map((card, index) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <button
                    onClick={() => toggleCard(card.id)}
                    className={cn(
                      "w-full text-left rounded-2xl border transition-all duration-300",
                      expandedCard === card.id
                        ? "bg-sage-light/30 border-sage/30 shadow-sm"
                        : "bg-card border-border hover:border-primary/30 hover:shadow-sm"
                    )}
                  >
                    <div className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={cn(
                            "p-2 rounded-xl transition-colors",
                            expandedCard === card.id ? "bg-sage/20 text-sage" : "bg-muted text-muted-foreground"
                          )}>
                            {card.icon}
                          </div>
                          <div>
                            <p className="font-medium text-foreground text-sm">{card.prompt}</p>
                            <p className="text-xs text-muted-foreground">{card.teaser}</p>
                          </div>
                        </div>
                        <ChevronRight className={cn(
                          "w-4 h-4 text-muted-foreground transition-transform duration-300",
                          expandedCard === card.id && "rotate-90"
                        )} />
                      </div>
                      
                      {/* Expanded Content */}
                      <AnimatePresence>
                        {expandedCard === card.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4 mt-4 border-t border-border/50">
                              {card.expandedContent.stat && (
                                <p className="text-4xl font-serif font-bold text-sage mb-1">
                                  {card.expandedContent.stat}
                                </p>
                              )}
                              <p className="text-sm text-muted-foreground">
                                {card.expandedContent.detail}
                              </p>
                              {card.expandedContent.visual}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </button>
                </motion.div>
              ))}

              {/* Soft CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="pt-6 text-center"
              >
                <p className="text-xs text-muted-foreground mb-4">
                  Ready to explore real customer stories?
                </p>
                <button
                  onClick={onClose}
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Browse all reviews →
                </button>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

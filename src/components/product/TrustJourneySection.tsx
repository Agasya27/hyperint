import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, BarChart3, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StarRating } from "@/components/ui/StarRating";
import { ReviewCardEnhanced } from "@/components/reviews/ReviewCardEnhanced";

interface TrustJourneySectionProps {
  onOpenInsights: () => void;
}

/**
 * TrustJourneySection - Design decisions traced to reference images:
 * 
 * FROM IMAGE 1 (DMD Product Page):
 * - Rating summary bar at top with average, distribution preview
 * - "View all X reviews" link at bottom
 * - Grid layout for review cards
 * 
 * FROM IMAGES 2-6 (Radiance & Glow):
 * - "Write a Review" button (teal/green)
 * - Filter tabs (Show All, Excellent, Great, Verified)
 * - Review cards with verified badge and "Read more" links
 * 
 * FROM IMAGE 7 (Review Analytics):
 * - "View Insights" button to open detailed analytics
 * - Quick stats bar: Would recommend %, Verified %, New this month
 * 
 * FROM IMAGE 8 (Peanut Butter Reviews):
 * - Emotional headline titles in quotes
 * - Metadata boxes (adapted: Skin Type, Customer type)
 * - Tags (adapted: "Natural", "Effective", etc.)
 * - Warm color scheme for featured cards
 * 
 * PLACEMENT INNOVATION:
 * - Not at bottom of page like Image 1's DMD
 * - Integrated as "Trust Journey" section between ritual and footer
 * - Reviews framed as "Stories from Real Users" - storytelling approach
 */

const reviewsData = [
  {
    title: "My morning skin is unbelievable now",
    content: "I have been using the Arezou Oil for the past 2 months and I am absolutely satisfied by the results. My skin looks and feels so much healthier and more radiant. I highly recommend this product to anyone looking to revitalize their skin.",
    author: "Priya S.",
    date: "2 weeks ago",
    location: "Mumbai",
    rating: 5,
    skinType: "Dry",
    usageDuration: "2 months",
    customerType: "New" as const,
    verified: true,
    helpful: 24,
    tags: ["Effective", "Natural"],
  },
  {
    title: "A youthful glow I didn't expect",
    content: "Arezou has not only improved my skin tone but also given it a youthful look. I am getting numerous compliments for the newfound glow and it has definitely boosted my confidence to take care of myself.",
    author: "Ananya S.",
    date: "1 month ago",
    location: "Bangalore",
    rating: 5,
    skinType: "Combination",
    usageDuration: "3 months",
    customerType: "Returning" as const,
    verified: true,
    helpful: 18,
    tags: ["Premium", "Glowing"],
  },
  {
    title: "So soothing, visible difference",
    content: "The oil you sent is very very soothing and I can see the difference slowly. Thank you for this! My sensitive skin has never felt better and the scent is divine.",
    author: "Meera A.",
    date: "3 weeks ago",
    location: "Delhi",
    rating: 5,
    skinType: "Sensitive",
    usageDuration: "1 month",
    customerType: "New" as const,
    verified: true,
    helpful: 12,
    tags: ["Gentle"],
  },
  {
    title: "Essential oils done right",
    content: "As I have used the essential oils, I am very happy with them. The face oil is also good. Thanks! The quality is evident from the first use and the packaging is beautiful.",
    author: "Divya I.",
    date: "1 month ago",
    location: "Chennai",
    rating: 5,
    skinType: "Normal",
    usageDuration: "6 weeks",
    customerType: "New" as const,
    verified: true,
    helpful: 9,
    tags: ["Natural", "Pure"],
  },
  {
    title: "Love at first application ❤️",
    content: "OMG! This face oil is everything I wanted. Got it 4-5 days back and have been using it daily. Gets absorbed so smoothly and the bergamot scent is heavenly.",
    author: "Sneha G.",
    date: "5 days ago",
    location: "Pune",
    rating: 5,
    skinType: "Oily",
    usageDuration: "1 week",
    customerType: "New" as const,
    verified: true,
    helpful: 7,
    tags: ["Fast-absorbing"],
  },
  {
    title: "Like a spa treatment at home",
    content: "This oil has an amazing collection! This face oil transports me to a luxury spa experience. The aromatherapy aspect is so calming after a long day at work.",
    author: "Arjun P.",
    date: "2 months ago",
    location: "Hyderabad",
    rating: 5,
    skinType: "Normal",
    usageDuration: "2 months",
    customerType: "Loyal" as const,
    verified: true,
    helpful: 15,
    tags: ["Relaxing", "Premium"],
  },
];

// Filter tabs - FROM IMAGES 2-6 (Show All, Excellent, Great, Verified)
const filterTags = ["Show All", "Excellent", "Verified", "5 Star", "Dry Skin", "Oily Skin"];

export const TrustJourneySection = ({ onOpenInsights }: TrustJourneySectionProps) => {
  const [activeFilter, setActiveFilter] = useState("Show All");

  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Decorative divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container relative z-10">
        {/* 
          Section Header - NOT "Customer Reviews" (generic)
          Instead: "The Trust Journey" / "Stories from Real Users"
          This frames reviews as storytelling, not just ratings
        */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <span className="text-sm tracking-[0.2em] text-sage font-medium uppercase">
              The Trust Journey
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mt-4 mb-2">
              Stories from Real Users
            </h2>
            <p className="text-muted-foreground max-w-lg">
              262 customers have shared their skincare transformation. Here is what makes them come back.
            </p>
          </div>
          
          {/* View Insights button - triggers panel from IMAGE 7 */}
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              onClick={onOpenInsights}
              className="gap-2"
            >
              <BarChart3 className="w-4 h-4" />
              View Insights
            </Button>
          </div>
        </motion.div>

        {/* 
          Rating Summary Bar - FROM IMAGES 2-6 and IMAGE 7
          Shows overall rating, quick stats, and filter pills
        */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-2xl p-6 shadow-soft border border-border/50 mb-10"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            {/* Overall rating display */}
            <div className="flex items-center gap-4">
              <div className="text-center">
                <span className="font-serif text-5xl font-bold text-foreground">4.8</span>
                <StarRating rating={4.8} size="md" className="justify-center mt-1" />
                <p className="text-xs text-muted-foreground mt-1">262 reviews</p>
              </div>
              
              <div className="h-16 w-px bg-border hidden md:block" />
            </div>

            {/* Quick stats - FROM IMAGE 7 sentiment summary */}
            <div className="flex flex-wrap gap-6">
              <div>
                <p className="text-2xl font-serif font-semibold text-sage">89%</p>
                <p className="text-xs text-muted-foreground">Would recommend</p>
              </div>
              <div>
                <p className="text-2xl font-serif font-semibold text-gold">83%</p>
                <p className="text-xs text-muted-foreground">Verified purchases</p>
              </div>
              <div>
                <p className="text-2xl font-serif font-semibold text-accent-foreground">13</p>
                <p className="text-xs text-muted-foreground">New this month</p>
              </div>
            </div>

            {/* Filter pills - FROM IMAGES 2-6 (Show All, Excellent, Great, Verified) */}
            <div className="flex-1 flex items-center gap-2 flex-wrap md:justify-end">
              <Filter className="w-4 h-4 text-muted-foreground" />
              {filterTags.slice(0, 4).map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveFilter(tag)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all ${
                    activeFilter === tag
                      ? "bg-sage text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Featured Review - warm variant inspired by IMAGE 8 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <ReviewCardEnhanced
            {...reviewsData[0]}
            variant="warm"
            className="max-w-3xl"
          />
        </motion.div>

        {/* 
          Review Grid - Cards with IMAGE 8 structure:
          - Emotional quote headlines
          - Metadata boxes (Skin Type, Customer)
          - Tags (Natural, Premium, etc.)
        */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewsData.slice(1).map((review, index) => (
            <ReviewCardEnhanced key={index} {...review} />
          ))}
        </div>

        {/* Load more - FROM IMAGE 1 (DMD) "View all X reviews" */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Button variant="outline" className="gap-2">
            View all 262 reviews
            <ChevronRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

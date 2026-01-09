import { useState } from "react";
import { NotificationBar } from "@/components/layout/NotificationBar";
import { Header } from "@/components/layout/Header";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductDetails } from "@/components/product/ProductDetails";
import { ProductReviewsSection } from "@/components/product/ProductReviewsSection";
import { Footer } from "@/components/layout/Footer";
import { ReviewInsightsPanel } from "@/components/reviews/ReviewInsightsPanel";

/**
 * Index Page - DMD Layout Recreation
 * 
 * Structure adapted from Image 1 (DMD Product Page):
 * 1. Top notification bar (yellow in DMD, sage green here)
 * 2. Centered header with logo
 * 3. Breadcrumb navigation
 * 4. Two-column product layout:
 *    - Left: Product gallery with thumbnail strip
 *    - Right: Product details, price, variants, CTA, collapsible sections
 * 5. Reviews section with rating distribution + cards
 * 6. Recommended products ("You May Also Like")
 * 7. Footer with brand info
 * 
 * Key differences from DMD:
 * - Reviews are uniquely integrated (not just a block at bottom)
 * - Trust signals woven into product gallery
 * - Review insights as slide-in panel (modern UX)
 */
const Index = () => {
  const [isInsightsPanelOpen, setIsInsightsPanelOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      {/* 1. Notification Bar - DMD style top banner */}
      <NotificationBar />

      {/* 2. Header - DMD style centered logo */}
      <Header />

      {/* Main Content Container */}
      <div className="container py-6">
        {/* 3. Breadcrumb - DMD style navigation */}
        <Breadcrumb 
          items={[
            { label: "Home", href: "/" },
            { label: "Face Oils", href: "/face-oils" },
            { label: "Radiance & Glow Face Oil" },
          ]} 
        />

        {/* 4. Two-Column Product Layout - DMD core structure */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mt-6">
          {/* Left: Product Gallery with thumbnails */}
          <ProductGallery onOpenInsights={() => setIsInsightsPanelOpen(true)} />

          {/* Right: Product Details */}
          <ProductDetails onOpenInsights={() => setIsInsightsPanelOpen(true)} />
        </div>
      </div>

      {/* 5. Reviews Section - DMD style with unique integration */}
      <ProductReviewsSection onOpenInsights={() => setIsInsightsPanelOpen(true)} />

      {/* 7. Footer */}
      <Footer />

      {/* Review Insights Panel - Modern slide-in */}
      <ReviewInsightsPanel 
        isOpen={isInsightsPanelOpen} 
        onClose={() => setIsInsightsPanelOpen(false)} 
      />
    </main>
  );
};

export default Index;
import { motion } from "framer-motion";
import { StarRating } from "@/components/ui/StarRating";
import arezouProduct from "@/assets/arezou-product.png";
import heroProduct from "@/assets/hero-product.jpg";

const products = [
  {
    id: 1,
    name: "Vitamin C Serum | Brightening & Anti-aging | 30ml",
    price: 1099,
    originalPrice: 1399,
    rating: 4.8,
    reviews: 156,
    image: heroProduct,
    discount: 21,
  },
  {
    id: 2,
    name: "Rose Water Toner | Hydrating & Soothing | 100ml",
    price: 599,
    originalPrice: 799,
    rating: 4.7,
    reviews: 89,
    image: arezouProduct,
    discount: 25,
  },
  {
    id: 3,
    name: "Night Repair Cream | Rejuvenating | 50g",
    price: 1499,
    originalPrice: 1899,
    rating: 4.9,
    reviews: 203,
    image: heroProduct,
    discount: 21,
  },
];

export const RecommendedProducts = () => {
  return (
    <section className="py-12 border-t border-border">
      <div className="container">
        <h2 className="text-xl font-serif font-semibold text-foreground mb-6">
          You May Also Like
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="relative aspect-square rounded-xl overflow-hidden bg-secondary mb-3">
                {/* Discount badge */}
                <span className="absolute top-2 left-2 bg-primary text-primary-foreground text-[10px] font-medium px-2 py-0.5 rounded z-10">
                  {product.discount}% OFF
                </span>
                
                {/* Wishlist */}
                <button className="absolute top-2 right-2 w-7 h-7 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center text-muted-foreground hover:text-rose-muted transition-colors z-10">
                  ♡
                </button>

                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Rating overlay */}
                <div className="absolute bottom-2 left-2 bg-card/90 backdrop-blur-sm px-2 py-1 rounded-lg">
                  <StarRating rating={product.rating} size="xs" showValue />
                </div>
              </div>

              <h3 className="text-sm text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                {product.name}
              </h3>
              
              <div className="flex items-center gap-2 mt-1">
                <StarRating rating={product.rating} size="xs" />
                <span className="text-xs text-muted-foreground">({product.reviews})</span>
              </div>

              <div className="flex items-center gap-2 mt-1">
                <span className="font-semibold text-foreground">₹{product.price}</span>
                <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

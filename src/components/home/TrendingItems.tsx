import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import freshApples from "@/assets/fresh-apples.jpg";
import freshBananas from "@/assets/fresh-bananas.jpg";
import freshCarrots from "@/assets/fresh-carrots.jpg";
import dairyProducts from "@/assets/dairy-products.jpg";
import healthySnacks from "@/assets/healthy-snacks.jpg";

const TrendingItems = () => {
  const [wishlist, setWishlist] = useState<number[]>([]);

  const products = [
    {
      id: 1,
      name: "Organic Red Apples",
      price: 4.99,
      originalPrice: 6.99,
      image: freshApples,
      rating: 4.8,
      reviews: 124,
      discount: "30% OFF",
      category: "Fruits"
    },
    {
      id: 2,
      name: "Fresh Bananas",
      price: 2.99,
      originalPrice: 3.99,
      image: freshBananas,
      rating: 4.9,
      reviews: 89,
      discount: "25% OFF",
      category: "Fruits"
    },
    {
      id: 3,
      name: "Organic Carrots",
      price: 3.49,
      originalPrice: 4.49,
      image: freshCarrots,
      rating: 4.7,
      reviews: 156,
      discount: "22% OFF",
      category: "Vegetables"
    },
    {
      id: 4,
      name: "Fresh Dairy Pack",
      price: 12.99,
      originalPrice: 15.99,
      image: dairyProducts,
      rating: 4.6,
      reviews: 203,
      discount: "19% OFF",
      category: "Dairy"
    },
    {
      id: 5,
      name: "Healthy Snack Mix",
      price: 8.99,
      originalPrice: 11.99,
      image: healthySnacks,
      rating: 4.8,
      reviews: 78,
      discount: "25% OFF",
      category: "Snacks"
    }
  ];

  const toggleWishlist = (productId: number) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trending Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Most loved fresh products by our customers this week
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {products.map((product) => (
            <div key={product.id} className="product-card group">
              {/* Product Image */}
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Discount Badge */}
                {product.discount && (
                  <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-2 py-1 rounded-md text-xs font-semibold">
                    {product.discount}
                  </div>
                )}

                {/* Wishlist Button */}
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className="absolute top-3 right-3 p-2 bg-white/90 rounded-full shadow-md hover:bg-white transition-colors"
                >
                  <Heart 
                    className={`h-4 w-4 ${
                      wishlist.includes(product.id) 
                        ? 'text-red-500 fill-red-500' 
                        : 'text-gray-400'
                    }`} 
                  />
                </button>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <div className="mb-2">
                  <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded">
                    {product.category}
                  </span>
                </div>
                
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-semibold text-foreground mb-2 hover:text-primary transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                </Link>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-3">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm font-medium">{product.rating}</span>
                  <span className="text-xs text-muted-foreground">({product.reviews})</span>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-lg font-bold text-foreground">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>

                {/* Add to Cart Button */}
                <Button className="w-full btn-primary group">
                  <ShoppingCart className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop">
            <Button variant="outline" size="lg" className="px-8">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrendingItems;
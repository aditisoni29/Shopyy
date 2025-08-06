import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-grocery.jpg";

const HeroBanner = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Leaf className="h-8 w-8 text-fresh-green" />
            <span className="text-lg font-medium">100% Fresh & Organic</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Fresh Groceries
            <span className="block text-fresh-green">Delivered Fresh</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
            Farm-fresh produce, pantry essentials, and quality groceries delivered to your doorstep. 
            Experience the freshest shopping with FreshCart.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link to="/shop">
              <Button size="lg" className="btn-primary text-lg px-8 py-4 group">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <Link to="/about">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20">
                Learn More
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-fresh-green">1000+</div>
              <div className="text-sm text-gray-600 font-bold">Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-fresh-green">24/7</div>
              <div className="text-sm text-gray-600 font-bold">Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-fresh-green">99%</div>
              <div className="text-sm text-gray-600 font-bold">Fresh Guarantee</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
};

export default HeroBanner;
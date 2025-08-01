import { Button } from "@/components/ui/button";
import { Gift, Clock, Percent } from "lucide-react";
import { Link } from "react-router-dom";

const PromotionalBanner = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-fresh-orange/20 to-accent/30">
      <div className="container mx-auto px-4">
        <div className="bg-card rounded-2xl shadow-card p-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Gift className="h-8 w-8 text-fresh-orange" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Limited Time Offer!
            </h2>
          </div>
          
          <p className="text-lg text-muted-foreground mb-6">
            Get <span className="text-fresh-orange font-bold">20% OFF</span> on your first order 
            and enjoy <span className="text-primary font-bold">FREE delivery</span> for orders over $50
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Clock className="h-5 w-5" />
              <span>Offer expires in 3 days</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Percent className="h-5 w-5" />
              <span>Use code: FRESH20</span>
            </div>
          </div>

          <div className="bg-muted/50 rounded-lg p-4 inline-block mb-6">
            <code className="text-primary font-mono text-lg font-bold">FRESH20</code>
          </div>

          <div>
            <Link to="/shop">
              <Button size="lg" className="btn-primary text-lg px-8 py-4">
                Shop Now & Save
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionalBanner;
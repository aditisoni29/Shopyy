import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      comment: "The freshest vegetables I've ever ordered online! FreshCart has become my go-to for all grocery needs. Fast delivery and excellent quality.",
      location: "New York, NY"
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 5,
      comment: "Amazing service! The fruits are always perfectly ripe and the dairy products are farm-fresh. Highly recommend FreshCart to everyone.",
      location: "San Francisco, CA"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      rating: 4,
      comment: "Love the convenience and quality. The app is easy to use and delivery is always on time. Great selection of organic products too!",
      location: "Austin, TX"
    },
    {
      id: 4,
      name: "David Thompson",
      rating: 5,
      comment: "Best grocery delivery service in the city! Fresh produce, competitive prices, and excellent customer service. Keep up the great work!",
      location: "Seattle, WA"
    },
    {
      id: 5,
      name: "Lisa Wang",
      rating: 5,
      comment: "FreshCart has made my life so much easier. Fresh, quality groceries delivered right to my door. The packaging is also eco-friendly!",
      location: "Los Angeles, CA"
    },
    {
      id: 6,
      name: "James Wilson",
      rating: 4,
      comment: "Reliable and fresh! I've been using FreshCart for months now and they never disappoint. Great customer support team as well.",
      location: "Chicago, IL"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating 
            ? 'text-yellow-400 fill-yellow-400' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust FreshCart for their grocery needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-card rounded-xl p-6 shadow-card hover:shadow-hover transition-shadow duration-300">
              {/* Rating Stars */}
              <div className="flex items-center space-x-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Comment */}
              <p className="text-muted-foreground mb-6 italic">
                "{testimonial.comment}"
              </p>

              {/* Customer Info */}
              <div className="border-t border-border pt-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-12 pt-8 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">10K+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">99%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">4.8</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
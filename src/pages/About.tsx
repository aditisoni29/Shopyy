import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Leaf, Users, Truck, Heart, Award, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Leaf,
      title: "Sustainability",
      description: "We partner with eco-friendly farms and use sustainable packaging to protect our planet."
    },
    {
      icon: Heart,
      title: "Quality First",
      description: "Every product is carefully selected and quality-checked before reaching your doorstep."
    },
    {
      icon: Users,
      title: "Community",
      description: "Supporting local farmers and communities while serving our customers with care."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to providing the best grocery shopping experience with top-notch service."
    }
  ];

  const stats = [
    { number: "50K+", label: "Happy Customers" },
    { number: "1000+", label: "Fresh Products" },
    { number: "100+", label: "Local Partners" },
    { number: "5 Years", label: "Of Excellence" }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "Founder & CEO",
      description: "Passionate about bringing fresh, quality groceries to every household."
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Operations",
      description: "Ensures our supply chain delivers the freshest products efficiently."
    },
    {
      name: "Emily Johnson",
      role: "Customer Experience Lead",
      description: "Dedicated to making every customer interaction delightful and memorable."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About FreshCart
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're on a mission to make fresh, quality groceries accessible to everyone. 
            From farm to your table, we ensure every product meets the highest standards 
            of freshness and quality.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  FreshCart was born from a simple idea: everyone deserves access to fresh, 
                  quality groceries without the hassle of traditional shopping. Founded in 2019, 
                  we started as a small local delivery service with a big dream.
                </p>
                <p>
                  Today, we've grown into a trusted grocery delivery platform serving thousands 
                  of families across the country. Our commitment to freshness, quality, and 
                  exceptional service remains unchanged.
                </p>
                <p>
                  We work directly with local farmers and trusted suppliers to bring you the 
                  freshest produce, dairy, and pantry essentials. Every order is carefully 
                  packed and delivered with love.
                </p>
              </div>
            </div>
            <div className="bg-muted/50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do at FreshCart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Globe className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
            <p className="text-xl text-muted-foreground mb-8">
              To revolutionize grocery shopping by making fresh, quality food accessible, 
              convenient, and sustainable for everyone, while supporting local communities 
              and protecting our environment.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 rounded-xl bg-card shadow-card">
                <Truck className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Fast Delivery</h3>
                <p className="text-sm text-muted-foreground">
                  Same-day delivery for orders placed before 2 PM
                </p>
              </div>
              <div className="p-6 rounded-xl bg-card shadow-card">
                <Leaf className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Eco-Friendly</h3>
                <p className="text-sm text-muted-foreground">
                  Sustainable packaging and carbon-neutral delivery
                </p>
              </div>
              <div className="p-6 rounded-xl bg-card shadow-card">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Community</h3>
                <p className="text-sm text-muted-foreground">
                  Supporting local farmers and community growth
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The passionate people behind FreshCart who make it all possible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Fresh?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust FreshCart for their grocery needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shop">
              <Button size="lg" variant="secondary" className="px-8">
                Start Shopping
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
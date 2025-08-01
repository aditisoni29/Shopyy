import { Link } from "react-router-dom";
import { Apple, Milk, Cookie, Wheat, Fish, Coffee } from "lucide-react";

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Fresh Fruits",
      icon: Apple,
      color: "text-red-500",
      bgColor: "bg-red-50",
      count: "150+ items"
    },
    {
      id: 2,
      name: "Dairy Products",
      icon: Milk,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      count: "80+ items"
    },
    {
      id: 3,
      name: "Snacks",
      icon: Cookie,
      color: "text-yellow-500",
      bgColor: "bg-yellow-50",
      count: "200+ items"
    },
    {
      id: 4,
      name: "Grains & Cereals",
      icon: Wheat,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      count: "90+ items"
    },
    {
      id: 5,
      name: "Fresh Seafood",
      icon: Fish,
      color: "text-cyan-500",
      bgColor: "bg-cyan-50",
      count: "45+ items"
    },
    {
      id: 6,
      name: "Beverages",
      icon: Coffee,
      color: "text-brown-500",
      bgColor: "bg-brown-50",
      count: "120+ items"
    }
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover fresh products across our carefully curated categories
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Link
                key={category.id}
                to={`/shop?category=${category.name.toLowerCase().replace(' ', '-')}`}
                className="group"
              >
                <div className="product-card p-6 text-center hover-lift">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${category.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`h-8 w-8 ${category.color}`} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
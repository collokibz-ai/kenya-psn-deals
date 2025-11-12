import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";

const products = [
  { id: "us-10", region: "United States", amount: "$10", price: 1500, flag: "🇺🇸", popular: true },
  { id: "us-25", region: "United States", amount: "$25", price: 3500, flag: "🇺🇸", popular: true },
  { id: "us-50", region: "United States", amount: "$50", price: 7000, flag: "🇺🇸" },
  { id: "uk-10", region: "United Kingdom", amount: "£10", price: 1700, flag: "🇬🇧" },
  { id: "uk-25", region: "United Kingdom", amount: "£25", price: 4000, flag: "🇬🇧" },
  { id: "uk-50", region: "United Kingdom", amount: "£50", price: 7500, flag: "🇬🇧" },
  { id: "za-200", region: "South Africa", amount: "R200", price: 1400, flag: "🇿🇦" },
  { id: "za-500", region: "South Africa", amount: "R500", price: 3200, flag: "🇿🇦" },
  { id: "za-1000", region: "South Africa", amount: "R1000", price: 6000, flag: "🇿🇦" },
];

const Shop = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-primary via-primary to-secondary py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="mb-4 text-5xl font-bold text-foreground md:text-6xl">
              PlayStation Store Gift Cards
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-foreground/90">
              Instant delivery of PSN codes for all regions. Top up your PlayStation wallet and start gaming!
            </p>
          </div>
        </div>
        <div className="absolute -bottom-1 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-3xl font-bold text-foreground">Choose Your Region</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Shop;

import Navbar from "@/components/Navbar";
import TestimonialCard from "@/components/TestimonialCard";
import WinnerCard from "@/components/WinnerCard";
import PromotionBanner from "@/components/PromotionBanner";

const testimonials = [
  {
    name: "James K.",
    text: "Super fast delivery! Got my code within 5 minutes. Highly recommended!",
    rating: 5,
  },
  {
    name: "Mary W.",
    text: "Best prices for PSN codes in Kenya. I've been buying from them for months.",
    rating: 5,
  },
  {
    name: "David M.",
    text: "Reliable service and great customer support. Will definitely buy again!",
    rating: 5,
  },
  {
    name: "Grace N.",
    text: "Got a discount code from their giveaway. Amazing value for money!",
    rating: 5,
  },
];

const winners = [
  { name: "Peter O.", prize: "US $50 PSN Code", date: "March 2025" },
  { name: "Sarah K.", prize: "UK £25 PSN Code", date: "February 2025" },
  { name: "Mike T.", prize: "US $25 PSN Code", date: "January 2025" },
];

const promotions = [
  {
    title: "First Purchase Discount",
    description: "Get 20% off your first purchase with code FIRSTBUY",
    endDate: "December 31, 2025",
    isActive: true,
  },
  {
    title: "Monthly Giveaway",
    description: "Follow us on social media for a chance to win free PSN codes every month!",
    endDate: "Ongoing",
    isActive: true,
  },
];

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-br from-primary to-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-5xl font-bold text-foreground">Community</h1>
          <p className="mx-auto max-w-2xl text-xl text-foreground/90">
            See what our customers are saying and check out our latest promotions!
          </p>
        </div>
      </section>

      {/* Ongoing Promotions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-3xl font-bold text-foreground">Ongoing Promotions</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {promotions.map((promo, index) => (
              <PromotionBanner key={index} {...promo} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-border bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-3xl font-bold text-foreground">What Customers Say</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Giveaway Winners */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-3xl font-bold text-foreground">Recent Giveaway Winners</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {winners.map((winner, index) => (
              <WinnerCard key={index} {...winner} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;

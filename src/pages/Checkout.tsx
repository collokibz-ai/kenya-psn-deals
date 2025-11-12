import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Smartphone, User, Tag, CreditCard } from "lucide-react";

const products = {
  "us-10": { region: "United States", amount: "$10", price: 1500 },
  "us-25": { region: "United States", amount: "$25", price: 3500 },
  "us-50": { region: "United States", amount: "$50", price: 7000 },
  "uk-10": { region: "United Kingdom", amount: "£10", price: 1700 },
  "uk-25": { region: "United Kingdom", amount: "£25", price: 4000 },
  "uk-50": { region: "United Kingdom", amount: "£50", price: 7500 },
  "za-200": { region: "South Africa", amount: "R200", price: 1400 },
  "za-500": { region: "South Africa", amount: "R500", price: 3200 },
  "za-1000": { region: "South Africa", amount: "R1000", price: 6000 },
};

const discountCodes = {
  "GAMER10": 10,
  "PSKENYA": 15,
  "FIRSTBUY": 20,
};

const Checkout = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const productId = searchParams.get("product") as keyof typeof products;
  const product = products[productId];

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [discountCode, setDiscountCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-foreground">Product not found</h1>
          <Button onClick={() => navigate("/")} className="mt-4">
            Return to Shop
          </Button>
        </div>
      </div>
    );
  }

  const applyDiscount = () => {
    const code = discountCode.toUpperCase();
    if (discountCodes[code as keyof typeof discountCodes]) {
      const discountPercent = discountCodes[code as keyof typeof discountCodes];
      setDiscount(discountPercent);
      toast({
        title: "Discount Applied!",
        description: `${discountPercent}% off your purchase`,
      });
    } else {
      toast({
        title: "Invalid Code",
        description: "Please check your discount code and try again",
        variant: "destructive",
      });
    }
  };

  const finalPrice = product.price - (product.price * discount) / 100;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate M-Pesa payment processing
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "Payment Initiated!",
        description: "Check your phone for M-Pesa prompt",
      });
      
      // In a real app, this would integrate with M-Pesa API
      setTimeout(() => {
        toast({
          title: "Payment Successful!",
          description: "Your PSN code will be sent to your phone shortly",
        });
        navigate("/");
      }, 3000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-2xl">
          <h1 className="mb-8 text-4xl font-bold text-foreground">Checkout</h1>
          
          <div className="space-y-6">
            {/* Order Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Product</span>
                  <span className="font-semibold text-foreground">
                    {product.region} - {product.amount}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Original Price</span>
                  <span className="font-semibold text-foreground">KSh {product.price.toLocaleString()}</span>
                </div>
                {discount > 0 && (
                  <div className="flex items-center justify-between text-ps-buttonGreen">
                    <span>Discount ({discount}%)</span>
                    <span>- KSh {((product.price * discount) / 100).toLocaleString()}</span>
                  </div>
                )}
                <div className="border-t border-border pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-foreground">Total</span>
                    <span className="text-2xl font-bold text-secondary">
                      KSh {finalPrice.toLocaleString()}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Form */}
            <Card>
              <CardHeader>
                <CardTitle>Payment Details</CardTitle>
                <CardDescription>Complete your purchase via M-Pesa</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>Full Name</span>
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="bg-muted"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center space-x-2">
                      <Smartphone className="h-4 w-4" />
                      <span>M-Pesa Phone Number</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="0712345678"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="bg-muted"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="discount" className="flex items-center space-x-2">
                      <Tag className="h-4 w-4" />
                      <span>Discount Code (Optional)</span>
                    </Label>
                    <div className="flex space-x-2">
                      <Input
                        id="discount"
                        type="text"
                        placeholder="Enter code"
                        value={discountCode}
                        onChange={(e) => setDiscountCode(e.target.value)}
                        className="bg-muted"
                      />
                      <Button
                        type="button"
                        onClick={applyDiscount}
                        variant="outline"
                        className="border-secondary text-secondary hover:bg-secondary hover:text-foreground"
                      >
                        Apply
                      </Button>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-secondary text-foreground hover:bg-secondary/90"
                    disabled={isProcessing}
                  >
                    <CreditCard className="mr-2 h-4 w-4" />
                    {isProcessing ? "Processing..." : `Pay KSh ${finalPrice.toLocaleString()}`}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Checkout;

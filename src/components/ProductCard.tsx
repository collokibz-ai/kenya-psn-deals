import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: string;
  region: string;
  amount: string;
  price: number;
  flag: string;
  popular?: boolean;
}

const ProductCard = ({ id, region, amount, price, flag, popular }: ProductCardProps) => {
  return (
    <Card className="group relative overflow-hidden transition-all hover:border-secondary hover:shadow-lg hover:shadow-secondary/20">
      {popular && (
        <Badge className="absolute right-4 top-4 bg-ps-buttonPink text-foreground">
          Popular
        </Badge>
      )}
      <CardHeader>
        <div className="mb-4 flex items-center justify-between">
          <span className="text-4xl">{flag}</span>
          <div className="text-right">
            <CardTitle className="text-2xl font-bold text-foreground">{amount}</CardTitle>
            <CardDescription className="text-muted-foreground">{region}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <div className="text-3xl font-bold text-secondary">KSh {price.toLocaleString()}</div>
        </div>
      </CardContent>
      <CardFooter>
        <Link to={`/checkout?product=${id}`} className="w-full">
          <Button className="w-full bg-secondary text-foreground hover:bg-secondary/90">
            Buy Now
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;

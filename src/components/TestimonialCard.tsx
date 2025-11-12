import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  text: string;
  rating: number;
}

const TestimonialCard = ({ name, text, rating }: TestimonialCardProps) => {
  return (
    <Card className="transition-all hover:border-secondary">
      <CardContent className="p-6">
        <div className="mb-4 flex items-center space-x-1">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-ps-buttonPink text-ps-buttonPink" />
          ))}
        </div>
        <p className="mb-4 text-muted-foreground">{text}</p>
        <p className="font-semibold text-foreground">- {name}</p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;

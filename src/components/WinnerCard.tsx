import { Card, CardContent } from "@/components/ui/card";
import { Trophy } from "lucide-react";

interface WinnerCardProps {
  name: string;
  prize: string;
  date: string;
}

const WinnerCard = ({ name, prize, date }: WinnerCardProps) => {
  return (
    <Card className="transition-all hover:border-ps-buttonPink">
      <CardContent className="p-6">
        <div className="mb-4 flex items-center space-x-3">
          <Trophy className="h-8 w-8 text-ps-buttonPink" />
          <div>
            <h3 className="font-bold text-foreground">{name}</h3>
            <p className="text-sm text-muted-foreground">{date}</p>
          </div>
        </div>
        <p className="text-secondary">{prize}</p>
      </CardContent>
    </Card>
  );
};

export default WinnerCard;

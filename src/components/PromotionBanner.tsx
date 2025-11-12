import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gift } from "lucide-react";

interface PromotionBannerProps {
  title: string;
  description: string;
  endDate: string;
  isActive: boolean;
}

const PromotionBanner = ({ title, description, endDate, isActive }: PromotionBannerProps) => {
  return (
    <Card className="border-ps-buttonGreen bg-gradient-to-r from-card to-muted">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-2 text-foreground">
            <Gift className="h-5 w-5 text-ps-buttonGreen" />
            <span>{title}</span>
          </CardTitle>
          {isActive && (
            <Badge className="bg-ps-buttonGreen text-foreground">Active</Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-2 text-muted-foreground">{description}</p>
        <p className="text-sm text-secondary">Valid until: {endDate}</p>
      </CardContent>
    </Card>
  );
};

export default PromotionBanner;

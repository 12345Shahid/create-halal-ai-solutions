
import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

interface PricingFeature {
  text: string;
  icon?: React.ReactNode;
}

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: PricingFeature[];
  popular?: boolean;
  isCustom?: boolean;
  altCurrency?: {
    symbol: string;
    price: string;
  };
}

const PricingCard = ({
  name,
  price,
  description,
  features,
  popular = false,
  isCustom = false,
  altCurrency,
}: PricingCardProps) => {
  const navigate = useNavigate();
  
  const handleGetStarted = () => {
    navigate('/plan-inquiry', { state: { planName: name } });
  };
  
  return (
    <Card className={`w-full ${popular ? 'border-primary shadow-md' : 'border-border'}`}>
      <CardHeader>
        {popular && (
          <div className="py-1 px-3 bg-primary text-primary-foreground text-sm rounded-full w-fit mb-3">
            Most Popular
          </div>
        )}
        <CardTitle className="text-2xl font-bold">{name}</CardTitle>
        <div className="mt-2 flex flex-col">
          {isCustom ? (
            <span className="text-4xl font-bold">{price}</span>
          ) : (
            <div className="flex flex-col gap-1">
              <div className="flex items-baseline">
                <span className="text-4xl font-bold">${price}</span>
                <span className="ml-1 text-muted-foreground">/month</span>
              </div>
              {altCurrency && (
                <div className="flex items-baseline text-sm text-muted-foreground">
                  <span className="font-medium">{altCurrency.symbol} {altCurrency.price}</span>
                  <span className="ml-1">/month</span>
                </div>
              )}
            </div>
          )}
        </div>
        <CardDescription className="mt-3">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3 mt-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              {feature.icon || <Check className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />}
              <span className="ml-2">{feature.text}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          variant={popular ? "default" : "outline"}
          size="lg"
          className="w-full"
          onClick={handleGetStarted}
        >
          Get Started
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;

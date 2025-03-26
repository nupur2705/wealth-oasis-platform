
import { useState } from "react";
import { Check, Shield } from "lucide-react";
import { CustomCard } from "../ui/CustomCard";
import { CustomButton } from "../ui/CustomButton";
import InsuranceForm from "../forms/InsuranceForm";

export interface PlanCardProps {
  id: string;
  title: string;
  description: string;
  price: number;
  period: "Monthly" | "Quarterly" | "Yearly";
  features: string[];
  recommended?: boolean;
  coverage: string;
}

const PlanCard = ({
  id,
  title,
  description,
  price,
  period,
  features,
  recommended = false,
  coverage
}: PlanCardProps) => {
  const [showInsuranceForm, setShowInsuranceForm] = useState(false);

  return (
    <div className="relative">
      <CustomCard className={`flex flex-col h-full hover-scale overflow-hidden ${
        recommended ? "border-primary" : ""
      }`}>
        {recommended && (
          <div className="absolute -right-12 top-6 bg-primary text-primary-foreground py-1 px-12 transform rotate-45">
            Recommended
          </div>
        )}
        
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-primary/10 p-2 rounded-lg">
            <Shield size={20} className="text-primary" />
          </div>
          <h3 className="text-lg font-medium">{title}</h3>
        </div>
        
        <p className="text-muted-foreground text-sm mb-6">{description}</p>
        
        <div className="flex items-baseline mb-6">
          <span className="text-3xl font-bold">${price}</span>
          <span className="text-muted-foreground ml-1.5">/{period.toLowerCase()}</span>
        </div>
        
        <div className="space-y-3 mb-6">
          <p className="text-sm font-medium">Coverage: {coverage}</p>
          {features.map((feature, i) => (
            <div key={i} className="flex items-start">
              <Check size={16} className="text-primary mt-0.5 mr-2 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-auto">
          <CustomButton
            variant={recommended ? "gradient" : "outline"} 
            className="w-full"
            onClick={() => setShowInsuranceForm(true)}
          >
            Buy Insurance
          </CustomButton>
        </div>
      </CustomCard>
      
      {showInsuranceForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-md">
            <InsuranceForm
              plan={{
                id,
                title,
                price,
                period,
                coverage
              }}
              onClose={() => setShowInsuranceForm(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PlanCard;

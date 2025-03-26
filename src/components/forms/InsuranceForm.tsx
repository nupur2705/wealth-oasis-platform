
import { useState } from "react";
import { X, User, CreditCard, Calendar, Plus, Minus } from "lucide-react";
import { CustomCard } from "../ui/CustomCard";
import { CustomButton } from "../ui/CustomButton";
import { toast } from "@/hooks/use-toast";

interface InsuranceFormProps {
  plan: {
    id: string;
    title: string;
    price: number;
    period: string;
    coverage: string;
  };
  onClose: () => void;
}

const InsuranceForm = ({ plan, onClose }: InsuranceFormProps) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [coverage, setCoverage] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  
  const handleCoverageChange = (action: "increase" | "decrease") => {
    if (action === "increase") {
      setCoverage(prev => Math.min(prev + 1, 5));
    } else {
      setCoverage(prev => Math.max(prev - 1, 1));
    }
  };

  const calculateTotalPrice = () => {
    return plan.price * coverage;
  };

  const calculateRisk = () => {
    const riskFactors = ["Low", "Low", "Medium", "Medium", "High"];
    return riskFactors[coverage - 1];
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step === 1) {
      setStep(2);
      return;
    }
    
    setSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "Insurance Purchased",
        description: `You have successfully purchased ${plan.title} for ${coverage} ${coverage > 1 ? "years" : "year"}.`,
      });
      onClose();
    }, 1500);
  };

  return (
    <CustomCard className="animate-scale-in w-full max-w-md mx-auto relative overflow-hidden">
      <button
        className="absolute right-4 top-4 text-muted-foreground hover:text-foreground transition-colors"
        onClick={onClose}
      >
        <X size={18} />
      </button>
      
      <h3 className="text-xl font-medium mb-4">Purchase {plan.title}</h3>
      
      <form onSubmit={handleSubmit}>
        {step === 1 ? (
          <div className="space-y-4">
            <div className="bg-muted/50 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <p className="font-medium">Coverage Period</p>
                <div className="flex items-center">
                  <button
                    type="button"
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-muted hover:bg-muted/80"
                    onClick={() => handleCoverageChange("decrease")}
                    disabled={coverage <= 1}
                  >
                    <Minus size={16} />
                  </button>
                  <span className="mx-3 font-medium">{coverage} {coverage > 1 ? "Years" : "Year"}</span>
                  <button
                    type="button"
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-muted hover:bg-muted/80"
                    onClick={() => handleCoverageChange("increase")}
                    disabled={coverage >= 5}
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Base Price</p>
                  <p className="font-bold">${plan.price}/{plan.period.toLowerCase()}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Price</p>
                  <p className="font-bold">${calculateTotalPrice()}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-muted/50 p-4 rounded-lg">
              <p className="font-medium mb-2">Risk Assessment</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Risk Level</p>
                  <p className="font-bold">{calculateRisk()}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Coverage</p>
                  <p className="font-bold">{plan.coverage}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-primary/5 border border-primary/20 p-3 rounded-lg">
              <p className="text-sm font-medium mb-1">Coverage Details</p>
              <ul className="text-sm space-y-1">
                <li>• Comprehensive water damage protection</li>
                <li>• Natural disaster coverage</li>
                <li>• Access to emergency funds</li>
                <li>• 24/7 support and claim assistance</li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium mb-1">
                Full Name
              </label>
              <div className="relative">
                <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  id="fullName"
                  className="w-full pl-10 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="John Doe"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="john@example.com"
                required
              />
            </div>
            
            <div>
              <label htmlFor="cardNumber" className="block text-sm font-medium mb-1">
                Card Number
              </label>
              <div className="relative">
                <CreditCard size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  id="cardNumber"
                  className="w-full pl-10 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="1234 5678 9012 3456"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="expiry" className="block text-sm font-medium mb-1">
                  Expiry Date
                </label>
                <div className="relative">
                  <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    id="expiry"
                    className="w-full pl-10 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="MM/YY"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="cvc" className="block text-sm font-medium mb-1">
                  CVC
                </label>
                <input
                  type="text"
                  id="cvc"
                  className="w-full py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="123"
                  required
                />
              </div>
            </div>
            
            <div className="bg-primary/5 border border-primary/20 p-3 rounded-lg">
              <p className="text-sm font-medium mb-1">Payment Summary</p>
              <p className="text-sm">
                <span className="text-muted-foreground">Plan:</span> {plan.title}
              </p>
              <p className="text-sm">
                <span className="text-muted-foreground">Period:</span> {coverage} {coverage > 1 ? "Years" : "Year"}
              </p>
              <p className="text-sm">
                <span className="text-muted-foreground">Total:</span> ${calculateTotalPrice()}
              </p>
            </div>
          </div>
        )}
        
        <div className="mt-6 flex gap-3">
          {step === 2 && (
            <CustomButton
              type="button"
              variant="outline"
              className="flex-1"
              onClick={() => setStep(1)}
            >
              Back
            </CustomButton>
          )}
          <CustomButton
            type="submit"
            variant="gradient"
            className="flex-1"
            isLoading={submitting}
          >
            {step === 1 ? "Continue" : "Purchase Insurance"}
          </CustomButton>
        </div>
      </form>
    </CustomCard>
  );
};

export default InsuranceForm;

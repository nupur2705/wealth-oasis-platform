
import { useState } from "react";
import { X, CreditCard, Calendar, User } from "lucide-react";
import { CustomCard } from "../ui/CustomCard";
import { CustomButton } from "../ui/CustomButton";
import { toast } from "@/hooks/use-toast";

interface InvestmentFormProps {
  project: {
    id: string;
    title: string;
    image: string;
    roi: string;
    riskLevel: string;
    target: number;
  };
  onClose: () => void;
}

const InvestmentForm = ({ project, onClose }: InvestmentFormProps) => {
  const [amount, setAmount] = useState<string>("100");
  const [submitting, setSubmitting] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);
  
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setAmount(value);
  };

  const calculateImpact = () => {
    const amountNumber = parseFloat(amount) || 0;
    return Math.round(amountNumber * 0.05);
  };

  const calculateReturn = () => {
    const amountNumber = parseFloat(amount) || 0;
    const roiRate = parseFloat(project.roi.replace("%", "")) / 100;
    return Math.round(amountNumber * roiRate);
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
        title: "Investment Successful",
        description: `You have successfully invested $${amount} in ${project.title}.`,
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
      
      <h3 className="text-xl font-medium mb-4">Invest in {project.title}</h3>
      
      <form onSubmit={handleSubmit}>
        {step === 1 ? (
          <>
            <div className="h-40 -mx-6 -mt-6 mb-6 bg-muted">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="amount" className="block text-sm font-medium mb-1">
                  Investment Amount
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    $
                  </span>
                  <input
                    type="text"
                    id="amount"
                    value={amount}
                    onChange={handleAmountChange}
                    className="w-full pl-8 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="Enter amount"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted/50 p-3 rounded-lg">
                  <p className="text-sm text-muted-foreground">Expected ROI</p>
                  <p className="font-bold">${calculateReturn()}</p>
                </div>
                <div className="bg-muted/50 p-3 rounded-lg">
                  <p className="text-sm text-muted-foreground">Impact Score</p>
                  <p className="font-bold">{calculateImpact()} points</p>
                </div>
              </div>
              
              <div className="bg-primary/5 border border-primary/20 p-3 rounded-lg">
                <p className="text-sm">
                  <span className="font-medium">Risk Level:</span> {project.riskLevel}
                </p>
                <p className="text-sm">
                  <span className="font-medium">Project Target:</span> ${project.target.toLocaleString()}
                </p>
                <p className="text-sm">
                  <span className="font-medium">Expected ROI:</span> {project.roi}
                </p>
              </div>
            </div>
          </>
        ) : (
          <div className="space-y-4">
            <div>
              <label htmlFor="cardName" className="block text-sm font-medium mb-1">
                Cardholder Name
              </label>
              <div className="relative">
                <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  id="cardName"
                  className="w-full pl-10 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="John Doe"
                  required
                />
              </div>
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
              <p className="text-sm font-medium mb-1">Summary</p>
              <p className="text-sm">
                <span className="text-muted-foreground">Project:</span> {project.title}
              </p>
              <p className="text-sm">
                <span className="text-muted-foreground">Amount:</span> ${amount}
              </p>
              <p className="text-sm">
                <span className="text-muted-foreground">Projected Return:</span> ${calculateReturn()}
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
            {step === 1 ? "Continue" : "Confirm Investment"}
          </CustomButton>
        </div>
      </form>
    </CustomCard>
  );
};

export default InvestmentForm;

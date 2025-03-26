
import { useState } from "react";
import { X, User, FileText, Building, DollarSign } from "lucide-react";
import { CustomCard } from "../ui/CustomCard";
import { CustomButton } from "../ui/CustomButton";
import { toast } from "@/hooks/use-toast";

interface LoanFormProps {
  loan: {
    id: string;
    title: string;
    amount: number;
    interestRate: number;
    term: string;
  };
  onClose: () => void;
}

const LoanForm = ({ loan, onClose }: LoanFormProps) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [loanAmount, setLoanAmount] = useState<string>("1000");
  const [submitting, setSubmitting] = useState(false);
  
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    if (parseInt(value) <= loan.amount || value === "") {
      setLoanAmount(value);
    }
  };

  const calculateMonthlyPayment = () => {
    const amount = parseFloat(loanAmount) || 0;
    const rate = loan.interestRate / 100 / 12;
    const termInMonths = parseInt(loan.term.split(" ")[0]) * 12;
    
    if (amount === 0 || termInMonths === 0) return 0;
    
    const payment = (amount * rate * Math.pow(1 + rate, termInMonths)) / (Math.pow(1 + rate, termInMonths) - 1);
    return Math.round(payment * 100) / 100;
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
        title: "Loan Application Submitted",
        description: `Your application for $${loanAmount} has been submitted successfully.`,
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
      
      <h3 className="text-xl font-medium mb-4">Apply for {loan.title}</h3>
      
      <form onSubmit={handleSubmit}>
        {step === 1 ? (
          <div className="space-y-4">
            <div>
              <label htmlFor="loanAmount" className="block text-sm font-medium mb-1">
                Loan Amount (max ${loan.amount.toLocaleString()})
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  $
                </span>
                <input
                  type="text"
                  id="loanAmount"
                  value={loanAmount}
                  onChange={handleAmountChange}
                  className="w-full pl-8 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="Enter amount"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted/50 p-3 rounded-lg">
                <p className="text-sm text-muted-foreground">Interest Rate</p>
                <p className="font-bold">{loan.interestRate}%</p>
              </div>
              <div className="bg-muted/50 p-3 rounded-lg">
                <p className="text-sm text-muted-foreground">Term</p>
                <p className="font-bold">{loan.term}</p>
              </div>
            </div>
            
            <div className="bg-primary/5 border border-primary/20 p-3 rounded-lg">
              <p className="text-sm font-medium mb-2">Loan Summary</p>
              <p className="text-sm">
                <span className="text-muted-foreground">Monthly Payment:</span> ${calculateMonthlyPayment()}
              </p>
              <p className="text-sm">
                <span className="text-muted-foreground">Total Interest:</span> ${Math.round((calculateMonthlyPayment() * parseInt(loan.term.split(" ")[0]) * 12) - parseFloat(loanAmount))}
              </p>
              <p className="text-sm">
                <span className="text-muted-foreground">Total Payment:</span> ${Math.round(calculateMonthlyPayment() * parseInt(loan.term.split(" ")[0]) * 12)}
              </p>
            </div>
            
            <div>
              <label htmlFor="purpose" className="block text-sm font-medium mb-1">
                Loan Purpose
              </label>
              <textarea
                id="purpose"
                className="w-full py-2 px-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                placeholder="Describe how you intend to use this loan"
                rows={3}
                required
              ></textarea>
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
              <label htmlFor="income" className="block text-sm font-medium mb-1">
                Annual Income
              </label>
              <div className="relative">
                <DollarSign size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  id="income"
                  className="w-full pl-10 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="45000"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="employer" className="block text-sm font-medium mb-1">
                Employer
              </label>
              <div className="relative">
                <Building size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  id="employer"
                  className="w-full pl-10 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="Company Name"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="documents" className="block text-sm font-medium mb-1">
                Upload Documents
              </label>
              <div className="relative">
                <FileText size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="file"
                  id="documents"
                  className="w-full pl-10 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Upload proof of income and ID documents (optional for demo)
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
            {step === 1 ? "Continue" : "Submit Application"}
          </CustomButton>
        </div>
      </form>
    </CustomCard>
  );
};

export default LoanForm;

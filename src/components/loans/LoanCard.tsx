
import { useState } from "react";
import { FileText, TrendingUp, Clock } from "lucide-react";
import { CustomCard } from "../ui/CustomCard";
import { CustomButton } from "../ui/CustomButton";
import LoanForm from "../forms/LoanForm";

export interface LoanCardProps {
  id: string;
  title: string;
  description: string;
  amount: number;
  interestRate: number;
  term: string;
  eligibility: string[];
  purpose: string;
}

const LoanCard = ({
  id,
  title,
  description,
  amount,
  interestRate,
  term,
  eligibility,
  purpose
}: LoanCardProps) => {
  const [showLoanForm, setShowLoanForm] = useState(false);

  return (
    <CustomCard className="hover-scale">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-primary/10 p-2 rounded-lg">
          <FileText size={20} className="text-primary" />
        </div>
        <h3 className="text-lg font-medium">{title}</h3>
      </div>
      
      <p className="text-muted-foreground text-sm mb-6">{description}</p>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-muted/50 p-3 rounded-lg">
          <p className="text-sm text-muted-foreground mb-1">Maximum Amount</p>
          <p className="text-xl font-bold">${amount.toLocaleString()}</p>
        </div>
        <div className="bg-muted/50 p-3 rounded-lg">
          <p className="text-sm text-muted-foreground mb-1">Interest Rate</p>
          <div className="flex items-center">
            <p className="text-xl font-bold">{interestRate}%</p>
            <TrendingUp size={16} className="text-primary ml-1.5" />
          </div>
        </div>
      </div>
      
      <div className="flex items-center text-sm text-muted-foreground mb-6">
        <Clock size={16} className="mr-1.5" /> Loan Term: {term}
      </div>
      
      <div className="mb-6">
        <p className="text-sm font-medium mb-2">Purpose: {purpose}</p>
        <div className="text-sm text-muted-foreground">
          <p className="font-medium mb-1">Eligibility:</p>
          <ul className="list-disc list-inside space-y-1">
            {eligibility.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      
      <CustomButton 
        variant="gradient" 
        className="w-full"
        onClick={() => setShowLoanForm(true)}
      >
        Apply for Loan
      </CustomButton>
      
      {showLoanForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-md">
            <LoanForm
              loan={{
                id,
                title,
                amount,
                interestRate,
                term
              }}
              onClose={() => setShowLoanForm(false)}
            />
          </div>
        </div>
      )}
    </CustomCard>
  );
};

export default LoanCard;

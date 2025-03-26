
import { useState } from "react";
import { X, AlertTriangle, Map, Users, DollarSign } from "lucide-react";
import { CustomCard } from "../ui/CustomCard";
import { CustomButton } from "../ui/CustomButton";
import { toast } from "@/hooks/use-toast";

interface EmergencyFormProps {
  onClose: () => void;
}

const EmergencyForm = ({ onClose }: EmergencyFormProps) => {
  const [submitting, setSubmitting] = useState(false);
  const [amount, setAmount] = useState<string>("5000");
  
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setAmount(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "Emergency Request Submitted",
        description: `Your emergency assistance request for $${amount} has been submitted and is under review.`,
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
      
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-amber-100 p-2 rounded-lg">
          <AlertTriangle size={20} className="text-amber-600" />
        </div>
        <h3 className="text-xl font-medium">Emergency Fund Request</h3>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="emergencyType" className="block text-sm font-medium mb-1">
            Emergency Type
          </label>
          <select
            id="emergencyType"
            className="w-full py-2 px-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary/30"
            required
          >
            <option value="">Select emergency type</option>
            <option value="flood">Flood</option>
            <option value="drought">Drought</option>
            <option value="infrastructure">Infrastructure Failure</option>
            <option value="contamination">Water Contamination</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="location" className="block text-sm font-medium mb-1">
            Affected Location
          </label>
          <div className="relative">
            <Map size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              id="location"
              className="w-full pl-10 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary/30"
              placeholder="City, State, Country"
              required
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="peopleAffected" className="block text-sm font-medium mb-1">
            Number of People Affected
          </label>
          <div className="relative">
            <Users size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="number"
              id="peopleAffected"
              className="w-full pl-10 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary/30"
              placeholder="e.g., 250"
              required
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="amount" className="block text-sm font-medium mb-1">
            Requested Amount
          </label>
          <div className="relative">
            <DollarSign size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              id="amount"
              value={amount}
              onChange={handleAmountChange}
              className="w-full pl-10 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary/30"
              placeholder="Enter amount"
              required
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="description" className="block text-sm font-medium mb-1">
            Emergency Description
          </label>
          <textarea
            id="description"
            className="w-full py-2 px-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
            placeholder="Describe the emergency situation and how the funds will be used"
            rows={3}
            required
          ></textarea>
        </div>
        
        <div>
          <label htmlFor="contactPerson" className="block text-sm font-medium mb-1">
            Contact Person
          </label>
          <input
            type="text"
            id="contactPerson"
            className="w-full py-2 px-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary/30"
            placeholder="Full Name"
            required
          />
        </div>
        
        <div>
          <label htmlFor="contactEmail" className="block text-sm font-medium mb-1">
            Contact Email
          </label>
          <input
            type="email"
            id="contactEmail"
            className="w-full py-2 px-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary/30"
            placeholder="email@example.com"
            required
          />
        </div>
        
        <div className="bg-primary/5 border border-primary/20 p-3 rounded-lg">
          <p className="text-sm text-muted-foreground">
            Emergency funds are typically approved within 48-72 hours after verification of the situation. Please ensure all information provided is accurate.
          </p>
        </div>
        
        <CustomButton
          type="submit"
          variant="gradient"
          className="w-full"
          isLoading={submitting}
        >
          Submit Request
        </CustomButton>
      </form>
    </CustomCard>
  );
};

export default EmergencyForm;

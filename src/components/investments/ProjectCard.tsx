
import { useState } from "react";
import { TrendingUp, Droplets, Users, Clock } from "lucide-react";
import { CustomCard } from "../ui/CustomCard";
import { CustomButton } from "../ui/CustomButton";
import InvestmentForm from "../forms/InvestmentForm";

export interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  riskLevel: "Low" | "Medium" | "High";
  roi: string;
  raised: number;
  target: number;
  image: string;
  backers: number;
  duration: string;
}

const ProjectCard = ({
  id,
  title,
  description,
  riskLevel,
  roi,
  raised,
  target,
  image,
  backers,
  duration,
}: ProjectCardProps) => {
  const [showInvestForm, setShowInvestForm] = useState(false);
  
  const progress = Math.min(Math.round((raised / target) * 100), 100);
  
  const riskStyles = {
    Low: "bg-green-100 text-green-600",
    Medium: "bg-amber-100 text-amber-600",
    High: "bg-rose-100 text-rose-600",
  };

  return (
    <div className="group relative">
      <CustomCard className="group-hover:shadow-lg transition-shadow overflow-hidden hover-scale">
        <div className="h-48 -mx-6 -mt-6 mb-4 relative bg-muted">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute top-2 right-2 flex space-x-2">
            <span className={`text-xs font-medium px-2 py-1 rounded-full ${riskStyles[riskLevel]}`}>
              {riskLevel} Risk
            </span>
            <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded-full flex items-center">
              <TrendingUp size={12} className="mr-1" /> {roi}
            </span>
          </div>
        </div>
        
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{description}</p>
        
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="font-medium">${raised.toLocaleString()}</span>
              <span className="text-muted-foreground">${target.toLocaleString()} target</span>
            </div>
            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center text-muted-foreground">
              <Users size={14} className="mr-1" /> {backers} backers
            </span>
            <span className="flex items-center text-muted-foreground">
              <Clock size={14} className="mr-1" /> {duration}
            </span>
            <span className="flex items-center text-muted-foreground">
              <Droplets size={14} className="mr-1" /> Water impact
            </span>
          </div>
          
          <CustomButton 
            variant="gradient" 
            className="w-full" 
            onClick={() => setShowInvestForm(true)}
          >
            Invest Now
          </CustomButton>
        </div>
      </CustomCard>
      
      {showInvestForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-md">
            <InvestmentForm
              project={{
                id,
                title,
                image,
                roi,
                riskLevel,
                target
              }}
              onClose={() => setShowInvestForm(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;

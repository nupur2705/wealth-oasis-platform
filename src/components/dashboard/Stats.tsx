
import { DollarSign, TrendingUp, Shield, FileText } from "lucide-react";
import { CustomCard } from "../ui/CustomCard";

interface StatItemProps {
  title: string;
  value: string;
  change?: string;
  icon: React.ReactNode;
  delay: string;
}

const StatItem = ({ title, value, change, icon, delay }: StatItemProps) => (
  <CustomCard 
    className="hover-scale animate-slide-up"
    style={{ "--delay": delay } as React.CSSProperties}
  >
    <div className="flex items-start justify-between">
      <div>
        <p className="text-sm font-medium text-muted-foreground mb-1">{title}</p>
        <h4 className="text-2xl font-bold">{value}</h4>
        {change && (
          <p className="text-xs font-medium mt-1 text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded inline-flex items-center">
            <TrendingUp size={12} className="mr-0.5" />
            {change}
          </p>
        )}
      </div>
      <div className="bg-primary/10 p-2 rounded-lg">
        {icon}
      </div>
    </div>
  </CustomCard>
);

const Stats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatItem
        title="Total Investments"
        value="$38,290"
        change="+12.5%"
        icon={<DollarSign size={20} className="text-primary" />}
        delay="100ms"
      />
      <StatItem
        title="Portfolio Growth"
        value="24.8%"
        change="+3.2%"
        icon={<TrendingUp size={20} className="text-primary" />}
        delay="200ms"
      />
      <StatItem
        title="Active Insurance"
        value="2 Policies"
        icon={<Shield size={20} className="text-primary" />}
        delay="300ms"
      />
      <StatItem
        title="Loan Status"
        value="$4,200"
        change="In good standing"
        icon={<FileText size={20} className="text-primary" />}
        delay="400ms"
      />
    </div>
  );
};

export default Stats;

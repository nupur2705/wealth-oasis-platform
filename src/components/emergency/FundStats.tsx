
import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { Heart, Users, Clock, TrendingUp } from "lucide-react";
import { CustomCard } from "../ui/CustomCard";
import { CustomButton } from "../ui/CustomButton";
import EmergencyForm from "../forms/EmergencyForm";

const FundStats = () => {
  const [showEmergencyForm, setShowEmergencyForm] = useState(false);

  const data = [
    { name: "Drought Relief", value: 40, color: "#14b8a6" },
    { name: "Flood Recovery", value: 30, color: "#0ea5e9" },
    { name: "Water Purification", value: 20, color: "#8b5cf6" },
    { name: "Infrastructure", value: 10, color: "#f97316" },
  ];

  const stats = [
    { label: "Total Fund Pool", value: "$1.2M", icon: <Heart size={16} className="text-primary mr-1" /> },
    { label: "Beneficiaries", value: "1,240", icon: <Users size={16} className="text-primary mr-1" /> },
    { label: "Avg. Processing", value: "72 hours", icon: <Clock size={16} className="text-primary mr-1" /> },
    { label: "Success Rate", value: "94%", icon: <TrendingUp size={16} className="text-primary mr-1" /> },
  ];

  return (
    <div className="space-y-6">
      <CustomCard className="animate-fade-in">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 className="text-xl font-medium mb-3">Emergency Fund Status</h3>
            <p className="text-muted-foreground mb-4">
              Our emergency fund provides immediate financial assistance to communities facing water-related crises.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {stats.map((stat, i) => (
                <div key={i} className="bg-muted/50 p-3 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                  <div className="flex items-center">
                    {stat.icon}
                    <p className="font-bold">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <CustomButton
              variant="gradient"
              onClick={() => setShowEmergencyForm(true)}
            >
              Request Assistance
            </CustomButton>
          </div>
          
          <div className="h-[250px] w-full md:w-[250px] flex-shrink-0">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={4}
                  dataKey="value"
                  stroke="none"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value) => [`${value}%`, 'Fund Allocation']}
                  contentStyle={{
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    borderColor: 'rgba(224, 224, 224, 0.5)',
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                  }}
                />
                <Legend
                  layout="vertical"
                  verticalAlign="middle"
                  align="right"
                  iconType="circle"
                  iconSize={8}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CustomCard>
      
      {showEmergencyForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-md">
            <EmergencyForm
              onClose={() => setShowEmergencyForm(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FundStats;

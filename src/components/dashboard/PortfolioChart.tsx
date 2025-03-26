
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { CustomCard } from "../ui/CustomCard";

interface PortfolioChartProps {
  data?: Array<{
    name: string;
    value: number;
    color: string;
  }>;
}

const PortfolioChart = ({ data }: PortfolioChartProps) => {
  const chartData = data || [
    { name: "Investments", value: 60, color: "#14b8a6" },
    { name: "Loans", value: 25, color: "#0ea5e9" },
    { name: "Emergency Funds", value: 15, color: "#8b5cf6" },
  ];

  return (
    <CustomCard className="w-full h-[300px] animate-slide-up" style={{ "--delay": "100ms" } as React.CSSProperties}>
      <h3 className="text-lg font-medium mb-4">Portfolio Allocation</h3>
      <ResponsiveContainer width="100%" height={220}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={4}
            dataKey="value"
            stroke="none"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value) => [`${value}%`, 'Allocation']}
            contentStyle={{
              borderRadius: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderColor: 'rgba(224, 224, 224, 0.5)',
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            }}
          />
          <Legend
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
            iconType="circle"
            iconSize={8}
          />
        </PieChart>
      </ResponsiveContainer>
    </CustomCard>
  );
};

export default PortfolioChart;

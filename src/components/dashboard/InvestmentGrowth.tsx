
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { CustomCard } from "../ui/CustomCard";

interface InvestmentGrowthProps {
  data?: Array<{
    month: string;
    value: number;
  }>;
}

const InvestmentGrowth = ({ data }: InvestmentGrowthProps) => {
  const chartData = data || [
    { month: "Jan", value: 4000 },
    { month: "Feb", value: 4200 },
    { month: "Mar", value: 5800 },
    { month: "Apr", value: 5500 },
    { month: "May", value: 6800 },
    { month: "Jun", value: 7400 },
    { month: "Jul", value: 8200 },
    { month: "Aug", value: 9000 },
    { month: "Sep", value: 9600 },
    { month: "Oct", value: 10200 },
    { month: "Nov", value: 10800 },
    { month: "Dec", value: 11500 },
  ];

  return (
    <CustomCard className="w-full h-[300px] animate-slide-up" style={{ "--delay": "200ms" } as React.CSSProperties}>
      <h3 className="text-lg font-medium mb-4">Investment Growth</h3>
      <ResponsiveContainer width="100%" height={220}>
        <AreaChart
          data={chartData}
          margin={{
            top: 5,
            right: 5,
            left: 5,
            bottom: 5,
          }}
        >
          <defs>
            <linearGradient id="investmentGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#14b8a6" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" vertical={false} />
          <XAxis
            dataKey="month"
            tick={{ fontSize: 12 }}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            tickFormatter={(value) => `$${value}`}
            tick={{ fontSize: 12 }}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip
            formatter={(value) => [`$${value}`, 'Investment Value']}
            contentStyle={{
              borderRadius: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderColor: 'rgba(224, 224, 224, 0.5)',
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            }}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#14b8a6"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#investmentGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </CustomCard>
  );
};

export default InvestmentGrowth;

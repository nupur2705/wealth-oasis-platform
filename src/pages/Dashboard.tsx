
import { useState } from "react";
import { User, CreditCard, Clock, TrendingUp, FileText } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CustomCard } from "@/components/ui/CustomCard";
import { CustomButton } from "@/components/ui/CustomButton";
import Stats from "@/components/dashboard/Stats";
import PortfolioChart from "@/components/dashboard/PortfolioChart";
import InvestmentGrowth from "@/components/dashboard/InvestmentGrowth";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<"overview" | "transactions" | "settings">("overview");

  // Sample data for the transactions table
  const transactions = [
    { id: 1, date: "2023-10-25", type: "Investment", project: "Alpine Glacial Preservation", amount: "$1,500.00", status: "Completed" },
    { id: 2, date: "2023-10-18", type: "Insurance", project: "Water Risk Coverage", amount: "$250.00", status: "Completed" },
    { id: 3, date: "2023-10-10", type: "Deposit", project: "Wallet Funding", amount: "$3,000.00", status: "Completed" },
    { id: 4, date: "2023-09-30", type: "Loan Payment", project: "Urban Water Recycling", amount: "$425.00", status: "Completed" },
    { id: 5, date: "2023-09-22", type: "Donation", project: "Emergency Fund", amount: "$100.00", status: "Completed" },
  ];

  const claimsData = [
    { name: "Jan", value: 12 },
    { name: "Feb", value: 19 },
    { name: "Mar", value: 32 },
    { name: "Apr", value: 25 },
    { name: "May", value: 18 },
    { name: "Jun", value: 29 },
  ];

  const approvalData = [
    { name: "Q1", urban: 50, rural: 35, coastal: 28 },
    { name: "Q2", urban: 45, rural: 40, coastal: 30 },
    { name: "Q3", urban: 55, rural: 38, coastal: 42 },
    { name: "Q4", urban: 60, rural: 45, coastal: 35 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/10">
      <Navbar />
      
      <div className="container max-w-6xl mx-auto pt-32 pb-20 px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
          <div className="animate-fade-in">
            <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back, <span className="font-medium">Alex</span>
            </p>
          </div>
          
          <div className="flex gap-2">
            <CustomButton
              variant={activeTab === "overview" ? "gradient" : "outline"}
              onClick={() => setActiveTab("overview")}
            >
              Overview
            </CustomButton>
            <CustomButton
              variant={activeTab === "transactions" ? "gradient" : "outline"}
              onClick={() => setActiveTab("transactions")}
            >
              Transactions
            </CustomButton>
            <CustomButton
              variant={activeTab === "settings" ? "gradient" : "outline"}
              onClick={() => setActiveTab("settings")}
            >
              Settings
            </CustomButton>
          </div>
        </div>
        
        {activeTab === "overview" && (
          <div className="space-y-8">
            <Stats />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <PortfolioChart />
              <InvestmentGrowth />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <CustomCard className="animate-slide-up" style={{ "--delay": "300ms" } as React.CSSProperties}>
                <h3 className="text-lg font-medium mb-4">Insurance Claims Processed</h3>
                <ResponsiveContainer width="100%" height={220}>
                  <BarChart data={claimsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" vertical={false} />
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
                    <YAxis tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
                    <Tooltip 
                      formatter={(value) => [value, 'Claims']}
                      contentStyle={{
                        borderRadius: '8px',
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        borderColor: 'rgba(224, 224, 224, 0.5)',
                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                      }}
                    />
                    <Bar dataKey="value" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CustomCard>
              
              <CustomCard className="animate-slide-up" style={{ "--delay": "400ms" } as React.CSSProperties}>
                <h3 className="text-lg font-medium mb-4">Loan Approvals by Region</h3>
                <ResponsiveContainer width="100%" height={220}>
                  <LineChart data={approvalData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" vertical={false} />
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
                    <YAxis tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
                    <Tooltip 
                      contentStyle={{
                        borderRadius: '8px',
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        borderColor: 'rgba(224, 224, 224, 0.5)',
                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                      }}
                    />
                    <Line type="monotone" dataKey="urban" stroke="#14b8a6" strokeWidth={2} activeDot={{ r: 6 }} />
                    <Line type="monotone" dataKey="rural" stroke="#0ea5e9" strokeWidth={2} activeDot={{ r: 6 }} />
                    <Line type="monotone" dataKey="coastal" stroke="#8b5cf6" strokeWidth={2} activeDot={{ r: 6 }} />
                  </LineChart>
                </ResponsiveContainer>
              </CustomCard>
            </div>
            
            <CustomCard className="animate-slide-up" style={{ "--delay": "500ms" } as React.CSSProperties}>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <h3 className="text-lg font-medium">Recent Activity</h3>
                <CustomButton variant="outline" size="sm">
                  View All
                </CustomButton>
              </div>
              <div className="space-y-4">
                <ActivityItem
                  icon={<TrendingUp size={16} className="text-emerald-500" />}
                  title="Investment Return"
                  description="Received 8.2% return from Urban Water Recycling project"
                  time="2 hours ago"
                />
                <ActivityItem
                  icon={<FileText size={16} className="text-blue-500" />}
                  title="Loan Application"
                  description="Your application for Coastal Desalination has been approved"
                  time="Yesterday"
                />
                <ActivityItem
                  icon={<CreditCard size={16} className="text-purple-500" />}
                  title="Wallet Deposit"
                  description="Successfully added $2,000 to your wallet"
                  time="3 days ago"
                />
                <ActivityItem
                  icon={<User size={16} className="text-amber-500" />}
                  title="Profile Update"
                  description="Your KYC verification has been completed"
                  time="1 week ago"
                />
              </div>
            </CustomCard>
          </div>
        )}
        
        {activeTab === "transactions" && (
          <div className="animate-fade-in">
            <CustomCard>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <h3 className="text-lg font-medium">Transaction History</h3>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    className="px-3 py-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="Search transactions..."
                  />
                  <select className="px-3 py-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30">
                    <option value="all">All Types</option>
                    <option value="investment">Investment</option>
                    <option value="insurance">Insurance</option>
                    <option value="loan">Loan</option>
                    <option value="deposit">Deposit</option>
                  </select>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b">
                    <tr>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">Date</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">Type</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">Project</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">Amount</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((transaction) => (
                      <tr key={transaction.id} className="border-b last:border-0 hover:bg-muted/30">
                        <td className="py-3 px-4">{transaction.date}</td>
                        <td className="py-3 px-4">{transaction.type}</td>
                        <td className="py-3 px-4">{transaction.project}</td>
                        <td className="py-3 px-4 font-medium">{transaction.amount}</td>
                        <td className="py-3 px-4">
                          <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-600">
                            {transaction.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <p className="text-sm text-muted-foreground">Showing 5 of 24 transactions</p>
                <div className="flex gap-2">
                  <CustomButton variant="outline" size="sm">
                    Previous
                  </CustomButton>
                  <CustomButton variant="outline" size="sm">
                    Next
                  </CustomButton>
                </div>
              </div>
            </CustomCard>
          </div>
        )}
        
        {activeTab === "settings" && (
          <div className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <CustomCard>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full bg-primary/10 mb-4 flex items-center justify-center">
                      <User size={40} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-medium mb-1">Alex Johnson</h3>
                    <p className="text-muted-foreground mb-3">alex.johnson@example.com</p>
                    <p className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-600 font-medium">
                      KYC Verified
                    </p>
                    <div className="w-full mt-6">
                      <CustomButton variant="outline" className="w-full">
                        Edit Profile
                      </CustomButton>
                    </div>
                  </div>
                </CustomCard>
              </div>
              
              <div className="md:col-span-2">
                <CustomCard>
                  <h3 className="text-lg font-medium mb-6">Account Settings</h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address</label>
                      <input
                        type="email"
                        value="alex.johnson@example.com"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        value="+1 (555) 123-4567"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Location</label>
                      <input
                        type="text"
                        value="San Francisco, CA"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30"
                      />
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <label className="block text-sm font-medium mb-2">Currency</label>
                        <select className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30">
                          <option>USD ($)</option>
                          <option>EUR (€)</option>
                          <option>GBP (£)</option>
                          <option>JPY (¥)</option>
                        </select>
                      </div>
                      <div className="flex-1">
                        <label className="block text-sm font-medium mb-2">Notification Preferences</label>
                        <select className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30">
                          <option>All Notifications</option>
                          <option>Important Only</option>
                          <option>None</option>
                        </select>
                      </div>
                    </div>
                    <div className="pt-4">
                      <CustomButton variant="gradient">
                        Save Changes
                      </CustomButton>
                    </div>
                  </div>
                </CustomCard>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

interface ActivityItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  time: string;
}

const ActivityItem = ({ icon, title, description, time }: ActivityItemProps) => (
  <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
      {icon}
    </div>
    <div className="flex-1">
      <p className="font-medium">{title}</p>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
    <div className="text-xs text-muted-foreground flex items-center gap-1">
      <Clock size={12} />
      {time}
    </div>
  </div>
);

export default Dashboard;

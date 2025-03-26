
import { FileText, Check, DollarSign, Clock, Users } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LoanCard from "@/components/loans/LoanCard";
import { CustomCard } from "@/components/ui/CustomCard";
import { CustomButton } from "@/components/ui/CustomButton";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const Loans = () => {
  // Sample loan types
  const loans = [
    {
      id: "loan-001",
      title: "Micro Water Project Loan",
      description: "Small-scale financing for community water conservation initiatives, well construction, and local infrastructure improvements.",
      amount: 25000,
      interestRate: 4.5,
      term: "3 years",
      eligibility: [
        "Community organizations",
        "Small businesses",
        "Individual project leaders",
        "Minimum credit score: 650"
      ],
      purpose: "Small-scale conservation"
    },
    {
      id: "loan-002",
      title: "Infrastructure Development Loan",
      description: "Medium-sized financing for municipal water infrastructure development, treatment facilities, and distribution network improvements.",
      amount: 250000,
      interestRate: 5.8,
      term: "5 years",
      eligibility: [
        "Municipal authorities",
        "Water utilities",
        "Development companies",
        "Minimum credit score: 680"
      ],
      purpose: "Infrastructure improvement"
    },
    {
      id: "loan-003",
      title: "Commercial Water Innovation Loan",
      description: "Large-scale financing for commercial water technology innovation, desalination projects, and advanced water management systems.",
      amount: 1000000,
      interestRate: 6.2,
      term: "7 years",
      eligibility: [
        "Established businesses",
        "Research institutions",
        "Technology developers",
        "Minimum credit score: 720"
      ],
      purpose: "Innovation & technology"
    }
  ];

  // Sample approval rate data
  const approvalData = [
    { category: "Conservation", rate: 82 },
    { category: "Infrastructure", rate: 75 },
    { category: "Technology", rate: 68 },
    { category: "Agriculture", rate: 79 },
    { category: "Education", rate: 85 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/10">
      <Navbar />
      
      <div className="container max-w-6xl mx-auto pt-32 pb-20 px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4 animate-fade-in">
          <div>
            <h1 className="text-3xl font-bold mb-2">Water Sustainability Loans</h1>
            <p className="text-muted-foreground">
              Access affordable financing for water conservation and management projects
            </p>
          </div>
          <div className="bg-primary/10 px-4 py-2 rounded-lg flex items-center">
            <DollarSign size={20} className="text-primary mr-2" />
            <span className="text-sm font-medium">Low Interest Rates</span>
          </div>
        </div>
        
        <div className="mb-16 animate-fade-in">
          <CustomCard className="p-8 bg-gradient-to-r from-primary/5 to-accent/10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-3/5">
                <h2 className="text-2xl font-bold mb-4">Why Choose AquaWealth Loans?</h2>
                <p className="text-muted-foreground mb-6">
                  Our specialized loan programs are designed to accelerate water sustainability 
                  projects with favorable terms, simplified approval processes, and expert guidance. 
                  Whether you're a community leader, municipality, or business, we have financing 
                  solutions tailored to your needs.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <Check size={18} className="text-primary mt-0.5" />
                    <p className="text-sm">Below-market interest rates</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check size={18} className="text-primary mt-0.5" />
                    <p className="text-sm">Flexible repayment terms</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check size={18} className="text-primary mt-0.5" />
                    <p className="text-sm">No early repayment penalties</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check size={18} className="text-primary mt-0.5" />
                    <p className="text-sm">Technical support available</p>
                  </div>
                </div>
              </div>
              <div className="md:w-2/5">
                <div className="h-full">
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={approvalData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" vertical={false} />
                      <XAxis 
                        dataKey="category" 
                        tick={{ fontSize: 12 }} 
                        tickLine={false} 
                        axisLine={false}
                        angle={-45}
                        textAnchor="end"
                        height={60}
                      />
                      <YAxis 
                        tickFormatter={(value) => `${value}%`}
                        tick={{ fontSize: 12 }} 
                        tickLine={false} 
                        axisLine={false}
                        domain={[0, 100]}
                      />
                      <Tooltip
                        formatter={(value) => [`${value}%`, 'Approval Rate']}
                        contentStyle={{
                          borderRadius: '8px',
                          backgroundColor: 'rgba(255, 255, 255, 0.9)',
                          borderColor: 'rgba(224, 224, 224, 0.5)',
                          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                        }}
                      />
                      <Bar dataKey="rate" fill="#14b8a6" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                  <p className="text-center text-sm text-muted-foreground mt-4">
                    Loan Approval Rates by Project Category
                  </p>
                </div>
              </div>
            </div>
          </CustomCard>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Available Loan Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {loans.map((loan) => (
              <LoanCard key={loan.id} {...loan} />
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 animate-fade-in">
          <CustomCard className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Clock size={20} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold">Application Process</h3>
            </div>
            <ol className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-xs text-white font-bold flex-shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <p className="font-medium">Submit Initial Application</p>
                  <p className="text-sm text-muted-foreground">
                    Complete our online form with basic project and financial information
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-xs text-white font-bold flex-shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <p className="font-medium">Project Assessment</p>
                  <p className="text-sm text-muted-foreground">
                    Our team evaluates your project's sustainability impact and financial viability
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-xs text-white font-bold flex-shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <p className="font-medium">Loan Offer</p>
                  <p className="text-sm text-muted-foreground">
                    Receive a customized loan offer with terms and conditions
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-xs text-white font-bold flex-shrink-0 mt-0.5">
                  4
                </div>
                <div>
                  <p className="font-medium">Documentation & Approval</p>
                  <p className="text-sm text-muted-foreground">
                    Submit required documentation and receive final approval
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-xs text-white font-bold flex-shrink-0 mt-0.5">
                  5
                </div>
                <div>
                  <p className="font-medium">Funding & Implementation</p>
                  <p className="text-sm text-muted-foreground">
                    Receive funds and begin your water sustainability project
                  </p>
                </div>
              </li>
            </ol>
          </CustomCard>
          
          <CustomCard className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Users size={20} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold">Success Stories</h3>
            </div>
            <div className="space-y-6">
              <div className="border-b pb-4">
                <h4 className="font-medium mb-1">Community Reservoir Project</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  A small rural community accessed a $50,000 loan to build a rainwater 
                  harvesting reservoir, providing irrigation water during drought periods.
                </p>
                <div className="flex items-center gap-2 text-xs">
                  <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded-full font-medium">
                    Fully Repaid
                  </span>
                  <span className="text-muted-foreground">
                    3-year term at 4.2% interest
                  </span>
                </div>
              </div>
              <div className="border-b pb-4">
                <h4 className="font-medium mb-1">Municipal Pipe Replacement</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  A mid-sized municipality received $350,000 to replace aging water pipes, 
                  reducing water loss by 42% and saving $180,000 annually.
                </p>
                <div className="flex items-center gap-2 text-xs">
                  <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full font-medium">
                    In Repayment
                  </span>
                  <span className="text-muted-foreground">
                    5-year term at 5.5% interest
                  </span>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-1">Advanced Filtration Startup</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  A water technology startup secured $750,000 to scale their innovative 
                  filtration technology, now deployed in three countries.
                </p>
                <div className="flex items-center gap-2 text-xs">
                  <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full font-medium">
                    In Repayment
                  </span>
                  <span className="text-muted-foreground">
                    7-year term at 6.0% interest
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <CustomButton variant="outline" className="w-full">
                View More Success Stories
              </CustomButton>
            </div>
          </CustomCard>
        </div>
        
        <div className="animate-fade-in">
          <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CustomCard>
              <h3 className="text-lg font-medium mb-3">What are the minimum requirements?</h3>
              <p className="text-muted-foreground">
                Requirements vary by loan type but generally include: a completed application, 
                project proposal, financial statements, proof of identity, and collateral for 
                larger loans.
              </p>
            </CustomCard>
            <CustomCard>
              <h3 className="text-lg font-medium mb-3">How long is the approval process?</h3>
              <p className="text-muted-foreground">
                Micro loans can be approved within 1-2 weeks. Medium and large loans typically 
                take 3-4 weeks for full evaluation and approval.
              </p>
            </CustomCard>
            <CustomCard>
              <h3 className="text-lg font-medium mb-3">Is collateral always required?</h3>
              <p className="text-muted-foreground">
                Micro loans under $25,000 often don't require collateral. Larger loans may 
                require collateral in the form of assets, equipment, or project resources.
              </p>
            </CustomCard>
            <CustomCard>
              <h3 className="text-lg font-medium mb-3">What can loan funds be used for?</h3>
              <p className="text-muted-foreground">
                Funds must be used for approved water sustainability projects including 
                infrastructure, conservation efforts, technology development, and related 
                operational costs.
              </p>
            </CustomCard>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Loans;

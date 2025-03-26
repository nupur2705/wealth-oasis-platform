
import { Shield, Info, Check } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PlanCard from "@/components/insurance/PlanCard";
import { CustomCard } from "@/components/ui/CustomCard";

const Insurance = () => {
  // Sample insurance plans
  const plans = [
    {
      id: "plan-001",
      title: "Basic Coverage",
      description: "Essential protection for residential water risks and minimal damage coverage.",
      price: 35,
      period: "Monthly" as const,
      features: [
        "Flood damage up to $10,000",
        "Water contamination coverage",
        "Basic drought protection",
        "24/7 emergency support",
      ],
      coverage: "Up to $10,000",
    },
    {
      id: "plan-002",
      title: "Standard Coverage",
      description: "Comprehensive protection for homeowners and small businesses with expanded benefits.",
      price: 75,
      period: "Monthly" as const,
      features: [
        "Flood damage up to $50,000",
        "Water contamination coverage",
        "Drought protection & assistance",
        "Infrastructure damage coverage",
        "Emergency response priority",
      ],
      coverage: "Up to $50,000",
      recommended: true,
    },
    {
      id: "plan-003",
      title: "Premium Coverage",
      description: "Maximum protection for businesses and high-value properties with complete risk mitigation.",
      price: 150,
      period: "Monthly" as const,
      features: [
        "Unlimited flood damage coverage",
        "Complete contamination protection",
        "Full drought & scarcity protection",
        "Infrastructure damage & repair",
        "Business interruption coverage",
        "Dedicated emergency response team",
      ],
      coverage: "Unlimited",
    },
  ];

  const comparisons = [
    {
      feature: "Flood Protection",
      basic: "Limited",
      standard: "Enhanced",
      premium: "Complete",
    },
    {
      feature: "Contamination",
      basic: "Basic",
      standard: "Enhanced",
      premium: "Complete",
    },
    {
      feature: "Drought Coverage",
      basic: "Basic",
      standard: "Enhanced",
      premium: "Complete",
    },
    {
      feature: "Emergency Response",
      basic: "Standard",
      standard: "Priority",
      premium: "Dedicated Team",
    },
    {
      feature: "Business Interruption",
      basic: "Not Included",
      standard: "Limited",
      premium: "Complete",
    },
    {
      feature: "Max Coverage",
      basic: "$10,000",
      standard: "$50,000",
      premium: "Unlimited",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/10">
      <Navbar />
      
      <div className="container max-w-6xl mx-auto pt-32 pb-20 px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-4 animate-fade-in">
          <div>
            <h1 className="text-3xl font-bold mb-2">Water Risk Insurance</h1>
            <p className="text-muted-foreground">
              Protect your assets against water-related risks and uncertainties
            </p>
          </div>
          <div className="bg-primary/10 px-4 py-2 rounded-lg flex items-center">
            <Shield size={20} className="text-primary mr-2" />
            <span className="text-sm font-medium">100% Risk Protection</span>
          </div>
        </div>
        
        <div className="mb-16 animate-fade-in">
          <CustomCard className="p-8 bg-gradient-to-r from-primary/5 to-accent/10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-3/5">
                <h2 className="text-2xl font-bold mb-4">Why Water Risk Insurance?</h2>
                <p className="text-muted-foreground mb-6">
                  Water-related disasters account for 90% of all natural disasters, 
                  causing billions in damage annually. Our specialized insurance 
                  provides comprehensive protection against flooding, contamination, 
                  drought, and infrastructure failures.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <Check size={18} className="text-primary mt-0.5" />
                    <p className="text-sm">Protection from unexpected water disasters</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check size={18} className="text-primary mt-0.5" />
                    <p className="text-sm">Fast claims processing and payouts</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check size={18} className="text-primary mt-0.5" />
                    <p className="text-sm">Support when you need it most</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check size={18} className="text-primary mt-0.5" />
                    <p className="text-sm">Customizable coverage options</p>
                  </div>
                </div>
              </div>
              <div className="md:w-2/5">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/50">
                  <div className="flex items-center gap-3 mb-4">
                    <Info size={20} className="text-primary" />
                    <h3 className="text-lg font-medium">Did You Know?</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="text-sm flex items-start gap-2">
                      <span className="text-primary font-bold text-lg leading-none">•</span>
                      <span>Water damage and flooding are the #1 source of property insurance claims</span>
                    </li>
                    <li className="text-sm flex items-start gap-2">
                      <span className="text-primary font-bold text-lg leading-none">•</span>
                      <span>Standard insurance often excludes many types of water damage</span>
                    </li>
                    <li className="text-sm flex items-start gap-2">
                      <span className="text-primary font-bold text-lg leading-none">•</span>
                      <span>Water contamination events can disrupt businesses for weeks</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </CustomCard>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Choose Your Protection Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <PlanCard 
                key={plan.id} 
                {...plan} 
              />
            ))}
          </div>
        </div>
        
        <div className="mb-16 animate-fade-in">
          <h2 className="text-2xl font-bold mb-8 text-center">Coverage Comparison</h2>
          <CustomCard>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4 px-4 font-medium">Feature</th>
                    <th className="text-center py-4 px-4 font-medium">Basic</th>
                    <th className="text-center py-4 px-4 font-medium">Standard</th>
                    <th className="text-center py-4 px-4 font-medium">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((item, index) => (
                    <tr key={index} className={index < comparisons.length - 1 ? "border-b" : ""}>
                      <td className="py-4 px-4 font-medium">{item.feature}</td>
                      <td className="text-center py-4 px-4">
                        {item.basic === "Not Included" ? (
                          <span className="text-muted-foreground">—</span>
                        ) : (
                          item.basic
                        )}
                      </td>
                      <td className="text-center py-4 px-4 bg-accent/20">
                        {item.standard === "Not Included" ? (
                          <span className="text-muted-foreground">—</span>
                        ) : (
                          item.standard
                        )}
                      </td>
                      <td className="text-center py-4 px-4">
                        {item.premium === "Not Included" ? (
                          <span className="text-muted-foreground">—</span>
                        ) : (
                          item.premium
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CustomCard>
        </div>
        
        <div className="animate-fade-in">
          <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CustomCard>
              <h3 className="text-lg font-medium mb-3">How quickly are claims processed?</h3>
              <p className="text-muted-foreground">
                Our standard claims are processed within 48-72 hours after submission. 
                Emergency claims can be expedited and processed within 24 hours.
              </p>
            </CustomCard>
            <CustomCard>
              <h3 className="text-lg font-medium mb-3">What types of water risks are covered?</h3>
              <p className="text-muted-foreground">
                We cover flooding, contamination, infrastructure damage, drought impacts, 
                and water-related business interruption depending on your plan.
              </p>
            </CustomCard>
            <CustomCard>
              <h3 className="text-lg font-medium mb-3">Can I customize my coverage?</h3>
              <p className="text-muted-foreground">
                Yes, all plans can be customized with additional riders and 
                coverage options based on your specific needs and risk profile.
              </p>
            </CustomCard>
            <CustomCard>
              <h3 className="text-lg font-medium mb-3">Are there any exclusions?</h3>
              <p className="text-muted-foreground">
                Standard exclusions include intentional damage, pre-existing conditions, 
                and certain extreme events. Full details are provided in the policy documents.
              </p>
            </CustomCard>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Insurance;

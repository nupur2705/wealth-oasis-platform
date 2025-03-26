
import { Heart, AlertTriangle, Droplets, MapPin } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FundStats from "@/components/emergency/FundStats";
import { CustomCard } from "@/components/ui/CustomCard";
import { CustomButton } from "@/components/ui/CustomButton";

const Emergency = () => {
  // Sample emergency requests
  const emergencyRequests = [
    {
      id: "req-001",
      title: "Drought Relief in Maputo Province",
      location: "Maputo, Mozambique",
      type: "Drought",
      amount: "$75,000",
      status: "In Review",
      date: "Oct 22, 2023",
      description: "Severe drought affecting 12,000 residents with critical water shortages for drinking and agriculture.",
    },
    {
      id: "req-002",
      title: "Flood Recovery in Kerala",
      location: "Kerala, India",
      type: "Flood",
      amount: "$120,000",
      status: "Approved",
      date: "Oct 18, 2023",
      description: "Monsoon flooding damaged water infrastructure serving 25,000 people across 14 villages.",
    },
    {
      id: "req-003",
      title: "Water Contamination Response",
      location: "Flint, Michigan, USA",
      type: "Contamination",
      amount: "$95,000",
      status: "Funded",
      date: "Oct 10, 2023",
      description: "Chemical contamination of municipal water source affecting 8,000 households.",
    },
  ];

  // Sample ongoing emergency response data
  const ongoingEmergencies = [
    {
      id: "em-001",
      title: "Hurricane Damage Recovery",
      location: "Puerto Rico",
      fundingGoal: "$250,000",
      raised: "$185,000",
      peopleHelped: "34,500",
      progress: 74,
      status: "Active",
    },
    {
      id: "em-002",
      title: "Dam Failure Emergency Response",
      location: "Minas Gerais, Brazil",
      fundingGoal: "$180,000",
      raised: "$162,000",
      peopleHelped: "22,700",
      progress: 90,
      status: "Active",
    },
    {
      id: "em-003",
      title: "Coastal Saltwater Intrusion",
      location: "Bangladesh",
      fundingGoal: "$120,000",
      raised: "$120,000",
      peopleHelped: "15,300",
      progress: 100,
      status: "Completed",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/10">
      <Navbar />
      
      <div className="container max-w-6xl mx-auto pt-32 pb-20 px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4 animate-fade-in">
          <div>
            <h1 className="text-3xl font-bold mb-2">Emergency Water Fund</h1>
            <p className="text-muted-foreground">
              Providing rapid financial assistance for water-related emergencies around the world
            </p>
          </div>
          <div className="bg-rose-100 px-4 py-2 rounded-lg flex items-center">
            <AlertTriangle size={20} className="text-rose-600 mr-2" />
            <span className="text-sm font-medium text-rose-600">3 Active Emergencies</span>
          </div>
        </div>
        
        <div className="mb-16">
          <FundStats />
        </div>
        
        <div className="mb-16 animate-fade-in">
          <h2 className="text-2xl font-bold mb-6">Active Emergency Responses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ongoingEmergencies.map((emergency) => (
              <CustomCard key={emergency.id} className="hover-scale">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${
                    emergency.status === "Active" ? "bg-rose-100" : "bg-green-100"
                  }`}>
                    <Droplets size={20} className={emergency.status === "Active" ? "text-rose-600" : "text-green-600"} />
                  </div>
                  <div>
                    <h3 className="font-medium text-base">{emergency.title}</h3>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <MapPin size={12} className="mr-1" /> {emergency.location}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4 mb-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">{emergency.raised}</span>
                      <span className="text-muted-foreground">{emergency.fundingGoal} goal</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          emergency.status === "Active" ? "bg-rose-500" : "bg-green-500"
                        }`}
                        style={{ width: `${emergency.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">People Helped</p>
                    <p className="font-bold">{emergency.peopleHelped}</p>
                  </div>
                </div>
                
                <CustomButton
                  variant={emergency.status === "Active" ? "gradient" : "outline"}
                  className="w-full"
                  disabled={emergency.status !== "Active"}
                >
                  {emergency.status === "Active" ? "Contribute Now" : "Response Complete"}
                </CustomButton>
              </CustomCard>
            ))}
          </div>
        </div>
        
        <div className="mb-16 animate-fade-in">
          <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
            <h2 className="text-2xl font-bold">Recent Emergency Requests</h2>
            <CustomButton variant="outline" size="sm">
              View All Requests
            </CustomButton>
          </div>
          
          <div className="space-y-6">
            {emergencyRequests.map((request) => (
              <CustomCard key={request.id} className="overflow-hidden">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="font-medium text-lg">{request.title}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        request.status === "In Review" 
                          ? "bg-amber-100 text-amber-600" 
                          : request.status === "Approved"
                          ? "bg-blue-100 text-blue-600"
                          : "bg-green-100 text-green-600"
                      }`}>
                        {request.status}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-4">
                      {request.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin size={16} className="mr-1.5" /> {request.location}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Droplets size={16} className="mr-1.5" /> {request.type}
                      </div>
                      <div className="text-sm font-medium">
                        Requested: {request.amount}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Submitted: {request.date}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2 md:items-end w-full md:w-auto">
                    <CustomButton
                      variant={request.status === "In Review" ? "outline" : "secondary"}
                      size="sm"
                      disabled={request.status !== "In Review"}
                    >
                      {request.status === "In Review" ? "Review Details" : "View Status"}
                    </CustomButton>
                    {request.status === "In Review" && (
                      <CustomButton
                        variant="gradient"
                        size="sm"
                      >
                        Support Request
                      </CustomButton>
                    )}
                  </div>
                </div>
              </CustomCard>
            ))}
          </div>
        </div>
        
        <div className="animate-fade-in">
          <CustomCard className="bg-gradient-to-r from-primary/10 to-accent/20 p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-2/3">
                <div className="flex items-center gap-3 mb-4">
                  <Heart size={24} className="text-primary" />
                  <h2 className="text-2xl font-bold">How Our Emergency Fund Works</h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  Our Emergency Water Fund provides rapid financial assistance to communities 
                  facing water-related disasters and crises. We prioritize speed, transparency, 
                  and impact to ensure resources reach those in need as quickly as possible.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-white/50 text-center">
                    <p className="text-2xl font-bold text-primary mb-1">72hrs</p>
                    <p className="text-sm">Average response time</p>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-white/50 text-center">
                    <p className="text-2xl font-bold text-primary mb-1">94%</p>
                    <p className="text-sm">Funds to direct relief</p>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-white/50 text-center">
                    <p className="text-2xl font-bold text-primary mb-1">28</p>
                    <p className="text-sm">Countries supported</p>
                  </div>
                </div>
                <CustomButton variant="gradient">
                  Contribute to Emergency Fund
                </CustomButton>
              </div>
              <div className="md:w-1/3">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-xs text-white font-bold flex-shrink-0 mt-0.5">
                      1
                    </div>
                    <div>
                      <p className="font-medium">Request Submission</p>
                      <p className="text-sm text-muted-foreground">
                        Communities or organizations submit emergency requests
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-xs text-white font-bold flex-shrink-0 mt-0.5">
                      2
                    </div>
                    <div>
                      <p className="font-medium">Rapid Assessment</p>
                      <p className="text-sm text-muted-foreground">
                        Our team verifies the situation and evaluates needs
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-xs text-white font-bold flex-shrink-0 mt-0.5">
                      3
                    </div>
                    <div>
                      <p className="font-medium">Fund Allocation</p>
                      <p className="text-sm text-muted-foreground">
                        Funds are approved and transferred within 72 hours
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-xs text-white font-bold flex-shrink-0 mt-0.5">
                      4
                    </div>
                    <div>
                      <p className="font-medium">Implementation & Monitoring</p>
                      <p className="text-sm text-muted-foreground">
                        Progress tracking and impact assessment
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CustomCard>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Emergency;

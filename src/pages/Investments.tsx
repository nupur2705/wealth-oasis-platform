
import { useState } from "react";
import { Search, Filter, TrendingUp, TrendingDown, BarChart2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectCard from "@/components/investments/ProjectCard";
import { CustomCard } from "@/components/ui/CustomCard";
import { CustomButton } from "@/components/ui/CustomButton";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const Investments = () => {
  const [filter, setFilter] = useState<"all" | "low" | "medium" | "high">("all");
  const [sort, setSort] = useState<"default" | "roi" | "funded">("default");
  
  // Sample project data
  const projects = [
    {
      id: "proj-001",
      title: "Alpine Glacial Preservation",
      description: "Conservation effort to protect alpine glaciers from melting due to climate change, preserving vital freshwater sources for downstream communities.",
      riskLevel: "Medium" as const,
      roi: "12.4%",
      raised: 280500,
      target: 500000,
      image: "https://images.unsplash.com/photo-1624138215206-15afbf87dbdb?auto=format&fit=crop&q=80&w=600&h=400",
      backers: 142,
      duration: "18 months",
    },
    {
      id: "proj-002",
      title: "Urban Water Recycling System",
      description: "Innovative water recycling system for urban environments that captures, treats, and reuses greywater, reducing freshwater consumption by up to 40%.",
      riskLevel: "Low" as const,
      roi: "8.2%",
      raised: 1200000,
      target: 1500000,
      image: "https://images.unsplash.com/photo-1573202054200-f26b748eca4e?auto=format&fit=crop&q=80&w=600&h=400",
      backers: 385,
      duration: "12 months",
    },
    {
      id: "proj-003",
      title: "Coastal Desalination Plant",
      description: "State-of-the-art desalination facility using renewable energy to provide clean drinking water to coastal communities facing saltwater intrusion.",
      riskLevel: "High" as const,
      roi: "18.5%",
      raised: 750000,
      target: 2000000,
      image: "https://images.unsplash.com/photo-1562016600-ece13e8ba570?auto=format&fit=crop&q=80&w=600&h=400",
      backers: 210,
      duration: "24 months",
    },
    {
      id: "proj-004",
      title: "Rainwater Harvesting Network",
      description: "Community-based rainwater harvesting system that collects and stores rainwater for agricultural use, reducing dependency on groundwater.",
      riskLevel: "Low" as const,
      roi: "7.8%",
      raised: 320000,
      target: 400000,
      image: "https://images.unsplash.com/photo-1620766488099-fdb2bcea4e3b?auto=format&fit=crop&q=80&w=600&h=400",
      backers: 256,
      duration: "9 months",
    },
    {
      id: "proj-005",
      title: "Groundwater Recharge Project",
      description: "Large-scale groundwater recharge initiative to replenish depleted aquifers through managed aquifer recharge techniques.",
      riskLevel: "Medium" as const,
      roi: "11.2%",
      raised: 980000,
      target: 1200000,
      image: "https://images.unsplash.com/photo-1543965860-17652cc7e8e8?auto=format&fit=crop&q=80&w=600&h=400",
      backers: 310,
      duration: "15 months",
    },
    {
      id: "proj-006",
      title: "Advanced Leak Detection System",
      description: "AI-powered leak detection technology that identifies and prevents water loss in municipal distribution systems, saving billions of gallons annually.",
      riskLevel: "High" as const,
      roi: "16.8%",
      raised: 550000,
      target: 900000,
      image: "https://images.unsplash.com/photo-1535990379313-5cd511840084?auto=format&fit=crop&q=80&w=600&h=400",
      backers: 178,
      duration: "14 months",
    },
  ];

  // Filter projects based on risk level
  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    return project.riskLevel.toLowerCase() === filter;
  });

  // Sort projects
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sort === "roi") {
      return parseFloat(b.roi.replace("%", "")) - parseFloat(a.roi.replace("%", ""));
    } else if (sort === "funded") {
      return (b.raised / b.target) - (a.raised / a.target);
    }
    return 0;
  });

  // Sample ROI comparison data
  const roiData = [
    { name: "Low Risk", roi: 8.0 },
    { name: "Medium Risk", roi: 11.8 },
    { name: "High Risk", roi: 17.6 },
    { name: "Stock Market", roi: 10.0 },
    { name: "Real Estate", roi: 9.5 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/10">
      <Navbar />
      
      <div className="container max-w-6xl mx-auto pt-32 pb-20 px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
          <div className="animate-fade-in">
            <h1 className="text-3xl font-bold mb-2">Investment Projects</h1>
            <p className="text-muted-foreground">
              Discover and invest in sustainable water management projects
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="md:col-span-2">
            <CustomCard className="animate-fade-in">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                  <input
                    type="text"
                    placeholder="Search projects..."
                    className="w-full pl-10 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 text-sm">
                    <Filter size={16} /> Filter:
                  </div>
                  <select
                    className="px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value as any)}
                  >
                    <option value="all">All Risks</option>
                    <option value="low">Low Risk</option>
                    <option value="medium">Medium Risk</option>
                    <option value="high">High Risk</option>
                  </select>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 text-sm">
                    <BarChart2 size={16} /> Sort:
                  </div>
                  <select
                    className="px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30"
                    value={sort}
                    onChange={(e) => setSort(e.target.value as any)}
                  >
                    <option value="default">Default</option>
                    <option value="roi">Highest ROI</option>
                    <option value="funded">Most Funded</option>
                  </select>
                </div>
              </div>
            </CustomCard>
          </div>
          
          <div>
            <CustomCard className="h-full flex flex-col justify-center items-center gap-3 animate-fade-in">
              <div className="flex items-center gap-2">
                <TrendingUp size={20} className="text-primary" />
                <span className="font-medium">12.4%</span>
              </div>
              <p className="text-sm text-muted-foreground text-center">
                Average ROI across all water projects
              </p>
              <CustomButton variant="outline" size="sm">
                Learn More
              </CustomButton>
            </CustomCard>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sortedProjects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <CustomCard className="animate-fade-in">
              <h3 className="text-lg font-medium mb-4">ROI Comparison</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={roiData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" vertical={false} />
                  <XAxis 
                    dataKey="name" 
                    tick={{ fontSize: 12 }} 
                    tickLine={false} 
                    axisLine={false}
                    interval={0}
                    angle={-45}
                    textAnchor="end"
                    height={60}
                  />
                  <YAxis 
                    tickFormatter={(value) => `${value}%`}
                    tick={{ fontSize: 12 }} 
                    tickLine={false} 
                    axisLine={false}
                    domain={[0, 20]}
                  />
                  <Tooltip
                    formatter={(value) => [`${value}%`, 'ROI']}
                    contentStyle={{
                      borderRadius: '8px',
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      borderColor: 'rgba(224, 224, 224, 0.5)',
                      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                    }}
                  />
                  <Bar dataKey="roi" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CustomCard>
            
            <CustomCard className="animate-fade-in">
              <h3 className="text-lg font-medium mb-4">Quick Investment Guide</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <TrendingDown size={16} className="text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium">Low Risk (7-9% ROI)</p>
                    <p className="text-sm text-muted-foreground">Established projects with proven technologies and lower returns</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <TrendingUp size={16} className="text-amber-600" />
                  </div>
                  <div>
                    <p className="font-medium">Medium Risk (10-15% ROI)</p>
                    <p className="text-sm text-muted-foreground">Growing projects with tested approaches and moderate returns</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0">
                    <TrendingUp size={16} className="text-rose-600" />
                  </div>
                  <div>
                    <p className="font-medium">High Risk (15%+ ROI)</p>
                    <p className="text-sm text-muted-foreground">Innovative projects with new technologies and higher potential returns</p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-sm text-muted-foreground">
                  Our water sustainability projects consistently outperform traditional investment vehicles, while creating positive environmental impact.
                </p>
              </div>
            </CustomCard>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Investments;

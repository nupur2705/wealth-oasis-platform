
import { Link } from "react-router-dom";
import { Droplets, TrendingUp, Shield, FileText, Heart, ArrowRight } from "lucide-react";
import { CustomButton } from "@/components/ui/CustomButton";
import { CustomCard } from "@/components/ui/CustomCard";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="bg-gradient-to-b from-background to-accent/10">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3 animate-fade-in" style={{ "--delay": "300ms" } as React.CSSProperties}>
                Sustainable Finance for Water Resources
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in" style={{ "--delay": "400ms" } as React.CSSProperties}>
                Invest in <span className="text-gradient">Water</span>, <br />
                Secure Our <span className="text-gradient">Future</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl animate-fade-in" style={{ "--delay": "500ms" } as React.CSSProperties}>
                AquaWealth connects conscious investors with water conservation
                and management projects, creating sustainable returns while preserving
                our most precious resource.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 animate-fade-in" style={{ "--delay": "600ms" } as React.CSSProperties}>
                <Link to="/dashboard">
                  <CustomButton variant="gradient" size="lg">
                    Get Started
                  </CustomButton>
                </Link>
                <Link to="/investments">
                  <CustomButton variant="outline" size="lg">
                    Explore Projects
                  </CustomButton>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 relative animate-fade-in" style={{ "--delay": "700ms" } as React.CSSProperties}>
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-ocean-500/20 rounded-full blur-3xl"></div>
              <div className="relative bg-white backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden animate-float">
                <img
                  src="https://images.unsplash.com/photo-1582580453582-b10eca8b8e41?auto=format&fit=crop&q=80&w=800&h=600"
                  alt="Sustainable water project"
                  className="w-full h-full object-cover aspect-video"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Feature Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How AquaWealth Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platform offers a comprehensive solution for sustainable water resource management and investment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<Droplets size={24} className="text-primary" />}
              title="Investments"
              description="Fund vetted water conservation and management projects with measurable impact."
              linkTo="/investments"
              delay="100ms"
            />
            <FeatureCard
              icon={<Shield size={24} className="text-primary" />}
              title="Insurance"
              description="Protect against water-related risks with innovative insurance policies."
              linkTo="/insurance"
              delay="200ms"
            />
            <FeatureCard
              icon={<FileText size={24} className="text-primary" />}
              title="Loans"
              description="Access micro-loans for sustainable water initiatives and infrastructure."
              linkTo="/loans"
              delay="300ms"
            />
            <FeatureCard
              icon={<Heart size={24} className="text-primary" />}
              title="Emergency Fund"
              description="Support communities facing acute water crises through our emergency fund."
              linkTo="/emergency"
              delay="400ms"
            />
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-primary/10 to-ocean-400/10 rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Together with our investors and partners, we're making a measurable difference in water sustainability.
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <p className="text-4xl font-bold text-primary">$26M+</p>
                <p className="text-muted-foreground">Invested</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary">104</p>
                <p className="text-muted-foreground">Projects Funded</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary">1.5M</p>
                <p className="text-muted-foreground">People Impacted</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary">15+</p>
                <p className="text-muted-foreground">Countries</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-aqua-500 to-ocean-600 text-white">
        <div className="container max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-8">
            Join the growing community of conscious investors and water stewards.
          </p>
          <Link to="/dashboard">
            <CustomButton variant="secondary" size="lg" className="text-primary font-medium">
              Start Your Journey
            </CustomButton>
          </Link>
        </div>
      </section>
      
      {/* Featured Projects */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
              <p className="text-muted-foreground max-w-xl">
                Discover our highlighted water sustainability initiatives seeking investment.
              </p>
            </div>
            <Link to="/investments" className="mt-4 md:mt-0">
              <CustomButton variant="outline">
                View All Projects
              </CustomButton>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectPreview
              title="Alpine Glacial Preservation"
              image="https://images.unsplash.com/photo-1624138215206-15afbf87dbdb?auto=format&fit=crop&q=80&w=600&h=400"
              raised="$280,500"
              target="$500,000"
              risk="Medium"
              roi="12.4%"
              delay="100ms"
            />
            <ProjectPreview
              title="Urban Water Recycling System"
              image="https://images.unsplash.com/photo-1573202054200-f26b748eca4e?auto=format&fit=crop&q=80&w=600&h=400"
              raised="$1,200,000"
              target="$1,500,000"
              risk="Low"
              roi="8.2%"
              delay="200ms"
            />
            <ProjectPreview
              title="Coastal Desalination Plant"
              image="https://images.unsplash.com/photo-1562016600-ece13e8ba570?auto=format&fit=crop&q=80&w=600&h=400"
              raised="$750,000"
              target="$2,000,000"
              risk="High"
              roi="18.5%"
              delay="300ms"
            />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkTo: string;
  delay: string;
}

const FeatureCard = ({ icon, title, description, linkTo, delay }: FeatureCardProps) => (
  <CustomCard className="flex flex-col hover-scale animate-slide-up" style={{ "--delay": delay } as React.CSSProperties}>
    <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">{icon}</div>
    <h3 className="text-xl font-medium mb-2">{title}</h3>
    <p className="text-muted-foreground mb-6">{description}</p>
    <div className="mt-auto">
      <Link to={linkTo} className="text-primary font-medium inline-flex items-center hover:underline">
        Learn more <ArrowRight size={16} className="ml-1" />
      </Link>
    </div>
  </CustomCard>
);

interface ProjectPreviewProps {
  title: string;
  image: string;
  raised: string;
  target: string;
  risk: string;
  roi: string;
  delay: string;
}

const ProjectPreview = ({ title, image, raised, target, risk, roi, delay }: ProjectPreviewProps) => {
  const riskStyles = {
    Low: "bg-green-100 text-green-600",
    Medium: "bg-amber-100 text-amber-600",
    High: "bg-rose-100 text-rose-600",
  };
  
  return (
    <CustomCard className="overflow-hidden hover-scale animate-slide-up" style={{ "--delay": delay } as React.CSSProperties}>
      <div className="h-48 -mx-6 -mt-6 mb-4 relative">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute top-2 right-2 flex space-x-2">
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${riskStyles[risk as keyof typeof riskStyles]}`}>
            {risk} Risk
          </span>
          <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded-full flex items-center">
            <TrendingUp size={12} className="mr-1" /> {roi}
          </span>
        </div>
      </div>
      <h3 className="text-lg font-medium mb-3">{title}</h3>
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="font-medium">{raised}</span>
            <span className="text-muted-foreground">{target} target</span>
          </div>
          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full"
              style={{
                width: `${parseInt(raised.replace(/[^0-9]/g, "")) / 
                  parseInt(target.replace(/[^0-9]/g, "")) * 100}%`,
              }}
            ></div>
          </div>
        </div>
        <Link to="/investments">
          <CustomButton variant="outline" className="w-full">
            View Details
          </CustomButton>
        </Link>
      </div>
    </CustomCard>
  );
};

export default Index;

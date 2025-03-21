import Container from "@/components/ui/Container";
import ProjectHero from "@/components/projects/ProjectHero";
import FeaturedImage from "@/components/projects/FeaturedImage";
import ProjectOverview from "@/components/projects/ProjectOverview";
import ChallengeSection from "@/components/projects/ChallengeSection";
import ResearchSection from "@/components/projects/ResearchSection";
import SolutionDesign from "@/components/projects/SolutionDesign";
import ProcessSection from "@/components/projects/ProcessSection";
import KeyFeatures from "@/components/projects/KeyFeatures";
import ResultsSection from "@/components/projects/ResultsSection";
import ProjectSidebar from "@/components/projects/ProjectSidebar";

const DubaiLabourProject = () => {
  // Project data
  const projectTags = ["Ministry of Human Resources", "Government", "Back Office", "UX Transformation"];
  
  const overviewItems = [
    { label: "Client", value: "Ministry of Human Resources & Emiratisation (MoHRE), Dubai" },
    { label: "Role", value: "Senior User Experience Consultant" },
    { label: "Scope", value: "Back Office - Shared Service systems across multiple platforms (Web, Tablet, Mobile)" },
    { label: "Duration", value: "18 months" }
  ];
  
  const challenges = [
    "Complex back-office operations requiring streamlined processes",
    "Multiple user touchpoints across different platforms",
    "Need for standardization across all digital interfaces",
    "Integration with existing MoHRE design system",
    "Diverse user base with varying technical expertise"
  ];
  
  const researchPoints = [
    "Conducted stakeholder interviews with back-office staff",
    "Analyzed existing workflows and pain points",
    "Collaborated with business analysts to understand technical requirements",
    "Documented user journeys and process flows",
    "Identified optimization opportunities"
  ];
  
  const solutions = [
    { main: "Created unified UX architecture for shared services" },
    { 
      main: "Developed responsive layouts for:",
      subItems: [
        "Web interface for complex operations",
        "Tablet optimization for field operations",
        "Mobile interface for on-the-go access"
      ]
    },
    { main: "Implemented MoHRE design system standards across all platforms" },
    { main: "Designed intuitive navigation and workflow patterns" }
  ];
  
  const processes = [
    { title: "User Research", description: "Contextual inquiries and user interviews" },
    { title: "Workflow Mapping", description: "Detailed process documentation" },
    { title: "Wireframing", description: "Initial concept validation" },
    { title: "Prototyping", description: "Interactive demos for stakeholder review" },
    { title: "Design System Integration", description: "Ensuring consistency with MoHRE standards" }
  ];
  
  const features = [
    "Unified dashboard for back-office operations",
    "Cross-platform consistency in user experience",
    "Streamlined workflow management",
    "Integrated notification system",
    "Standardized component library"
  ];
  
  const results = [
    { percentage: "35%", description: "Improved operational efficiency" },
    { percentage: "42%", description: "Reduced training time for new staff" },
    { percentage: "28%", description: "Enhanced user satisfaction" },
    { percentage: "100%", description: "Standardized experience across platforms" }
  ];
  
  const projectDetails = [
    { label: "Client", value: "Ministry of Human Resources & Emiratisation" },
    { label: "Industry", value: "Government" },
    { label: "Services", value: "UX Research, UX Design, Prototyping" },
    { label: "Duration", value: "18 months" },
    { label: "Role", value: "Senior UX Consultant" }
  ];
  
  const tools = ["Figma", "Sketch", "Adobe XD", "InVision", "Miro", "Axure RP"];

  return (
    <main className="bg-background text-foreground pb-20 font-merriweather">
      {/* Hero Section */}
      <ProjectHero 
        title="Modernizing MoHRE Dubai's Back Office Operations: A UX Transformation Case Study"
        tags={projectTags}
      />

      {/* Featured Image */}
      <FeaturedImage 
        src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80"
        alt="MoHRE Dubai Project"
      />

      {/* Project Content */}
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-12">
            <ProjectOverview items={overviewItems} />
            
            <ChallengeSection 
              description="The Ministry faced significant challenges with their legacy back-office systems that were causing operational inefficiencies and user frustration."
              challenges={challenges}
            />
            
            <ResearchSection 
              imageSrc="https://images.unsplash.com/photo-1542361345-89e58247f2d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80"
              researchPoints={researchPoints}
            />
            
            <SolutionDesign 
              description="Our approach focused on creating a unified experience while ensuring platform-specific optimizations."
              solutions={solutions}
            />
            
            <ProcessSection processes={processes} />
            
            <KeyFeatures 
              features={features}
              imageSrc="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80"
            />
            
            <ResultsSection results={results} />
          </div>

          {/* Sidebar */}
          <ProjectSidebar 
            details={projectDetails}
            tools={tools}
          />
        </div>
      </Container>
    </main>
  );
};

export default DubaiLabourProject;


import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const DubaiLabourProject = () => {
  const navigate = useNavigate();

  return (
    <main className="bg-background text-foreground pb-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-noise">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background z-0"></div>
        
        <Container className="relative z-10">
          <Button 
            variant="ghost" 
            className="mb-8 -ml-4 group" 
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Portfolio
          </Button>
          
          <Reveal>
            <Badge className="mb-3">Case Study</Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 font-display max-w-4xl">
              Modernizing MoHRE Dubai's Back Office Operations: A UX Transformation Case Study
            </h1>
          </Reveal>
          
          <Reveal delay={200}>
            <div className="flex flex-wrap gap-4 my-6">
              <Badge variant="outline">Ministry of Human Resources</Badge>
              <Badge variant="outline">Government</Badge>
              <Badge variant="outline">Back Office</Badge>
              <Badge variant="outline">UX Transformation</Badge>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Featured Image */}
      <Container className="relative -mt-10 mb-12">
        <Reveal>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2672&auto=format&fit=crop" 
              alt="MoHRE Dubai Project" 
              className="w-full object-cover h-[400px] md:h-[500px]"
            />
          </div>
        </Reveal>
      </Container>

      {/* Project Content */}
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-12">
            <Reveal>
              <section>
                <h2 className="text-2xl font-bold mb-4 font-display">1. Project Overview</h2>
                <ul className="ml-6 space-y-2 list-disc">
                  <li><span className="font-medium">Client:</span> Ministry of Human Resources & Emiratisation (MoHRE), Dubai</li>
                  <li><span className="font-medium">Role:</span> Senior User Experience Consultant</li>
                  <li><span className="font-medium">Scope:</span> Back Office - Shared Service systems across multiple platforms (Web, Tablet, Mobile)</li>
                  <li><span className="font-medium">Duration:</span> 18 months</li>
                </ul>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2 className="text-2xl font-bold mb-4 font-display">2. Challenge</h2>
                <p className="text-muted-foreground mb-4">
                  The Ministry faced significant challenges with their legacy back-office systems that were causing operational inefficiencies and user frustration.
                </p>
                <ul className="ml-6 space-y-2 list-disc">
                  <li>Complex back-office operations requiring streamlined processes</li>
                  <li>Multiple user touchpoints across different platforms</li>
                  <li>Need for standardization across all digital interfaces</li>
                  <li>Integration with existing MoHRE design system</li>
                  <li>Diverse user base with varying technical expertise</li>
                </ul>
              </section>
            </Reveal>

            <Reveal>
              <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2670&auto=format&fit=crop"
                    alt="User Research Session" 
                    className="rounded-lg mb-4 h-64 w-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 font-display">3. Research & Discovery</h2>
                  <ul className="ml-6 space-y-2 list-disc">
                    <li>Conducted stakeholder interviews with back-office staff</li>
                    <li>Analyzed existing workflows and pain points</li>
                    <li>Collaborated with business analysts to understand technical requirements</li>
                    <li>Documented user journeys and process flows</li>
                    <li>Identified optimization opportunities</li>
                  </ul>
                </div>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2 className="text-2xl font-bold mb-4 font-display">4. Solution Design</h2>
                <p className="text-muted-foreground mb-4">
                  Our approach focused on creating a unified experience while ensuring platform-specific optimizations.
                </p>
                <ul className="ml-6 space-y-2 list-disc">
                  <li>Created unified UX architecture for shared services</li>
                  <li>Developed responsive layouts for:
                    <ul className="ml-6 space-y-1 list-circle mt-2">
                      <li>Web interface for complex operations</li>
                      <li>Tablet optimization for field operations</li>
                      <li>Mobile interface for on-the-go access</li>
                    </ul>
                  </li>
                  <li>Implemented MoHRE design system standards across all platforms</li>
                  <li>Designed intuitive navigation and workflow patterns</li>
                </ul>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2 className="text-2xl font-bold mb-4 font-display">5. Process & Methodology</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">User Research</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>Contextual inquiries and user interviews</CardDescription>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Workflow Mapping</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>Detailed process documentation</CardDescription>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Wireframing</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>Initial concept validation</CardDescription>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Prototyping</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>Interactive demos for stakeholder review</CardDescription>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Design System Integration</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>Ensuring consistency with MoHRE standards</CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </section>
            </Reveal>

            <Reveal>
              <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4 font-display">6. Key Features Delivered</h2>
                  <ul className="ml-6 space-y-2 list-disc">
                    <li>Unified dashboard for back-office operations</li>
                    <li>Cross-platform consistency in user experience</li>
                    <li>Streamlined workflow management</li>
                    <li>Integrated notification system</li>
                    <li>Standardized component library</li>
                  </ul>
                </div>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1586282391129-76a6df230234?q=80&w=2670&auto=format&fit=crop"
                    alt="Dashboard Design" 
                    className="rounded-lg mb-4 h-64 w-full object-cover"
                  />
                </div>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2 className="text-2xl font-bold mb-4 font-display">7. Results & Impact</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-primary/5 rounded-lg p-6 text-center">
                    <p className="text-3xl font-bold text-primary mb-2">35%</p>
                    <p className="text-sm text-muted-foreground">Improved operational efficiency</p>
                  </div>
                  <div className="bg-primary/5 rounded-lg p-6 text-center">
                    <p className="text-3xl font-bold text-primary mb-2">42%</p>
                    <p className="text-sm text-muted-foreground">Reduced training time for new staff</p>
                  </div>
                  <div className="bg-primary/5 rounded-lg p-6 text-center">
                    <p className="text-3xl font-bold text-primary mb-2">28%</p>
                    <p className="text-sm text-muted-foreground">Enhanced user satisfaction</p>
                  </div>
                  <div className="bg-primary/5 rounded-lg p-6 text-center">
                    <p className="text-3xl font-bold text-primary mb-2">100%</p>
                    <p className="text-sm text-muted-foreground">Standardized experience across platforms</p>
                  </div>
                </div>
              </section>
            </Reveal>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <Reveal>
              <div className="bg-primary/5 rounded-lg p-6">
                <h3 className="font-bold text-xl mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Client</p>
                    <p className="font-medium">Ministry of Human Resources & Emiratisation</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Industry</p>
                    <p className="font-medium">Government</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Services</p>
                    <p className="font-medium">UX Research, UX Design, Prototyping</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Duration</p>
                    <p className="font-medium">18 months</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Role</p>
                    <p className="font-medium">Senior UX Consultant</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="space-y-4">
                <h3 className="font-bold text-xl mb-4">Tools Used</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Figma</Badge>
                  <Badge variant="secondary">Sketch</Badge>
                  <Badge variant="secondary">Adobe XD</Badge>
                  <Badge variant="secondary">InVision</Badge>
                  <Badge variant="secondary">Miro</Badge>
                  <Badge variant="secondary">Axure RP</Badge>
                </div>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="border-t pt-6">
                <h3 className="font-bold text-xl mb-4">Contact</h3>
                <p className="text-muted-foreground mb-4">Interested in discussing this project or something similar?</p>
                <Button className="w-full">
                  Get in Touch
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default DubaiLabourProject;

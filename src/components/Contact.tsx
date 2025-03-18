
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AtSign, Send, MapPin, Phone } from "lucide-react";
import { FormEvent, useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      // Reset form
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-24">
      <Container>
        <div className="text-center mb-12">
          <Reveal>
            <Badge variant="outline" className="mb-4">Get In Touch</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or just want to say hello? Feel free to reach out. I'm always open to discussing new projects, creative ideas or opportunities.
            </p>
          </Reveal>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <Reveal className="lg:col-span-2 space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full text-primary">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Location</h3>
                <p className="text-muted-foreground">San Francisco, CA</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full text-primary">
                <AtSign className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Email</h3>
                <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-foreground transition-colors">
                  hello@example.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full text-primary">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Phone</h3>
                <a href="tel:+11234567890" className="text-muted-foreground hover:text-foreground transition-colors">
                  +1 (123) 456-7890
                </a>
              </div>
            </div>
          </Reveal>
          
          <Reveal delay={300} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    required
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="h-12"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Project Inquiry"
                  required
                  className="h-12"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  required
                  className="min-h-32 resize-none"
                />
              </div>
              
              <Button type="submit" size="lg" className="w-full group" disabled={isSubmitting}>
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </Button>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export default Contact;

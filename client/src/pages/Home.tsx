import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Palette, 
  ShoppingCart, 
  Briefcase, 
  TrendingUp, 
  Settings, 
  Star,
  Check,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
  Sparkles,
  Zap,
  Shield
} from "lucide-react";
import { APP_TITLE, APP_LOGO } from "@/const";
import { useState } from "react";
import { toast } from "sonner";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const services = [
    {
      icon: <Palette className="w-12 h-12 text-primary" />,
      title: "Custom Website Design",
      description: "Unique, tailored designs that reflect your brand identity and captivate your audience with stunning visuals."
    },
    {
      icon: <ShoppingCart className="w-12 h-12 text-primary" />,
      title: "E-Commerce Websites",
      description: "Full-featured online stores with secure payment gateways, inventory management, and seamless shopping experiences."
    },
    {
      icon: <Briefcase className="w-12 h-12 text-primary" />,
      title: "Portfolio Websites",
      description: "Showcase your work beautifully with elegant portfolio sites designed to impress clients and employers."
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-primary" />,
      title: "SEO Optimization",
      description: "Boost your search rankings with expert SEO strategies that drive organic traffic and increase visibility."
    },
    {
      icon: <Settings className="w-12 h-12 text-primary" />,
      title: "Website Maintenance",
      description: "Keep your site running smoothly with regular updates, security patches, and technical support."
    },
    {
      icon: <Code className="w-12 h-12 text-primary" />,
      title: "Custom Development",
      description: "Advanced functionality and integrations tailored to your specific business needs and workflows."
    }
  ];

  const portfolioItems = [
    {
      title: "TechStart Solutions",
      category: "Corporate Website",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      description: "Modern corporate site with interactive features"
    },
    {
      title: "Artisan Marketplace",
      category: "E-Commerce",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop",
      description: "Full-featured online marketplace platform"
    },
    {
      title: "Creative Portfolio",
      category: "Portfolio",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=600&fit=crop",
      description: "Elegant portfolio for creative professionals"
    },
    {
      title: "FitLife Gym",
      category: "Business Website",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
      description: "Dynamic fitness center website with booking"
    },
    {
      title: "Gourmet Bistro",
      category: "Restaurant",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
      description: "Appetizing restaurant site with online ordering"
    },
    {
      title: "Legal Associates",
      category: "Professional Services",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
      description: "Professional law firm website"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "R18,481",
      description: "Perfect for small businesses and startups",
      features: [
        "5-page responsive website",
        "Mobile-friendly design",
        "Basic SEO setup",
        "Contact form integration",
        "1 month free support",
        "Social media links"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "R46,231",
      description: "Ideal for growing businesses",
      features: [
        "10-page responsive website",
        "Custom design & branding",
        "Advanced SEO optimization",
        "Content management system",
        "3 months free support",
        "Analytics integration",
        "Blog functionality",
        "Email newsletter setup"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "R92,481+",
      description: "For large-scale projects",
      features: [
        "Unlimited pages",
        "E-commerce functionality",
        "Custom features & integrations",
        "Premium design & animations",
        "6 months free support",
        "Advanced analytics",
        "Priority support",
        "Performance optimization",
        "Security hardening"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Solutions",
      content: "WebBuilder Pro transformed our online presence completely. The team delivered a stunning website that perfectly captures our brand. Our traffic increased by 200% in just three months!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
    },
    {
      name: "Michael Chen",
      role: "Owner, Artisan Marketplace",
      content: "The e-commerce platform they built exceeded all expectations. Sales have tripled, and customers love the seamless shopping experience. Highly professional team!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    {
      name: "Emily Rodriguez",
      role: "Creative Director",
      content: "My portfolio website is absolutely gorgeous. It showcases my work beautifully and has helped me land several high-profile clients. Worth every penny!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <img src={APP_LOGO} alt="P&M WebWorks" className="w-10 h-10" />
              <span className="font-bold text-xl">{APP_TITLE}</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Services</a>
              <a href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">Portfolio</a>
              <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">Pricing</a>
              <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">Testimonials</a>
              <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
            </div>
            <Button asChild variant="default">
              <a href="#contact">Get Started</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="w-fit" variant="secondary">
                <Zap className="w-3 h-3 mr-1" />
                Trusted by 500+ Businesses
              </Badge>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                We Build Your{" "}
                <span className="text-primary">Dream Website</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl">
                Transform your vision into reality with stunning, high-performance websites that drive results. Professional design, cutting-edge technology, and exceptional support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg px-8">
                  <a href="#contact">
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8">
                  <a href="#portfolio">View Portfolio</a>
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Secure & Fast</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">5.0 Rating</span>
                </div>
              </div>
            </div>
            <div className="relative lg:h-[600px] hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop" 
                alt="Website Design"
                className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="secondary">About Us</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Building Digital Excellence Since 2015</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are a passionate team of designers, developers, and digital strategists dedicated to creating exceptional web experiences. With over 500 successful projects delivered, we combine creativity with technical expertise to build websites that not only look stunning but also drive real business results. Our mission is to empower businesses of all sizes with professional web solutions that help them thrive in the digital age.
            </p>
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <div className="text-4xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground mt-1">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground mt-1">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary">8+</div>
                <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary">Our Services</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">What We Offer</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive web solutions tailored to your unique business needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary">Our Work</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our portfolio of successful websites across various industries
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <Badge className="w-fit mb-2" variant="secondary">{item.category}</Badge>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary">Pricing Plans</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Choose Your Package</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transparent pricing with no hidden fees. Select the plan that fits your needs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative ${plan.popular ? 'border-primary shadow-xl scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-accent text-accent-foreground">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-5xl font-bold">{plan.price}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? "default" : "outline"}
                    asChild
                  >
                    <a href="#contact">Get Started</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary">Testimonials</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary">Get In Touch</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Let's Start Your Project</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your vision to life? Contact us today for a free consultation.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                  <CardDescription>Fill out the form and we'll get back to you within 24 hours</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input 
                        placeholder="Your Name" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Input 
                        type="email" 
                        placeholder="Email Address" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Input 
                        type="tel" 
                        placeholder="Phone Number" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    <div>
                      <Textarea 
                        placeholder="Tell us about your project..." 
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                      Send Message
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Phone className="w-6 h-6 text-primary" />
                    <div>
                      <CardTitle className="text-lg">Phone</CardTitle>
                      <div className="space-y-1">
                        <CardDescription>+27 66 462 3284</CardDescription>
                        <CardDescription>+27 67 077 4967</CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Mail className="w-6 h-6 text-primary" />
                    <div>
                      <CardTitle className="text-lg">Email</CardTitle>
                      <div className="space-y-1">
                        <CardDescription>mandlatheo15@gmail.com</CardDescription>
                        <CardDescription>pulemosehla140@gmail.com</CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-primary" />
                    <div>
                      <CardTitle className="text-lg">Office</CardTitle>
                      <CardDescription>123 Web Street, Digital City, DC 12345</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg mb-4">Follow Us</CardTitle>
                  <div className="flex gap-4">
                    <a href="https://www.facebook.com/profile.php?id=61583493448932" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a href="https://x.com/PMwebworks" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-3 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="https://www.instagram.com/pm.webworks/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 border-t py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img src={APP_LOGO} alt="P&M WebWorks" className="w-8 h-8" />
                <span className="font-bold text-lg">{APP_TITLE}</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Building exceptional websites that drive results and exceed expectations.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#services" className="hover:text-primary transition-colors">Custom Design</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">E-Commerce</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">SEO</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Maintenance</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a></li>
                <li><a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 {APP_TITLE}. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=61583493448932" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://x.com/PMwebworks" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/pm.webworks/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, Check, Users, Shield } from "lucide-react";
import { MadeWithDyad } from "@/components/made-with-dyad";

const features = [
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "Lightning Fast",
    description: "Built with Vite for instant loading and optimal performance."
  },
  {
    icon: <Check className="h-6 w-6" />,
    title: "Easy to Use",
    description: "Intuitive interface that anyone can master in minutes."
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Community Driven",
    description: "Join thousands of satisfied users worldwide."
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Secure & Reliable",
    description: "Enterprise-grade security for your peace of mind."
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    quote: "This product transformed our workflow. Highly recommended!"
  },
  {
    name: "Michael Chen",
    role: "CTO",
    quote: "The performance improvements were noticeable immediately."
  },
  {
    name: "Emma Williams",
    role: "Product Manager",
    quote: "Our team adoption was seamless thanks to the intuitive design."
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Build Amazing Things <br className="hidden md:block" />
              <span className="text-primary">Faster Than Ever</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              The complete solution for modern web development. Get started in minutes and scale to millions of users.
            </p>
            <div className="mt-10 flex gap-4 justify-center">
              <Button size="lg">Get Started</Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight">Why Choose Us</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build modern web applications
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight">What Our Users Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-muted flex items-center justify-center">
                      <Users className="h-8 w-8 text-muted-foreground" />
                    </div>
                  </div>
                  <blockquote className="text-lg italic mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Ready to Get Started?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of developers building amazing things with our platform.
          </p>
          <Button size="lg" variant="secondary">
            Sign Up Now
          </Button>
        </div>
      </section>

      <MadeWithDyad />
    </div>
  );
}
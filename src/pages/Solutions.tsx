
import React from 'react';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, Bot, Cloud, Shield, Server } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      title: "Web Programming",
      description: "Custom web applications built with modern frameworks and technologies to meet your specific business needs.",
      icon: Code,
      features: [
        "Responsive web application development",
        "Progressive web apps (PWAs)",
        "E-commerce solutions",
        "Content management systems"
      ]
    },
    {
      title: "AI Agents & Assistants",
      description: "Intelligent AI agents and digital assistants to automate tasks and enhance user experiences.",
      icon: Bot,
      features: [
        "Custom AI chatbots",
        "Virtual assistants",
        "Process automation",
        "Natural language processing solutions"
      ]
    },
    {
      title: "Cloud Computing",
      description: "Scalable and secure cloud infrastructure to power your applications and services.",
      icon: Cloud,
      features: [
        "Cloud migration services",
        "Serverless architecture",
        "Database optimization",
        "Auto-scaling infrastructure"
      ]
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and customer data.",
      icon: Shield,
      features: [
        "Security audits and assessments",
        "Penetration testing",
        "Compliance solutions",
        "Secure authentication systems"
      ]
    },
    {
      title: "AI Infrastructure",
      description: "End-to-end AI infrastructure setup and management for organizations of all sizes.",
      icon: Server,
      features: [
        "ML/AI model deployment",
        "Training infrastructure",
        "Data pipelines",
        "Model monitoring and management"
      ]
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Solutions</h1>
          <p className="text-xl max-w-3xl mx-auto text-muted-foreground">
            Comprehensive software solutions to help your business grow in the digital age.
            From web applications to AI infrastructure, we provide everything you need.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <Card key={index} className="transition-all hover:shadow-md">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <solution.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{solution.title}</CardTitle>
                <CardDescription>{solution.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="text-muted-foreground">{feature}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link to="/contact">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our team of experts is ready to help you implement the perfect software solution for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/plan-inquiry">Get a Custom Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Solutions;

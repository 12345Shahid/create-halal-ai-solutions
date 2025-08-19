
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';


const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                AI-Powered Solutions <span className="text-primary">Aligned with Islamic Values</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                CreateHalal builds cutting-edge software solutions that align with Islamic principles, specializing in AI technology and computer science services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" asChild>
                  <Link to="/ai-startup">AI Solutions</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="w-full h-64 md:h-80 lg:h-96 bg-gradient-to-br from-halal-300/30 to-halal-600/30 rounded-lg"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl font-bold text-primary">CreateHalal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground">
              We offer a wide range of computer science services with a special focus on AI solutions that align with Islamic principles.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="feature-gradient p-8 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">AI Development</h3>
              <p className="text-muted-foreground">
                Custom AI solutions for your business needs that are fast, reliable, and align with Islamic principles.
              </p>
            </div>
            
            <div className="feature-gradient p-8 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Software Development</h3>
              <p className="text-muted-foreground">
                End-to-end software development services with modern technologies and ethical considerations.
              </p>
            </div>
            
            <div className="feature-gradient p-8 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Web Development</h3>
              <p className="text-muted-foreground">
                Beautiful, responsive websites and web applications that serve your business goals.
              </p>
            </div>
            
            <div className="feature-gradient p-8 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Data Analysis</h3>
              <p className="text-muted-foreground">
                Transform your data into actionable insights with our ethical data analysis services.
              </p>
            </div>
            
            <div className="feature-gradient p-8 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Mobile App Development</h3>
              <p className="text-muted-foreground">
                Native and cross-platform mobile applications that deliver exceptional user experiences.
              </p>
            </div>
            
            <div className="feature-gradient p-8 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Cybersecurity</h3>
              <p className="text-muted-foreground">
                Protect your digital assets with our comprehensive cybersecurity solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="aspect-video bg-gradient-to-br from-halal-300/30 to-halal-600/30 rounded-lg flex items-center justify-center">
                <div className="text-2xl font-bold text-primary">Our Mission</div>
              </div>
            </div>
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">About CreateHalal</h2>
              <p className="text-lg text-muted-foreground">
                At CreateHalal, we are committed to developing innovative software solutions that align with Islamic principles. We focus on creating technology that upholds ethical standards while delivering cutting-edge functionality.
              </p>
              <p className="text-lg text-muted-foreground">
                Our team specializes in AI technology and computer science services, building solutions that respect and honor Islamic values. We believe in creating software that benefits humanity without compromising on principles.
              </p>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to build your AI-powered solution?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get started with CreateHalal today and experience the perfect blend of technology and Islamic principles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/ai-startup">View AI Solutions</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
    </Layout>
  );
};

export default Index;

import React from 'react';
import Layout from '@/components/Layout';
import PricingCard from '@/components/PricingCard';

const AIStartup = () => {
  // Define pricing features
  const starterFeatures = [
    { text: "Access to 1 AI model of your choice" },
    { text: "Authentication and database support" },
    { text: "Up to 5 chat interfaces" },
    { text: "Basic UI customization" },
    { text: "24/7 pro level customer support" },
    { text: "Dark and light mode" },
    { text: "Copy AI response functionality" },
    { text: "Basic static pages (About, Contact, etc.)" },
    { text: "Dashboard for tracking credits" },
  ];

  const businessFeatures = [
    { text: "Everything in Starter plan" },
    { text: "Choose as many AI models as you wish" },
    { text: "Notification functionality" },
    { text: "Project/file management functionality" },
    { text: "Up to 15 chat interfaces" },
    { text: "Chat interface categorization" },
    { text: "Advanced UI customization (colors, fonts, etc.)" },
    { text: "Custom image uploads" },
    { text: "Free $2 API fee for models" },
  ];

  const customFeatures = [
    { text: "Everything in Business plan" },
    { text: "Unlimited AI models" },
    { text: "Custom features based on your needs" },
    { text: "Enterprise-grade support" },
    { text: "Advanced integrations" },
    { text: "Custom branding" },
    { text: "Priority development" },
    { text: "Dedicated account manager" },
    { text: "Custom API usage and billing" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Launch Your AI Startup with <span className="text-primary">CreateHalal</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We help you build and deploy your AI-powered application with solutions that align with Islamic principles.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need to Launch</h2>
            <p className="text-lg text-muted-foreground">
              Our AI startup solutions provide everything you need to launch your AI-powered business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="feature-gradient p-8 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">AI Model Integration</h3>
              <p className="text-muted-foreground">
                Seamlessly integrate leading AI models into your application, with full customization options.
              </p>
            </div>
            
            <div className="feature-gradient p-8 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Chat Interfaces</h3>
              <p className="text-muted-foreground">
                Create multiple chat interfaces for different use cases and user segments, with full customization.
              </p>
            </div>
            
            <div className="feature-gradient p-8 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Authentication & Security</h3>
              <p className="text-muted-foreground">
                Secure user authentication and data protection that meets the highest security standards.
              </p>
            </div>
            
            <div className="feature-gradient p-8 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 01-2-2H5a2 2 0 01-2 2v6a2 2 0 012 2h2a2 2 0 012-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Usage Analytics</h3>
              <p className="text-muted-foreground">
                Comprehensive analytics dashboard to track user activity and AI model usage.
              </p>
            </div>
            
            <div className="feature-gradient p-8 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Customizable UI</h3>
              <p className="text-muted-foreground">
                Tailor the user interface to match your brand identity with our customization options.
              </p>
            </div>
            
            <div className="feature-gradient p-8 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-muted-foreground">
                Professional customer support available 24/7 to assist with any issues or questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing Plans</h2>
            <p className="text-lg text-muted-foreground">
              Choose the plan that fits your AI startup needs and budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PricingCard
              name="Starter"
              price="3"
              altCurrency={{ symbol: "BDT", price: "400" }}
              description="Perfect for individuals and small projects getting started with AI."
              features={starterFeatures}
            />
            
            <PricingCard
              name="Business"
              price="12"
              altCurrency={{ symbol: "BDT", price: "1500" }}
              description="Advanced features for businesses serious about AI implementation."
              features={businessFeatures}
              popular={true}
            />
            
            <PricingCard
              name="Custom"
              price="Contact us"
              description="Tailored solutions for enterprises with unique requirements."
              features={customFeatures}
              isCustom={true}
            />
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about our AI startup solutions.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">How do I get started?</h3>
              <p className="text-muted-foreground">
                Sign up for an account, choose your plan, and our team will guide you through the setup process. We'll help you integrate the AI models and set up your chat interfaces.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">What AI models can I use?</h3>
              <p className="text-muted-foreground">
                You can use any major AI model available. Our platform supports OpenAI (GPT), Anthropic (Claude), Google (Gemini), and more. We ensure all models align with Islamic principles.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">How does the unlimited usage work?</h3>
              <p className="text-muted-foreground">
                For the first three months, you get unlimited usage of your AI models. After that, you'll be charged based on your actual API usage, with competitive rates.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Can I switch plans later?</h3>
              <p className="text-muted-foreground">
                Yes, you can upgrade or downgrade your plan at any time. Your billing will be adjusted accordingly on your next billing cycle.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">What kind of support do you provide?</h3>
              <p className="text-muted-foreground">
                We offer 24/7 pro-level customer support via email, chat, and phone. Our team is always available to help you with any technical issues or questions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AIStartup;

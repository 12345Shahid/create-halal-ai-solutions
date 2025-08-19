
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';


const Contact = () => {
  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">Get in Touch</h1>
              <p className="text-xl text-muted-foreground">
                Have questions about our services? Want to discuss your project? Reach out to our team.
              </p>
              
              <div className="space-y-6 py-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground">create.contact.369@gmail.com</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Office Hours</h3>
                  <p className="text-muted-foreground">Monday - Friday: 9am - 5pm</p>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="bg-card border border-border rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                
                <form action="https://submit-form.com/3GIkBDp1x" className="contact-form space-y-6">
                  <div>
                    <label htmlFor="name">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      placeholder="Your name" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      placeholder="Your email" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      placeholder="Your message" 
                      required 
                      rows={5}
                    ></textarea>
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how CreateHalal can help you build AI solutions that align with Islamic principles.
          </p>
          <Button size="lg" asChild>
            <a href="mailto:create.contact.369@gmail.com">Email Us Now</a>
          </Button>
        </div>
      </section>
      
    </Layout>
  );
};

export default Contact;

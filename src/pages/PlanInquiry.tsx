
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from "sonner";

const PlanInquiry = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();
  const { planName } = location.state || { planName: 'Custom' };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Submit form to the form submission service
      const response = await fetch('https://submit-form.com/3GIkBDp1x', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message: `Plan: ${planName}\n\n${message}`,
        }),
      });
      
      if (response.ok) {
        toast.success("Your inquiry has been submitted successfully! We'll contact you soon.");
        navigate('/');
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      toast.error("There was an error submitting your inquiry. Please try again.");
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <Card className="max-w-xl mx-auto">
          <CardHeader>
            <CardTitle>Start Your AI Startup Journey</CardTitle>
            <CardDescription>
              Please provide details about your personalized AI project with the {planName} plan, and our team will get back to you shortly.
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium">Your Name</label>
                <Input 
                  id="name" 
                  name="name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name" 
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">Email Address</label>
                <Input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email" 
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">Requirements/Message</label>
                <Textarea 
                  id="message" 
                  name="message" 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={`Please describe what you're looking for in your ${planName} plan, including any specific requirements or questions.`} 
                  required 
                  rows={6}
                  className="resize-none"
                />
              </div>
              
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
              </Button>
            </form>
          </CardContent>
          
          <CardFooter className="flex justify-center">
            <button 
              onClick={() => navigate('/ai-startup')} 
              className="text-sm text-primary hover:underline"
            >
              Back to plans
            </button>
          </CardFooter>
        </Card>
      </div>
    </Layout>
  );
};

export default PlanInquiry;

import React from 'react';

const PhoneWidget = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-card border border-border rounded-lg shadow-lg overflow-hidden">
        <div className="bg-primary text-primary-foreground px-4 py-2">
          <h3 className="font-semibold text-sm">Talk to Us</h3>
        </div>
        <iframe 
          src="https://app.millis.ai/agents/embedded?id=-OXm8bCzYPYdbDQm65RV&k=YwMtjJ6XgQH1RAyujYupfBGwq2zUecLQ" 
          width="350" 
          height="500" 
          allow="microphone"
          className="border-0"
          title="Phone calling system"
        />
      </div>
    </div>
  );
};

export default PhoneWidget;
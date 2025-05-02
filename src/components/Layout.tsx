
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Toaster } from "@/components/ui/sonner";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-[76px]">{children}</main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
};

export default Layout;

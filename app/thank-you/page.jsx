"use client";

import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary px-4">
      <div className="bg-card text-card-foreground max-w-4xl p-32 w-full shadow-lg rounded-xl text-center border border-border ">
        
        <CheckCircle className="w-24 h-24 mx-auto text-primary" />

        <h1 className="text-5xl font-semibold mt-4 text-foreground">
          Thank You!
        </h1>

        <p className="text-muted-foreground mt-2 text-xl leading-relaxed">
          Your enquiry has been received successfully.  
          Our team at <span className="text-primary font-medium">Jindal Electric </span> 
          will contact you shortly.
        </p>

        <Link
          href="/"
          className="inline-block mt-6 px-6 py-3 rounded-lg text-xl font-medium 
                     bg-primary text-primary-foreground
                     hover:bg-accent hover:text-accent-foreground
                     transition-all"
        >
          Back to Home
        </Link>

        <div className="mt-4">
          <p className="text-xl text-muted-foreground">
            For urgent queries, call:  
            <br />
            <span className="font-semibold text-lg text-foreground">+91-8826585858</span>
          </p>
        </div>

      </div>
    </div>
  );
}

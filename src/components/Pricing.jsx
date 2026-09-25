import React, { useState } from 'react';
import { Check, Sparkles, Zap, Shield, ArrowRight } from 'lucide-react';

export default function Pricing() {
  const [activeCategory, setActiveCategory] = useState('digital');

  const categories = [
    { id: 'digital', name: 'Digital Marketing' },
    { id: 'web', name: 'Web & App Development' },
    { id: 'branding', name: 'Branding & Creative' },
    { id: 'outdoor', name: 'Outdoor & Local' },
    { id: 'addons', name: 'Add-On Services' },
  ];

  const pricingData = {
    digital: [
      { name: "Social Media Marketing (FB/IG)", price: "4999", period: "/month", desc: "Build brand awareness and engage your audience on Facebook & Instagram." },
      { name: "SEO Optimization", price: "7499", period: "/month", desc: "Rank higher on Google search results and drive organic traffic." },
      { name: "Google Ads/PPC Campaign", price: "9999", period: "/month", desc: "Instant high-intent leads and sales through targeted paid search." },
      { name: "Content Marketing & Blogging", price: "3999", period: "/month", desc: "Engaging articles and content strategy to establish industry authority." },
    ],
    web: [
      { name: "Business Website (5 Pages)", price: "14999", period: "one-time", desc: "Fully responsive, fast, and professional website for your business." },
      { name: "E-Commerce Website", price: "29999", period: "one-time", desc: "Complete online store with payment gateway integration and cart." },
      { name: "Landing Page Design", price: "6999", period: "one-time", desc: "High-converting single page designed for ad campaigns." },
      { name: "Mobile App Development", price: "Get Quote", period: "custom", desc: "Custom iOS & Android mobile applications built with modern stack." },
    ],
    branding: [
      { name: "Logo Design", price: "2999", period: "one-time", desc: "Unique and memorable brand identity logo concepts." },
      { name: "Branding Kit", price: "6999", period: "one-time", desc: "Complete typography, color palette, and business card assets." },
      { name: "Poster/Social Media Creatives", price: "499", period: "/design", desc: "Eye-catching graphic designs for daily social media posts." },
      { name: "Video Editing & Reels", price: "1999", period: "/video", desc: "High-retention short-form video editing for Reels & Shorts." },
    ],
    outdoor: [
      { name: "Auto E-Rickshaw Ads (with sound)", price: "1250", period: "/day", desc: "Mobile local advertising with audio announcements." },
      { name: "Auto E-Rickshaw Ads (no sound)", price: "1150", period: "/day", desc: "Standard branded auto-rickshaw transit campaigns." },
      { name: "Branding on Auto E-Rickshaw", price: "2100", period: "/vehicle", desc: "Full vehicle wrap and creative installation." },
      { name: "Flex Banner Printing", price: "14", period: "/sq.ft", desc: "High-quality outdoor flex banner printing and material." },
      { name: "Event Promotions", price: "Get Quote", period: "custom", desc: "On-ground promotional campaigns and local activations." },
    ],
    addons: [
      { name: "Domain Registration", price: "799", period: "/year", desc: "Secure your .com or .in domain name instantly." },
      { name: "Hosting Setup", price: "1999", period: "/year", desc: "High-speed secure cloud server hosting setup." },
      { name: "Google Business Profile Setup", price: "1499", period: "one-time", desc: "Local SEO optimization and Google Maps verification." },
      { name: "Marketing Consultation (1 Hour)", price: "999", period: "session", desc: "1-on-1 strategy call with our digital growth expert." },
    ]
  };

  return (
    <section id="pricing" className="py-28 px-6 max-w-7xl mx-auto border-t border-slate-900 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      {/* Header */}
      <div className="text-center max-w-4xl mx-auto mb-16 relative z-10">
        <span className="text-orange-500 font-bold text-xs uppercase tracking-widest block mb-3">PRICING PLANS</span>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">
          Transparent Pricing Built for Growth
        </h2>
        <p className="text-slate-400 text-sm max-w-xl mx-auto">
          Choose from our comprehensive range of digital, web, branding, and local advertising packages.
        </p>

        {/* Category Navigation Tabs: Single Line Setup */}
        <div className="flex flex-nowrap items-center justify-start md:justify-center gap-2 mt-8 bg-slate-900/90 border border-slate-800 p-2 rounded-2xl max-w-5xl mx-auto shadow-inner overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-3 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                activeCategory === cat.id 
                  ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/30' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Pricing Cards Grid (Made Bigger & Bolder) */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {pricingData[activeCategory].map((item, index) => (
          <div 
            key={index}
            className="bg-slate-950/80 border border-slate-800/90 hover:border-orange-500/60 rounded-[36px] p-10 flex flex-col justify-between relative transition-all duration-300 hover:-translate-y-2 backdrop-blur-xl group shadow-2xl"
          >
            <div>
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-orange-400 transition">
                {item.name}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                {item.desc}
              </p>

              {/* Price Display (Bigger Font) */}
              <div className="flex items-baseline gap-1.5 mb-10 pb-6 border-b border-slate-800/80">
                <span className="text-4xl md:text-5xl font-black text-white">
                  {item.price !== "Get Quote" ? `₹${item.price}` : item.price}
                </span>
                {item.period !== "custom" && (
                  <span className="text-sm text-slate-400 font-semibold">{item.period}</span>
                )}
              </div>
            </div>

            {/* Action Button */}
            <a 
              href="#contact" 
              className="w-full bg-slate-900 hover:bg-orange-600 border border-slate-800 hover:border-orange-500 text-white py-4 rounded-2xl font-bold text-xs uppercase tracking-widest text-center transition flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-orange-600/30"
            >
              {item.price === "Get Quote" ? "Get Quote" : "Book Now"} <ArrowRight size={16} />
            </a>

          </div>
        ))}
      </div>

    </section>
  );
}
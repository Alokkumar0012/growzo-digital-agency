import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, TrendingUp, Smartphone, Globe } from 'lucide-react';

export default function Services() {
  const [hoveredTab, setHoveredTab] = useState(null);

  const services = [
    { 
      num: "01", 
      title: "Web Design & Development", 
      desc: "We create data-driven high performance websites, custom web apps, and modern UI/UX architectures.",
      features: ["Custom React / Next.js Development", "Lightning Fast Performance", "Responsive Mobile-First Design"]
    },
    { 
      num: "02", 
      title: "Digital Marketing", 
      desc: "Targeted campaigns to attract the right audience, decrease acquisition costs, and maximize conversions.",
      features: ["Facebook & Instagram Ads Setup", "Google Search & Display Campaigns", "Brand Positioning & Messaging"]
    },
    { 
      num: "03", 
      title: "App Design Support", 
      desc: "Sleek and robust UI/UX design support for mobile applications and cross-platform ecosystems.",
      features: ["iOS & Android Wireframing", "Interactive Prototyping", "User Journey Optimization"]
    },
    { 
      num: "04", 
      title: "Brand Strategy", 
      desc: "Long-term positioning, visual storytelling equity, and identity design that builds lasting trust.",
      features: ["Comprehensive Brand Guidelines", "Visual Identity & Typography", "Market Competitor Analysis"]
    },
  ];

  return (
    <section id="services" className="py-28 px-6 max-w-7xl mx-auto text-slate-100">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-16">
        <div>
          <span className="text-orange-500 font-bold text-xs uppercase tracking-widest block mb-2">OUR EXPERTISE</span>
          <h2 className="text-3xl md:text-5xl font-black">Strategic Solutions for Digital Growth</h2>
        </div>
        <p className="text-slate-400 text-sm max-w-md mt-4 md:mt-0">
          We provide a full range of digital solutions designed to help businesses grow, connect, & succeed.
        </p>
      </div>

      {/* NEW: Digital Marketing Showcase Cards (Matching Reference Image) */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-4xl font-black text-white">
            Services We Provide In <span className="text-orange-500">Digital Marketing</span>
          </h3>
          <p className="text-slate-400 text-xs md:text-sm mt-2">
            Drive instant high-intent traffic and maximize customer acquisition across major platforms.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Card 1: Paid Advertising / Google Ads */}
          <div className="bg-gradient-to-br from-slate-900/90 to-slate-950 border border-slate-800/80 p-8 rounded-[36px] shadow-2xl flex flex-col justify-between group hover:border-orange-500/50 transition duration-500">
            <div>
              {/* Visual Mockup Box */}
              <div className="h-64 bg-slate-950/80 border border-slate-800 rounded-3xl p-6 mb-8 flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition duration-500">
                <div className="absolute inset-0 bg-orange-600/5 opacity-50"></div>
                <div className="text-center relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-orange-500/20 text-orange-400 flex items-center justify-center mx-auto mb-4 border border-orange-500/30">
                    <Globe size={32} />
                  </div>
                  <h4 className="text-lg font-bold text-white">Paid Advertising & Strategy</h4>
                  <p className="text-xs text-slate-400 mt-1">Sketching, Wireframing & Funnel Mapping</p>
                </div>
              </div>

              <h4 className="text-2xl font-bold text-white mb-3">
                Google Ads That Drive Instant Leads & Sales
              </h4>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-6">
                Our Google Ads services help you reach customers exactly when they are searching for your products or services. We create high-performing search, display, and performance max campaigns with the right keywords and ads.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-bold text-orange-400">
              <CheckCircle2 size={16} /> Instant ROI & High Intent Keywords
            </div>
          </div>

          {/* Card 2: Meta Ads (Facebook & Instagram) */}
          <div className="bg-gradient-to-br from-slate-900/90 to-slate-950 border border-slate-800/80 p-8 rounded-[36px] shadow-2xl flex flex-col justify-between group hover:border-orange-500/50 transition duration-500">
            <div>
              {/* Visual Mockup Box (Mobile / Social UI) */}
              <div className="h-64 bg-slate-950/80 border border-slate-800 rounded-3xl p-6 mb-8 flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition duration-500">
                <div className="absolute inset-0 bg-blue-600/5 opacity-50"></div>
                <div className="text-center relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
                    <Smartphone size={32} />
                  </div>
                  <h4 className="text-lg font-bold text-white">Meta Feed & Reels Ads</h4>
                  <p className="text-xs text-slate-400 mt-1">Facebook & Instagram Mobile Feed UI</p>
                </div>
              </div>

              <h4 className="text-2xl font-bold text-white mb-3">
                Meta Ads for Facebook & Instagram
              </h4>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-6">
                Our Meta Ads services help you reach your ideal customers on Facebook and Instagram. We create high-converting ad campaigns with the right audience targeting, compelling creatives, and continuous optimization, so every rupee of your ad spend delivers real results.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-bold text-orange-400">
              <CheckCircle2 size={16} /> Laser-Targeted Audience & High Conversions
            </div>
          </div>

        </div>
      </div>

      {/* Existing Accordion List with Hover Motion */}
      <div className="space-y-4">
        {services.map((s, index) => {
          const isOpen = hoveredTab === index;
          return (
            <div 
              key={index} 
              onMouseEnter={() => setHoveredTab(index)}
              onMouseLeave={() => setHoveredTab(null)}
              className={`border rounded-3xl transition-all duration-500 overflow-hidden cursor-pointer ${
                isOpen 
                  ? 'bg-slate-900/90 border-orange-500/50 shadow-xl shadow-orange-500/5' 
                  : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="p-8 flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="flex items-center gap-6">
                  <span className={`text-2xl font-black transition-colors duration-300 ${isOpen ? 'text-orange-500' : 'text-slate-500'}`}>
                    {s.num}
                  </span>
                  <h3 className={`text-2xl font-bold transition-colors duration-300 ${isOpen ? 'text-white' : 'text-slate-300'}`}>
                    {s.title}
                  </h3>
                </div>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isOpen ? 'bg-orange-600 text-white rotate-45' : 'bg-slate-800 text-slate-400'
                }`}>
                  <ArrowUpRight size={20} />
                </div>
              </div>

              {/* Smooth Expanding Content */}
              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
                isOpen ? 'max-h-96 opacity-100 px-8 pb-8' : 'max-h-0 opacity-0 px-8 pb-0'
              }`}>
                <div className="border-t border-slate-800/80 pt-6 grid md:grid-cols-2 gap-6 items-center">
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {s.desc}
                  </p>
                  <div className="space-y-2">
                    {s.features.map((feat, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                        <CheckCircle2 size={14} className="text-orange-500" />
                        {feat}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
}
import React from 'react';
import { ExternalLink, ArrowUpRight, TrendingUp } from 'lucide-react';

export default function Portfolio() {
  const stats = [
    { value: "+28%", label: "TRAFFIC", desc: "Increase in website visitors after SEO optimization." },
    { value: "46%", label: "SALES", desc: "Increase in online sales after conversion strategy implementation." },
    { value: "2.9x", label: "ROAS", desc: "Return on investment from targeted digital marketing campaigns." },
  ];

  const projects = [
    {
      title: "GROWZO CRM",
      category: "SaaS Platform • Lead Automation",
      desc: "High-ticket pipeline management tool designed to capture inbound leads and automate engagement.",
      gradient: "from-blue-950 via-slate-900 to-indigo-950",
      accent: "group-hover:border-blue-500/50"
    },
    {
      title: "Together We Code Portal",
      category: "EdTech Platform • React / UI",
      desc: "Interactive coding education ecosystem built for structured programming lessons and tutorials.",
      gradient: "from-indigo-950 via-slate-900 to-purple-950",
      accent: "group-hover:border-indigo-500/50"
    },
    {
      title: "MANTRA JAAP",
      category: "UI/UX Design • Mobile App",
      desc: "Sleek and immersive cross-platform dashboard for digital creators and design agencies.",
      gradient: "from-orange-950/40 via-slate-900 to-slate-950",
      accent: "group-hover:border-orange-500/50"
    },
    {
      title: "Blackjack Game",
      category: "Mobile Gaming • Performance Ads",
      desc: "High-performance acquisition campaigns and immersive landing experiences for mobile gamers.",
      gradient: "from-purple-950/40 via-slate-900 to-slate-950",
      accent: "group-hover:border-purple-500/50"
    }
  ];

  return (
    <section id="portfolio" className="py-28 px-6 max-w-7xl mx-auto border-t border-slate-900">
      
      {/* Top Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-20">
        <div>
          <span className="text-orange-500 font-semibold text-xs uppercase tracking-widest block mb-2"> OUR WORKS</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">Featured Projects</h2>
        </div>
        <div className="flex items-center gap-4 mt-6 md:mt-0">
          <p className="text-slate-400 text-sm max-w-sm hidden lg:block text-right">
            We create data-driven campaigns that target the right audience and maximize conversions.
          </p>
          <a href="#contact" className="bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white px-6 py-3 rounded-full text-xs font-bold tracking-widest transition flex items-center gap-2">
            VIEW ALL  <span className="text-orange-500"></span>
          </a>
        </div>
      </div>

      {/* Main Layout Grid */}
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Side: Growth Metrics & Statistics (As seen in Nimo video) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-slate-900/50 border border-slate-800/80 p-8 rounded-3xl backdrop-blur-xl">
            <div className="inline-flex items-center gap-2 text-orange-500 text-xs font-bold uppercase tracking-wider mb-6">
              <TrendingUp size={16} /> Verified Impact Metrics
            </div>
            
            <div className="space-y-8">
              {stats.map((st, idx) => (
                <div key={idx} className="border-b border-slate-800/80 pb-6 last:border-none last:pb-0">
                  <div className="text-4xl font-black text-white mb-1 flex items-baseline gap-2">
                    {st.value} <span className="text-xs font-bold text-orange-500 tracking-widest">{st.label}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{st.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Project Cards Grid */}
        <div className="lg:col-span-8 grid md:grid-cols-2 gap-6">
          {projects.map((proj, idx) => (
            <div 
              key={idx} 
              className={`bg-slate-900/40 border border-slate-800/80 rounded-3xl overflow-hidden group transition-all duration-500 hover:-translate-y-2 ${proj.accent} shadow-xl`}
            >
              {/* Card Thumbnail Area with Gradient & Hover Glow */}
              <div className={`h-64 bg-gradient-to-br ${proj.gradient} flex items-center justify-center relative overflow-hidden border-b border-slate-800/80`}>
                <div className="absolute inset-0 bg-orange-600/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>
                
                {/* Floating Interactive Button */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-slate-950/80 border border-slate-800 flex items-center justify-center text-white group-hover:bg-orange-600 group-hover:border-orange-500 transition-all duration-300 shadow-lg">
                  <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform duration-300" />
                </div>

                <span className="text-slate-500 font-bold tracking-widest text-xs uppercase group-hover:text-slate-300 transition">
                  [ Project Preview {idx + 1} ]
                </span>
              </div>

              {/* Card Info Content */}
              <div className="p-8">
                <span className="text-[10px] uppercase font-bold tracking-wider bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full inline-block mb-3">
                  {proj.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition">
                  {proj.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {proj.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
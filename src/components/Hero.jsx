import React from 'react';
import { ArrowRight, Sparkles, TrendingUp, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-40 pb-28 px-6 max-w-7xl mx-auto relative overflow-hidden bg-gradient-to-br from-[#f8ab60] via-[#f59e50] to-[#f08a35] text-slate-950 rounded-b-[48px] md:rounded-b-[72px] shadow-2xl">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Content Area */}
        <div className="lg:col-span-7">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-md border border-black/10 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse"></span>
            ⭐ Top Rated Digital Growth Agency
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight leading-[1.05] mb-6">
            Scale Your Brand With <span className="text-white drop-shadow-sm">Intention & Power</span>
          </h1>

          {/* Subtitle description */}
          <p className="text-base sm:text-lg font-medium text-slate-900/85 max-w-xl mb-10 leading-relaxed">
            We craft high-converting websites, powerful automated pipelines, and data-driven marketing campaigns that turn casual visitors into loyal high-paying customers.
          </p>

          {/* Call to Action & Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <a 
              href="#contact" 
              className="bg-slate-950 hover:bg-slate-900 text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-wider transition-all duration-300 flex items-center gap-3 shadow-2xl hover:scale-105 cursor-pointer"
            >
              Start Your Project <ArrowRight size={18} />
            </a>

            {/* Client Avatars & Recommendation */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3 overflow-hidden">
                <div className="inline-block h-10 w-10 rounded-full ring-2 ring-orange-400 bg-slate-900 text-white font-bold flex items-center justify-center text-xs">JD</div>
                <div className="inline-block h-10 w-10 rounded-full ring-2 ring-orange-400 bg-slate-800 text-white font-bold flex items-center justify-center text-xs">AK</div>
                <div className="inline-block h-10 w-10 rounded-full ring-2 ring-orange-400 bg-slate-700 text-white font-bold flex items-center justify-center text-xs">SM</div>
              </div>
              <div>
                <div className="text-xs font-black text-slate-950">Loved by 95+ founders</div>
                <div className="text-[10px] font-bold text-slate-900/70">Worldwide digital partners</div>
              </div>
            </div>
          </div>

        </div>
        
        {/* Right Side: Realistic Performance Card UI (Matching Nimo video) */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-md bg-black/15 border border-white/30 backdrop-blur-xl p-8 md:p-10 rounded-[32px] shadow-2xl relative overflow-hidden group">
            
            {/* Subtle inner highlight */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>

            <div className="flex justify-between items-center mb-6">
              <span className="text-[10px] uppercase bg-red-600 text-white px-3.5 py-1.5 rounded-full font-black tracking-widest shadow-md">
                Live Performance
              </span>
              <div className="w-8 h-8 rounded-full bg-black/20 flex items-center justify-center text-white">
                <TrendingUp size={16} />
              </div>
            </div>

            <div className="text-5xl md:text-6xl font-black text-slate-950 tracking-tight mb-3">
              190K+
            </div>
            
            <p className="text-xs font-bold text-slate-900/80 mb-6 leading-relaxed">
              Verified net revenue generated for partner brands in the last 7 days through automated funnels.
            </p>

            <div className="pt-4 border-t border-black/10 flex items-center justify-between text-[11px] font-bold text-slate-950">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-emerald-700" /> 100% Transparent ROAS
              </span>
              <span className="bg-white/40 px-2.5 py-1 rounded-lg">Real-Time Data</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
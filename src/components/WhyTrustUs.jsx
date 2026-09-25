import React from 'react';
import { Zap, ShieldCheck, Cpu, Headphones, Star, CheckCircle } from 'lucide-react';

export default function WhyTrustUs() {
  const trustPoints = [
    {
      icon: <Zap className="text-orange-500" size={24} />,
      title: "Fast Turnaround & Execution",
      desc: "Deadlines matter here. Expect rapid delivery, real-time milestone tracking, and steady progress without compromising quality.",
      badge: "High Velocity",
      bgGradient: "from-orange-600/10 via-slate-900 to-slate-950"
    },
    {
      icon: <Cpu className="text-blue-500" size={24} />,
      title: "Built With The Best Tech Stack",
      desc: "We leverage modern industry-standard frameworks like React, Next.js, Node, and cloud-native tools fully integrated for scale.",
      badge: "Next-Gen Tools",
      bgGradient: "from-blue-600/10 via-slate-900 to-slate-950"
    },
    {
      icon: <ShieldCheck className="text-emerald-500" size={24} />,
      title: "Safe & Reliable Architecture",
      desc: "Enterprise-grade data security, clean modular codebases, and rigorous testing ensure your digital platform stays online 24/7.",
      badge: "100% Secure",
      bgGradient: "from-emerald-600/10 via-slate-900 to-slate-950"
    },
    {
      icon: <Headphones className="text-purple-500" size={24} />,
      title: "Customer Support, One Swipe Away",
      desc: "Dedicated account managers and technical support teams ready to assist you post-launch with instant response times.",
      badge: "24/7 Online",
      bgGradient: "from-purple-600/10 via-slate-900 to-slate-950"
    }
  ];

  return (
    <section id="why-us" className="py-28 px-6 max-w-7xl mx-auto border-t border-slate-900 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none"></div>

      {/* Section Title Header */}
      <div className="text-center max-w-2xl mx-auto mb-20">
        <span className="text-orange-500 font-bold text-xs uppercase tracking-widest block mb-3"> WHY BRANDS TRUST US</span>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">
          How We Deliver Better Work That Lasts
        </h2>
        <p className="text-slate-400 text-sm">
          We combine creative excellence with technical discipline to engineer growth systems that stand the test of time.
        </p>
      </div>

      {/* 4-Grid Modular Layout */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {trustPoints.map((item, index) => (
          <div 
            key={index}
            className={`bg-gradient-to-br ${item.bgGradient} border border-slate-800/80 p-10 rounded-[32px] relative overflow-hidden group hover:border-orange-500/50 transition-all duration-500 shadow-xl`}
          >
            {/* Top Badge & Icon */}
            <div className="flex justify-between items-center mb-6">
              <div className="w-14 h-14 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest bg-slate-800/80 text-slate-300 px-3 py-1 rounded-full border border-slate-700/50">
                {item.badge}
              </span>
            </div>

            {/* Content */}
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
              {item.title}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              {item.desc}
            </p>

            {/* Micro Feature Bullet Line */}
            <div className="pt-6 border-t border-slate-800/60 flex items-center gap-2 text-xs font-semibold text-slate-300">
              <CheckCircle size={14} className="text-orange-500" /> Transparent updates & complete code ownership
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Rating Highlight Bar */}
      <div className="bg-slate-900/60 border border-slate-800/80 p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} fill="currentColor" />
            ))}
          </div>
          <div>
            <h4 className="text-white font-bold text-sm">Rated 4.8 / 5.0 by Global Founders</h4>
            <p className="text-slate-400 text-xs">Over 95+ businesses successfully scaled their digital ecosystem with us.</p>
          </div>
        </div>
        <a 
          href="#contact" 
          className="bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded-full transition shadow-lg shadow-orange-600/20 whitespace-nowrap"
        >
          Work With Us
        </a>
      </div>

    </section>
  );
}
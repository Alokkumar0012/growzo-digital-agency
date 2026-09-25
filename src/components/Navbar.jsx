// import React from 'react';
// import { PhoneCall } from 'lucide-react';

// export default function Navbar() {
//   return (
//     <nav className="fixed top-0 left-0 right-0 z-40 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-slate-900 px-6 py-4">
//       <div className="max-w-7xl mx-auto flex items-center justify-between">
        
//         {/* Logo */}
//         <a href="#" className="text-xl font-black text-white tracking-tighter">
//           GROWZO<span className="text-orange-500"></span>
//         </a>

//         {/* Nav Links */}
//         <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-slate-400">
//           <a href="#services" className="hover:text-white transition">Services</a>
//           <a href="#why-us" className="hover:text-white transition">Why Us</a>
//           <a href="#pricing" className="hover:text-white transition">Pricing</a>
//           <a href="#contact" className="hover:text-white transition">Contact</a>
//         </div>

//         {/* Call Button & Action */}
//         <div className="flex items-center gap-4">
//           <a 
//             href="tel:+912195550114" 
//             className="hidden sm:flex items-center gap-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white px-4 py-2.5 rounded-xl text-xs font-bold transition shadow-md"
//           >
//             <PhoneCall size={14} className="text-orange-500" /> +91 (219) 555-0114
//           </a>
//           <a 
//             href="#contact" 
//             className="bg-orange-600 hover:bg-orange-500 text-white px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition shadow-lg shadow-orange-600/20"
//           >
//             Get Started
//           </a>
//         </div>

//       </div>
//     </nav>
//   );
// }

import React from 'react';
import { PhoneCall } from 'lucide-react';
import logo from '../assets/logo.png'; // Yahan apne logo ka path de dena (agar public folder me hai to direkt "/logo.png" likh sakte hain)

export default function Navbar({ setCurrentPage }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-slate-900 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo & Brand Name */}
        <a href="#" className="flex items-center gap-3 group">
          {/* Custom Logo Image */}
          <img 
            src={logo} 
            alt="Growzo Logo" 
            className="w-9 h-9 object-contain rounded-xl border border-orange-500/30 group-hover:scale-105 transition" 
          />
          <span className="text-xl font-black text-white tracking-tighter">
            GROWZO<span className="text-orange-500"></span>
          </span>
        </a>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-slate-400">
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#why-us" className="hover:text-white transition">Why Us</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        {/* Call Button & Action */}
        <div className="flex items-center gap-4">
          <a 
            href="tel:+912195550114" 
            className="hidden sm:flex items-center gap-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white px-4 py-2.5 rounded-xl text-xs font-bold transition shadow-md"
          >
            <PhoneCall size={14} className="text-orange-500" /> +91 (219) 555-0114
          </a>
          <a 
            href="#contact" 
            className="bg-orange-600 hover:bg-orange-500 text-white px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition shadow-lg shadow-orange-600/20"
          >
            Get Started
          </a>
        </div>

      </div>
    </nav>
  );
}
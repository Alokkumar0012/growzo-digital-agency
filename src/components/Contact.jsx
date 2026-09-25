import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Yahan IDs ko quotes ("...") ke andar rakha gaya hai
    const SERVICE_ID = "service_ow1orae";
    const TEMPLATE_ID = "template_198d9pp";
    const PUBLIC_KEY = "otpqGbqIx5lkHczS0";

    const templateParams = {
      from_name: formData.name,
      user_email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        setLoading(false);
        setSuccess(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setSuccess(false), 5000);
      })
      .catch((err) => {
        setLoading(false);
        setError('Something went wrong. Please try again later.');
        console.error('EmailJS Error:', err);
      });
  };

  return (
    <section id="contact" className="py-28 px-6 max-w-7xl mx-auto border-t border-slate-900 relative">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side Info */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <span className="text-orange-500 font-bold text-xs uppercase tracking-widest block mb-3">GET IN TOUCH</span>
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              Let's Build Something <span className="text-orange-500">Legendary Together</span>
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Have a project in mind or want to scale your business? Drop us a message and our team will get back to you within 24 hours.
            </p>
          </div>

          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-4 text-slate-300">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-orange-500">
                <Phone size={20} />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-bold uppercase">Call Us</div>
                <div className="text-sm font-bold text-white">+91 (219) 555-0114</div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-slate-300">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-orange-500">
                <Mail size={20} />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-bold uppercase">Email Us</div>
                <div className="text-sm font-bold text-white">officialgrowzo@gmail.com</div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-slate-300">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-orange-500">
                <MapPin size={20} />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-bold uppercase">Location</div>
                <div className="text-sm font-bold text-white">123 Creative Street, New York, NY</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="lg:col-span-7 bg-slate-950/80 border border-slate-800/80 p-8 md:p-12 rounded-[36px] shadow-2xl backdrop-blur-xl">
          
          {success ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
              <p className="text-slate-400 text-sm max-w-sm mx-auto">
                Thank you for reaching out. We have received your message and will notify our team immediately.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-2xl font-black text-white mb-6">Send Us a Message</h3>

              {error && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold">
                  {error}
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe" 
                    className="w-full bg-slate-900 border border-slate-800 rounded-2xl px-5 py-4 text-sm text-white focus:outline-none focus:border-orange-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com" 
                    className="w-full bg-slate-900 border border-slate-800 rounded-2xl px-5 py-4 text-sm text-white focus:outline-none focus:border-orange-500 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210" 
                  className="w-full bg-slate-900 border border-slate-800 rounded-2xl px-5 py-4 text-sm text-white focus:outline-none focus:border-orange-500 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Project Details / Message</label>
                <textarea 
                  rows={4}
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project goals, timeline, or requirements..."
                  className="w-full bg-slate-900 border border-slate-800 rounded-2xl px-5 py-4 text-sm text-white focus:outline-none focus:border-orange-500 transition resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-orange-600 hover:bg-orange-500 disabled:bg-orange-600/50 text-white font-bold text-xs uppercase tracking-widest py-4 rounded-2xl transition shadow-xl shadow-orange-600/30 flex items-center justify-center gap-2 cursor-pointer"
              >
                {loading ? (
                  <>Sending Message <Loader2 size={16} className="animate-spin" /></>
                ) : (
                  <>Send Message <Send size={16} /></>
                )}
              </button>
            </form>
          )}

        </div>

      </div>
    </section>
  );
}
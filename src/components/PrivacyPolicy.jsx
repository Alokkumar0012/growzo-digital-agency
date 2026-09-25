import React from 'react';
import { Shield, X } from 'lucide-react';

export default function PrivacyPolicy({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="bg-slate-950 border border-slate-800 w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-[32px] p-6 md:p-10 shadow-2xl relative text-slate-300">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-white hover:bg-orange-600 transition"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="border-b border-slate-800 pb-6 mb-8 pr-12">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-3.5 py-1 rounded-full text-xs font-bold text-orange-400 uppercase tracking-widest mb-3">
            <Shield size={14} /> Legal Documentation
          </div>
          <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight">
            Privacy, Refund & Terms
          </h2>
          <p className="text-xs text-slate-500 mt-1">Growzo Digital Agency (https://growzo.agency) • Last updated: June 2026</p>
        </div>

        {/* Content Body */}
        <div className="space-y-8 text-xs md:text-sm text-slate-400 leading-relaxed">
          
          {/* 01. Privacy Policy */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white">01. Privacy Policy</h3>
            <p>
              Growzo Agency (“we,” “us,” “our”) operates https://growzo.agency (“Site”). We respect your privacy and are committed to protecting your personal data.
            </p>
            <h4 className="font-bold text-slate-200 pt-2">Information We Collect:</h4>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
              <li><strong className="text-white">Personal Data:</strong> Name, email, phone number, company name, billing address when you inquire or engage our services.</li>
              <li><strong className="text-white">Payment Data:</strong> Collected and processed securely via Razorpay; we do not store payment details on our servers.</li>
              <li><strong className="text-white">Usage Data:</strong> IP address, browser type, pages viewed, session duration, referral source, cookies for site analytics.</li>
              <li><strong className="text-white">Marketing Data:</strong> Newsletter subscription preferences, inquiry topics.</li>
            </ul>

            <h4 className="font-bold text-slate-200 pt-3">How We Use Your Information:</h4>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
              <li>To respond to service inquiries and deliver digital marketing and development services.</li>
              <li>To process payments and issue invoices.</li>
              <li>To send service updates, proposals, and marketing communications (you may opt out at any time).</li>
              <li>To improve our Site, services, and user experience through analytics.</li>
            </ul>

            <h4 className="font-bold text-slate-200 pt-3">Disclosure of Information:</h4>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
              <li><strong className="text-white">Service Providers:</strong> Razorpay (payment processing), analytics and email service providers.</li>
              <li><strong className="text-white">Affiliates & Partners:</strong> With your consent, to deliver co-branded services or placements.</li>
              <li><strong className="text-white">Legal Requirements:</strong> To comply with laws, legal processes, or protect rights and safety.</li>
            </ul>

            <h4 className="font-bold text-slate-200 pt-3">Data Security & Retention:</h4>
            <p>
              SSL encryption secures data in transit. Razorpay’s PCI-DSS compliance ensures secure payment data handling, with access limited to authorized personnel. We retain personal data only as long as necessary for legitimate business purposes or legal obligations.
            </p>

            <h4 className="font-bold text-slate-200 pt-3">Your Rights:</h4>
            <p>You have the right to access, correct, or delete your personal data, object to processing, request data portability, or lodge complaints. To exercise these rights, please contact us at: <span className="text-orange-400 font-bold">support@growzo.agency</span></p>
          </div>

          {/* 02. Refund & Cancellation Policy */}
          <div className="space-y-3 border-t border-slate-800/80 pt-6">
            <h3 className="text-lg font-bold text-white">02. Refund & Cancellation Policy</h3>
            <ul className="list-disc pl-5 space-y-2 text-slate-300">
              <li><strong className="text-white">Service Subscriptions & Monthly Retainers:</strong> Payments made for monthly services (such as Social Media Marketing, SEO, or PPC campaigns) are non-refundable once the billing cycle has started and initial strategy work has begun.</li>
              <li><strong className="text-white">Web & App Development Projects:</strong> Initial milestone deposits or advance payments are strictly non-refundable after design mockups, wireframes, or development architecture have been delivered or initiated.</li>
              <li><strong className="text-white">One-Time Digital Services & Add-Ons:</strong> Services like domain registration, hosting setup, or single design assets are non-refundable due to their immediate digital activation nature.</li>
            </ul>
          </div>

          {/* 03. Terms & Conditions */}
          <div className="space-y-4 border-t border-slate-800/80 pt-6">
            <h3 className="text-lg font-bold text-white">03. Terms & Conditions</h3>
            
            <div className="space-y-1.5">
              <h4 className="font-bold text-slate-200">Scope of Services</h4>
              <p>Growzo Agency provides digital and traditional advertising services, including SEO, social media, PPC, outdoor advertising, event marketing, and corporate branding.</p>
            </div>

            <div className="space-y-1.5">
              <h4 className="font-bold text-slate-200">Engagement & Fees</h4>
              <ul className="list-disc pl-5 space-y-1 text-slate-300">
                <li>A signed proposal and 50% upfront fee are required to commence work.</li>
                <li>Remaining 50% due upon project milestones or completion.</li>
                <li>All fees are non-tax inclusive unless specified.</li>
              </ul>
            </div>

            <div className="space-y-1.5">
              <h4 className="font-bold text-slate-200">Client Responsibilities</h4>
              <ul className="list-disc pl-5 space-y-1 text-slate-300">
                <li>Provide accurate information, timely feedback, and access to necessary assets.</li>
                <li>Approve creative materials promptly to avoid delays.</li>
                <li>Ensure compliance with applicable laws for content supplied by the client.</li>
              </ul>
            </div>

            <div className="space-y-1.5">
              <h4 className="font-bold text-slate-200">Intellectual Property</h4>
              <ul className="list-disc pl-5 space-y-1 text-slate-300">
                <li>We retain ownership of all creative work, deliverables, and methodologies until full payment.</li>
                <li>Upon full payment, deliverables are licensed to the client for internal business use.</li>
                <li>We reserve the right to showcase work in our portfolio and marketing.</li>
              </ul>
            </div>

            <div className="space-y-1.5">
              <h4 className="font-bold text-slate-200">Confidentiality</h4>
              <p>Both parties agree to maintain confidentiality of proprietary information, with exceptions for public domain information or required disclosures by law.</p>
            </div>

            <div className="space-y-1.5">
              <h4 className="font-bold text-slate-200">Warranties & Liability</h4>
              <ul className="list-disc pl-5 space-y-1 text-slate-300">
                <li>We warrant services will be performed professionally and in accordance with industry standards.</li>
                <li>We do not guarantee specific outcomes (e.g., sales numbers or rankings).</li>
                <li>Liability is limited to fees paid; we are not liable for indirect, incidental, or consequential damages.</li>
              </ul>
            </div>

            <div className="space-y-1.5">
              <h4 className="font-bold text-slate-200">Termination</h4>
              <ul className="list-disc pl-5 space-y-1 text-slate-300">
                <li>Either party may terminate with 30 days’ written notice.</li>
                <li>Client pays for work completed up to the termination date.</li>
                <li>Unused prepaid fees are refundable per our refund policy.</li>
              </ul>
            </div>

            <div className="space-y-1.5">
              <h4 className="font-bold text-slate-200">Governing Law & Dispute Resolution</h4>
              <p>Governed by the laws of India.</p>
            </div>
          </div>

        </div>

        {/* Footer Action */}
        <div className="mt-10 pt-6 border-t border-slate-800 flex justify-end">
          <button 
            onClick={onClose}
            className="bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded-xl transition shadow-lg shadow-orange-600/20"
          >
            Close & Return
          </button>
        </div>

      </div>
    </div>
  );
}
import Link from "next/link"
import { Check, Sparkles, Clock, Image as ImageIcon, MapPin, Phone, ArrowRight, Zap, Shield, Globe } from "lucide-react"

export const metadata = {
    title: "Pricing | Atoms Photography",
    description: "Transparent, all-inclusive photography pricing for portraits, weddings, commercial, and destination shoots.",
}

const PACKAGES = [
    {
        id: "portrait",
        name: "Portrait Session",
        tagline: "Authentic, editorial-style personal portraits.",
        price: 750,
        highlight: false,
        badge: null,
        duration: "2-Hour Session",
        locations: "Up to 2 Locations",
        photos: "45+ Hand-Retouched Images",
        includes: [
            "Pre-session style & location consultation",
            "High-resolution digital download gallery",
            "Private gallery active for 12 months",
            "Personal print & share license",
            "Delivery within 14 business days",
        ],
        color: "border-gray-100",
        btn: "bg-gray-50 text-gray-800 hover:bg-gray-100",
    },
    {
        id: "wedding",
        name: "Wedding Story",
        tagline: "Full documentary coverage of your most important day.",
        price: 2900,
        highlight: true,
        badge: "Most Popular",
        duration: "8 Hours Coverage",
        locations: "Ceremony + Reception",
        photos: "400+ Hand-Retouched Images",
        includes: [
            "Second professional photographer included",
            "Complimentary engagement portrait session",
            "Pre-wedding timeline & planning consultation",
            "48-hour sneak peek gallery",
            "Full gallery delivered within 6 weeks",
            "Commercial print license + USB delivery",
        ],
        color: "border-black ring-1 ring-black",
        btn: "bg-black text-white hover:bg-gray-800",
    },
    {
        id: "commercial",
        name: "Brand & Commercial",
        tagline: "Premium visual assets to elevate your brand identity.",
        price: 1500,
        highlight: false,
        badge: null,
        duration: "Half-Day Session",
        locations: "Studio or On-Location",
        photos: "80+ Professional Brand Assets",
        includes: [
            "Visual moodboard & concept development",
            "Commercial usage license across all media",
            "Lifestyle, product & detail photography",
            "Web-optimized + high-res versions",
            "Fast-track delivery in 10 business days",
        ],
        color: "border-gray-100",
        btn: "bg-gray-50 text-gray-800 hover:bg-gray-100",
    },
]

const ADD_ONS = [
    { icon: <Clock size={18} />, title: "Additional Hours", price: "$250/hr", desc: "Extend your coverage beyond the package time." },
    { icon: <ImageIcon size={18} />, title: "Rush Delivery", price: "+$300", desc: "Receive your full gallery within 7 business days." },
    { icon: <Globe size={18} />, title: "Destination Fee", price: "Varies", desc: "Travel & accommodation for shoots outside WA." },
    { icon: <Zap size={18} />, title: "Fine Art Prints", price: "From $75", desc: "Museum-quality archival prints in custom sizes." },
    { icon: <Shield size={18} />, title: "Raw Files License", price: "+$400", desc: "Full license to all unedited raw files." },
    { icon: <Phone size={18} />, title: "Video Highlights", price: "From $800", desc: "2–4 min cinematic highlight reel of your event." },
]

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-white pb-24">
            {/* Hero */}
            <div className="relative pt-16 pb-20 px-6 bg-gradient-to-b from-gray-50 to-white text-center">
                <div className="max-w-4xl mx-auto">
                    <span className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Investment & Packages</span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mt-3 mb-6 text-gray-900">
                        Simple, Honest Pricing
                    </h1>
                    <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
                        No hidden fees. No surprises. Just transparent pricing that lets you focus on the moments that matter.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6">

                {/* Value Propositions */}
                <div className="flex flex-wrap justify-center gap-8 mb-16 text-center">
                    {[
                        { icon: <Shield size={20} />, label: "No Hidden Fees" },
                        { icon: <Check size={20} />, label: "All-Inclusive Packages" },
                        { icon: <Zap size={20} />, label: "Fast Delivery" },
                        { icon: <Globe size={20} />, label: "Worldwide Travel" },
                    ].map((item) => (
                        <div key={item.label} className="flex items-center gap-2 text-sm font-medium text-gray-600">
                            <span className="text-black">{item.icon}</span>
                            {item.label}
                        </div>
                    ))}
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-24">
                    {PACKAGES.map((pkg) => (
                        <div
                            key={pkg.id}
                            className={`relative flex flex-col rounded-3xl border p-8 md:p-10 bg-white transition-all duration-300 hover:shadow-xl ${pkg.color} ${pkg.highlight ? "lg:-translate-y-3 shadow-xl" : ""}`}
                        >
                            {pkg.badge && (
                                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white px-5 py-1.5 rounded-full text-xs font-bold tracking-widest flex items-center gap-1.5 shadow-lg whitespace-nowrap">
                                    <Sparkles size={11} /> {pkg.badge}
                                </span>
                            )}

                            <div className="mb-7">
                                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-1">{pkg.name}</h2>
                                <p className="text-sm text-gray-400 font-light min-h-[40px]">{pkg.tagline}</p>
                                <div className="mt-6 flex items-baseline gap-2">
                                    <span className="text-5xl font-serif font-bold text-gray-900">
                                        ${pkg.price.toLocaleString()}
                                    </span>
                                    <span className="text-gray-400 text-sm font-light">/ package</span>
                                </div>
                            </div>

                            {/* Highlights */}
                            <div className="border-t border-gray-100 pt-6 mb-7 space-y-3 text-sm text-gray-500">
                                <div className="flex items-center gap-3"><Clock size={15} className="text-gray-400 shrink-0" /><span>{pkg.duration}</span></div>
                                <div className="flex items-center gap-3"><MapPin size={15} className="text-gray-400 shrink-0" /><span>{pkg.locations}</span></div>
                                <div className="flex items-center gap-3"><ImageIcon size={15} className="text-gray-400 shrink-0" /><span>{pkg.photos}</span></div>
                            </div>

                            {/* Includes */}
                            <div className="flex-1 space-y-3 mb-8">
                                <h4 className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">What's Included</h4>
                                {pkg.includes.map((item, i) => (
                                    <div key={i} className="flex items-start gap-3 text-sm text-gray-600">
                                        <Check size={15} className="text-black shrink-0 mt-0.5" />
                                        <span className="font-light leading-snug">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href="/contact"
                                className={`mt-auto block text-center py-3.5 rounded-xl font-semibold tracking-wide transition-colors ${pkg.btn}`}
                            >
                                Inquire About This Package
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Add-Ons */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Customize Your Experience</span>
                        <h2 className="text-3xl font-serif font-bold mt-2 text-gray-900">À La Carte Add-Ons</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {ADD_ONS.map((addon) => (
                            <div
                                key={addon.title}
                                className="group flex gap-4 p-6 border border-gray-100 rounded-2xl hover:border-gray-300 hover:shadow-md transition-all duration-300"
                            >
                                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 group-hover:bg-black group-hover:text-white transition-colors duration-300 shrink-0">
                                    {addon.icon}
                                </div>
                                <div>
                                    <div className="flex items-baseline justify-between gap-2 mb-1">
                                        <h3 className="font-bold text-gray-900">{addon.title}</h3>
                                        <span className="text-sm font-semibold text-black whitespace-nowrap">{addon.price}</span>
                                    </div>
                                    <p className="text-sm text-gray-400 font-light">{addon.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* FAQ Snippet */}
                <div className="max-w-3xl mx-auto mb-20">
                    <div className="text-center mb-10">
                        <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Common Questions</span>
                        <h2 className="text-3xl font-serif font-bold mt-2 text-gray-900">Pricing FAQs</h2>
                    </div>
                    <div className="space-y-5">
                        {[
                            { q: "Do you require a deposit?", a: "Yes — a 30% non-refundable retainer is required to secure your date, with the remaining balance due 30 days before the session." },
                            { q: "Do you offer payment plans?", a: "Absolutely. We offer flexible payment plans split into 2–4 installments at no extra cost. Just mention it during your inquiry." },
                            { q: "What's your rescheduling policy?", a: "Life happens. We allow one free reschedule with 30 days' notice. Rescheduling within 30 days incurs a $150 rescheduling fee." },
                            { q: "Are travel fees included in the pricing?", a: "Packages include travel within 50 miles of Seattle. Destination shoots beyond that are quoted separately and transparently." },
                        ].map((item) => (
                            <div key={item.q} className="border border-gray-100 rounded-2xl p-6">
                                <h4 className="font-bold text-gray-900 mb-2 font-serif">{item.q}</h4>
                                <p className="text-sm text-gray-500 font-light leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Link href="/faq" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-black transition-colors">
                            View All FAQs <ArrowRight size={15} />
                        </Link>
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-black text-white rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-700 via-black to-black opacity-80" />
                    <div className="relative z-10 max-w-xl mx-auto space-y-6">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold">Not Sure Which Package?</h2>
                        <p className="text-gray-400 font-light leading-relaxed">
                            Let's chat. Every project is different — we'll craft a custom quote that fits your vision and budget perfectly.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 pt-2">
                            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                                Get a Custom Quote <ArrowRight size={16} />
                            </Link>
                            <Link href="/portfolio" className="inline-flex items-center gap-2 border border-white/30 text-white hover:border-white px-8 py-3 rounded-full font-medium transition-colors">
                                View Our Work
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

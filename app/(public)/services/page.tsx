import Link from "next/link"
import { Check, Sparkles, Clock, Image as ImageIcon, MapPin } from "lucide-react"

const SERVICES = [
    {
        id: "portraits",
        title: "Fine-Art Portraits",
        price: "$750",
        tagline: "Tailored portraiture showcasing your authentic personality.",
        duration: "2 Hours Session",
        locations: "Up to 2 Locations",
        deliverables: "45+ Hand-Retouched Photos",
        features: [
            "Creative direction & pre-session styling guide",
            "High-resolution digital download gallery",
            "Private online gallery active for 1 year",
            "Personal printing rights license",
            "Delivery within 14 business days"
        ],
        popular: false
    },
    {
        id: "weddings",
        title: "Intimate Wedding Story",
        price: "$2,900",
        tagline: "Comprehensive documentary coverage of your special day.",
        duration: "8 Hours Coverage",
        locations: "Multiple Locations",
        deliverables: "400+ Hand-Retouched Photos",
        features: [
            "Secondary professional photographer",
            "Pre-wedding planning consultation & timeline help",
            "Complementary 1-hour engagement portrait session",
            "High-resolution digital downloads + print release",
            "Sneak peek gallery delivered within 48 hours",
            "Full gallery delivery within 6 weeks"
        ],
        popular: true
    },
    {
        id: "commercial",
        title: "Commercial & Branding",
        price: "$1,500",
        tagline: "Premium visual assets designed to elevate your brand identity.",
        duration: "Half-Day Session",
        locations: "Studio or Location",
        deliverables: "80+ Professional Brand Assets",
        features: [
            "Pre-shoot visual moodboard & concept development",
            "Commercial usage license for all media types",
            "Detailed lifestyle, detail, and product imagery",
            "High-resolution & web-optimized assets provided",
            "Fast-track delivery within 10 business days"
        ],
        popular: false
    }
]

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-white pb-24">
            {/* Header */}
            <div className="relative pt-12 pb-20 px-6 bg-gradient-to-b from-gray-50 to-white text-center">
                <div className="max-w-4xl mx-auto">
                    <span className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Investment & Packages</span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mt-3 mb-6 text-gray-900">
                        Services & Pricing
                    </h1>
                    <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
                        Transparent pricing options tailored to capture your milestones, brands, and love stories.
                    </p>
                </div>
            </div>

            {/* Packages Grid */}
            <div className="max-w-7xl mx-auto px-6 mb-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                    {SERVICES.map((pkg) => (
                        <div
                            key={pkg.id}
                            className={`flex flex-col relative rounded-3xl p-8 md:p-10 border transition-all duration-300 ${
                                pkg.popular
                                    ? "border-black shadow-xl ring-1 ring-black bg-white scale-102 lg:-translate-y-2"
                                    : "border-gray-100 hover:border-gray-300 hover:shadow-lg bg-white"
                            }`}
                        >
                            {pkg.popular && (
                                <span className="absolute top-0 right-8 -translate-y-1/2 bg-black text-white px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-widest flex items-center gap-1.5 shadow-md">
                                    <Sparkles size={12} /> Most Popular
                                </span>
                            )}

                            {/* Info */}
                            <div className="mb-8">
                                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">{pkg.title}</h3>
                                <p className="text-gray-400 font-light text-sm min-h-[40px]">{pkg.tagline}</p>
                                <div className="mt-6 flex items-baseline gap-1">
                                    <span className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-gray-900">{pkg.price}</span>
                                    <span className="text-gray-400 font-light text-sm">/ package</span>
                                </div>
                            </div>

                            {/* Highlights */}
                            <div className="border-t border-gray-100 pt-6 mb-8 space-y-3.5 text-sm text-gray-500">
                                <div className="flex items-center gap-3">
                                    <Clock size={16} className="text-gray-400" />
                                    <span>{pkg.duration}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MapPin size={16} className="text-gray-400" />
                                    <span>{pkg.locations}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <ImageIcon size={16} className="text-gray-400" />
                                    <span>{pkg.deliverables}</span>
                                </div>
                            </div>

                            {/* Inclusions */}
                            <div className="flex-1 space-y-3.5 mb-8">
                                <h4 className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-4">What's Included:</h4>
                                {pkg.features.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3 text-sm text-gray-600">
                                        <Check size={16} className="text-black shrink-0 mt-0.5" />
                                        <span className="font-light leading-snug">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Action */}
                            <div className="mt-auto pt-6 border-t border-gray-50">
                                <Link
                                    href="/contact"
                                    className={`block w-full text-center py-3.5 rounded-xl font-medium tracking-wide transition-colors ${
                                        pkg.popular
                                            ? "bg-black text-white hover:bg-gray-800"
                                            : "bg-gray-50 text-gray-800 hover:bg-gray-100"
                                    }`}
                                >
                                    Inquire Package
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Custom/Add-ons Footer */}
            <div className="max-w-4xl mx-auto px-6 text-center border-t border-gray-100 pt-16">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Looking for something custom?</h3>
                <p className="text-gray-500 font-light max-w-xl mx-auto leading-relaxed mb-8">
                    I offer customized packages for destination weddings, multi-day branding projects, prints, and studio rentals. Get in touch to discuss details.
                </p>
                <Link
                    href="/contact"
                    className="inline-flex bg-black text-white px-8 py-3.5 rounded-full font-medium hover:bg-gray-800 transition-colors shadow-lg"
                >
                    Request Custom Quote
                </Link>
            </div>
        </div>
    )
}

import Link from "next/link"
import { ArrowRight, Eye } from "lucide-react"

export const metadata = {
    title: "Portfolio | Atoms Photography",
    description: "Browse our curated portfolio of fine-art wedding, portrait, and commercial photography work.",
}

const CATEGORIES = ["All", "Weddings", "Portraits", "Commercial", "Editorial", "Travel"]

const PROJECTS = [
    {
        id: 1,
        title: "The Ellis Wedding",
        category: "Weddings",
        location: "Tuscany, Italy",
        year: "2024",
        description: "A golden-hour elopement through the rolling vineyards of Tuscany. Pure romance.",
        color: "bg-stone-200",
        accent: "from-stone-400",
    },
    {
        id: 2,
        title: "Mara — Artist Series",
        category: "Portraits",
        location: "Portland, OR",
        year: "2024",
        description: "Environmental portraits of painter Mara Collins in her sun-drenched studio.",
        color: "bg-amber-100",
        accent: "from-amber-300",
    },
    {
        id: 3,
        title: "Bloom Botanicals",
        category: "Commercial",
        location: "Seattle, WA",
        year: "2024",
        description: "Brand identity shoot for a sustainable floral design studio.",
        color: "bg-emerald-100",
        accent: "from-emerald-300",
    },
    {
        id: 4,
        title: "The Harmon Ceremony",
        category: "Weddings",
        location: "Olympic Peninsula, WA",
        year: "2023",
        description: "An intimate forest ceremony with cathedral ferns and soft morning mist.",
        color: "bg-slate-200",
        accent: "from-slate-400",
    },
    {
        id: 5,
        title: "Vogue — Summer Feature",
        category: "Editorial",
        location: "New York, NY",
        year: "2023",
        description: "Editorial fashion spread celebrating emerging sustainable designers.",
        color: "bg-rose-100",
        accent: "from-rose-300",
    },
    {
        id: 6,
        title: "Patagonia Basecamp",
        category: "Travel",
        location: "Torres del Paine, Chile",
        year: "2023",
        description: "Documentary landscape series for Patagonia's basecamp collection.",
        color: "bg-sky-100",
        accent: "from-sky-300",
    },
    {
        id: 7,
        title: "The Laurent Family",
        category: "Portraits",
        location: "San Juan Islands, WA",
        year: "2023",
        description: "Multi-generational family portraits set against coastal driftwood and tide pools.",
        color: "bg-teal-100",
        accent: "from-teal-300",
    },
    {
        id: 8,
        title: "Atelier Noir — Rebrand",
        category: "Commercial",
        location: "Los Angeles, CA",
        year: "2022",
        description: "Complete visual rebrand for a high-end sustainable fashion label.",
        color: "bg-neutral-200",
        accent: "from-neutral-400",
    },
    {
        id: 9,
        title: "The Yamamoto Wedding",
        category: "Weddings",
        location: "Kyoto, Japan",
        year: "2022",
        description: "A traditional Shinto ceremony blended with contemporary fine-art imagery.",
        color: "bg-pink-100",
        accent: "from-pink-300",
    },
]

export default function PortfolioPage() {
    return (
        <div className="min-h-screen bg-white pb-24">
            {/* Hero */}
            <div className="relative pt-16 pb-20 px-6 bg-gradient-to-b from-gray-50 to-white text-center">
                <div className="max-w-4xl mx-auto">
                    <span className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Selected Work</span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mt-3 mb-6 text-gray-900">
                        Our Portfolio
                    </h1>
                    <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
                        A curated collection of our finest work — from intimate elopements to international editorials.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6">

                {/* Category Filter (visual only — no JS filter needed for SSR) */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {CATEGORIES.map((cat, i) => (
                        <span
                            key={cat}
                            className={`px-5 py-2 rounded-full text-xs font-semibold tracking-widest border transition-all cursor-pointer ${i === 0
                                ? "bg-black text-white border-black"
                                : "border-gray-200 text-gray-500 hover:border-gray-400 hover:text-black"
                                }`}
                        >
                            {cat.toUpperCase()}
                        </span>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {PROJECTS.map((project) => (
                        <div
                            key={project.id}
                            className="group relative rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-500 cursor-pointer"
                        >
                            {/* Image placeholder with gradient */}
                            <div className={`relative ${project.color} aspect-[4/3] overflow-hidden`}>
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} to-transparent opacity-40`} />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <Eye size={22} className="text-white" />
                                    </div>
                                </div>
                                {/* Year badge */}
                                <span className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm text-gray-700 text-xs font-semibold tracking-widest px-3 py-1 rounded-full">
                                    {project.year}
                                </span>
                                {/* Category badge */}
                                <span className="absolute top-4 right-4 bg-black/70 text-white text-xs font-semibold tracking-wider px-3 py-1 rounded-full">
                                    {project.category}
                                </span>
                            </div>

                            {/* Info */}
                            <div className="p-6 bg-white">
                                <div className="flex items-start justify-between gap-2">
                                    <div>
                                        <h3 className="text-lg font-serif font-bold text-gray-900 mb-1 group-hover:text-black transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-xs text-gray-400 font-medium tracking-wider mb-3">📍 {project.location}</p>
                                        <p className="text-sm text-gray-500 font-light leading-relaxed">{project.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats Bar */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-12 px-8 bg-gray-50 rounded-2xl mb-20 text-center">
                    {[
                        { num: "9+", label: "Countries Visited" },
                        { num: "150+", label: "Projects Completed" },
                        { num: "20+", label: "Awards & Features" },
                        { num: "8", label: "Years of Excellence" },
                    ].map((stat) => (
                        <div key={stat.label}>
                            <div className="text-4xl font-serif font-bold text-black mb-1">{stat.num}</div>
                            <div className="text-xs uppercase tracking-widest text-gray-400 font-semibold">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="bg-black text-white rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gray-700 via-black to-black opacity-80" />
                    <div className="relative z-10 max-w-xl mx-auto space-y-6">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold">
                            Ready to Start Your Story?
                        </h2>
                        <p className="text-gray-400 font-light leading-relaxed">
                            Let's collaborate to create images that will outlast trends and live forever in your memory.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 pt-2">
                            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                                Book a Session <ArrowRight size={16} />
                            </Link>
                            <Link href="/services" className="inline-flex items-center gap-2 border border-white/30 text-white hover:border-white px-8 py-3 rounded-full font-medium transition-colors">
                                View Packages
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

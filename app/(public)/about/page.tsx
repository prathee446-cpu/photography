import Image from "next/image"
import Link from "next/link"
import { Camera, Heart, Award, Sparkles, Star, Aperture, Globe, BookOpen, Instagram, Twitter, Mail, ArrowRight } from "lucide-react"

export const metadata = {
    title: "About | Atoms Photography",
    description: "Meet Arthur Atoms — fine-art wedding, portrait, and commercial photographer based in the Pacific Northwest.",
}

const GEAR = [
    { category: "Cameras", items: ["Sony A7R V", "Contax 645 (Film)", "Canon EOS R5"] },
    { category: "Lenses", items: ["Sony 35mm f/1.4 GM", "Sony 85mm f/1.4 GM", "Sony 24-70mm f/2.8 GM II"] },
    { category: "Film Stocks", items: ["Kodak Portra 400", "Fuji Pro 400H", "Ilford HP5 Plus"] },
    { category: "Editing", items: ["Adobe Lightroom Classic", "Capture One Pro", "Adobe Photoshop"] },
]

const AWARDS = [
    { year: "2024", title: "Top 10 Wedding Photographers", org: "Junebug Weddings" },
    { year: "2024", title: "Best Fine-Art Portrait", org: "International Photography Awards" },
    { year: "2023", title: "Editor's Choice", org: "Vogue Weddings" },
    { year: "2023", title: "Rising Star Award", org: "WPJA — Wedding Photojournalist Association" },
    { year: "2022", title: "Featured Photographer", org: "Style Me Pretty" },
    { year: "2022", title: "Top Emerging Talent", org: "Pacific Northwest Magazine" },
]

const PRESS = [
    { name: "Vogue", issue: "Summer 2023 Issue" },
    { name: "Harper's Bazaar", issue: "Real Weddings Feature" },
    { name: "The Knot", issue: "Best of Weddings 2023" },
    { name: "Martha Stewart Weddings", issue: "Destination Elopements" },
    { name: "Style Me Pretty", issue: "Tuscan Wedding Story" },
    { name: "Green Wedding Shoes", issue: "Pacific NW Ceremonies" },
]

const TEAM = [
    {
        name: "Arthur Atoms",
        role: "Lead Photographer & Creative Director",
        bio: "10+ years capturing love, light, and life's most defining moments across 20+ countries.",
        initials: "AA",
    },
    {
        name: "Lena Caldwell",
        role: "Second Photographer",
        bio: "Specializing in candid moments and detail shots that tell the complete story of your day.",
        initials: "LC",
    },
    {
        name: "Marco Reyes",
        role: "Photo Editor & Retoucher",
        bio: "The quiet craftsman behind every perfectly-toned, hand-edited image we deliver.",
        initials: "MR",
    },
]

const REVIEWS_SNIPPET = [
    {
        name: "Sophie & James",
        event: "Wedding — Tuscany, Italy",
        quote: "Arthur saw things we didn't even notice ourselves. Every photo is a tiny miracle.",
        stars: 5,
    },
    {
        name: "Elena Navarro",
        event: "Editorial Portrait",
        quote: "I've worked with many photographers, but Arthur made me feel truly seen. Unreal talent.",
        stars: 5,
    },
    {
        name: "Bloom Botanicals",
        event: "Commercial Brand Shoot",
        quote: "Our website traffic doubled after the rebrand. The photos tell exactly who we are.",
        stars: 5,
    },
]

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white pb-24">
            {/* Hero Section */}
            <div className="relative pt-12 pb-20 px-6 bg-gradient-to-b from-gray-50 to-white text-center">
                <div className="max-w-4xl mx-auto">
                    <span className="text-sm font-semibold tracking-widest text-gray-400 uppercase">The Creative Behind the Lens</span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mt-3 mb-6 text-gray-900">
                        Arthur Atoms
                    </h1>
                    <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
                        Documenting the raw emotion, natural light, and quiet connections that shape our lives.
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6">

                {/* ── Profile Grid ── */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
                    <div className="lg:col-span-5 relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-2xl bg-gray-100 group">
                        <Image
                            src="/images/photographer.png"
                            alt="Arthur Atoms Portrait"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/0" />
                    </div>

                    <div className="lg:col-span-7 space-y-6">
                        <h2 className="text-3xl font-serif font-bold text-gray-900">
                            An Editorial Approach to Real Life
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-lg font-light">
                            My journey with photography began over a decade ago. Captivated by the interplay of shadow and soft ambient light, I started documenting couples, weddings, and raw portraits. I believe that every love story and milestone deserves to be told with authenticity and grace.
                        </p>
                        <p className="text-gray-600 leading-relaxed text-lg font-light">
                            Rather than focusing on rigid, hyper-posed shots, I look for the unscripted moments — the quiet glance before the vows, the head-back laughter of family, and the warm, golden sun setting behind the trees.
                        </p>
                        <p className="text-gray-600 leading-relaxed text-lg font-light">
                            Based in the Pacific Northwest but traveling worldwide, I'm dedicated to providing my clients with stunning, timeless visuals that serve as a gateway to their most cherished memories.
                        </p>

                        {/* Social links */}
                        <div className="flex items-center gap-5 pt-2">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-500 font-medium hover:text-black transition-colors">
                                <Instagram size={18} /> @atomsphotography
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-500 font-medium hover:text-black transition-colors">
                                <Twitter size={18} /> @atoms_photo
                            </a>
                            <a href="mailto:hello@atomsphotography.com" className="flex items-center gap-2 text-sm text-gray-500 font-medium hover:text-black transition-colors">
                                <Mail size={18} /> Email
                            </a>
                        </div>
                    </div>
                </div>

                {/* ── Stats Grid ── */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-y border-gray-100 mb-24 bg-gray-50/50 rounded-2xl px-6 md:px-12 text-center">
                    <div>
                        <div className="text-4xl md:text-5xl font-serif font-bold text-black mb-1">8+</div>
                        <div className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Years Experience</div>
                    </div>
                    <div>
                        <div className="text-4xl md:text-5xl font-serif font-bold text-black mb-1">150+</div>
                        <div className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Stories Told</div>
                    </div>
                    <div>
                        <div className="text-4xl md:text-5xl font-serif font-bold text-black mb-1">20+</div>
                        <div className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Awards Won</div>
                    </div>
                    <div>
                        <div className="text-4xl md:text-5xl font-serif font-bold text-black mb-1">100%</div>
                        <div className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Happy Clients</div>
                    </div>
                </div>

                {/* ── Creative Philosophy ── */}
                <div className="mb-24">
                    <div className="text-center mb-16">
                        <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold">My Philosophy</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 text-gray-900">How I Work</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="p-8 rounded-2xl bg-white border border-gray-100 hover:border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md group">
                            <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-6 text-gray-700 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                                <Heart size={20} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 font-serif text-gray-900">Unscripted Connection</h3>
                            <p className="text-gray-500 font-light leading-relaxed">
                                Rigid poses breed awkward photos. I guide you naturally so we can capture the genuine laughter, raw emotion, and true connection.
                            </p>
                        </div>

                        <div className="p-8 rounded-2xl bg-white border border-gray-100 hover:border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md group">
                            <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-6 text-gray-700 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                                <Camera size={20} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 font-serif text-gray-900">Natural & Fine-Art Light</h3>
                            <p className="text-gray-500 font-light leading-relaxed">
                                Light is my primary medium. Whether chasing the warm glow of golden hour or framing moody window shadows, I edit with a clean, cinematic aesthetic.
                            </p>
                        </div>

                        <div className="p-8 rounded-2xl bg-white border border-gray-100 hover:border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md group">
                            <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-6 text-gray-700 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                                <Award size={20} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 font-serif text-gray-900">Curated Delivery</h3>
                            <p className="text-gray-500 font-light leading-relaxed">
                                Quality over quantity. Each image in your gallery is individually hand-edited to ensure rich colors, crisp detail, and archival permanence.
                            </p>
                        </div>
                    </div>
                </div>

                {/* ── Timeline / Journey ── */}
                <div className="mb-24 max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold">The Journey</span>
                        <h2 className="text-3xl font-serif font-bold mt-2 text-gray-900">Milestones</h2>
                    </div>

                    <div className="relative border-l border-gray-100 pl-8 space-y-12">
                        {[
                            { year: "2016 — The Catalyst", title: "Bought First Film Camera", desc: "Discovered the magic of dynamic range and manual focusing. Began shooting street photography and environmental portraits.", accent: true },
                            { year: "2018 — Going Digital", title: "Transitioned to Sony Full-Frame", desc: "Adopted Sony A7 III and began blending film aesthetics with digital precision, developing a signature airy and warm editing style.", accent: false },
                            { year: "2019 — Professional Step", title: "Launched Atoms Photography", desc: "Transitioned into professional portraiture and intimate local weddings, immediately booking out 6 months in advance.", accent: false },
                            { year: "2021 — Global Reach", title: "First Destination Wedding", desc: "Flew to Greece for an Santorini cliffside elopement — the first of many international shoots that now span 20+ countries.", accent: false },
                            { year: "2022 — Recognition", title: "Featured in Editorial Journals", desc: "Named as one of the top emerging fine-art wedding photographers in the region. Work published in Vogue and Style Me Pretty.", accent: false },
                            { year: "2024 — Today", title: "Fully Booked, Always Grateful", desc: "Now fully booked through 2025, leading a small team of dedicated photographers and editors committed to world-class imagery.", accent: false },
                        ].map((item) => (
                            <div key={item.year} className="relative">
                                <div className={`absolute -left-[41px] top-1.5 w-6 h-6 rounded-full flex items-center justify-center ${item.accent ? "bg-white border-2 border-black" : "bg-white border-2 border-gray-300"}`}>
                                    <div className={`w-2 h-2 rounded-full ${item.accent ? "bg-black" : "bg-gray-300"}`} />
                                </div>
                                <span className="text-sm font-bold text-gray-400">{item.year}</span>
                                <h4 className="text-lg font-serif font-bold text-gray-900 mt-1">{item.title}</h4>
                                <p className="text-gray-500 font-light mt-1">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── The Team ── */}
                <div className="mb-24">
                    <div className="text-center mb-14">
                        <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold">The People</span>
                        <h2 className="text-3xl font-serif font-bold mt-2 text-gray-900">Meet the Team</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {TEAM.map((member) => (
                            <div key={member.name} className="text-center group">
                                <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-5 text-2xl font-serif font-bold text-gray-500 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                                    {member.initials}
                                </div>
                                <h3 className="text-xl font-serif font-bold text-gray-900 mb-1">{member.name}</h3>
                                <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">{member.role}</p>
                                <p className="text-sm text-gray-500 font-light leading-relaxed max-w-xs mx-auto">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Gear & Equipment ── */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Tools of the Trade</span>
                        <h2 className="text-3xl font-serif font-bold mt-2 text-gray-900">Camera Bag</h2>
                        <p className="text-gray-500 font-light mt-3 max-w-lg mx-auto">The gear I trust to capture your most important moments — both digital and film.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {GEAR.map((g) => (
                            <div key={g.category} className="border border-gray-100 rounded-2xl p-6 hover:border-gray-200 hover:shadow-md transition-all duration-300 group">
                                <div className="flex items-center gap-2 mb-4">
                                    <Aperture size={18} className="text-gray-400 group-hover:text-black transition-colors" />
                                    <h3 className="font-bold text-gray-900 text-sm uppercase tracking-widest">{g.category}</h3>
                                </div>
                                <ul className="space-y-2">
                                    {g.items.map((item) => (
                                        <li key={item} className="text-sm text-gray-500 font-light flex items-start gap-2">
                                            <span className="text-gray-300 mt-1">—</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Awards ── */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Recognition</span>
                        <h2 className="text-3xl font-serif font-bold mt-2 text-gray-900">Awards & Honors</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {AWARDS.map((award) => (
                            <div key={award.title} className="flex items-center gap-5 p-5 border border-gray-100 rounded-2xl hover:border-gray-200 hover:shadow-sm transition-all group">
                                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0 group-hover:bg-black transition-colors duration-300">
                                    <Award size={18} className="text-gray-500 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-gray-900 text-sm">{award.title}</h4>
                                    <p className="text-xs text-gray-400 font-medium">{award.org}</p>
                                </div>
                                <span className="text-xs font-bold text-gray-300 tracking-widest shrink-0">{award.year}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Press & Features ── */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold">As Seen In</span>
                        <h2 className="text-3xl font-serif font-bold mt-2 text-gray-900">Press & Publications</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {PRESS.map((pub) => (
                            <div key={pub.name} className="group border border-gray-100 rounded-2xl p-5 text-center hover:border-gray-300 hover:shadow-md transition-all cursor-pointer">
                                <div className="flex items-center justify-center mb-2">
                                    <BookOpen size={20} className="text-gray-300 group-hover:text-black transition-colors duration-300" />
                                </div>
                                <div className="font-bold text-gray-900 text-sm mb-1">{pub.name}</div>
                                <div className="text-xs text-gray-400 font-light">{pub.issue}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Client Reviews Snippet ── */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold">What Clients Say</span>
                        <h2 className="text-3xl font-serif font-bold mt-2 text-gray-900">Kind Words</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {REVIEWS_SNIPPET.map((rev) => (
                            <div key={rev.name} className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all">
                                <div className="flex gap-0.5 mb-4">
                                    {Array.from({ length: rev.stars }).map((_, i) => (
                                        <Star key={i} size={14} className="fill-black text-black" />
                                    ))}
                                </div>
                                <p className="text-gray-700 font-light italic leading-relaxed mb-5 text-sm">"{rev.quote}"</p>
                                <div>
                                    <div className="font-bold text-gray-900 text-sm">{rev.name}</div>
                                    <div className="text-xs text-gray-400 font-medium">{rev.event}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Link href="/testimonials" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-black transition-colors">
                            Read All Reviews <ArrowRight size={15} />
                        </Link>
                    </div>
                </div>

                {/* ── Travel & Global Work ── */}
                <div className="mb-24 bg-gray-50 rounded-3xl p-10 md:p-14 border border-gray-100">
                    <div className="text-center mb-10">
                        <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Worldwide</span>
                        <h2 className="text-3xl font-serif font-bold mt-2 text-gray-900">Available for Travel</h2>
                        <p className="text-gray-500 font-light mt-3 max-w-lg mx-auto">Based in Seattle, WA — but always ready to pack the camera bag and go wherever your story takes us.</p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-center">
                        {["Italy", "Japan", "France", "Iceland", "Mexico", "Greece", "Chile", "Portugal", "Canada", "Australia"].map((country) => (
                            <div key={country} className="flex items-center justify-center gap-1.5 py-3 px-4 bg-white border border-gray-100 rounded-xl text-sm text-gray-600 font-medium hover:border-gray-300 transition-colors">
                                <Globe size={13} className="text-gray-400" /> {country}
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Call to Action ── */}
                <div className="bg-black text-white rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-800 via-black to-black opacity-80" />
                    <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                        <Sparkles className="mx-auto text-gray-400" size={32} />
                        <h2 className="text-3xl md:text-5xl font-serif font-bold">
                            Let's Tell Your Story Together
                        </h2>
                        <p className="text-gray-400 font-light md:text-lg leading-relaxed">
                            Whether you're planning a mountain-top elopement or require detailed editorial portraits, I am here to preserve your moments.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 pt-4">
                            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                                Get in Touch <ArrowRight size={16} />
                            </Link>
                            <Link href="/portfolio" className="border border-white/30 text-white hover:border-white px-8 py-3 rounded-full font-medium transition-colors">
                                View Portfolio
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

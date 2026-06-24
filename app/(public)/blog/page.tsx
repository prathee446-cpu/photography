import Link from "next/link"
import { ArrowRight, Clock, Tag } from "lucide-react"

export const metadata = {
    title: "Blog | Atoms Photography",
    description: "Photography tips, behind-the-scenes stories, destination guides, and inspiration from Arthur Atoms.",
}

const FEATURED_POST = {
    id: "golden-hour-guide",
    title: "The Complete Guide to Golden Hour Photography",
    excerpt: "Golden hour is one of nature's most generous gifts to photographers. In this in-depth guide, I share everything I've learned chasing that perfect warm light — from timing and location scouting to camera settings and editing techniques.",
    category: "Education",
    date: "June 12, 2024",
    readTime: "9 min read",
    color: "bg-amber-50",
    accent: "from-amber-200 to-orange-100",
}

const POSTS = [
    {
        id: "tuscany-elopement",
        title: "Eloping in Tuscany: Everything You Need to Know",
        excerpt: "From legal paperwork to hidden vineyard venues, here's my complete guide to planning the perfect Tuscany elopement.",
        category: "Destination Guide",
        date: "May 28, 2024",
        readTime: "7 min read",
        color: "bg-stone-100",
        accent: "from-stone-200",
    },
    {
        id: "film-vs-digital",
        title: "Film vs. Digital: Why I Still Shoot Film in 2024",
        excerpt: "In a world of 60-megapixel sensors, I still reach for my Contax 645 for certain shoots. Here's exactly why.",
        category: "Behind the Lens",
        date: "April 15, 2024",
        readTime: "6 min read",
        color: "bg-slate-100",
        accent: "from-slate-200",
    },
    {
        id: "what-to-wear",
        title: "What to Wear for Your Portrait Session",
        excerpt: "Color, fit, and coordination advice that will make your photos look polished and timeless — without looking overdressed.",
        category: "Client Tips",
        date: "March 30, 2024",
        readTime: "5 min read",
        color: "bg-rose-50",
        accent: "from-rose-100",
    },
    {
        id: "forest-ceremony",
        title: "Planning a Forest Wedding: Our Olympic Peninsula Shoot",
        excerpt: "Cathedral ferns, morning mist, and no cell service. A behind-the-scenes look at one of our most magical shoots.",
        category: "Behind the Lens",
        date: "March 1, 2024",
        readTime: "8 min read",
        color: "bg-emerald-50",
        accent: "from-emerald-100",
    },
    {
        id: "branding-photography",
        title: "Why Every Small Business Needs Professional Photography",
        excerpt: "Great photos are no longer a luxury — they're the difference between a scroll-past and a click. Here's the ROI breakdown.",
        category: "Business & Brand",
        date: "Feb 14, 2024",
        readTime: "5 min read",
        color: "bg-sky-50",
        accent: "from-sky-100",
    },
    {
        id: "preset-workflow",
        title: "Inside My Editing Workflow: From RAW to Refined",
        excerpt: "A step-by-step look at how I take a raw file and develop it into the airy, cinematic look that defines Atoms Photography.",
        category: "Education",
        date: "Jan 20, 2024",
        readTime: "10 min read",
        color: "bg-violet-50",
        accent: "from-violet-100",
    },
]

const CATEGORIES = ["All", "Education", "Behind the Lens", "Client Tips", "Destination Guide", "Business & Brand"]

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-white pb-24">
            {/* Hero */}
            <div className="relative pt-16 pb-20 px-6 bg-gradient-to-b from-gray-50 to-white text-center">
                <div className="max-w-4xl mx-auto">
                    <span className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Stories & Inspiration</span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mt-3 mb-6 text-gray-900">
                        The Journal
                    </h1>
                    <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
                        Behind-the-scenes stories, photography education, destination guides, and creative inspiration — all from the Atoms lens.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6">

                {/* Category Pills */}
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

                {/* Featured Post */}
                <div className="mb-16">
                    <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-6 block">Featured Post</span>
                    <div className={`group rounded-3xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-500 cursor-pointer grid grid-cols-1 lg:grid-cols-2`}>
                        {/* Visual Placeholder */}
                        <div className={`relative ${FEATURED_POST.color} aspect-video lg:aspect-auto min-h-[280px] overflow-hidden`}>
                            <div className={`absolute inset-0 bg-gradient-to-br ${FEATURED_POST.accent} opacity-60`} />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-6xl font-serif font-bold text-white/20 select-none">✦</div>
                            </div>
                            <span className="absolute top-6 left-6 bg-black text-white text-xs font-bold tracking-widest px-4 py-1.5 rounded-full">
                                {FEATURED_POST.category.toUpperCase()}
                            </span>
                        </div>

                        {/* Content */}
                        <div className="p-8 md:p-12 bg-white flex flex-col justify-center">
                            <div className="flex items-center gap-4 text-xs text-gray-400 font-medium mb-4">
                                <span className="flex items-center gap-1.5"><Clock size={13} /> {FEATURED_POST.readTime}</span>
                                <span>{FEATURED_POST.date}</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4 leading-snug group-hover:text-black transition-colors">
                                {FEATURED_POST.title}
                            </h2>
                            <p className="text-gray-500 font-light leading-relaxed mb-6">
                                {FEATURED_POST.excerpt}
                            </p>
                            <div className="inline-flex items-center gap-2 text-sm font-semibold text-black group-hover:gap-3 transition-all">
                                Read Article <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Post Grid */}
                <div className="mb-20">
                    <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-6 block">Recent Posts</span>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {POSTS.map((post) => (
                            <article
                                key={post.id}
                                className="group rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-400 cursor-pointer"
                            >
                                {/* Card Visual */}
                                <div className={`relative ${post.color} aspect-video overflow-hidden`}>
                                    <div className={`absolute inset-0 bg-gradient-to-br ${post.accent} to-transparent opacity-70`} />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-4xl font-serif font-bold text-white/20 select-none">✦</div>
                                    </div>
                                </div>

                                {/* Card Content */}
                                <div className="p-6 bg-white">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Tag size={12} className="text-gray-400" />
                                        <span className="text-xs font-semibold tracking-wider text-gray-400 uppercase">{post.category}</span>
                                    </div>
                                    <h3 className="text-lg font-serif font-bold text-gray-900 mb-2 leading-snug group-hover:text-black transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 font-light leading-relaxed mb-4">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between text-xs text-gray-400 font-medium pt-4 border-t border-gray-50">
                                        <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                                        <span>{post.date}</span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="bg-gray-50 rounded-3xl p-10 md:p-16 text-center mb-20 border border-gray-100">
                    <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Stay Inspired</span>
                    <h2 className="text-3xl font-serif font-bold mt-2 mb-4 text-gray-900">Subscribe to the Journal</h2>
                    <p className="text-gray-500 font-light max-w-lg mx-auto mb-8 leading-relaxed">
                        Get new articles, behind-the-scenes stories, and exclusive photography tips delivered straight to your inbox — no spam, ever.
                    </p>
                    <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="flex-1 px-5 py-3 rounded-full border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                        />
                        <button
                            type="submit"
                            className="bg-black text-white px-7 py-3 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors whitespace-nowrap"
                        >
                            Subscribe Free
                        </button>
                    </form>
                </div>

                {/* CTA */}
                <div className="bg-black text-white rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-black to-black opacity-80" />
                    <div className="relative z-10 max-w-xl mx-auto space-y-6">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold">Ready to Create Something Beautiful?</h2>
                        <p className="text-gray-400 font-light leading-relaxed">
                            From reading about photography to living it — let's make your next session unforgettable.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 pt-2">
                            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                                Book a Session <ArrowRight size={16} />
                            </Link>
                            <Link href="/portfolio" className="inline-flex items-center gap-2 border border-white/30 text-white hover:border-white px-8 py-3 rounded-full font-medium transition-colors">
                                View Portfolio
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

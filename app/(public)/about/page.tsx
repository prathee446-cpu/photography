import Image from "next/image"
import Link from "next/link"
import { Camera, Heart, Award, Sparkles } from "lucide-react"

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
                {/* Profile Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
                    {/* Portrait Image wrapper */}
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

                    {/* Bio Text */}
                    <div className="lg:col-span-7 space-y-6">
                        <h2 className="text-3xl font-serif font-bold text-gray-900">
                            An Editorial Approach to Real Life
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-lg font-light">
                            My journey with photography began over a decade ago. Captivated by the interplay of shadow and soft ambient light, I started documenting couples, weddings, and raw portraits. I believe that every love story and milestone deserves to be told with authenticity and grace.
                        </p>
                        <p className="text-gray-600 leading-relaxed text-lg font-light">
                            Rather than focusing on rigid, hyper-posed shots, I look for the unscripted moments—the quiet glance before the vows, the head-back laughter of family, and the warm, golden sun setting behind the trees.
                        </p>
                        <p className="text-gray-600 leading-relaxed text-lg font-light">
                            Based in the Pacific Northwest but traveling worldwide, I’m dedicated to providing my clients with stunning, timeless visuals that serve as a gateway to their most cherished memories. Let's create something beautiful together.
                        </p>
                    </div>
                </div>

                {/* Stats Grid */}
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

                {/* Creative Philosophy */}
                <div className="mb-24">
                    <div className="text-center mb-16">
                        <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold">My Philosophy</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 text-gray-900">How I Work</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {/* Point 1 */}
                        <div className="p-8 rounded-2xl bg-white border border-gray-100 hover:border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md group">
                            <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-6 text-gray-700 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                                <Heart size={20} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 font-serif text-gray-900">Unscripted Connection</h3>
                            <p className="text-gray-500 font-light leading-relaxed">
                                Rigid poses breed awkward photos. I guide you naturally so we can capture the genuine laughter, raw emotion, and true connection.
                            </p>
                        </div>

                        {/* Point 2 */}
                        <div className="p-8 rounded-2xl bg-white border border-gray-100 hover:border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md group">
                            <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-6 text-gray-700 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                                <Camera size={20} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 font-serif text-gray-900">Natural & Fine-Art Light</h3>
                            <p className="text-gray-500 font-light leading-relaxed">
                                Light is my primary medium. Whether chasing the warm glow of golden hour or framing moody window shadows, I edit with a clean, cinematic aesthetic.
                            </p>
                        </div>

                        {/* Point 3 */}
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

                {/* Timeline / Journey */}
                <div className="mb-24 max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold">The Journey</span>
                        <h2 className="text-3xl font-serif font-bold mt-2 text-gray-900">Milestones</h2>
                    </div>

                    <div className="relative border-l border-gray-100 pl-8 space-y-12">
                        <div className="relative">
                            <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-white border-2 border-black flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-black" />
                            </div>
                            <span className="text-sm font-bold text-gray-400">2016 — The Catalyst</span>
                            <h4 className="text-lg font-serif font-bold text-gray-900 mt-1">Bought First Film Camera</h4>
                            <p className="text-gray-500 font-light mt-1">
                                Discovered the magic of dynamic range and manual focusing. Began shooting street photography and environmental portraits.
                            </p>
                        </div>

                        <div className="relative">
                            <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-gray-300" />
                            </div>
                            <span className="text-sm font-bold text-gray-400">2019 — Professional Step</span>
                            <h4 className="text-lg font-serif font-bold text-gray-900 mt-1">Launched Atoms Photography</h4>
                            <p className="text-gray-500 font-light mt-1">
                                Transitioned into professional portraiture and intimate local weddings, crafting a signature airy and warm style.
                            </p>
                        </div>

                        <div className="relative">
                            <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-gray-300" />
                            </div>
                            <span className="text-sm font-bold text-gray-400">2022 — Recognition</span>
                            <h4 className="text-lg font-serif font-bold text-gray-900 mt-1">Featured in Editorial Journals</h4>
                            <p className="text-gray-500 font-light mt-1">
                                Named as one of the top emerging fine-art wedding photographers in the region. Expanded service to international destinations.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
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
                        <div className="flex justify-center gap-4 pt-4">
                            <Link href="/contact" className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors shadow-lg">
                                Get in Touch
                            </Link>
                            <Link href="/gallery" className="border border-white/30 text-white hover:border-white px-8 py-3 rounded-full font-medium transition-colors">
                                View Portfolio
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


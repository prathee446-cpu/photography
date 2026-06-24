import Link from "next/link"
import { Star, MessageSquare, Quote, Sparkles } from "lucide-react"

const TESTIMONIALS = [
    {
        id: 1,
        name: "Charlotte & Noah",
        role: "Wedding Couple",
        event: "Wedding in Portland, OR",
        rating: 5,
        title: "Absolutely breathtaking results!",
        quote: "Arthur did an incredible job capturing our wedding day. He has this unique ability to fade into the background while documentating the most genuine, emotional moments. The final gallery brought us to tears. We couldn't have asked for a better storyteller.",
        date: "September 2025"
    },
    {
        id: 2,
        name: "Marcus & Lily",
        role: "Couples Portrait Session",
        event: "Coastline Elopement Session",
        rating: 5,
        title: "A wonderful, relaxing experience",
        quote: "Neither of us are comfortable in front of the camera, but Arthur made us feel instantly at ease. He guided us through natural movements rather than stiff poses. The lighting in our sunset photos is absolutely dreamlike. Highly recommend!",
        date: "July 2025"
    },
    {
        id: 3,
        name: "Sophia Rose",
        role: "Creative Director",
        event: "Brand Editorial Shoot",
        rating: 5,
        title: "Elevated our brand visual assets",
        quote: "As a designer, I'm extremely picky about lighting and composition. Arthur exceeded all expectations. He took the time to understand our brand moodboard and delivered crisp, artistic files that have elevated our site layout and social media presence.",
        date: "October 2025"
    },
    {
        id: 4,
        name: "The Miller Family",
        role: "Family Session",
        event: "Forest Lifestyle Portrait",
        rating: 5,
        title: "Patience and art combined",
        quote: "Taking photos with three toddlers is usually chaotic. Somehow, Arthur kept the mood light, engaged the kids, and captured beautiful, raw smiles. We will cherish these portraits forever. His patience and craftsmanship are unmatched.",
        date: "June 2025"
    },
    {
        id: 5,
        name: "David & Elena",
        role: "Wedding Couple",
        event: "Vow Renewal in Seattle",
        rating: 5,
        title: "Timeless and romantic",
        quote: "Arthur's photographic style is completely timeless. We didn't want trendy filters that look dated in a few years. The colors in our gallery are deep, natural, and rich. He caught small details—the tears, the laughter, the hands held—perfectly.",
        date: "May 2025"
    },
    {
        id: 6,
        name: "Nicolette K.",
        role: "Individual Portrait",
        event: "Studio Headshots & Editorial",
        rating: 5,
        title: "Incredible editorial eye",
        quote: "The studio lighting set up Arthur created was outstanding. He has a great eye for shadows and framing. The session felt like a collaborative artistic project, and the final hand-retouched photos are stunning.",
        date: "November 2025"
    }
]

export default function TestimonialsPage() {
    return (
        <div className="min-h-screen bg-white pb-24">
            {/* Header */}
            <div className="relative pt-12 pb-20 px-6 bg-gradient-to-b from-gray-50 to-white text-center">
                <div className="max-w-4xl mx-auto">
                    <span className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Kind Words from Clients</span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mt-3 mb-6 text-gray-900">
                        Testimonials & Reviews
                    </h1>
                    <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
                        What others say about their experience. Honest feedback on our collaboration and the final imagery.
                    </p>
                </div>
            </div>

            {/* Overall Rating highlight */}
            <div className="max-w-4xl mx-auto px-6 mb-16">
                <div className="bg-gray-50/50 rounded-2xl p-6 md:p-8 border border-gray-100 flex flex-col md:flex-row items-center justify-around gap-6 text-center">
                    <div>
                        <div className="text-4xl md:text-5xl font-serif font-bold text-black mb-1">4.9 / 5</div>
                        <div className="flex justify-center gap-1 my-1 text-black">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={16} fill="currentColor" />
                            ))}
                        </div>
                        <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mt-1">Average Client Rating</p>
                    </div>
                    <div className="h-px w-12 md:h-12 md:w-px bg-gray-200" />
                    <div>
                        <div className="text-4xl md:text-5xl font-serif font-bold text-black mb-1">150+</div>
                        <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mt-1">Weddings & Sessions Documented</p>
                    </div>
                    <div className="h-px w-12 md:h-12 md:w-px bg-gray-200" />
                    <div>
                        <div className="text-4xl md:text-5xl font-serif font-bold text-black mb-1">98%</div>
                        <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mt-1">Referral & Return Client Rate</p>
                    </div>
                </div>
            </div>

            {/* Reviews Grid */}
            <div className="max-w-7xl mx-auto px-6 mb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((review) => (
                        <div
                            key={review.id}
                            className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300 flex flex-col justify-between relative group"
                        >
                            <Quote className="absolute top-6 right-6 text-gray-100 group-hover:text-gray-200 transition-colors duration-300 shrink-0" size={40} />
                            
                            <div className="relative z-10 flex-1">
                                {/* Rating Stars */}
                                <div className="flex gap-1 text-black mb-4">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} size={14} fill="currentColor" />
                                    ))}
                                </div>

                                <h3 className="text-lg font-bold font-serif text-gray-900 mb-2">
                                    "{review.title}"
                                </h3>
                                <p className="text-gray-500 font-light text-sm leading-relaxed mb-6">
                                    {review.quote}
                                </p>
                            </div>

                            {/* Client Meta */}
                            <div className="relative z-10 pt-6 border-t border-gray-50 mt-4 flex justify-between items-end">
                                <div>
                                    <h4 className="font-serif font-bold text-gray-900 text-base">{review.name}</h4>
                                    <p className="text-xs text-gray-400 font-light mt-0.5">{review.role} • {review.event}</p>
                                </div>
                                <span className="text-[10px] text-gray-300 uppercase tracking-widest">{review.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Leave a review section */}
            <div className="max-w-4xl mx-auto px-6 text-center">
                <div className="bg-black text-white rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-800 via-black to-black opacity-80" />
                    <div className="relative z-10 max-w-2xl mx-auto space-y-4">
                        <MessageSquare className="mx-auto text-gray-400" size={32} />
                        <h2 className="text-2xl md:text-3xl font-serif font-bold">
                            Are you a past client?
                        </h2>
                        <p className="text-gray-400 font-light text-sm leading-relaxed max-w-md mx-auto">
                            I put my heart into every project. If we worked together, I'd love to hear about your experience and how you love your final images.
                        </p>
                        <div className="pt-4">
                            <a
                                href="mailto:reviews@atomsphotography.com?subject=Client Feedback"
                                className="inline-flex bg-white text-black px-6 py-2.5 rounded-full font-medium hover:bg-gray-100 transition-colors shadow-lg text-sm"
                            >
                                Share Your Experience
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

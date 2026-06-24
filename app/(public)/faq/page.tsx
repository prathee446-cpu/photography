'use client'

import { useState } from "react"
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle } from "lucide-react"
import Link from "next/link"

const FAQ_CATEGORIES = [
    {
        name: "Booking & Pricing",
        questions: [
            {
                id: "booking-1",
                q: "How far in advance should I book my session?",
                a: "For weddings, we recommend booking 8 to 12 months in advance to ensure availability. For portrait, family, and brand sessions, 4 to 6 weeks is usually sufficient. However, feel free to inquire about last-minute openings."
            },
            {
                id: "booking-2",
                q: "Do you require a deposit to secure the date?",
                a: "Yes. To reserve your session or wedding date on our calendar, we require a signed contract and a 30% non-refundable retainer. The remaining balance is due two weeks before your shoot or wedding day."
            },
            {
                id: "booking-3",
                q: "Are travel costs included in your packages?",
                a: "For shoots within the Portland and Seattle metro areas, travel costs are fully included. For destination weddings, elopements, or sessions requiring flights/lodging, we will provide a custom travel quote based on actual expenses."
            }
        ]
    },
    {
        name: "Session Day",
        questions: [
            {
                id: "session-1",
                q: "What happens if the weather is bad on our shoot day?",
                a: "We monitor weather closely leading up to outdoor sessions. Light rain or overcast skies often produce beautiful, soft-contrast imagery. If severe weather or heavy storms are forecast, we will reschedule to the nearest available date at no extra charge, or move to an indoor studio location."
            },
            {
                id: "session-2",
                q: "What should we wear for our portrait session?",
                a: "We recommend choosing cohesive but not matching outfits. Earth tones, warm neutrals, and rich textures (like linen, knits, or denim) photograph beautifully. Avoid loud patterns, logos, and neon colors. After booking, we will send you our detailed styling guide to help you plan."
            },
            {
                id: "session-3",
                q: "Can we bring props or pets?",
                a: "Absolutely! Pets are part of the family and are always welcome at outdoor locations (just let us know in advance). If you have specific meaningful props or heirlooms you'd like to integrate, we'd love to collaborate on how to style them."
            }
        ]
    },
    {
        name: "Photos & Delivery",
        questions: [
            {
                id: "delivery-1",
                q: "How long after our shoot will we receive the final images?",
                a: "For portrait and commercial sessions, your final hand-retouched gallery will be delivered within 2 weeks. For weddings, we deliver a 'sneak peek' selection of 20-30 images within 48 hours, and your full completed gallery is delivered within 6 weeks."
            },
            {
                id: "delivery-2",
                q: "Do you deliver raw or unedited files?",
                a: "No. Delivering raw files is equivalent to a chef serving raw ingredients. Editing is half of the artistic process and defines our style. Every photo you receive is carefully hand-polished, color-graded, and finalized to meet our high editorial standards."
            },
            {
                id: "delivery-3",
                q: "Can we print our own photos?",
                a: "Yes! Every gallery comes with a personal usage and printing release. You can download your high-resolution files and print them at any lab of your choice. You can also order museum-grade prints, canvases, and albums directly through your private online gallery."
            }
        ]
    }
]

export default function FAQPage() {
    const [openId, setOpenId] = useState<string | null>(null)

    const toggleFaq = (id: string) => {
        setOpenId(openId === id ? null : id)
    }

    return (
        <div className="min-h-screen bg-white pb-24">
            {/* Header */}
            <div className="relative pt-12 pb-20 px-6 bg-gradient-to-b from-gray-50 to-white text-center">
                <div className="max-w-4xl mx-auto">
                    <span className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Frequently Asked Questions</span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mt-3 mb-6 text-gray-900">
                        Help & FAQ
                    </h1>
                    <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
                        Answering common questions about booking, session planning, image editing, and delivery.
                    </p>
                </div>
            </div>

            {/* FAQ Accordion container */}
            <div className="max-w-3xl mx-auto px-6 mb-24">
                <div className="space-y-12">
                    {FAQ_CATEGORIES.map((category) => (
                        <div key={category.name} className="space-y-4">
                            {/* Category Title */}
                            <h3 className="text-xs uppercase tracking-widest text-gray-400 font-semibold border-b border-gray-100 pb-2.5">
                                {category.name}
                            </h3>

                            {/* Questions */}
                            <div className="divide-y divide-gray-100">
                                {category.questions.map((item) => {
                                    const isOpen = openId === item.id
                                    return (
                                        <div key={item.id} className="py-5 first:pt-0 last:pb-0">
                                            <button
                                                className="w-full flex items-center justify-between text-left group focus:outline-none"
                                                onClick={() => toggleFaq(item.id)}
                                            >
                                                <span className="text-base font-serif font-bold text-gray-900 group-hover:text-gray-500 transition-colors pr-6">
                                                    {item.q}
                                                </span>
                                                <span className="text-gray-400 shrink-0">
                                                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                                </span>
                                            </button>

                                            {/* Expandable Panel */}
                                            <div
                                                className={`transition-all duration-300 overflow-hidden ${
                                                    isOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
                                                }`}
                                            >
                                                <p className="text-gray-500 font-light text-sm leading-relaxed whitespace-pre-wrap">
                                                    {item.a}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Direct Contact CTA */}
            <div className="max-w-4xl mx-auto px-6 text-center">
                <div className="bg-black text-white rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-800 via-black to-black opacity-80" />
                    <div className="relative z-10 max-w-2xl mx-auto space-y-4">
                        <HelpCircle className="mx-auto text-gray-400" size={32} />
                        <h2 className="text-2xl md:text-3xl font-serif font-bold">
                            Still have questions?
                        </h2>
                        <p className="text-gray-400 font-light text-sm leading-relaxed max-w-md mx-auto">
                            If you didn't find the answer you were looking for, please feel free to drop me a note. I'm happy to walk you through any details.
                        </p>
                        <div className="pt-4">
                            <Link
                                href="/contact"
                                className="inline-flex bg-white text-black px-6 py-2.5 rounded-full font-medium hover:bg-gray-100 transition-colors shadow-lg text-sm"
                            >
                                Contact Me Directly
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

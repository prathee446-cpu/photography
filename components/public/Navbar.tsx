'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

const NAV_LINKS = [
    { href: '/', label: 'HOME' },
    { href: '/portfolio', label: 'PORTFOLIO' },
    { href: '/services', label: 'SERVICES' },
    { href: '/pricing', label: 'PRICING' },
    { href: '/gallery', label: 'GALLERY' },
    { href: '/blog', label: 'BLOG' },
    { href: '/testimonials', label: 'REVIEWS' },
    { href: '/faq', label: 'FAQ' },
    { href: '/about', label: 'ABOUT' },
    { href: '/contact', label: 'CONTACT' },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [moreOpen, setMoreOpen] = useState(false)

    // Split links: first 6 in main bar, rest in "More" dropdown
    const mainLinks = NAV_LINKS.slice(0, 6)
    const moreLinks = NAV_LINKS.slice(6)

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-4">
                <Link href="/" className="text-2xl font-serif font-bold tracking-tight z-50 relative shrink-0">
                    ATOMS
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-6 text-xs font-semibold tracking-widest text-gray-500">
                    {mainLinks.map(link => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="hover:text-black transition-colors duration-200 whitespace-nowrap"
                        >
                            {link.label}
                        </Link>
                    ))}

                    {/* More dropdown */}
                    <div className="relative" onMouseEnter={() => setMoreOpen(true)} onMouseLeave={() => setMoreOpen(false)}>
                        <button className="flex items-center gap-1 hover:text-black transition-colors duration-200 font-semibold tracking-widest text-xs">
                            MORE <ChevronDown size={13} className={`transition-transform duration-200 ${moreOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {moreOpen && (
                            <div className="absolute top-full right-0 mt-2 w-44 bg-white border border-gray-100 rounded-xl shadow-xl py-2 z-50">
                                {moreLinks.map(link => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="block px-5 py-2.5 text-xs font-semibold tracking-widest text-gray-500 hover:text-black hover:bg-gray-50 transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <div className="hidden lg:block shrink-0">
                    <Link
                        href="/contact"
                        className="bg-black text-white px-6 py-2.5 rounded-full text-xs font-semibold tracking-widest hover:bg-gray-800 transition-colors"
                    >
                        Book Now
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden z-50 relative p-2"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu Overlay */}
                {isOpen && (
                    <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-5 lg:hidden overflow-y-auto py-10">
                        {NAV_LINKS.map(link => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-xl font-semibold tracking-widest text-gray-700 hover:text-black transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="bg-black text-white px-10 py-3.5 rounded-full text-sm font-semibold tracking-widest hover:bg-gray-800 transition-colors mt-4"
                            onClick={() => setIsOpen(false)}
                        >
                            Book Now
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    )
}


import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-gray-50 py-12 md:py-16 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

                {/* Brand */}
                <div className="md:col-span-4 text-center md:text-left space-y-2">
                    <h3 className="text-xl font-serif font-bold tracking-wider text-gray-900">ATOMS PHOTOGRAPHY</h3>
                    <p className="text-gray-400 font-light text-sm">
                        Capturing life's most genuine and beautiful moments.
                    </p>
                </div>

                {/* Navigation — Column 1 */}
                <div className="md:col-span-2 text-center md:text-left space-y-4">
                    <h4 className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Explore</h4>
                    <div className="flex flex-col gap-2.5 text-sm text-gray-500 font-light">
                        <Link href="/" className="hover:text-black transition-colors">Home</Link>
                        <Link href="/portfolio" className="hover:text-black transition-colors">Portfolio</Link>
                        <Link href="/services" className="hover:text-black transition-colors">Services</Link>
                        <Link href="/pricing" className="hover:text-black transition-colors">Pricing</Link>
                        <Link href="/gallery" className="hover:text-black transition-colors">Gallery</Link>
                    </div>
                </div>

                {/* Navigation — Column 2 */}
                <div className="md:col-span-2 text-center md:text-left space-y-4">
                    <h4 className="text-xs uppercase tracking-widest text-gray-400 font-semibold">More</h4>
                    <div className="flex flex-col gap-2.5 text-sm text-gray-500 font-light">
                        <Link href="/blog" className="hover:text-black transition-colors">Blog</Link>
                        <Link href="/testimonials" className="hover:text-black transition-colors">Reviews</Link>
                        <Link href="/faq" className="hover:text-black transition-colors">FAQ</Link>
                        <Link href="/about" className="hover:text-black transition-colors">About Me</Link>
                        <Link href="/contact" className="hover:text-black transition-colors">Contact</Link>
                    </div>
                </div>

                {/* Social Connect */}
                <div className="md:col-span-4 text-center md:text-left space-y-4">
                    <h4 className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Connect</h4>
                    <div className="flex justify-center md:justify-start gap-6 text-sm text-gray-500 font-light">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Instagram</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Twitter</a>
                        <a href="mailto:hello@atomsphotography.com" className="hover:text-black transition-colors">Email</a>
                    </div>
                    <p className="text-xs text-gray-400 font-light max-w-xs">
                        Based in Seattle, WA — available worldwide for weddings, portraits & commercial work.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
                <div>
                    © {new Date().getFullYear()} Atoms Photography. All rights reserved.
                </div>
                <div className="flex gap-4">
                    <Link href="#" className="hover:text-gray-600">Privacy Policy</Link>
                    <Link href="#" className="hover:text-gray-600">Terms of Service</Link>
                </div>
            </div>
        </footer>
    )
}

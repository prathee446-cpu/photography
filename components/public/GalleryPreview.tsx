import Image from "next/image"
import Link from "next/link"

const GALLERY_IMAGES = [
    "/images/gallery-1.jpg",
    "/images/gallery-2.jpg",
    "/images/gallery-3.jpg",
    "/images/gallery-4.jpg",
    "/images/gallery-5.jpg",
    "/images/gallery-6.jpg",
]

export default function GalleryPreview() {
    return (
        <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Best Moments Captured</h2>
                <Link href="/gallery" className="text-sm border-b border-black pb-1 hover:text-gray-600 transition-colors uppercase tracking-widest">
                    View Full Gallery
                </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {GALLERY_IMAGES.map((src) => (
                    <div key={src} className="relative aspect-square group overflow-hidden bg-gray-100">
                        <Image
                            src={src}
                            alt="Gallery"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

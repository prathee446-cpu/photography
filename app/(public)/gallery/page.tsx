import Image from "next/image"

const GALLERY_IMAGES = [
    "/images/gallery-1.jpg",
    "/images/gallery-2.jpg",
    "/images/gallery-3.jpg",
    "/images/gallery-4.jpg",
    "/images/gallery-5.jpg",
    "/images/gallery-6.jpg",
]

export default function GalleryPage() {
    return (
        <div className="min-h-screen bg-white pb-16 md:pb-24">
            <div className="pt-8 pb-16 md:pt-12 md:pb-24 px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Portfolio</h1>
                <p className="text-gray-500 max-w-2xl mx-auto">
                    A collection of moments frozen in time.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-6 mb-24">
                <h2 className="text-2xl font-serif font-bold mb-8 text-center">Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {GALLERY_IMAGES.map((src) => (
                        <div key={src} className="relative aspect-[4/5] group overflow-hidden bg-gray-100">
                            <Image
                                src={src}
                                alt="Gallery"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

import Image from "next/image"

const SHOWCASE_IMAGES = [
    "/images/showcase-1.jpg",
    "/images/showcase-2.jpg",
    "/images/showcase-3.jpg",
]

export default function ShowcaseSection() {
    return (
        <section className="py-12 md:py-24 px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                {SHOWCASE_IMAGES.map((src, idx) => (
                    <div key={src} className={`relative aspect-[3/4] w-full ${idx === 1 ? 'md:-mt-16 md:mb-16 shadow-2xl z-10' : 'shadow-lg'}`}>
                        <Image
                            src={src}
                            alt="Showcase"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

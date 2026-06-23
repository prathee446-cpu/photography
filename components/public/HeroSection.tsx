import Image from "next/image"

export default function HeroSection() {
    return (
        <section className="relative h-[100dvh] w-full overflow-hidden">
            <Image
                src="/images/hero.jpg"
                alt="Hero"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold mb-4 md:mb-6 tracking-tight drop-shadow-lg">
                    Capturing Moments
                </h1>
                <p className="text-base sm:text-lg md:text-xl font-light tracking-wide max-w-xs sm:max-w-2xl opacity-90 drop-shadow-md">
                    Timeless photography for the modern soul.
                </p>
            </div>
        </section>
    )
}

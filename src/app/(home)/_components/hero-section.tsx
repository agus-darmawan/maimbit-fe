import Image from "next/image";
import Link from "next/link";
import { goals } from "./goal-section";

export default function HeroSection() {
  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
      <Image
        src="/images/hero/homepage.png"
        alt="Hero Background"
        fill
        className="object-cover z-0"
        priority
        quality={90}
      />

      <div className="absolute inset-0 bg-black/70 z-10"></div>

      <div className="relative z-20 text-center text-white max-w-5xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-yellow-400">WELCOME TO</span>
          <br />
          <span className="text-white">Program Maimbit</span>
        </h1>

        <p className="text-base md:text-xl mb-10 leading-relaxed opacity-90">
          Solusi terpadu yang membantu Anda menggali potensi diri, mengakses
          peluang beasiswa, dan berkontribusi langsung pada kelestarian
          lingkungan
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {goals.map((goal) => (
            <Link
              key={goal.title}
              href={`/${goal.title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <button
                type="button"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 font-semibold transition-colors rounded-full capitalize"
              >
                {goal.title}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

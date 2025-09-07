import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden px-8 md:px-16">
      <Image
        src="/images/hero/diri-sendiri.png"
        alt="Hero Background"
        fill
        priority
        quality={90}
        className="object-cover z-0"
      />

      <div className="absolute inset-0 bg-black/70 z-10"></div>

      <div className="relative z-20 text-left text-white max-w-4xl">
        <div className="flex items-center gap-3 mb-4">
          <Image
            src="/images/homepage/card/user_icon.png"
            alt="Icon User"
            width={48}
            height={48}
            className="w-12 h-12"
          />
          <h1 className="text-3xl md:text-5xl font-bold text-yellow-400">
            Kenali Diri Sendiri
          </h1>
        </div>

        <p className="text-base md:text-lg leading-relaxed opacity-90 mb-8">
          Kenali Diri Sendiri dirancang sebagai wadah pengembangan pribadi yang
          komprehensif. Fitur ini menyediakan serangkaian asesmen, tes
          psikometri, dan alat analisis yang membantu Anda memahami kekuatan,
          minat, serta area yang memerlukan pengembangan diri. Tujuannya adalah
          untuk memberikan pemahaman objektif mengenai potensi diri Anda,
          sehingga Anda dapat membuat keputusan yang lebih strategis terkait
          pendidikan, jalur karier, dan pengembangan karakter secara
          keseluruhan.
        </p>

        <div className="flex gap-4">
          <Link
            href="#tes-minat"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition"
          >
            Tes Minat & Bakat
          </Link>
          <Link
            href="#tes-mbti"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition"
          >
            Tes MBTI
          </Link>
        </div>
      </div>
    </section>
  );
}

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
            src="/images/homepage/card/cap_icon.png"
            alt="Icon User"
            width={48}
            height={48}
            className="w-20 h-20"
          />
          <h1 className="text-3xl md:text-5xl font-bold text-yellow-400">
            Beasiswa
          </h1>
        </div>

        <p className="text-base md:text-lg leading-relaxed opacity-90 mb-8">
          Cari Beasiswa di Maimbit merupakan pusat informasi terpadu yang
          menyediakan akses ke berbagai peluang beasiswa dari institusi
          terkemuka di dalam maupun luar negeri. Basis data kami dikurasi secara
          ketat dan diperbarui secara berkala untuk memastikan informasi yang
          akurat dan relevan. Selain daftar beasiswa, fitur ini juga menyediakan
          panduan lengkap mengenai prosedur aplikasi, kiat menulis esai yang
          persuasif, serta tips persiapan wawanca ra yang semuanya bertujuan
          untuk meningkatkan peluang keberhasilan Anda.
        </p>

        <div className="flex gap-4">
          <Link
            href="/beasiswa/#beasiswa"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition"
          >
            Beasiswa
          </Link>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

export default function QuoteSection() {
  return (
    <section className="bg-gradient-to-b from-[#3B4D7E] to-[#122862] pt-10 pb-20">
      <div className="container mx-auto px-6 text-center flex items-center justify-center flex-col">
        <div className="w-36 h-36 relative">
          <Image
            src="/images/homepage/quote/icon.png"
            alt="Graduation Cap"
            fill
            className="object-contain"
            priority
          />
        </div>

        <blockquote className="text-white text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-medium mt-6">
          “Pendidikan menuntun tumbuhnya kodrat anak,
          <br />
          membawa mereka menuju kemerdekaan sejati,
          <br />
          dan menjadikan manusia seutuhnya.”
        </blockquote>
      </div>
    </section>
  );
}

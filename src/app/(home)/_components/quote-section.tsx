import Image from "next/image";
export default function QuoteSection() {
  return (
    <div className="bg-gradient-to-b from-[#3B4D7E]  to-[#122862] py-10">
      <div className="container mx-auto px-6 text-center flex items-center justify-center flex-col">
        <Image
          src="/images/homepage/quote/icon.png"
          alt="Graduation Cap"
          width={136}
          height={136}
          className="w-36"
        />

        <blockquote className="text-white text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed  font-medium">
          “Habis gelap terbitlah terang,
          <br />
          pendidikan adalah cahaya,
          <br />
          yang menuntun bangsa menuju masa depan.”
        </blockquote>
      </div>
    </div>
  );
}

import Image from "next/image";

const sustainabilityList = [
  {
    title: "Reduce",
    image: "/images/lingkungan/card/reduce.png",
  },
  {
    title: "Reuse",
    image: "/images/lingkungan/card/reuce.png",
  },
  {
    title: "Recycle",
    image: "/images/lingkungan/card/recycle.png",
  },
];

export default function LingkunganSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {sustainabilityList.map((item) => (
            <div key={item.title} className="flex flex-col items-center">
              <div className="w-[150px] h-[150px] relative mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-green-600 uppercase">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <div className="w-[300px] h-[300px] relative">
            <Image
              src="/images/lingkungan/card/sdgs.png"
              alt="Sustainable Development Goals"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

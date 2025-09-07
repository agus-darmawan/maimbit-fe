import Image from "next/image";

const beasiswaList = [
  {
    title: "Beasiswa LPDP",
    image: "/images/beasiswa/lpdp.png",
  },
  {
    title: "Beasiswa Garuda",
    image: "/images/beasiswa/garuda.png",
  },
  {
    title: "Beasiswa KIP",
    image: "/images/beasiswa/kip.png",
  },
];

export default function BeasiswaSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">
          Pilihan Beasiswa
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4gixl mx-auto">
          {beasiswaList.map((item) => (
            <div key={item.title} className="flex flex-col items-center">
              <div className="w-[250px] h-[400px] relative rounded-[2rem] shadow-lg overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg md:text-xl font-bold text-blue-900 uppercase">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

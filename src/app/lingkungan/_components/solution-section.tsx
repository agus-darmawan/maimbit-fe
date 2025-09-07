import Image from "next/image";

const upayaList = [
  {
    id: 1,
    title: "Jangan Buang Sampah Tidak Pada Tempatnya",
    image: "/images/lingkungan/upaya/sampah.png",
  },
  {
    id: 2,
    title: "Tanamlah Pohon / Reboisasi Hutan Gundul",
    image: "/images/lingkungan/upaya/reboisasi.png",
  },
  {
    id: 3,
    title: "Jangan Lupa Tuk Mendaur Ulang Sampah",
    image: "/images/lingkungan/upaya/daur-ulang.png",
  },
];

export default function UpayaLingkunganSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-6 text-center">
        {/* Judul */}
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-12">
          Apa Upaya Kita Dalam Peduli Lingkungan?
        </h2>

        {/* Grid Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {upayaList.map((item) => (
            <div
              key={item.id}
              className="bg-blue-900 text-white rounded-2xl shadow-lg p-4 flex flex-col items-center"
            >
              <div className="w-full h-56 relative rounded-xl overflow-hidden mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-base font-semibold">
                {item.id}. {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

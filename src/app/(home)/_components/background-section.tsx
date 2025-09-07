import Image from "next/image";

export default function BackgroundSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white font-medium">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start md:text-xl">
          <div className="flex justify-center items-end order-1 md:order-2">
            <Image
              src="/images/homepage/maps/kalteng.png"
              alt="Peta Administrasi Kalimantan Tengah"
              className="rounded-lg shadow-md ml-auto"
              width={431}
              height={431}
            />
          </div>

          <div className="order-2 md:order-1">
            <h2 className="text-2xl md:text-5xl font-bold text-blue-900 mb-6 text-center md:text-left">
              Latar Belakang Maimbit
            </h2>
            <p className="text-gray-800 leading-relaxed md:pt-10 pt-3 text-justify ">
              Di dunia yang penuh ketidakpastian, Maimbit hadir untuk membantu
              generasi muda menemukan jalan mereka. Kami adalah solusi terpadu
              yang membantu Anda mengenali potensi diri, mengakses peluang
              beasiswa, dan berkontribusi langsung pada kelestarian lingkungan.
              Maimbit bukan sekadar platform, melainkan peta jalan yang
              dirancang untuk memastikan setiap langkah Anda adalah langkah yang
              strategis dan penuh makna.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <p className="text-gray-800 leading-relaxed md:text-xl text-justify">
            Masa depan membutuhkan tindakan. Maimbit mengajak Anda untuk tidak
            hanya bermimpi, tetapi juga beraksi. Kami menyediakan alat dan
            komunitas untuk mengubah potensi menjadi kenyataan dan kepedulian
            menjadi perubahan nyata. Bergabunglah dengan Maimbit dan jadilah
            bagian dari gerakan yang membentuk masa depan diri Anda dan dunia.
          </p>
        </div>
      </div>
    </section>
  );
}

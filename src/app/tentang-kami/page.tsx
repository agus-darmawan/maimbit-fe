import Image from "next/image";

export default function TentangKami() {
  return (
    <>
      <section className="bg-[#0A1D4A] py-16 px-6">
        <div className="container mx-auto pt-10">
          <div className="flex items-center gap-3 mb-8">
            <Image
              src="/images/homepage/card/chat_icon.png"
              alt="Tentang Kami Icon"
              width={40}
              height={40}
            />
            <h2 className="text-2xl md:text-3xl font-bold text-yellow-400">
              Tentang Kami
            </h2>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 text-center">
            <div className="flex justify-center items-center gap-4 mb-6">
              <Image
                src="/images/about/logo.png"
                alt="Logo Maimbit"
                width={400}
                height={150}
                className="object-contain"
              />
            </div>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-5xl mx-auto">
              Maimbit berasal dari bahasa Dayak Ngaju yang bermakna "mengajak"
              atau "membawa." Nama ini mencerminkan visi kami untuk mengundang
              dan membawa generasi muda dalam sebuah perjalanan transformatif
              menuju pertumbuhan diri, kesuksesan akademik, dan kontribusi
              positif bagi masyarakat. Maimbit didirikan sejak 2023 dengan misi
              untuk menyediakan platform yang memfasilitasi akses terhadap
              sumber daya pengembangan pribadi, informasi pendidikan, dan
              kesempatan untuk terlibat dalam aksi sosial yang berdampak.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-12">
            Contact For Us
          </h2>

          <div className="flex flex-col gap-6 max-w-xl mx-auto">
            <div className="flex items-center gap-3">
              <Image
                src="/images/about/sosial/wa.png"
                alt="Whatsapp"
                width={35}
                height={35}
                className="sm:w-[50px] sm:h-[50px]"
              />
              <a
                href="https://wa.me/6285190662912"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-lg md:text-xl text-gray-800 font-medium"
              >
                Whatsapp :{" "}
                <span className="font-bold text-blue-900">085190662912</span>
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Image
                src="/images/about/sosial/mail.png"
                alt="Email"
                width={35}
                height={35}
                className="sm:w-[50px] sm:h-[50px]"
              />
              <a
                href="mailto:maimbitprogram@gmail.com"
                className="text-sm sm:text-lg md:text-xl text-gray-800 font-medium"
              >
                Email :{" "}
                <span className="font-bold text-blue-900">
                  maimbitprogram@gmail.com
                </span>
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Image
                src="/images/about/sosial/instagram.png"
                alt="Instagram"
                width={35}
                height={35}
                className="sm:w-[50px] sm:h-[50px]"
              />
              <a
                href="https://instagram.com/maimbit_program"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-lg md:text-xl text-gray-800 font-medium"
              >
                Instagram :{" "}
                <span className="font-bold text-blue-900">
                  @maimbit_program
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

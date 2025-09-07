// components/ProgramGoals.tsx
import Image from "next/image";

type Goal = {
  title: string;
  description: string;
  iconSrc: string;
};

export const goals: Goal[] = [
  {
    title: "KENALI DIRI SENDIRI",
    description:
      "Membantu Anda mengenali potensi dan minat diri melalui asesmen pribadi untuk membuat keputusan karir yang tepat",
    iconSrc: "/images/homepage/card/user_icon.png",
  },
  {
    title: "BEASISWA",
    description:
      "Menyediakan akses ke basis data beasiswa yang lengkap, beserta panduan aplikasi untuk meningkatkan peluang Anda",
    iconSrc: "/images/homepage/card/cap_icon.png",
  },
  {
    title: "PEDULI LINGKUNGAN",
    description:
      "Mengajak Anda berpartisipasi dalam program komunitas dan aktivitas untuk menjaga lingkungan",
    iconSrc: "/images/homepage/card/recycle_icon.png",
  },
  {
    title: "TENTANG KAMI",
    description:
      "Maimbit, yang berarti mengajak hadir untuk membantu generasi muda meraih pengembangan dan visi karir yang positif bagi masyarakat",
    iconSrc: "/images/homepage/card/chat_icon.png",
  },
];

export default function GoalsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-16">
          Tujuan Program Maimbit
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {goals.map((goal) => (
            <div
              key={goal.title}
              className="bg-blue-900 rounded-4xl py-6 px-4 text-center text-white hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center justify-center mx-auto mb-6">
                <Image
                  src={goal.iconSrc}
                  alt={goal.title}
                  unoptimized
                  width={0}
                  height={0}
                  style={{ width: "100px", height: "100px" }}
                />
              </div>
              <h3 className="text-xl font-bold mb-4">{goal.title}</h3>
              <p className="text-sm leading-relaxed">{goal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

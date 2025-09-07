export default function HeroSection() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
          url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KPHN0eWxlPgouYmcgewogIGZpbGw6ICM0Yjc2ODg7Cn0KPC9zdHlsZT4KPC9kZWZzPgo8cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiBjbGFzcz0iYmciLz4KPC9zdmc+')`,
      }}
    >
      <div className="text-center text-white max-w-5xl mx-auto px-6">
        <h1 className="text-7xl md:text-8xl font-bold mb-4">
          <span className="text-yellow-400">WELCOME TO</span>
          <br />
          <span className="text-white">Program Maimbit</span>
        </h1>

        <p className="text-lg md:text-xl mb-8 leading-relaxed opacity-90">
          Solusi terpadu yang membantu Anda menggali potensi diri, mengakses
          peluang beasiswa, dan berkontribusi langsung pada kelestarian
          lingkungan
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button
            type="button"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2  font-semibold transition-colors rounded-full"
          >
            Kenali Sendiri
          </button>
        </div>
      </div>
    </div>
  );
}

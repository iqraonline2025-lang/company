export default function HeroLight() {
  return (
    <section className="relative w-full min-h-[70vh] bg-[#fafafa] overflow-hidden flex items-center justify-center px-6">
      {/* Subtle Animated Blob */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="gradient-blob w-[480px] h-[480px] rounded-full blur-[90px] opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-center">
        <h1 className="text-5xl font-bold text-gray-900 leading-tight">
          Building Modern & Beautiful Web Experiences
        </h1>

        <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
          I design and develop clean, responsive, and user-friendly websites
          with a focus on performance and smooth UI interactions.
        </p>

        <button className="mt-8 px-8 py-3 rounded-xl bg-gray-900 text-white font-medium hover:bg-gray-800 transition-all shadow-lg">
          Start Your Project
        </button>
      </div>
    </section>
  );
}

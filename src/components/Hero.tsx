import React from 'react'

// Hero section (home)
// - Contains the main headline, call-to-action buttons and the hero image.
// - The hero image lives in `public/images/img1.jpeg`. It uses `object-contain`
//   so the full image is visible; change to `object-cover` if you prefer it
//   to fill the frame (may crop the photo).
export default function Hero() {
  return (
    <section id="home" className="hero full pt-5 pb-2">
      <div className="container mx-auto grid lg:grid-cols-2 gap-8 items-start px-6">
        {/* Coluna Esquerda */}
        <div className="hero-copy flex flex-col min-h-[260px] lg:min-h-[500px]">
          <div className="w-40 h-40 flex items-center justify-center bg-white rounded-md shadow-sm mb-6 mt-4">
            <img
              src="/images/logo.jpeg"
              alt="Logo"
              className="w-full h-full object-contain rounded"
            />
          </div>

          <h1 className="text-3xl lg:text-5xl font-serif leading-tight">
            Defesa jurídica precisa, atuação ética e estratégica
          </h1>

          <p className="text-[#bebebe] mt-4">
            Consultoria e advocacia com foco em resultados, transparência e
            respeito ao seu tempo.
          </p>

          <div className="mt-auto flex gap-4">
            <a href="#areas" className="btn-gold">Áreas de Atuação</a>
            <a
              href="#contato"
              className="btn btn-outline border px-4 py-2 rounded-md hover:bg-white/10 transition-colors transition-transform duration-200 ease-out hover:scale-[1.03] active:scale-[0.98] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Agendar Consulta
            </a>
          </div>
        </div>

        {/* Coluna Direita */}
        <div className="hero-visual flex justify-center items-center">
          <div className="visual-frame rounded-xl overflow-hidden border border-[#242424] bg-[#0e0e0e] max-w-md h-[260px] lg:h-[500px]">
            <img
              src="/images/img1.jpeg"
              alt="Glenda Slayane"
              className="w-full h-full object-contain"
            />
            <span className="frame-accent block h-1 bg-gradient-to-r from-[#d4af37] to-[#b08d2a]"></span>
          </div>
        </div>
      </div>
    </section>
  )
}

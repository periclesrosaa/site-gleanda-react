import React from 'react'

// Header component
// - Sticky top navigation that links to each section via anchor IDs.
// - Keep anchor IDs in sync with section ids (`home`, `sobre`, `areas`, `publicacoes`, `contato`).
export default function Header(){
  return (
    <header className="site-header sticky top-0 z-30 bg-[rgba(11,11,11,0.6)] backdrop-blur-sm border-b border-[#242424] h-16">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a className="brand flex items-center gap-3 font-extrabold text-white" href="#home"></a>
        <nav className="nav flex gap-6 items-center">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-white/80 hover:text-[#d4af37] hover:underline underline-offset-4 decoration-[#d4af37] transition-colors duration-200"
          >
            Início
          </a>
          <a href="#sobre" className="text-white/80 hover:text-[#d4af37] hover:underline underline-offset-4 decoration-[#d4af37] transition-colors duration-200">Sobre</a>
          <a href="#areas" className="text-white/80 hover:text-[#d4af37] hover:underline underline-offset-4 decoration-[#d4af37] transition-colors duration-200">Áreas</a>
          <a href="#publicacoes" className="text-white/80 hover:text-[#d4af37] hover:underline underline-offset-4 decoration-[#d4af37] transition-colors duration-200">Publicações</a>
          <a href="#contato" className="btn-gold">Agendar Consulta</a>
        </nav>
      </div>
    </header>
  )
}

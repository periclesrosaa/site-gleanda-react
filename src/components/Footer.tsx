import React from 'react'

export default function Footer(){
  return (
    <footer className="site-footer border-t border-[#242424] py-8 bg-[rgba(12,12,12,0.6)]">
      <div className="container mx-auto px-6 text-center">
        <div className="footer-brand mb-4">
          <img src="/images/logopng.png" alt="Logo" className="h-8 mx-auto" />
        </div>
        <div className="footer-links flex gap-4 justify-center mb-4">
          <a href="#home">Home</a>
          <a href="#sobre">Sobre</a>
          <a href="#areas">Áreas</a>
          <a href="#publicacoes">Publicações</a>
          <a href="#contato">Contato</a>
        </div>
        <small>© <span id="year">{new Date().getFullYear()}</span> Glenda. Todos os direitos reservados.</small>
      </div>
    </footer>
  )
}

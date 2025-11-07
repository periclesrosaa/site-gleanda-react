import React, { useEffect, useRef } from 'react'

// About component
// Renders the "Sobre" section with a text column and a portrait of the lawyer.
// Notes for maintainers:
// - The portrait uses `object-contain` so the full image is visible (no cropping).
// - Decorative frame is implemented as an absolute element behind the image
//   so the photo itself is not modified. To change the frame, edit the
//   absolute div inside `.portrait-inner`.
export default function About(){
  // ref para a lista de features (itens a animar)
  const listRef = useRef<HTMLUListElement | null>(null)

  useEffect(() => {
    const listEl = listRef.current
    if (!listEl) return

    const items = Array.from(listEl.querySelectorAll('li')) as HTMLElement[]
    const obs = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement
          target.classList.remove('opacity-0', 'translate-y-3')
          target.classList.add('opacity-100', 'translate-y-0')
          observer.unobserve(target)
        }
      })
    }, { threshold: 0.15 })

    items.forEach(i => obs.observe(i))
    return () => obs.disconnect()
  }, [])
  return (
  <section id="sobre" className="section full py-5 scroll-mt-16">
      <div className="container mx-auto grid lg:grid-cols-2 gap-8 items-center px-6">
        <div className="about-copy">
          <h2 className="text-2xl mb-4">Sobre</h2>
          <div className="about-box bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0))] border border-[#242424] rounded-lg p-4">
            <p className="text-[#bebebe]">Com uma atuação marcada pelo compromisso, sensibilidade e busca por justiça, Glenda Slayane é uma advogada dedicada a oferecer soluções jurídicas com empatia e excelência.</p>
            {/* Lista de pontos-chave com ícones estilizados (Opção A)
                - Cada ícone é decorativo (aria-hidden) e está dentro de um
                círculo dourado. O texto acessível para leitores de tela fica
                em um elemento `span.sr-only` após o ícone.
                - Para ajustar o tamanho do círculo, altere `w-9 h-9`.
                - Para alterar as cores, edite o gradiente `from`/`to`. */}
      {/* Lista com animação de entrada. Usamos um ref + IntersectionObserver
        para adicionar classes que fazem fade + translateY quando cada
        item entra na viewport. As classes iniciais (opacity-0 translate-y-3)
        garantem que os itens estejam invisíveis antes de aparecer. */}
      <ul ref={listRef as any} className="features mt-4 space-y-3 list-none">
              {/* OAB aprovada (ícone de certificado dentro do círculo) */}
              <li className="flex items-center gap-3 opacity-0 translate-y-3 transition-all duration-500">
                <span className="inline-flex items-center justify-center w-9 h-9 bg-gradient-to-b from-[#f6da8a] to-[#b08d2a] rounded-full shadow-md ring-1 ring-black/20 transform transition-all duration-200 hover:-translate-y-1 hover:shadow-lg" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" stroke="#ffffff" strokeWidth="1.4" fill="none" />
                    <path d="M9.5 12.5l2 2 4-4" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </span>
                <span className="text-[#e6e6e6]">OAB aprovada</span>
                <span className="sr-only">OAB aprovada</span>
              </li>

              {/* Atuação ética e técnica (ícone de escudo com check) */}
              <li className="flex items-center gap-3 opacity-0 translate-y-3 transition-all duration-500">
                <span className="inline-flex items-center justify-center w-9 h-9 bg-gradient-to-b from-[#f6da8a] to-[#b08d2a] rounded-full shadow-md ring-1 ring-black/20 transform transition-all duration-200 hover:-translate-y-1 hover:shadow-lg" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M12 2l6 3v5c0 5-3.6 9.8-6 11-2.4-1.2-6-6-6-11V5l6-3z" stroke="#ffffff" strokeWidth="1.2" fill="none" />
                    <path d="M9.5 12.2l1.8 1.8L14.5 10" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </span>
                <span className="text-[#e6e6e6]">Atuação ética e técnica</span>
                <span className="sr-only">Atuação ética e técnica</span>
              </li>

              {/* Foco em transparência e resultado (ícone de alvo) */}
              <li className="flex items-center gap-3 opacity-0 translate-y-3 transition-all duration-500">
                <span className="inline-flex items-center justify-center w-9 h-9 bg-gradient-to-b from-[#f6da8a] to-[#b08d2a] rounded-full shadow-md ring-1 ring-black/20 transform transition-all duration-200 hover:-translate-y-1 hover:shadow-lg" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <circle cx="12" cy="12" r="6" stroke="#ffffff" strokeWidth="1.4" fill="none" />
                    <circle cx="12" cy="12" r="3" stroke="#ffffff" strokeWidth="1.6" fill="#ffffff" />
                  </svg>
                </span>
                <span className="text-[#e6e6e6]">Foco em transparência e resultado</span>
                <span className="sr-only">Foco em transparência e resultado</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="about-visual">
          {/* Portrait column. Keep the image intact (object-contain) and place a
              small decorative frame behind it. The portrait is slightly taller
              than the hero to create a vertical, portrait-style frame. */}
          <div className="portrait relative rounded-xl overflow-visible mx-auto max-w-md z-20">
            <div className="portrait-inner relative flex items-center justify-center" style={{height: '520px'}}>
              {/* decorative frame (behind the image). Keep inset small so the frame
                  is close to the photo. Change `inset` or `border` here to tweak */}
              <div
                className="absolute rounded-xl pointer-events-none"
                style={{
                  inset: '-2px',
                  border: '1px solid rgba(212,175,55,0.95)',
                  boxShadow: '0 6px 18px rgba(212,175,55,0.04)',
                  zIndex: 0
                }}
                aria-hidden="true"
              />

              {/* Portrait image: full image visible (no crop) */}
              <img src="/images/sobre.png" alt="Dra. Glenda" className="relative z-10 w-full h-full object-contain rounded-xl object-center" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

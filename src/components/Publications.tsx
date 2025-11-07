import React from 'react'

export default function Publications(){
  const posts = [
    {
      title: 'Como preparar documentos para uma ação previdenciária',
      excerpt: 'Checklist simples para reunir comprovantes e laudos sem atrasos no processo.',
      date: '12 Jul 2024',
      tag: 'Artigo',
      image: '/images/artigo.jpeg',
      content: `\
      Checklist simples para reunir comprovantes e laudos sem atrasos no processo:\n\n\
      1) Identificação pessoal: RG, CPF, comprovante de residência atualizado.\n\
      2) Vínculos trabalhistas: carteira de trabalho (CTPS), contratos, holerites.\n\
      3) Contribuições: extrato CNIS atualizado e comprovantes de recolhimento.\n\
      4) Laudos médicos: relatórios, exames, receitas e atestados com CID.\n\
      5) Histórico clínico: datas de afastamentos e tratamentos.\n\
      6) Documentos complementares: comunicações do INSS e protocolos.\n\
      Dica: mantenha tudo organizado por pastas (pessoal, trabalho, saúde) e use uma lista de conferência antes de enviar.`
    },
    {
      title: 'Atualização: prazos em procedimentos administrativos',
      excerpt: 'Mudanças recentes nos prazos podem impactar requerimentos e recursos.',
      date: '28 Ago 2024',
      tag: 'Atualização',
      image: '/images/atualizacao.jpeg',
      content: `\
      Atualização sobre prazos administrativos:\n\n\
      - Requerimentos: atenção a novos prazos de análise e complementação de documentos.\n\
      - Recursos: observe janelas reduzidas para interpor e acompanhar.\n\
      - Publicações oficiais: verifique diariamente o Diário e comunicados do INSS.\n\
      Orientação: registre cada etapa (data de protocolo, resposta, pendências) em um cronograma simples para não perder prazos.`
    },
    {
      title: 'Erros comuns ao assinar contratos de prestação de serviços',
      excerpt: 'Pontue cláusulas essenciais e evite riscos em contratos do dia a dia.',
      date: '03 Out 2024',
      tag: 'Dica',
      image: '/images/dica.jpeg',
      content: `\
      Dica rápida sobre contratos:\n\n\
      1) Leia cláusulas de rescisão e multa.\n\
      2) Confirme escopo e limites do serviço para evitar ambiguidades.\n\
      3) Verifique prazos de entrega e formas de pagamento.\n\
      4) Valide foro e meios de solução de conflitos.\n\
      Sugestão: anote dúvidas e peça esclarecimentos por escrito antes de assinar.`
    },
  ]

  const openPostInNewTab = (post: { title: string; date: string; tag: string; content: string }) => {
    const win = window.open('', '_blank');
    if (!win) return;
    const html = `<!doctype html>
      <html lang="pt-BR">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>${post.title} • Publicações</title>
        <style>
          body { margin: 0; font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif; background:#0b0b0b; color:#e6e6e6; }
          .wrap { max-width: 860px; margin: 0 auto; padding: 24px; }
          .header { display:flex; align-items:center; justify-content:space-between; border-bottom:1px solid #242424; padding-bottom:12px; }
          .tag { display:inline-block; padding:4px 8px; border-radius:999px; background:#1a1a1a; color:#d4af37; border:1px solid #2a2a2a; font-size:12px; }
          .date { color:#8a8a8a; font-size:12px; }
          h1 { font-size:24px; margin:16px 0 8px; }
          .content { white-space:pre-wrap; line-height:1.6; color:#bebebe; }
          .footer { margin-top:24px; border-top:1px solid #242424; padding-top:16px; color:#8a8a8a; font-size:13px; }
          a { color:#d4af37; }
          .back-fab { position: fixed; top: 16px; left: 16px; width: 44px; height: 44px; border-radius: 999px; display:flex; align-items:center; justify-content:center; background: linear-gradient(to bottom, #f6da8a, #b08d2a); color: #000; box-shadow: 0 8px 20px rgba(212,175,55,0.25), 0 1px 2px rgba(0,0,0,0.4); border: 1px solid rgba(0,0,0,0.3); cursor: pointer; }
          .back-fab:hover { transform: translateY(-1px) scale(1.03); filter: brightness(0.95); }
          .back-fab:active { transform: scale(0.96); }
          .back-fab:focus { outline: 2px solid rgba(212,175,55,0.7); outline-offset: 2px; }
          .back-fab svg { width: 20px; height: 20px; }
        </style>
      </head>
      <body>
        <button class="back-fab" aria-label="Voltar para Home" title="Voltar para Home" onclick="
          try {
            if (window.opener) {
              window.opener.scrollTo({ top: 0, behavior: 'smooth' });
              window.opener.focus();
              window.close();
            } else {
              window.location.href = '/#home';
            }
          } catch (e) {
            window.location.href = '/#home';
          }
        ">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M15 6l-6 6 6 6" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
        <div class="wrap">
          <div class="header">
            <span class="tag">${post.tag}</span>
            <span class="date">${post.date}</span>
          </div>
          <h1>${post.title}</h1>
          <div class="content">${post.content}</div>
          <div class="footer">Publicação informativa. Para dúvidas específicas, utilize a aba Contato.</div>
        </div>
      </body>
      </html>`;
    win.document.write(html);
    win.document.close();
  };

  return (
    <section id="publicacoes" className="section py-2 scroll-mt-16">
      <div className="container mx-auto px-6">
        <h2 className="mb-2 text-2xl">Publicações</h2>
        <p className="text-[#bebebe] mb-6">Artigos, insights e atualizações jurídicas.</p>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <article
              key={i}
              className="group rounded-lg overflow-hidden border border-[#242424] bg-[#121212] transition-transform duration-200 ease-out hover:scale-[1.02] hover:shadow-lg focus-within:shadow-lg"
            >
              <div className="relative h-40 md:h-44 lg:h-48 overflow-hidden flex items-center justify-center bg-[#0e0e0e] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08),transparent_65%)]">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#d4af37] to-[#b08d2a] opacity-80" aria-hidden="true"></div>
                <div className="absolute inset-1 rounded-md border border-[#242424]/70 pointer-events-none" aria-hidden="true"></div>
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  decoding="async"
                  className="max-w-full max-h-full object-contain p-3 transition-transform duration-200 ease-out group-hover:scale-[1.01]"
                />
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="px-2 py-1 rounded-full bg-[#1a1a1a] text-[#d4af37] border border-[#2a2a2a]">{post.tag}</span>
                  <time className="text-[#8a8a8a]">{post.date}</time>
                </div>

                <h3 className="mt-3 text-lg font-semibold group-hover:text-[#d4af37] transition-colors">
                  {post.title}
                </h3>

                <p className="mt-2 text-sm text-[#bebebe]">
                  {post.excerpt}
                </p>

                <a
                  href="#"
                  onClick={(e)=>{ e.preventDefault(); openPostInNewTab({ title: post.title, date: post.date, tag: post.tag, content: post.content }); }}
                  className="mt-4 inline-flex items-center gap-2 text-[#d4af37] hover:text-[#c19b2f] transition-colors"
                  aria-label={`Ler mais: ${post.title}`}
                >
                  Ler mais
                  <span aria-hidden>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-4 flex justify-center">
          <a
            href="https://www.instagram.com/adv.glendafelix?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold translate-y-[2px]"
          >
            Ver mais publicações
          </a>
        </div>

      </div>
    </section>
  )
}

import React from 'react'

export default function Contact(){
  return (
    <section id="contato" className="section py-12 scroll-mt-16">
      <div className="container mx-auto px-6">
        <h2 className="mb-4 text-2xl">Contato</h2>
        <p className="text-[#bebebe] mb-4">Envie uma mensagem para consultar disponibilidade.</p>
        <form className="contact-form max-w-xl">
          <div className="form-row mb-3">
            <label className="text-[#bebebe]">Nome</label>
            <input placeholder="Digite seu nome completo" className="w-full rounded-md p-2 bg-[#0e0e0e] border border-[#242424] placeholder:text-[#8a8a8a]" />
          </div>
          <div className="form-row mb-3">
            <label className="text-[#bebebe]">E-mail</label>
            <input type="email" placeholder="Informe um e-mail válido ex: exemplo@gmail.com" className="w-full rounded-md p-2 bg-[#0e0e0e] border border-[#242424] placeholder:text-[#8a8a8a]" />
          </div>
          <div className="form-row mb-3">
            <label className="text-[#bebebe]">Mensagem</label>
            <textarea rows={5} placeholder="Conte-me um pouco sobre o motivo do seu contato" className="w-full rounded-md p-2 bg-[#0e0e0e] border border-[#242424] placeholder:text-[#8a8a8a]" />
          </div>
          <button className="btn-gold">Enviar</button>
        </form>
      </div>
    </section>
  )
}

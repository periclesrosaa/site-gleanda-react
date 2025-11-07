import React from 'react'
import { FaUserShield, FaGavel, FaUsers } from 'react-icons/fa'

export default function Areas(){
  return (
    <section id="areas" className="section py-40 scroll-mt-16">
      <div className="container mx-auto px-6">
        <h2 className="mb-4 text-2xl">Áreas de Atuação</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="service p-6 rounded-lg border border-[#242424] bg-[#121212] flex flex-col gap-3"> 
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-b from-[#f6da8a] to-[#b08d2a] rounded-full shadow-md ring-1 ring-black/20">
                <FaUserShield size={18} className="text-white" aria-hidden="true" />
              </span>
              <h3 className="font-semibold">Direito Previdenciário</h3>
            </div>
            <p className="text-[#bebebe]">Aposentadorias, benefícios e revisão de cálculos.</p>
          </div>
          <div className="service p-6 rounded-lg border border-[#242424] bg-[#121212] flex flex-col gap-3"> 
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-b from-[#f6da8a] to-[#b08d2a] rounded-full shadow-md ring-1 ring-black/20">
                <FaGavel size={18} className="text-white" aria-hidden="true" />
              </span>
              <h3 className="font-semibold">Direito Civil</h3>
            </div>
            <p className="text-[#bebebe]">Contratos, responsabilidade civil e direitos de propriedade.</p>
          </div>
          <div className="service p-6 rounded-lg border border-[#242424] bg-[#121212] flex flex-col gap-3"> 
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-b from-[#f6da8a] to-[#b08d2a] rounded-full shadow-md ring-1 ring-black/20">
                <FaUsers size={18} className="text-white" aria-hidden="true" />
              </span>
              <h3 className="font-semibold">Direito de Família</h3>
            </div>
            <p className="text-[#bebebe]">Divórcio, partilha de bens e pensão alimentícia.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

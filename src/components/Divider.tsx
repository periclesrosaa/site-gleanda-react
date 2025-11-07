import React from 'react'

type DividerProps = {
  className?: string
}

// Divider
// Small reusable golden divider used between major sections. Keep this
// component minimal so it's easy to tweak width/spacing from one place.
export default function Divider({ className = 'my-9' }: DividerProps){
  return (
    <div className="container mx-auto px-6">
      {/* wrapper spacing can be overridden per instance */}
      <div className={`${className} flex justify-center`}>
        <div className="w-full max-w-2xl">
          {/* thin golden line with tapered (transparent) ends; no extra glow */}
          <div
            className="h-0.5 rounded-full"
            style={{
              background: 'linear-gradient(90deg, rgba(0,0,0,0) 0%, #d4af37 12%, #b08d2a 88%, rgba(0,0,0,0) 100%)'
            }}
          />
        </div>
      </div>
    </div>
  )
}



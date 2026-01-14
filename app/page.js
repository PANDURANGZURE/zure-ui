"use client"

import './globals.css'
import Hero from '@/Hero'
import Cursor from '@/Components/Cursor';


export default function page() {
  const cards = [
    {
      title: "110+",
      label: "Creative Components",
      description: "Fully maintained and growing monthly",
      className: "md:col-span-2",
    },
    {
      title: "3",
      label: "Tools",
      description: "Boost your workflow",
      className: "md:row-span-2",
    },
    {
      title: "4",
      label: "Variants",
      description: "Choose your stack",
      className: "col-span-1",
    },
    {
      title: "100%",
      label: "Free & Open Source",
      description: "Loved by devs around the world",
      className: "col-span-1",
    },
  ];
  return (
    <>
    <Cursor/>
    <Hero/>
    <div className=''>
     <div className="min-h-screen bg-[#050505] p-8 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl w-full">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`
              ${card.className}
              p-8 rounded-2xl border border-white/10 bg-[#0A0A0A]
              flex flex-col justify-end min-h-[200px]
            `}
          >
            <h2 className="text-6xl font-bold bg-gradient-to-br from-gray-800 via-gray-300 to-white bg-clip-text text-transparent mb-4">
              {card.title}
            </h2>
            <p className="text-white text-xl font-semibold mb-1">
              {card.label}
            </p>
            <p className="text-gray-400 text-sm">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
    </div>
    </>
  )
}

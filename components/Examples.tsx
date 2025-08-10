'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Examples() {
  const [activeExample, setActiveExample] = useState(0)

  const examples = [
    {
      id: 1,
      title: 'Trasferimento di Stile',
      description: 'Trasforma le tue foto in opere d\'arte con stili artistici diversi',
      before: '/input_image.webp',
      after: '/transform_to_oil_painting_with_visible_brushstrokes_thick_paint_texture_and_rich_color_depth.webp',
      prompt: 'Trasforma in pittura a olio con pennellate visibili, texture di vernice spessa e profondità di colore ricca'
    },
    {
      id: 2,
      title: 'Modifica Attività',
      description: 'Cambia cosa stanno facendo le persone nelle immagini',
      before: '/this_character_is_now_picking_up_weeds_in_a_garden.webp',
      after: '/restyle_to_claymation_style.webp',
      prompt: 'Questo personaggio ora sta raccogliendo erbacce in un giardino'
    },
    {
      id: 3,
      title: 'Sostituzione Testo',
      description: 'Sostituisci il testo nelle immagini mantenendo lo stile',
      before: '/input_image (1).webp',
      after: '/replace_joy_by_BFL.webp',
      prompt: 'Sostituisci "JOY" con "BFL"'
    },
    {
      id: 4,
      title: 'Conversione Artistica',
      description: 'Converti foto in schizzi, dipinti o altri stili artistici',
      before: '/input_image.webp',
      after: '/convert_to_pencil_sketch_with_natural_graphite_lines_cross-hatching_and_visible_paper_texture.webp',
      prompt: 'Converti in schizzo a matita con linee di grafite naturali, tratteggio incrociato e texture di carta visibile'
    },
    {
      id: 5,
      title: 'Restyling Creativo',
      description: 'Applica stili creativi e unici alle tue immagini',
      before: '/input_image (2).webp',
      after: '/restyle_to_claymation_style.webp',
      prompt: 'Ridisegna in stile claymation'
    }
  ]

  return (
    <section id="examples" className="py-20 px-6 lg:px-12 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Prova FLUX Kontext Live
          </h2>
          <p className="text-xl text-gray-300">
            Trasformazioni di esempio che mostrano la potenza di FLUX Kontext
          </p>
        </div>

        {/* Example Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {examples.map((example, index) => (
            <button
              key={index}
              onClick={() => setActiveExample(index)}
              className={`px-4 py-2 rounded-full transition ${
                activeExample === index
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {example.title}
            </button>
          ))}
        </div>

        {/* Example Display */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-300">Prima</h3>
              <div className="relative aspect-video bg-gray-700 rounded-lg overflow-hidden">
                <Image
                  src={examples[activeExample].before}
                  alt="Immagine originale"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* After */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-300">Dopo</h3>
              <div className="relative aspect-video bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg overflow-hidden border border-purple-500/30">
                <Image
                  src={examples[activeExample].after}
                  alt="Immagine trasformata"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <div className="p-4 bg-gray-900/50 rounded-lg">
              <p className="text-gray-300 mb-2">
                <span className="text-purple-400 font-semibold">Prompt:</span> {examples[activeExample].prompt}
              </p>
            </div>
            <div className="p-4 bg-gray-900/50 rounded-lg">
              <p className="text-gray-300">
                <span className="text-purple-400 font-semibold">Descrizione:</span> {examples[activeExample].description}
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <a 
              href="https://flux1kontextai.com/it"
              target="_blank"
              className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full hover:opacity-90 transition"
            >
              Prova Questo Esempio
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

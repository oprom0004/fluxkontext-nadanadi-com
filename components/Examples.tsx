'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Examples() {
  const [activeExample, setActiveExample] = useState(0)

  const examples = [
    {
      id: 1,
      title: 'Transfert de Style',
      description: 'Transformez vos photos en œuvres d\'art avec différents styles artistiques',
      before: '/input_image.webp',
      after: '/transform_to_oil_painting_with_visible_brushstrokes_thick_paint_texture_and_rich_color_depth.webp',
      prompt: 'Transformer en peinture à l\'huile avec des coups de pinceau visibles, texture de peinture épaisse et profondeur de couleur riche'
    },
    {
      id: 2,
      title: 'Modification d\'Activité',
      description: 'Changez ce que font les personnes dans les images',
      before: '/this_character_is_now_picking_up_weeds_in_a_garden.webp',
      after: '/restyle_to_claymation_style.webp',
      prompt: 'Ce personnage ramasse maintenant des mauvaises herbes dans un jardin'
    },
    {
      id: 3,
      title: 'Remplacement de Texte',
      description: 'Remplacez le texte dans les images en conservant le style',
      before: '/input_image (1).webp',
      after: '/replace_joy_by_BFL.webp',
      prompt: 'Remplacer "JOY" par "BFL"'
    },
    {
      id: 4,
      title: 'Conversion Artistique',
      description: 'Convertissez des photos en croquis, peintures ou autres styles artistiques',
      before: '/input_image.webp',
      after: '/convert_to_pencil_sketch_with_natural_graphite_lines_cross-hatching_and_visible_paper_texture.webp',
      prompt: 'Convertir en croquis au crayon avec des lignes de graphite naturelles, hachures croisées et texture de papier visible'
    },
    {
      id: 5,
      title: 'Restylage Créatif',
      description: 'Appliquez des styles créatifs et uniques à vos images',
      before: '/input_image (2).webp',
      after: '/restyle_to_claymation_style.webp',
      prompt: 'Restyler en style claymation'
    }
  ]

  return (
    <section id="examples" className="py-20 px-6 lg:px-12 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Essayez FLUX Kontext en Direct
          </h2>
          <p className="text-xl text-gray-300">
            Transformations d'exemple qui montrent la puissance de FLUX Kontext
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
              <h3 className="text-lg font-semibold text-gray-300">Avant</h3>
              <div className="relative aspect-video bg-gray-700 rounded-lg overflow-hidden">
                <Image
                  src={examples[activeExample].before}
                  alt="Image originale"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* After */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-300">Après</h3>
              <div className="relative aspect-video bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg overflow-hidden border border-purple-500/30">
                <Image
                  src={examples[activeExample].after}
                  alt="Image transformée"
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
                <span className="text-purple-400 font-semibold">Description:</span> {examples[activeExample].description}
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <a 
              href="https://flux1kontextai.com/fr"
              target="_blank"
              className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full hover:opacity-90 transition"
            >
              Essayer Cet Exemple
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

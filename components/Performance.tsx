export default function Performance() {
  return (
    <section className="py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Découvrez FLUX.1 Kontext
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Le dernier ajout à la famille FLUX.1 de Black Forest Labs. FLUX.1 Kontext est le modèle 
            de référence pour l'édition d'images utilisant des prompts textuels, offrant 
            des résultats précis et brillants qui surpassent la concurrence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Dev Version */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-purple-500 transition">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">🔥</span>
              <h3 className="text-2xl font-bold text-white">FLUX.1 Kontext [dev]</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Version de développement gratuite pour l'expérimentation et le prototypage rapide. Parfaite pour 
              les développeurs et les créatifs.
            </p>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                Accès API illimité
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                Traitement rapide
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                Usage commercial
              </li>
            </ul>
          </div>

          {/* Pro Version */}
          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl p-8 border-2 border-purple-500 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                PLUS POPULAIRE
              </span>
            </div>
            <div className="flex items-center mb-4">
              <h3 className="text-2xl font-bold text-white">FLUX.1 Kontext [pro]</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Version professionnelle avec performances améliorées et fonctionnalités avancées pour usage 
              commercial.
            </p>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                Qualité supérieure
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                Traitement prioritaire
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                Support dédié
              </li>
            </ul>
          </div>

          {/* Max Version */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-purple-500 transition">
            <div className="flex items-center mb-4">
              <h3 className="text-2xl font-bold text-white">FLUX.1 Kontext [max]</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Performances et qualité maximales pour les applications d'entreprise et la production à grande échelle.
            </p>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                Résolution maximale
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                Traitement par lots
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                SLA garanti
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link 
            href="https://flux1kontextai.com/fr"
            target="_blank"
            className="inline-flex items-center text-purple-400 hover:text-purple-300 transition"
          >
            Comparer toutes les versions
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

import Link from 'next/link'

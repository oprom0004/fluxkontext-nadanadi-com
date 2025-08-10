import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-20 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
            }}></div>
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              L'Avenir de l'Édition d'Images
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Rejoignez des milliers de créatifs et de développeurs qui utilisent FLUX Kontext pour 
              transformer leurs images avec l'intelligence artificielle.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="https://flux1kontextai.com/fr"
                target="_blank"
                className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105"
              >
                Commencer Gratuitement
              </Link>
              <Link 
                href="https://flux1kontextai.com"
                target="_blank"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition"
              >
                Voir les Tarifs
              </Link>
            </div>

            <p className="text-white/80 mt-8 text-sm">
              Aucune carte de crédit requise • Accès immédiat • Annulez à tout moment
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">10M+</div>
            <div className="text-gray-400">Images Traitées</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">50K+</div>
            <div className="text-gray-400">Utilisateurs Actifs</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">99.9%</div>
            <div className="text-gray-400">Disponibilité</div>
          </div>
        </div>
      </div>
    </section>
  )
}

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
              Il Futuro dell'Editing di Immagini
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Unisciti a migliaia di creativi e sviluppatori che utilizzano FLUX Kontext per 
              trasformare le loro immagini con l'intelligenza artificiale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="https://flux1kontextai.com/it"
                target="_blank"
                className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105"
              >
                Inizia Gratuitamente
              </Link>
              <Link 
                href="https://flux1kontextai.com"
                target="_blank"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition"
              >
                Vedi Prezzi
              </Link>
            </div>

            <p className="text-white/80 mt-8 text-sm">
              Nessuna carta di credito richiesta • Accesso immediato • Cancella in qualsiasi momento
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">10M+</div>
            <div className="text-gray-400">Immagini Elaborate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">50K+</div>
            <div className="text-gray-400">Utenti Attivi</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">99.9%</div>
            <div className="text-gray-400">Uptime</div>
          </div>
        </div>
      </div>
    </section>
  )
}

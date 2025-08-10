import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">F</span>
              </div>
              <span className="text-white text-lg font-bold">FLUX Kontext</span>
            </div>
            <p className="text-gray-400 text-sm">
              Editing professionale di immagini AI con trasformazioni consapevoli del contesto.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-4">Prodotto</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="text-gray-400 hover:text-white transition text-sm">
                  Caratteristiche
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-gray-400 hover:text-white transition text-sm">
                  Prezzi
                </Link>
              </li>
              <li>
                <Link href="#api" className="text-gray-400 hover:text-white transition text-sm">
                  API
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Risorse</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#tutorial" className="text-gray-400 hover:text-white transition text-sm">
                  Tutorial
                </Link>
              </li>
              <li>
                <Link href="#blog" className="text-gray-400 hover:text-white transition text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#community" className="text-gray-400 hover:text-white transition text-sm">
                  Comunità
                </Link>
              </li>
              <li>
                <Link href="#support" className="text-gray-400 hover:text-white transition text-sm">
                  Supporto
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Azienda</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition text-sm">
                  Chi Siamo
                </Link>
              </li>
              <li>
                <Link href="#careers" className="text-gray-400 hover:text-white transition text-sm">
                  Carriere
                </Link>
              </li>
              <li>
                <Link href="#privacy" className="text-gray-400 hover:text-white transition text-sm">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#terms" className="text-gray-400 hover:text-white transition text-sm">
                  Termini
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 FLUX Kontext. Tutti i diritti riservati.
          </p>
          
          {/* Social Links */}
          <div className="flex space-x-4">
            <Link href="https://flux1kontextai.com" target="_blank" className="text-gray-400 hover:text-white transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </Link>
            <Link href="https://flux1kontextai.com" target="_blank" className="text-gray-400 hover:text-white transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </Link>
            <Link href="https://flux1kontextai.com" target="_blank" className="text-gray-400 hover:text-white transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-5.784.144-7.884 0C6.249 16.729 6.008 15.388 6 12c.008-3.396.249-4.729 2.557-4.892 2.1-.144 5.782-.144 7.884 0 2.308.163 2.549 1.504 2.557 4.892-.008 3.396-.249 4.729-2.557 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z"/>
              </svg>
            </Link>
            <Link href="https://flux1kontextai.com" target="_blank" className="text-gray-400 hover:text-white transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* Additional Links */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Powered by Black Forest Labs • Parte della famiglia FLUX.1
          </p>
          <div className="mt-4">
            <Link 
              href="https://flux1kontextai.com/it"
              target="_blank"
              className="text-purple-400 hover:text-purple-300 transition text-sm"
            >
              Prova FLUX Kontext Gratis →
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

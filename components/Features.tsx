export default function Features() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V8.93l7-3.11v7.17z"/>
        </svg>
      ),
      title: 'Édition Contextuelle',
      description: 'Compréhension intelligente de la sémantique de l\'image pour des modifications précises qui préservent l\'esthétique naturelle.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 2v11h3v9l7-12h-4l4-8z"/>
        </svg>
      ),
      title: 'Vitesse Éclair',
      description: 'Architecture neuronale optimisée qui fournit des résultats professionnels en quelques secondes pour des flux de travail en temps réel.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-8.31c.67 0 1.21.54 1.21 1.21s-.54 1.21-1.21 1.21-1.21-.54-1.21-1.21.54-1.21 1.21-1.21z"/>
        </svg>
      ),
      title: 'Contrôle de Précision',
      description: 'Contrôle granulaire sur les transformations avec des paramètres intuitifs et des capacités de réglage fin.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/>
        </svg>
      ),
      title: 'Qualité SOTA',
      description: 'Résultats de pointe qui surpassent les modèles existants dans tous les benchmarks de qualité.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
        </svg>
      ),
      title: 'Adapté aux Développeurs',
      description: 'API complète, SDK et documentation pour une intégration transparente.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
        </svg>
      ),
      title: 'Prêt pour l\'Entreprise',
      description: 'Infrastructure de production avec sécurité d\'entreprise et garantie SLA de 99,9%.'
    }
  ]

  return (
    <section id="features" className="py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Fonctionnalités Puissantes
          </h2>
          <p className="text-xl text-gray-300">
            Tout ce dont vous avez besoin pour l'édition professionnelle d'images IA
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition group"
            >
              <div className="w-16 h-16 mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white shadow-lg shadow-purple-500/25">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Features Grid */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              API et Intégrations
            </h3>
            <p className="text-gray-300 mb-6">
              Intégrez FLUX Kontext dans vos applications avec notre API RESTful complète et nos SDK 
              pour Python, JavaScript, et plus encore.
            </p>
            <a 
              href="https://flux1kontextai.com"
              target="_blank"
              className="inline-flex items-center text-purple-400 hover:text-purple-300 transition"
            >
              Explorer la documentation API
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl p-8 border border-blue-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Support Multilingue
            </h3>
            <p className="text-gray-300 mb-6">
              FLUX Kontext prend en charge les prompts dans plus de 30 langues, vous permettant de créer et modifier 
              des images dans votre langue préférée.
            </p>
            <a 
              href="https://flux1kontextai.com/fr"
              target="_blank"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition"
            >
              Commencer dans votre langue
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

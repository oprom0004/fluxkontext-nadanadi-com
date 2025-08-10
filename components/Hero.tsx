'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="relative z-50 px-6 py-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">F</span>
            </div>
            <span className="text-white text-xl font-bold">FLUX Kontext</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-300 hover:text-white transition">
              Caratteristiche
            </Link>
            <Link href="#examples" className="text-gray-300 hover:text-white transition">
              Esempi
            </Link>
            <Link href="#pricing" className="text-gray-300 hover:text-white transition">
              Prezzi
            </Link>
            <Link 
              href="https://flux1kontextai.com/it" 
              target="_blank"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:opacity-90 transition"
            >
              Inizia Gratis
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-lg border-t border-gray-800">
            <div className="px-6 py-4 space-y-4">
              <Link href="#features" className="block text-gray-300 hover:text-white transition">
                Caratteristiche
              </Link>
              <Link href="#examples" className="block text-gray-300 hover:text-white transition">
                Esempi
              </Link>
              <Link href="#pricing" className="block text-gray-300 hover:text-white transition">
                Prezzi
              </Link>
              <Link 
                href="https://flux1kontextai.com/it" 
                target="_blank"
                className="block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:opacity-90 transition text-center"
              >
                Inizia Gratis
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              FLUX Kontext
            </span>
            <br />
            Editing di Immagini AI Gratuito
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Editing professionale di immagini AI con trasferimento di stile e trasformazioni consapevoli del contesto.
          </p>

          <div className="flex justify-center mb-12">
            <Link 
              href="https://flux1kontextai.com/it"
              target="_blank"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition transform hover:scale-105"
            >
              Prova FLUX Kontext Gratis
            </Link>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full text-sm text-gray-300 border border-gray-700">
              ✨ Nessuna registrazione richiesta
            </span>
            <span className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full text-sm text-gray-300 border border-gray-700">
              🚀 Risultati istantanei
            </span>
            <span className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full text-sm text-gray-300 border border-gray-700">
              🎨 Qualità professionale
            </span>
          </div>
        </div>
      </div>

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
    </section>
  )
}

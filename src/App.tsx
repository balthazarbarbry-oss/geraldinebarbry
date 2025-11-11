import { Menu, X, Phone, MapPin, ChevronDown, Users, BookOpen, Wrench, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import CalendlyModal from './components/CalendlyModal';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [faqDropdownOpen, setFaqDropdownOpen] = useState(false);
  const [articlesDropdownOpen, setArticlesDropdownOpen] = useState(false);
  const [calendlyModalOpen, setCalendlyModalOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const calendlyUrl = import.meta.env.VITE_CALENDLY_URL || '';

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#779979]/5">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Logo centré */}
          <div className="flex justify-center py-4">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center"
            >
              <img
                src="/logo.png"
                alt="Logo"
                className="h-14 md:h-16 w-auto"
              />
            </button>
          </div>
          
          {/* Menu de navigation */}
          <div className="hidden md:flex items-center justify-center gap-8 pb-4">
            <div className="relative"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <button className="relative text-gray-600 hover:text-[#779979] transition-colors flex items-center gap-1 font-medium after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-4px] after:left-1/2 after:-translate-x-1/2 after:bg-[#779979] after:transition-all after:duration-300 hover:after:w-full">
                Qui sommes-nous
                <ChevronDown size={16} className={`transition-transform ${aboutDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {aboutDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-2xl shadow-lg border border-gray-100 py-2">
                  <button onClick={() => scrollToSection('evars')} className="w-full text-left px-4 py-3 text-gray-600 hover:bg-[#779979]/5 hover:text-[#779979] transition-colors">
                    EVARS : Qu'est-ce que c'est ?
                  </button>
                  <button onClick={() => scrollToSection('thematiques')} className="w-full text-left px-4 py-3 text-gray-600 hover:bg-[#779979]/5 hover:text-[#779979] transition-colors">
                    Les différentes thématiques
                  </button>
                  <button onClick={() => scrollToSection('public')} className="w-full text-left px-4 py-3 text-gray-600 hover:bg-[#779979]/5 hover:text-[#779979] transition-colors">
                    Notre public
                  </button>
                </div>
              )}
            </div>
            <button onClick={() => scrollToSection('conferences')} className="relative text-gray-600 hover:text-[#779979] transition-colors font-medium after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-4px] after:left-1/2 after:-translate-x-1/2 after:bg-[#779979] after:transition-all after:duration-300 hover:after:w-full">
              Conférences
            </button>
            <button onClick={() => scrollToSection('outils')} className="relative text-gray-600 hover:text-[#779979] transition-colors font-medium after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-4px] after:left-1/2 after:-translate-x-1/2 after:bg-[#779979] after:transition-all after:duration-300 hover:after:w-full">
              Nos outils
            </button>
            <div className="relative"
              onMouseEnter={() => setArticlesDropdownOpen(true)}
              onMouseLeave={() => setArticlesDropdownOpen(false)}
            >
              <button className="relative text-gray-600 hover:text-[#779979] transition-colors flex items-center gap-1 font-medium after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-4px] after:left-1/2 after:-translate-x-1/2 after:bg-[#779979] after:transition-all after:duration-300 hover:after:w-full">
                Articles
                <ChevronDown size={16} className={`transition-transform ${articlesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {articlesDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-white rounded-2xl shadow-lg border border-gray-100 py-2 z-50">
                  <button onClick={() => { scrollToSection('articles'); setArticlesDropdownOpen(false); }} className="w-full text-left px-4 py-3 text-gray-600 hover:bg-[#779979]/5 hover:text-[#779979] transition-colors">
                    L'importance de l'éducation affective et relationnelle
                  </button>
                  <button onClick={() => { scrollToSection('articles'); setArticlesDropdownOpen(false); }} className="w-full text-left px-4 py-3 text-gray-600 hover:bg-[#779979]/5 hover:text-[#779979] transition-colors">
                    Comment parler de sexualité avec ses enfants ?
                  </button>
                  <button onClick={() => { scrollToSection('articles'); setArticlesDropdownOpen(false); }} className="w-full text-left px-4 py-3 text-gray-600 hover:bg-[#779979]/5 hover:text-[#779979] transition-colors">
                    Le consentement : un concept clé
                  </button>
                  <button onClick={() => { scrollToSection('articles'); setArticlesDropdownOpen(false); }} className="w-full text-left px-4 py-3 text-gray-600 hover:bg-[#779979]/5 hover:text-[#779979] transition-colors">
                    L'EVARS en milieu scolaire
                  </button>
                </div>
              )}
            </div>
            <div className="relative"
              onMouseEnter={() => setFaqDropdownOpen(true)}
              onMouseLeave={() => setFaqDropdownOpen(false)}
            >
              <button className="relative text-gray-600 hover:text-[#779979] transition-colors flex items-center gap-1 font-medium after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-4px] after:left-1/2 after:-translate-x-1/2 after:bg-[#779979] after:transition-all after:duration-300 hover:after:w-full">
                FAQ
                <ChevronDown size={16} className={`transition-transform ${faqDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {faqDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-96 bg-white rounded-2xl shadow-lg border border-gray-100 py-2 z-50 max-h-96 overflow-y-auto">
                  <button onClick={() => { scrollToSection('faq'); setFaqDropdownOpen(false); }} className="w-full text-left px-4 py-3 text-gray-600 hover:bg-[#779979]/5 hover:text-[#779979] transition-colors">
                    Quelle est la durée d'une intervention ?
                  </button>
                  <button onClick={() => { scrollToSection('faq'); setFaqDropdownOpen(false); }} className="w-full text-left px-4 py-3 text-gray-600 hover:bg-[#779979]/5 hover:text-[#779979] transition-colors">
                    Quels sont les tarifs ?
                  </button>
                  <button onClick={() => { scrollToSection('faq'); setFaqDropdownOpen(false); }} className="w-full text-left px-4 py-3 text-gray-600 hover:bg-[#779979]/5 hover:text-[#779979] transition-colors">
                    Comment organiser une intervention ?
                  </button>
                  <button onClick={() => { scrollToSection('faq'); setFaqDropdownOpen(false); }} className="w-full text-left px-4 py-3 text-gray-600 hover:bg-[#779979]/5 hover:text-[#779979] transition-colors">
                    Les interventions respectent-elles le cadre légal ?
                  </button>
                  <button onClick={() => { scrollToSection('faq'); setFaqDropdownOpen(false); }} className="w-full text-left px-4 py-3 text-gray-600 hover:bg-[#779979]/5 hover:text-[#779979] transition-colors">
                    À partir de quel âge peut-on bénéficier d'une intervention EVARS ?
                  </button>
                  <button onClick={() => { scrollToSection('faq'); setFaqDropdownOpen(false); }} className="w-full text-left px-4 py-3 text-gray-600 hover:bg-[#779979]/5 hover:text-[#779979] transition-colors">
                    Les parents sont-ils informés des interventions ?
                  </button>
                  <button onClick={() => { scrollToSection('faq'); setFaqDropdownOpen(false); }} className="w-full text-left px-4 py-3 text-gray-600 hover:bg-[#779979]/5 hover:text-[#779979] transition-colors">
                    Proposez-vous des interventions individuelles ?
                  </button>
                </div>
              )}
            </div>
            <button
              onClick={() => setCalendlyModalOpen(true)}
              className="bg-[#779979] text-white px-6 py-2.5 rounded-full hover:bg-[#658968] transition-all hover:scale-105 font-medium shadow-md"
            >
              Contact
            </button>
          </div>

          {/* Menu mobile */}
          <div className="md:hidden pb-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col gap-4">
                <div>
                  <button onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)} className="text-gray-600 hover:text-[#779979] transition-colors text-left flex items-center gap-1 w-full font-medium">
                    Qui sommes-nous
                    <ChevronDown size={16} className={`transition-transform ${aboutDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {aboutDropdownOpen && (
                    <div className="ml-4 mt-2 flex flex-col gap-2">
                      <button onClick={() => scrollToSection('evars')} className="text-gray-600 hover:text-[#779979] transition-colors text-left text-sm">
                        EVARS : Qu'est-ce que c'est ?
                      </button>
                      <button onClick={() => scrollToSection('thematiques')} className="text-gray-600 hover:text-[#779979] transition-colors text-left text-sm">
                        Les différentes thématiques
                      </button>
                      <button onClick={() => scrollToSection('public')} className="text-gray-600 hover:text-[#779979] transition-colors text-left text-sm">
                        Notre public
                      </button>
                    </div>
                  )}
                </div>
                <button onClick={() => scrollToSection('conferences')} className="text-gray-600 hover:text-[#779979] transition-colors text-left font-medium">
                  Conférences
                </button>
                <button onClick={() => scrollToSection('outils')} className="text-gray-600 hover:text-[#779979] transition-colors text-left font-medium">
                  Nos outils
                </button>
                <div>
                  <button onClick={() => setArticlesDropdownOpen(!articlesDropdownOpen)} className="text-gray-600 hover:text-[#779979] transition-colors text-left flex items-center gap-1 w-full font-medium">
                    Articles
                    <ChevronDown size={16} className={`transition-transform ${articlesDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {articlesDropdownOpen && (
                    <div className="ml-4 mt-2 flex flex-col gap-2">
                      <button onClick={() => { scrollToSection('articles'); setArticlesDropdownOpen(false); }} className="text-gray-600 hover:text-[#779979] transition-colors text-left text-sm">
                        L'importance de l'éducation affective
                      </button>
                      <button onClick={() => { scrollToSection('articles'); setArticlesDropdownOpen(false); }} className="text-gray-600 hover:text-[#779979] transition-colors text-left text-sm">
                        Comment parler de sexualité avec ses enfants ?
                      </button>
                      <button onClick={() => { scrollToSection('articles'); setArticlesDropdownOpen(false); }} className="text-gray-600 hover:text-[#779979] transition-colors text-left text-sm">
                        Le consentement : un concept clé
                      </button>
                      <button onClick={() => { scrollToSection('articles'); setArticlesDropdownOpen(false); }} className="text-gray-600 hover:text-[#779979] transition-colors text-left text-sm">
                        L'EVARS en milieu scolaire
                      </button>
                    </div>
                  )}
                </div>
                <div>
                  <button onClick={() => setFaqDropdownOpen(!faqDropdownOpen)} className="text-gray-600 hover:text-[#779979] transition-colors text-left flex items-center gap-1 w-full font-medium">
                    FAQ
                    <ChevronDown size={16} className={`transition-transform ${faqDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {faqDropdownOpen && (
                    <div className="ml-4 mt-2 flex flex-col gap-2">
                      <button onClick={() => { scrollToSection('faq'); setFaqDropdownOpen(false); }} className="text-gray-600 hover:text-[#779979] transition-colors text-left text-sm">
                        Durée d'une intervention
                      </button>
                      <button onClick={() => { scrollToSection('faq'); setFaqDropdownOpen(false); }} className="text-gray-600 hover:text-[#779979] transition-colors text-left text-sm">
                        Tarifs
                      </button>
                      <button onClick={() => { scrollToSection('faq'); setFaqDropdownOpen(false); }} className="text-gray-600 hover:text-[#779979] transition-colors text-left text-sm">
                        Organiser une intervention
                      </button>
                      <button onClick={() => { scrollToSection('faq'); setFaqDropdownOpen(false); }} className="text-gray-600 hover:text-[#779979] transition-colors text-left text-sm">
                        Cadre légal
                      </button>
                      <button onClick={() => { scrollToSection('faq'); setFaqDropdownOpen(false); }} className="text-gray-600 hover:text-[#779979] transition-colors text-left text-sm">
                        À partir de quel âge ?
                      </button>
                      <button onClick={() => { scrollToSection('faq'); setFaqDropdownOpen(false); }} className="text-gray-600 hover:text-[#779979] transition-colors text-left text-sm">
                        Information des parents
                      </button>
                      <button onClick={() => { scrollToSection('faq'); setFaqDropdownOpen(false); }} className="text-gray-600 hover:text-[#779979] transition-colors text-left text-sm">
                        Interventions individuelles
                      </button>
                    </div>
                  )}
                </div>
                <button
                  onClick={() => setCalendlyModalOpen(true)}
                  className="bg-[#779979] text-white px-6 py-2.5 rounded-full hover:bg-[#658968] transition-colors text-left font-medium"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <section className="pt-40 pb-24 px-6 lg:px-12 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Texte à gauche */}
            <div className="text-left">
              <h1 className="text-5xl lg:text-7xl font-semibold text-gray-900 mb-6 leading-tight">
                Éducation Affective<br />et Relationnelle
              </h1>
              <p className="text-xl lg:text-2xl text-[#779979] font-medium mb-8">
                EVARS — Mouvaux, France
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                Accompagner les jeunes et les adultes dans leur développement affectif, relationnel et sexuel avec bienveillance et professionnalisme.
              </p>
              <button
                onClick={() => setCalendlyModalOpen(true)}
                className="bg-[#779979] text-white px-10 py-4 rounded-full text-lg hover:bg-[#658968] transition-all hover:scale-105 font-medium shadow-lg"
              >
                Prendre rendez-vous
              </button>
            </div>
            {/* Image à droite */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-3/5 max-w-md">
                <div className="absolute inset-0 bg-gradient-to-br from-[#779979]/20 to-transparent rounded-3xl blur-xl"></div>
                <img
                  src="/design-hero.png"
                  alt="Éducation Affective et Relationnelle"
                  className="relative w-full rounded-3xl shadow-lg opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section EVARS */}
      <section id="evars" className="py-24 px-6 lg:px-12 bg-gradient-to-br from-[#779979]/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
              Qu'est-ce que l'EVARS ?
            </h2>
            <p className="text-xl text-[#779979] font-medium mb-4">
              Éducation à la Vie Affective, Relationnelle et Sexuelle
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-[#779979] to-[#658968] rounded-2xl flex items-center justify-center">
                <BookOpen size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Une approche globale</h3>
              <p className="text-gray-600 leading-relaxed">
                L'EVARS ne se limite pas à l'aspect biologique de la sexualité. Elle englobe l'ensemble des dimensions de la vie affective et relationnelle : les émotions, le respect, le consentement, la communication, et la construction de relations saines et épanouissantes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-[#779979] to-[#658968] rounded-2xl flex items-center justify-center">
                <Users size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Adaptée à chaque âge</h3>
              <p className="text-gray-600 leading-relaxed">
                Les interventions EVARS sont conçues pour s'adapter au niveau de développement et à la maturité de chaque groupe. Du CM2 à la terminale, le contenu et les méthodes pédagogiques sont ajustés pour être appropriés et compréhensibles.
              </p>
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Les objectifs de l'EVARS</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-[#779979] to-[#658968] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Développer l'estime de soi</h4>
                <p className="text-sm text-gray-600">Renforcer la confiance en soi et l'acceptation de son corps</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-[#779979] to-[#658968] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Comprendre le consentement</h4>
                <p className="text-sm text-gray-600">Apprendre à respecter les limites et à exprimer ses besoins</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-[#779979] to-[#658968] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Améliorer la communication</h4>
                <p className="text-sm text-gray-600">Développer des compétences pour des relations saines</p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-br from-[#779979] to-[#658968] p-10 rounded-3xl text-white text-center">
            <h3 className="text-2xl font-semibold mb-4">Un cadre légal et éthique</h3>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
              L'EVARS s'inscrit dans le cadre de la loi relative à l'éducation à la sexualité. Elle respecte les recommandations du Ministère de l'Éducation Nationale et est toujours menée en collaboration avec les équipes éducatives et les familles.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-20 text-center">
            Qui suis-je ?
          </h2>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="/screenshot1.png"
                alt="Géraldine Barbry - Conseillère conjugale et familiale"
                className="w-full rounded-3xl shadow-2xl"
              />
            </div>
            <div>
              <h3 className="text-3xl font-semibold text-gray-900 mb-8">
                Géraldine Barbry
              </h3>
              <p className="text-lg text-[#779979] font-medium mb-6">
                Conseillère conjugale et familiale dans la région de Lille
              </p>
              <div className="space-y-5 text-base text-gray-600 leading-relaxed">
                <p>
                  Mes compétences en thérapie conjugale et familiale s'appuient sur une formation reconnue. En effet, diplômée de la Fédération Nationale Couples et Familles de Paris, je détiens un agrément d'État du Ministère des Solidarités et de la Santé de conseillère conjugale et familiale.
                </p>
                <p>
                  Je suis également qualifiée en éducation à la vie affective, relationnelle et sexuelle. J'interviens au sein des établissements scolaires du Nord (du CM2 à la terminale) pour y aborder les sujets sur la vie affective, relationnelle et sexuelle.
                </p>
                <p>
                  Je suis Membre de l'Association Nationale des Conseillers Conjugaux et Familiaux, l'ANCCEF.
                </p>
                <div className="bg-gradient-to-br from-[#779979]/10 to-[#779979]/5 p-8 rounded-2xl mt-8 border border-[#779979]/20">
                  <p className="text-lg font-semibold text-gray-900">
                    Intégrité, écoute empathique et respect sont mes valeurs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 bg-gradient-to-br from-[#779979]/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-16 text-center">
            Ceux qui nous font confiance
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="w-36 h-36 bg-white rounded-2xl flex items-center justify-center shadow-md hover:shadow-xl transition-shadow">
              <div className="text-gray-400 text-sm text-center font-medium">Collège<br />Saint-Joseph</div>
            </div>
            <div className="w-36 h-36 bg-white rounded-2xl flex items-center justify-center shadow-md hover:shadow-xl transition-shadow">
              <div className="text-gray-400 text-sm text-center font-medium">Lycée<br />Notre-Dame</div>
            </div>
            <div className="w-36 h-36 bg-white rounded-2xl flex items-center justify-center shadow-md hover:shadow-xl transition-shadow">
              <div className="text-gray-400 text-sm text-center font-medium">Établissement<br />Saint-Paul</div>
            </div>
            <div className="w-36 h-36 bg-white rounded-2xl flex items-center justify-center shadow-md hover:shadow-xl transition-shadow">
              <div className="text-gray-400 text-sm text-center font-medium">Institution<br />Saint-Jude</div>
            </div>
          </div>
        </div>
      </section>

      <section id="evars" className="py-24 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-16 text-center">
            EVARS : Qu'est-ce que c'est ?
          </h2>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              EVARS signifie <strong className="text-gray-900">Éducation à la Vie Affective, Relationnelle et Sexuelle</strong>. Il s'agit d'une approche éducative globale qui vise à accompagner les jeunes et les adultes dans leur développement personnel et relationnel.
            </p>
            <p>
              Notre mission est d'offrir un espace de parole bienveillant où chacun peut s'exprimer librement sur des questions liées à l'affectivité, aux relations, à l'identité, au corps et à la sexualité.
            </p>
            <p>
              Nous intervenons dans les établissements scolaires, les associations, les centres sociaux et auprès des parents pour proposer des temps d'échange adaptés à chaque public.
            </p>
            <div className="bg-gradient-to-br from-[#779979]/10 to-[#779979]/5 p-10 rounded-3xl mt-10 border border-[#779979]/20">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">À quoi ça sert ?</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-[#779979] font-bold">•</span>
                  <span>Favoriser l'estime de soi et la confiance en soi</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#779979] font-bold">•</span>
                  <span>Développer des compétences relationnelles et sociales</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#779979] font-bold">•</span>
                  <span>Prévenir les violences et les comportements à risque</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#779979] font-bold">•</span>
                  <span>Accompagner la réflexion sur l'égalité filles-garçons</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#779979] font-bold">•</span>
                  <span>Aborder les questions de consentement et de respect</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#779979] font-bold">•</span>
                  <span>Informer sur la vie affective et sexuelle de manière adaptée</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="thematiques" className="py-24 px-6 lg:px-12 bg-gradient-to-br from-[#779979]/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-16 text-center">
            Les différentes thématiques
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Estime de soi</h3>
              <p className="text-gray-600">Développer la confiance en soi, apprendre à se connaître et à s'accepter.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Relations interpersonnelles</h3>
              <p className="text-gray-600">Communication, écoute, empathie et gestion des conflits.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Vie affective</h3>
              <p className="text-gray-600">Émotions, sentiments, amour et attachement.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Éducation à la sexualité</h3>
              <p className="text-gray-600">Information adaptée à l'âge sur la puberté, la reproduction et la sexualité.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Consentement et respect</h3>
              <p className="text-gray-600">Prévention des violences, respect de soi et des autres.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Égalité et diversité</h3>
              <p className="text-gray-600">Déconstruction des stéréotypes, égalité filles-garçons.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="public" className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-16 text-center">
            Notre public
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-[#779979] to-[#658968] rounded-3xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Users size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Enfants et adolescents</h3>
              <p className="text-gray-600 leading-relaxed">
                Interventions adaptées dans les écoles, collèges et lycées, du primaire au lycée, en petits groupes ou classes entières.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-[#779979] to-[#658968] rounded-3xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Users size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Parents et familles</h3>
              <p className="text-gray-600 leading-relaxed">
                Ateliers et conférences pour accompagner les parents dans l'éducation affective et sexuelle de leurs enfants.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-[#779979] to-[#658968] rounded-3xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Users size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Professionnels</h3>
              <p className="text-gray-600 leading-relaxed">
                Formation et sensibilisation des équipes éducatives, travailleurs sociaux et professionnels de santé.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="conferences" className="py-24 px-6 lg:px-12 bg-gradient-to-br from-[#779979]/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-16 text-center">
            Conférences pour adultes
          </h2>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed mb-16 text-center max-w-3xl mx-auto">
            <p>
              Nous proposons des conférences thématiques destinées aux parents, aux professionnels de l'éducation et à toute personne souhaitant approfondir ses connaissances.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-20 h-20 mb-8 bg-gradient-to-br from-[#779979] to-[#658968] rounded-2xl flex items-center justify-center shadow-md">
                <BookOpen size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Pour les parents</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-[#779979] font-bold">•</span>
                  <span>Comment parler de sexualité avec ses enfants ?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#779979] font-bold">•</span>
                  <span>Adolescence et changements : comment accompagner ?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#779979] font-bold">•</span>
                  <span>Écrans et relations : trouver l'équilibre</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#779979] font-bold">•</span>
                  <span>Prévenir les violences sexuelles : sensibiliser sans effrayer</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-20 h-20 mb-8 bg-gradient-to-br from-[#779979] to-[#658968] rounded-2xl flex items-center justify-center shadow-md">
                <BookOpen size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Pour les professionnels</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-[#779979] font-bold">•</span>
                  <span>Aborder l'EVARS en milieu scolaire</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#779979] font-bold">•</span>
                  <span>Gestion des questions difficiles des jeunes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#779979] font-bold">•</span>
                  <span>Cadre légal et éthique des interventions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#779979] font-bold">•</span>
                  <span>Coopération parents-école sur ces questions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="outils" className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-16 text-center">
            Nos outils pédagogiques
          </h2>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed mb-16 text-center max-w-4xl mx-auto">
            <p>
              Nous utilisons une variété d'outils pédagogiques adaptés à chaque public pour favoriser l'échange, la réflexion et l'apprentissage dans un climat de confiance et de respect.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <div className="w-20 h-20 mb-8 bg-gradient-to-br from-[#779979] to-[#658968] rounded-2xl flex items-center justify-center shadow-md">
                <Wrench size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Supports visuels</h3>
              <p className="text-gray-600">Vidéos, images, schémas anatomiques adaptés à l'âge pour illustrer et faciliter la compréhension.</p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <div className="w-20 h-20 mb-8 bg-gradient-to-br from-[#779979] to-[#658968] rounded-2xl flex items-center justify-center shadow-md">
                <Wrench size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Jeux et activités</h3>
              <p className="text-gray-600">Jeux de rôle, quizz, débats mouvants pour favoriser l'interaction et la participation active.</p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <div className="w-20 h-20 mb-8 bg-gradient-to-br from-[#779979] to-[#658968] rounded-2xl flex items-center justify-center shadow-md">
                <Wrench size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Espace de parole</h3>
              <p className="text-gray-600">Cercles de discussion, boîte à questions anonymes pour libérer la parole en toute sécurité.</p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <div className="w-20 h-20 mb-8 bg-gradient-to-br from-[#779979] to-[#658968] rounded-2xl flex items-center justify-center shadow-md">
                <Wrench size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Supports écrits</h3>
              <p className="text-gray-600">Fiches pédagogiques, brochures d'information à emporter pour prolonger la réflexion.</p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <div className="w-20 h-20 mb-8 bg-gradient-to-br from-[#779979] to-[#658968] rounded-2xl flex items-center justify-center shadow-md">
                <Wrench size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Études de cas</h3>
              <p className="text-gray-600">Situations fictives pour développer l'esprit critique et les compétences décisionnelles.</p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <div className="w-20 h-20 mb-8 bg-gradient-to-br from-[#779979] to-[#658968] rounded-2xl flex items-center justify-center shadow-md">
                <Wrench size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Témoignages</h3>
              <p className="text-gray-600">Récits et expériences partagées (de manière anonymisée) pour créer du lien et de l'empathie.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Articles */}
      <section id="articles" className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-16 text-center">
            Articles et ressources
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <article className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-[#779979] to-[#658968] rounded-2xl flex items-center justify-center">
                <BookOpen size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">L'importance de l'éducation affective et relationnelle dès le plus jeune âge</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Découvrez pourquoi il est essentiel d'aborder les questions d'affectivité et de relations dès l'enfance. L'éducation à la vie affective, relationnelle et sexuelle (EVARS) permet aux jeunes de développer des compétences relationnelles saines et de mieux comprendre leurs émotions.
              </p>
              <p className="relative text-sm text-[#779979] font-medium cursor-pointer inline-block after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-2px] after:left-0 after:bg-[#779979] after:transition-all after:duration-300 hover:after:w-full">Lire plus →</p>
            </article>

            <article className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-[#779979] to-[#658968] rounded-2xl flex items-center justify-center">
                <Users size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Comment parler de sexualité avec ses enfants ?</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Un guide pratique pour les parents qui souhaitent aborder ces sujets avec bienveillance. Apprenez à adapter votre discours selon l'âge de votre enfant et à créer un espace de dialogue ouvert et rassurant.
              </p>
              <p className="relative text-sm text-[#779979] font-medium cursor-pointer inline-block after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-2px] after:left-0 after:bg-[#779979] after:transition-all after:duration-300 hover:after:w-full">Lire plus →</p>
            </article>

            <article className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-[#779979] to-[#658968] rounded-2xl flex items-center justify-center">
                <BookOpen size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Le consentement : un concept clé à enseigner dès l'adolescence</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Comprendre et respecter le consentement est fondamental dans toutes les relations. Cet article explore comment aborder ce sujet avec les adolescents de manière claire et constructive, en favorisant le respect mutuel.
              </p>
              <p className="relative text-sm text-[#779979] font-medium cursor-pointer inline-block after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-2px] after:left-0 after:bg-[#779979] after:transition-all after:duration-300 hover:after:w-full">Lire plus →</p>
            </article>

            <article className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-[#779979] to-[#658968] rounded-2xl flex items-center justify-center">
                <Users size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">L'EVARS en milieu scolaire : un enjeu éducatif majeur</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Pourquoi et comment intégrer l'éducation à la vie affective, relationnelle et sexuelle dans les établissements scolaires. Retour sur les bénéfices pour les élèves et les bonnes pratiques à mettre en place.
              </p>
              <p className="relative text-sm text-[#779979] font-medium cursor-pointer inline-block after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-2px] after:left-0 after:bg-[#779979] after:transition-all after:duration-300 hover:after:w-full">Lire plus →</p>
            </article>
          </div>
        </div>
      </section>

      <section id="faq" className="py-24 px-6 lg:px-12 bg-gradient-to-br from-[#779979]/5 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-16 text-center">
            Questions fréquentes
          </h2>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Quelle est la durée d'une intervention ?</h3>
              <p className="text-gray-600 leading-relaxed">
                Une intervention dure généralement entre 1h et 2h selon le niveau scolaire et les objectifs. Nous proposons également des cycles de plusieurs séances pour approfondir certaines thématiques.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Quels sont les tarifs ?</h3>
              <p className="text-gray-600 leading-relaxed">
                Nos tarifs varient selon le type d'intervention, la durée et le nombre de participants. Contactez-nous pour obtenir un devis personnalisé adapté à votre établissement ou structure.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Comment organiser une intervention dans mon établissement ?</h3>
              <p className="text-gray-600 leading-relaxed">
                Contactez-nous par mail ou téléphone pour échanger sur vos besoins. Nous construisons ensemble un projet d'intervention adapté à votre public et vos objectifs pédagogiques.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Les interventions respectent-elles le cadre légal ?</h3>
              <p className="text-gray-600 leading-relaxed">
                Nos interventions s'inscrivent dans le cadre de la loi relative à l'éducation à la sexualité et respectent les recommandations du Ministère de l'Éducation Nationale. Elles sont toujours menées en accord avec les équipes éducatives.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">À partir de quel âge peut-on bénéficier d'une intervention EVARS ?</h3>
              <p className="text-gray-600 leading-relaxed">
                Les interventions EVARS sont adaptées à tous les âges, du CM2 à la terminale. Le contenu et l'approche sont adaptés selon le niveau scolaire et la maturité des participants.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Les parents sont-ils informés des interventions ?</h3>
              <p className="text-gray-600 leading-relaxed">
                Oui, la transparence est essentielle. Les parents sont toujours informés en amont des interventions prévues dans les établissements scolaires et peuvent poser toutes leurs questions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Proposez-vous des interventions individuelles ?</h3>
              <p className="text-gray-600 leading-relaxed">
                Oui, en tant que conseillère conjugale et familiale, je propose également des accompagnements individuels, en couple ou en famille. Contactez-moi pour discuter de vos besoins spécifiques.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 lg:px-12 bg-gradient-to-br from-[#779979] to-[#658968]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-semibold text-white mb-8">
              Prise de contact
            </h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
              Vous souhaitez organiser une intervention dans votre établissement ou en savoir plus sur nos prestations ? N'hésitez pas à nous contacter.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Informations de contact */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl">
                <h3 className="text-2xl font-semibold text-white mb-6">Coordonnées</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone size={24} className="text-white mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white/90 font-medium mb-1">Téléphone</p>
                      <a href="tel:+33668883377" className="text-white text-lg hover:underline">03 66 88 33 77</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin size={24} className="text-white mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white/90 font-medium mb-1">Adresse</p>
                      <p className="text-white text-lg">23 rue Kléber<br />59420 Mouvaux, France</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl">
                <h3 className="text-2xl font-semibold text-white mb-6">Secteurs d'intervention</h3>
                <div className="flex flex-wrap gap-3 text-white/90">
                  <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm font-medium text-sm">Bondues</span>
                  <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm font-medium text-sm">Croix</span>
                  <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm font-medium text-sm">La Madeleine</span>
                  <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm font-medium text-sm">Lille</span>
                  <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm font-medium text-sm">Marcq-en-Baroeul</span>
                  <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm font-medium text-sm">Wasquehal</span>
                </div>
              </div>
            </div>

            {/* Carte Google Maps */}
            <div className="bg-white/10 backdrop-blur-sm p-2 rounded-3xl">
              <div className="w-full h-96 rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps?q=23+rue+Kleber+Mouvaux+59420+France&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation - 23 rue Kléber, Mouvaux"
                  className="rounded-2xl"
                ></iframe>
              </div>
              <div className="mt-4 text-center">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=23+rue+Kleber+Mouvaux+59420+France"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-white text-sm underline"
                >
                  Ouvrir dans Google Maps
                </a>
              </div>
            </div>
          </div>
          <div className="flex gap-6 justify-center">
            <a
              href="https://www.linkedin.com/in/g%C3%A9raldine-barbry-13754616b/?trk=public_profile_browsemap&originalSubdomain=fr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-3 hover:scale-110 transition-transform shadow-lg"
              aria-label="LinkedIn"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="#0A66C2">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/conseil_conjugal_et_familial/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-3 hover:scale-110 transition-transform shadow-lg"
              aria-label="Instagram"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="url(#instagram-gradient)">
                <defs>
                  <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FD5949"/>
                    <stop offset="50%" stopColor="#D6249F"/>
                    <stop offset="100%" stopColor="#285AEB"/>
                  </linearGradient>
                </defs>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/geraldine.caulliezbarbry"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-3 hover:scale-110 transition-transform shadow-lg"
              aria-label="Facebook"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="#1877F2">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 lg:px-12 bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} EVARS - Géraldine Barbry - Éducation à la vie affective, relationnelle et sexuelle - Tous droits réservés
          </p>
          <p className="text-sm mt-2">
            SIRET : XXX XXX XXX XXXXX - Diplôme de Conseillère Conjugale et Familiale
          </p>
        </div>
      </footer>

      <CalendlyModal
        isOpen={calendlyModalOpen}
        onClose={() => setCalendlyModalOpen(false)}
        calendlyUrl={calendlyUrl}
      />

      {/* Barre latérale avec les captures d'écran */}
      <div className={`fixed right-0 top-0 h-full bg-white shadow-2xl z-40 transition-all duration-300 ${
        sidebarOpen ? 'w-80' : 'w-0'
      } overflow-hidden`}>
        <div className="h-full flex flex-col">
          {/* Bouton pour ouvrir/fermer la barre latérale */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className={`absolute ${sidebarOpen ? 'left-0' : '-left-12'} top-1/2 -translate-y-1/2 bg-[#779979] text-white p-2 rounded-l-lg hover:bg-[#658968] transition-all z-50 shadow-lg`}
            aria-label={sidebarOpen ? 'Fermer la barre latérale' : 'Ouvrir la barre latérale'}
          >
            {sidebarOpen ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>

          {/* Contenu de la barre latérale */}
          {sidebarOpen && (
            <div className="w-80 p-6 overflow-y-auto">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Informations</h3>
              <div className="space-y-4 text-gray-600">
                <p>Barre latérale disponible pour des informations supplémentaires.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

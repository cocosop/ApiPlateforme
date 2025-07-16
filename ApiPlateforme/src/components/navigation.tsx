import React from 'react';
import { Menu, X } from 'lucide-react';
import { Section } from '../types';

interface NavigationProps {
  sections: Section[];
  scrollToSection: (sectionId: string) => void;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  sections,
  scrollToSection,
  menuOpen,
  setMenuOpen,
}) => {
  return (
    <>
      {/* Desktop Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile menu button */}
          <div className="flex justify-end py-4 md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500 transition-colors duration-200"
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="flex items-center justify-center space-x-2 py-4 overflow-x-auto">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 text-sm font-medium text-gray-700 hover:bg-green-600 hover:text-white hover:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 whitespace-nowrap"
                >
                  <section.icon className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                  {section.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={() => setMenuOpen(false)}
          />
          <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-xl">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Navigation</h2>
              <button
                onClick={() => setMenuOpen(false)}
                className="rounded-md p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="p-6 space-y-3">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="flex items-center w-full text-left p-3 rounded-lg transition-colors hover:bg-green-50 text-gray-700 hover:text-green-700 group"
                >
                  <section.icon className="h-5 w-5 mr-3 text-green-600 group-hover:scale-110 transition-transform duration-200" />
                  <span className="font-medium">{section.title}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
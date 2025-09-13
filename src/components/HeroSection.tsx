'use client';

import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0857e2a1-a9c5-40ef-bae4-9ada6d86d9c1.png" 
          alt="Elegant luxury jewelry workshop with sparkling diamonds and gold pieces on marble surface"
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.background = 'linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)';
            target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNmN2ZhZmMiLz48L3N2Zz4=';
          }}
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="font-playfair text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Crafted with Love,
          <span className="block text-amber-300">Designed for You</span>
        </h1>
        
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 mb-12 max-w-3xl mx-auto leading-relaxed">
          Discover our exquisite collection of handcrafted jewelry or create your perfect custom piece. 
          Each creation tells a unique story of artistry, precision, and timeless elegance.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-amber-600 hover:bg-amber-700 text-white border-0 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            onClick={() => scrollToSection('featured-products')}
          >
            Browse Collection
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-neutral-900 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            onClick={() => scrollToSection('custom-request')}
          >
            Request Custom Design
          </Button>
        </div>
        
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="text-white">
            <div className="text-3xl font-bold font-playfair text-amber-300">15+</div>
            <div className="text-sm uppercase tracking-wide">Years Experience</div>
          </div>
          <div className="text-white">
            <div className="text-3xl font-bold font-playfair text-amber-300">1000+</div>
            <div className="text-sm uppercase tracking-wide">Happy Clients</div>
          </div>
          <div className="text-white">
            <div className="text-3xl font-bold font-playfair text-amber-300">100%</div>
            <div className="text-sm uppercase tracking-wide">Handcrafted</div>
          </div>
        </div>
      </div>
    </section>
  )
}
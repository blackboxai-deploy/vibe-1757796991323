'use client';

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
}

const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Eternal Rose Gold Ring",
    category: "Rings",
    price: 1299,
    originalPrice: 1599,
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0e89158a-d349-471b-9b23-dbc23f1922df.png",
    description: "Handcrafted rose gold ring with brilliant-cut diamond"
  },
  {
    id: 2,
    name: "Celestial Pearl Necklace",
    category: "Necklaces",
    price: 899,
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/84bd5a96-52a6-4221-aa35-d91a3759b1ba.png",
    description: "Premium pearls with 18k gold chain"
  },
  {
    id: 3,
    name: "Diamond Drop Earrings",
    category: "Earrings",
    price: 2199,
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/eef21eef-c43a-4f21-9be8-9253de243044.png",
    description: "Stunning diamond drops in platinum setting"
  },
  {
    id: 4,
    name: "Vintage Gold Bracelet",
    category: "Bracelets",
    price: 749,
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bfbd79f3-6e4e-4ab2-a7d9-6276117e791f.png",
    description: "Intricate vintage-inspired gold bracelet"
  },
  {
    id: 5,
    name: "Sapphire Tennis Necklace",
    category: "Necklaces",
    price: 3299,
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b856e66f-7908-4b0a-b326-daceb24dc7dc.png",
    description: "Blue sapphires in white gold tennis setting"
  },
  {
    id: 6,
    name: "Art Deco Ring Set",
    category: "Rings",
    price: 1899,
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/876fdc76-e91f-4a97-870a-a20f97098e7b.png",
    description: "Art Deco inspired ring with emeralds and diamonds"
  }
];

export default function FeaturedProducts() {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <section id="featured-products" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-neutral-900 mb-4">
            Featured Collection
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Discover our most beloved pieces, each one meticulously crafted with the finest materials 
            and attention to detail that makes every piece truly special.
          </p>
        </div>

        {/* Product Categories Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['All', 'Rings', 'Necklaces', 'Earrings', 'Bracelets'].map((category) => (
            <Button
              key={category}
              variant={category === 'All' ? 'default' : 'outline'}
              className={`px-6 py-2 rounded-full transition-all duration-300 border-2 ${
                category === 'All' 
                  ? 'bg-amber-600 hover:bg-amber-700 text-white border-amber-600' 
                  : 'bg-transparent border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.description}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.background = 'linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)';
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                <div className="absolute top-4 right-4">
                  {product.originalPrice && (
                    <span className="bg-red-500 text-white px-3 py-1 text-sm font-semibold rounded-full">
                      Save {formatPrice(product.originalPrice - product.price)}
                    </span>
                  )}
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-2">
                  <span className="text-sm text-amber-600 font-medium uppercase tracking-wide">
                    {product.category}
                  </span>
                </div>
                
                <h3 className="font-playfair text-xl font-semibold text-neutral-900 mb-2">
                  {product.name}
                </h3>
                
                <p className="text-neutral-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-neutral-900">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-lg text-neutral-400 line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex gap-2 mt-4">
                  <Button 
                    className="flex-1 bg-amber-600 hover:bg-amber-700 text-white border-0 rounded-full transition-all duration-300"
                  >
                    Add to Cart
                  </Button>
                  <Button 
                    variant="outline" 
                    className="px-4 bg-transparent border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white rounded-full transition-all duration-300"
                  >
                    ♡
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Button 
            size="lg"
            className="bg-neutral-900 hover:bg-neutral-800 text-white border-0 px-12 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
          >
            View Complete Collection
          </Button>
        </div>
      </div>
    </section>
  )
}
'use client';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Bride",
    content: "The custom engagement ring they created was beyond my wildest dreams. Every detail was perfect, and the craftsmanship is simply extraordinary.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Anniversary Gift",
    content: "I wanted something special for our 25th anniversary. The team listened to every detail and created a masterpiece that made my wife cry happy tears.",
    rating: 5
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Custom Necklace",
    content: "Professional, creative, and absolutely stunning results. The custom necklace incorporates my grandmother's diamonds beautifully.",
    rating: 5
  }
];

const features = [
  {
    title: "Master Craftsmanship",
    description: "15+ years of expertise in creating exceptional jewelry pieces with traditional techniques and modern precision.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5a992aba-4f5a-4f7c-ae80-cb28eb2a4e3f.png"
  },
  {
    title: "Premium Materials",
    description: "We source only the finest diamonds, gemstones, and precious metals from trusted suppliers worldwide.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8f4e00f6-2a78-425b-bab7-917c2df67a5e.png"
  },
  {
    title: "Lifetime Guarantee",
    description: "Every piece comes with our comprehensive lifetime warranty covering craftsmanship and structural integrity.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5896a7f8-ab2d-4455-8506-3b213d0e5eca.png"
  }
];

export default function AboutSection() {
  const renderStars = (rating: number) => {
    return Array(rating).fill(0).map((_, i) => (
      <span key={i} className="text-amber-400 text-lg">★</span>
    ));
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Why Choose Us */}
        <div className="text-center mb-20">
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-neutral-900 mb-6">
            Why Choose Luxe Jewelry
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto mb-16">
            For over 15 years, we've been creating jewelry that tells stories, celebrates milestones, 
            and becomes treasured heirlooms passed down through generations.
          </p>
          
          <div className="grid md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="relative overflow-hidden rounded-lg mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.background = 'linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)';
                    }}
                  />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-neutral-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-neutral-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-amber-50 rounded-2xl p-12 mb-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold font-playfair text-amber-600 mb-2">1000+</div>
              <div className="text-neutral-700 font-medium">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold font-playfair text-amber-600 mb-2">15+</div>
              <div className="text-neutral-700 font-medium">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold font-playfair text-amber-600 mb-2">99%</div>
              <div className="text-neutral-700 font-medium">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold font-playfair text-amber-600 mb-2">100%</div>
              <div className="text-neutral-700 font-medium">Handcrafted</div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h3 className="font-playfair text-3xl font-bold text-neutral-900 mb-4">
            What Our Clients Say
          </h3>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued clients have to say about their experience with us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-neutral-50 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300">
              <div className="mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-neutral-700 mb-6 italic">
                "{testimonial.content}"
              </p>
              <div>
                <div className="font-semibold text-neutral-900">{testimonial.name}</div>
                <div className="text-sm text-neutral-600">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="text-center">
          <h4 className="font-semibold text-neutral-900 mb-8">Trusted & Certified</h4>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="bg-neutral-100 px-6 py-3 rounded-lg">
              <span className="font-semibold text-neutral-700">GIA Certified</span>
            </div>
            <div className="bg-neutral-100 px-6 py-3 rounded-lg">
              <span className="font-semibold text-neutral-700">Better Business Bureau A+</span>
            </div>
            <div className="bg-neutral-100 px-6 py-3 rounded-lg">
              <span className="font-semibold text-neutral-700">Jewelers of America Member</span>
            </div>
            <div className="bg-neutral-100 px-6 py-3 rounded-lg">
              <span className="font-semibold text-neutral-700">Insured & Bonded</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
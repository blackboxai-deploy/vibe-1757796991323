'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

interface CustomRequestData {
  name: string;
  email: string;
  phone: string;
  jewelryType: string;
  materials: string[];
  budgetRange: string;
  timeline: string;
  description: string;
  hasReference: boolean;
}

export default function CustomRequestForm() {
  const [formData, setFormData] = useState<CustomRequestData>({
    name: '',
    email: '',
    phone: '',
    jewelryType: '',
    materials: [],
    budgetRange: '',
    timeline: '',
    description: '',
    hasReference: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 2000);
  };

  const handleMaterialChange = (material: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        materials: [...prev.materials, material]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        materials: prev.materials.filter(m => m !== material)
      }));
    }
  };

  if (submitted) {
    return (
      <section id="custom-request" className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-2xl">
            <CardContent className="text-center py-16">
              <div className="mb-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-4xl">✓</span>
                </div>
                <h3 className="font-playfair text-3xl font-bold text-neutral-900 mb-4">
                  Request Submitted Successfully!
                </h3>
                <p className="text-lg text-neutral-600 mb-6">
                  Thank you for your custom jewelry request. Our master craftsmen will review your requirements 
                  and contact you within 24-48 hours to discuss your vision and provide a detailed quote.
                </p>
                <Button 
                  onClick={() => setSubmitted(false)}
                  className="bg-amber-600 hover:bg-amber-700 text-white border-0 px-8 py-3 rounded-full"
                >
                  Submit Another Request
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="custom-request" className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-neutral-900 mb-4">
            Create Your Perfect Piece
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Have a vision for the perfect piece of jewelry? Our master craftsmen will work with you 
            to bring your dreams to life with exceptional quality and artistry.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Process Steps */}
          <div>
            <h3 className="font-playfair text-2xl font-semibold text-neutral-900 mb-8">Our Custom Process</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">Consultation</h4>
                  <p className="text-neutral-600 text-sm">We discuss your vision, preferences, and budget to understand exactly what you're looking for.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">Design & Approval</h4>
                  <p className="text-neutral-600 text-sm">Our designers create detailed sketches and 3D renders for your approval before crafting begins.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">3</div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">Expert Craftsmanship</h4>
                  <p className="text-neutral-600 text-sm">Our master jewelers handcraft your piece using traditional techniques and premium materials.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">4</div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">Quality Assurance</h4>
                  <p className="text-neutral-600 text-sm">Every piece undergoes rigorous quality checks before being presented to you in luxury packaging.</p>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mt-8">
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/dd4f3ffe-586a-442c-8e43-c20cfb5c954d.png"
                alt="Master jeweler crafting custom engagement ring in professional workshop setting"
                className="w-full rounded-lg shadow-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.background = 'linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)';
                }}
              />
            </div>
          </div>

          {/* Custom Request Form */}
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="font-playfair text-2xl text-center">Request Your Custom Piece</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="mt-1"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="mt-1"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className="mt-1"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                {/* Jewelry Specifications */}
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="jewelryType">Type of Jewelry *</Label>
                    <Select onValueChange={(value) => setFormData(prev => ({ ...prev, jewelryType: value }))}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select jewelry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="engagement-ring">Engagement Ring</SelectItem>
                        <SelectItem value="wedding-band">Wedding Band</SelectItem>
                        <SelectItem value="necklace">Necklace</SelectItem>
                        <SelectItem value="earrings">Earrings</SelectItem>
                        <SelectItem value="bracelet">Bracelet</SelectItem>
                        <SelectItem value="pendant">Pendant</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Preferred Materials</Label>
                    <div className="grid grid-cols-2 gap-3 mt-2">
                      {['Gold (14k)', 'Gold (18k)', 'Platinum', 'Silver', 'Rose Gold', 'White Gold'].map((material) => (
                        <div key={material} className="flex items-center space-x-2">
                          <Checkbox
                            id={material}
                            checked={formData.materials.includes(material)}
                            onCheckedChange={(checked) => handleMaterialChange(material, checked as boolean)}
                          />
                          <Label htmlFor={material} className="text-sm">{material}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="budgetRange">Budget Range *</Label>
                    <Select onValueChange={(value) => setFormData(prev => ({ ...prev, budgetRange: value }))}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select your budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-1000">Under $1,000</SelectItem>
                        <SelectItem value="1000-2500">$1,000 - $2,500</SelectItem>
                        <SelectItem value="2500-5000">$2,500 - $5,000</SelectItem>
                        <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                        <SelectItem value="10000-plus">$10,000+</SelectItem>
                        <SelectItem value="discuss">Let's Discuss</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="timeline">Preferred Timeline</Label>
                    <Select onValueChange={(value) => setFormData(prev => ({ ...prev, timeline: value }))}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="When do you need this?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="rush">Rush (2-3 weeks)</SelectItem>
                        <SelectItem value="standard">Standard (4-6 weeks)</SelectItem>
                        <SelectItem value="extended">Extended (8+ weeks)</SelectItem>
                        <SelectItem value="flexible">I'm Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <Label htmlFor="description">Describe Your Vision *</Label>
                  <Textarea
                    id="description"
                    required
                    value={formData.description}
                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    className="mt-1 min-h-[120px]"
                    placeholder="Please describe your ideal piece in detail. Include any specific design elements, inspirations, or special requirements..."
                  />
                </div>

                {/* Reference Images */}
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="hasReference"
                    checked={formData.hasReference}
                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, hasReference: checked as boolean }))}
                  />
                  <Label htmlFor="hasReference" className="text-sm">
                    I have reference images I'd like to share (we'll contact you for these)
                  </Label>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-amber-600 hover:bg-amber-700 disabled:bg-amber-400 text-white border-0 py-3 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  {isSubmitting ? 'Submitting Request...' : 'Submit Custom Request'}
                </Button>

                <p className="text-xs text-neutral-500 text-center">
                  By submitting this form, you agree to be contacted by our design team regarding your custom jewelry request.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
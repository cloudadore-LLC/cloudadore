import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import React from 'react'

const Testimonials = () => {
  return (
     <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What others say about our community</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We continue to inspire our community and support the individuals who have made it their mission to make a
              positive impact on the world around them.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Douglas George",
                role: "Senior Cloud Architect",
                content:
                  "The quality and attention to detail in every piece is remarkable. I've been wearing Cloudadore for over a year now and the comfort and durability are unmatched.",
                avatar: "/professional-man-headshot.png",
              },
              {
                name: "Christina Stewart",
                role: "Senior Cloud Architect",
                content:
                  "As a professional in tech, I appreciate clothing that looks great and performs well. Cloudadore delivers on both fronts with their innovative designs and premium materials.",
                avatar: "/professional-woman-headshot.png",
              },
              {
                name: "Bradford George",
                role: "Senior Cloud Architect",
                content:
                  "The community aspect is what really sets Cloudadore apart. It's more than just clothing - it's about connecting with like-minded individuals who value quality and innovation.",
                avatar: "/professional-man-headshot.png",
              },
            ].map((testimonial, index) => (
              <div key={index} className="text-center">
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center justify-center gap-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    
  )
}

export default Testimonials
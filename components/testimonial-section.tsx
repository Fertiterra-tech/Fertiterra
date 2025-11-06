import { Star } from "lucide-react"

export function TestimonialSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Our Patients Say</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from women who have transformed their fertility journey with FertiTerra.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col p-6 rounded-lg border bg-white shadow-sm">
              <div className="flex mb-4">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
              </div>
              <blockquote className="flex-1 mb-4">
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </blockquote>
              <div className="mt-auto">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const testimonials = [
  {
    name: "Sarah J.",
    location: "New York, NY",
    rating: 5,
    quote:
      "FertiTerra changed my life. After years of struggling with infertility, their at-home testing and personalized care helped me understand my body better. I'm now expecting my first child!",
  },
  {
    name: "Michelle T.",
    location: "Austin, TX",
    rating: 5,
    quote:
      "The convenience of testing at home combined with expert virtual consultations made all the difference. The doctors truly listened and created a plan specifically for me.",
  },
  {
    name: "Rebecca L.",
    location: "Chicago, IL",
    rating: 4,
    quote:
      "I was hesitant about telemedicine for fertility care, but FertiTerra exceeded my expectations. The test kits were easy to use, and the follow-up care was exceptional.",
  },
]

export default TestimonialSection

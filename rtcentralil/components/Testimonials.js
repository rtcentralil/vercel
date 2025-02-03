import { useState, useEffect } from 'react'

const testimonials = [
  {
    name: "John Doe",
    text: "This franchise has transformed our business. Exceptional support and results!",
  },
  {
    name: "Jane Smith",
    text: "An amazing experience from start to finish. The franchise model works like a charm.",
  },
  {
    name: "Alex Martin",
    text: "I highly recommend this franchise. The services and community are top-notch.",
  }
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const prevTestimonial = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  const nextTestimonial = () =>
    setCurrent((prev) => (prev + 1) % testimonials.length)

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
        <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
          <p className="text-xl italic mb-4">"{testimonials[current].text}"</p>
          <p className="font-semibold">- {testimonials[current].name}</p>
        </div>
        <div className="mt-4 flex justify-center items-center space-x-4">
          <button onClick={prevTestimonial} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Prev</button>
          <button onClick={nextTestimonial} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Next</button>
        </div>
      </div>
    </section>
  )
}

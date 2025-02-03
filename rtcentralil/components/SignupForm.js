import { useState } from 'react'

export default function SignupForm() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMessage("")
    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })
      const data = await res.json()
      if (res.ok) {
        setMessage("Thank you for signing up!")
        setEmail("")
      } else {
        setMessage(data.error || "An error occurred. Please try again.")
      }
    } catch (err) {
      setMessage("An error occurred. Please try again.")
    }
  }

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 border rounded focus:outline-none"
            required
          />
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Subscribe
          </button>
          {message && <p className="mt-2 text-green-600">{message}</p>}
        </form>
      </div>
    </section>
  )
}

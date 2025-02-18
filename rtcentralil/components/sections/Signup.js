import { useState } from 'react';

export default function Signup() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      setMessage(data.message);
    } catch (err) {
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <section id ='Signup' className="signup-section py-16 section-transition">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button type="submit" className="p-3 bg-blue-600 text-white rounded hover:bg-blue-700">
              Subscribe
            </button>
            {message && <p className="mt-2 text-center text-green-600">{message}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
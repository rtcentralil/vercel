export default function handler(req, res) {
    if (req.method === 'POST') {
      const { email } = req.body
      if (!email || !/\S+@\S+\.\S+/.test(email)) {
        res.status(400).json({ error: "A valid email is required." })
        return
      }
      // Log the email – integrate with your mailing service or database as needed.
      console.log("New signup:", email)
      res.status(200).json({ message: "Signup successful" })
    } else {
      res.status(405).json({ error: "Method not allowed" })
    }
  }
  
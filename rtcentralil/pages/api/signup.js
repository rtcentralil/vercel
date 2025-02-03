export default function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      res.status(400).json({ error: "A valid email is required." });
      return;
    }

    console.log("New signup:", email);
    res.status(200).json({ message: "Thank you for signing up!" });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}

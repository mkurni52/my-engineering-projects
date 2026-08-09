export default function handler(req, res) {
  // 1. Only allow POST requests for security
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { password } = req.body;

  # 2. Check the password against an environment variable hidden in Vercel
  if (password === process.env.REFERENCE_PASSWORD) {
    return res.status(200).json({ 
      success: true, 
      references: [
        { name: "Dr. Sheldon J. Park", email: "sjpark6@buffalo.edu", role: "CE550 Professor" },
        { name: "Dr. Carl R. F. Lund", email: "lund@buffalo.edu", role: "CE514 Professor" }
      ] 
    });
  } else {
    return res.status(401).json({ success: false, error: 'Incorrect password' });
  }
}

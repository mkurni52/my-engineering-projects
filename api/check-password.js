export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { password } = req.body;

  // Verify your top-secret environment token on Vercel's cloud servers
  if (password === process.env.REFERENCE_PASSWORD) {
    return res.status(200).json({ 
      success: true, 
      emails: {
        park: "sjpark6@buffalo.edu",
        lund: "lund@buffalo.edu"
      },
      // The direct download path is kept completely hidden until authorized
      downloads: {
        cheng_letter: "https://github.com"
      }
    });
  } else {
    return res.status(401).json({ success: false, error: 'Invalid Code' });
  }
}

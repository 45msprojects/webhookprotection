export default async function handler(req, res) {
  const WEBHOOK_URL = process.env.MY_DISCORD_WEBHOOK;
  if (req.method === 'POST') {
    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req.body)
      });
      return res.status(200).json({ success: true });
    } catch (err) {
      return res.status(500).json({ error: "Error" });
    }
  }
  return res.status(405).json({ error: "Tung Tung Tung Sahur will find you" });
}

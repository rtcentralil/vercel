export default async function handler(req, res) {
    const accessToken = 'YOUR_INSTAGRAM_ACCESS_TOKEN'; // Replace with your access token
    const apiUrl = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink&access_token=${accessToken}`;
  
    try {
      const response = await fetch(apiUrl);
      const result = await response.json();
      res.status(200).json({ posts: result.data });
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch Instagram posts' });
    }
  }
  
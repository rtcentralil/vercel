import { useEffect, useState } from 'react';

export default function InstagramFeed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchInstagramPosts() {
      try {
        const response = await fetch('/api/instagram');
        const data = await response.json();
        if (data.posts) {
          setPosts(data.posts);
        }
      } catch (error) {
        console.error("Error fetching Instagram posts:", error);
      }
    }

    fetchInstagramPosts();
  }, []);

  return (
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {posts.length > 0 ? (
          posts.map((post) => (
            <a key={post.id} href={post.permalink} target="_blank" rel="noopener noreferrer">
              <img src={post.media_url} alt="Instagram Post" className="rounded-lg shadow-md w-full h-auto" />
            </a>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full">No Instagram posts available</p>
        )}
      </div>
    </div>
  );
}

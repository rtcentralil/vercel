export default function InstagramFeed() {
    // Using placeholder images for demo purposes.
    const images = Array.from({ length: 6 }, (_, i) => `https://via.placeholder.com/300?text=Insta+${i+1}`)
  
    return (
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Instagram Feed</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((src, index) => (
              <a key={index} href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <img src={src} alt={`Instagram ${index+1}`} className="w-full h-auto rounded shadow" />
              </a>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
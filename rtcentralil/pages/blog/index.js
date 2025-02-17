// pages/blog/index.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import SEO from '../../components/SEO';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Blog({ posts }) {
  return (
    <>
      <Header />
      <SEO 
        title="Blog | RoboThink" 
        description="Read our latest blog posts on STEM education, robotics classes, coding lessons, and more."
      />
      <section className="blog-section py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-8">Blog</h1>
          <div className="grid gap-8">
            {posts.map(post => (
              <div key={post.slug} className="p-6 bg-white rounded shadow">
                <h2 className="text-2xl font-semibold">
                  <Link href={`/blog/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-2 text-gray-600">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="mt-4 inline-block text-persianRed hover:underline">
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);
  const posts = filenames
    .map(filename => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);
      return {
        slug: filename.replace(/\.md$/, ''),
        title: data.title,
        excerpt: data.excerpt || content.substring(0, 150) + '...',
        date: data.date,
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return {
    props: { posts }
  };
}
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import html from 'remark-html';
import SEO from '../../components/SEO';

export default function BlogPost({ frontmatter, content, slug }) {
  // Construct the canonical URL using your base URL and post slug
  const canonical = `https://www.robothinkcil.com/blog/${slug}`;

  // Build a JSON‑LD Article schema for this blog post
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": frontmatter.title,
    "description": frontmatter.excerpt,
    "datePublished": frontmatter.date,
    "author": {
      "@type": "Organization",
      "name": "RoboThink Central Illinois"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonical
    }
  };

  return (
    <>
      {/* Extended SEO Component with dynamic values */}
      <SEO
        title={frontmatter.title}
        description={frontmatter.excerpt}
        canonical={canonical}
        jsonLd={articleSchema}
      />
      
      <article className="blog-post-section py-16">
        <div className="container mx-auto px-6 max-w-3xl">
          {/* Display the publication date */}
          <p className="text-gray-500 italic text-lg mb-8">{frontmatter.date}</p>
          
          {/* Render the processed Markdown content */}
          <div className="prose prose-lg prose-headings:text-gray-900 prose-headings:font-extrabold prose-p:leading-8 prose-ul:ml-5 prose-ul:list-disc prose-strong:text-gray-800">
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </div>
      </article>
    </>
  );
}

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const paths = filenames.map((filename) => ({
    params: { slug: filename.replace(/\.md$/, '') },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filePath = path.join(postsDirectory, `${params.slug}.md`);

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  // Process Markdown to HTML with remark and GFM support
  const processedContent = await remark()
    .use(remarkGfm)
    .use(html)
    .process(content);

  return {
    props: {
      frontmatter: data,
      content: processedContent.toString(),
      slug: params.slug,
    },
  };
}
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm'; // Enables better markdown formatting
import html from 'remark-html';
import SEO from '../../components/SEO';

export default function BlogPost({ frontmatter, content }) {
  return (
    <>
      <SEO title={frontmatter.title} description={frontmatter.excerpt} />
      <article className="blog-post-section py-16">
        <div className="container mx-auto px-6 max-w-3xl">
          {/* Only show the date, since the H1 title is already in the Markdown file */}
          <p className="text-gray-500 italic text-lg mb-8">{frontmatter.date}</p>

          {/* Markdown content renders the H1 properly */}
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

  const paths = filenames.map(filename => ({
    params: { slug: filename.replace(/\.md$/, '') }
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

  // Ensure Markdown is processed properly
  const processedContent = await remark()
    .use(remarkGfm) // Enables proper Markdown formatting (bold, lists, headings)
    .use(html)
    .process(content);

  return {
    props: {
      frontmatter: data,
      content: processedContent.toString(),
    },
  };
}

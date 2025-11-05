
import { promises as fs } from 'fs';
import path from 'path';
import BlogPost from '@/components/BlogPost';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'app', 'posts');
  const filenames = await fs.readdir(postsDirectory);

  return filenames.map(filename => ({
    slug: filename.replace(/\.mdx$/, ''),
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'app', 'posts', `${slug}.mdx`);

  try {
    const source = await fs.readFile(filePath, 'utf8');
    return <BlogPost source={source} />;
  } catch (error) {
    notFound();
  }
}

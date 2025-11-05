
import { promises as fs } from 'fs';
import path from 'path';
import BlogPost from '@/components/BlogPost';

export default async function BlogPage() {
  const filePath = path.join(process.cwd(), 'app', 'posts', 'the-ai-revolution.mdx');
  const source = await fs.readFile(filePath, 'utf8');

  return <BlogPost source={source} />;
}

import { useLoaderData } from '@tanstack/react-router';
import BlogDetails from '../../components/pages/blog/BlogDetails';

export const Route = createFileRoute({
  loader: async () => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts?_limit=20',
    );
    if (!response.ok) {
      throw new Error('Failed to fetch blog posts');
    }
    const posts = await response.json();
    return { posts };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { posts } = useLoaderData({ from: '/blog/' });
  return <BlogDetails posts={posts} />;
}

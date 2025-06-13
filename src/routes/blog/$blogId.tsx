import { useLoaderData } from '@tanstack/react-router';
import '../../components/pages/blog/blog.css';
import BlogById from '../../components/pages/blog/BlogById';

export const Route = createFileRoute({
  loader: async ({ params }: { params: { blogId: string } }) => {
    const { blogId } = params;
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${blogId}`,
    );
    if (!response.ok) {
      throw new Error(`Blog post with ID ${blogId} not found`);
    }
    const blogData = await response.json();
    return { blogData };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { blogData } = useLoaderData({ from: '/blog/$blogId' });

  if (!blogData) {
    return <div>Blog post not found</div>;
  }

  const { title, body, userId } = blogData;
  return <BlogById body={body} title={title} userId={userId} />;
}

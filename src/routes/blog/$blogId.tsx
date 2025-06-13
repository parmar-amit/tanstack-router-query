import BlogById from '../../components/pages/blog/BlogById';

export const Route = createFileRoute({
  loader: async ({ params }: { params: { blogId: number } }) => {
    const { blogId } = params;
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${blogId}`,
    );
    if (!response.ok) {
      throw new Error(`Blog post with ID ${blogId} not found`);
    }
    const post = await response.json();
    return { post };
  },
  component: BlogById,
});

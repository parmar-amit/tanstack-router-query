import BlogDetails from '../../components/pages/blog/BlogDetails';

export const Route = createFileRoute({
  validateSearch: (search: { limit?: number }) => {
    const limit =
      typeof search.limit === 'number' && search.limit > 0 ? search.limit : 20;
    return { limit };
  },
  loaderDeps: ({ search: { limit } }) => ({ limit }),
  loader: async ({ deps: { limit } }) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`,
    );
    if (!response.ok) {
      throw new Error('Failed to fetch blog posts');
    }
    const posts = await response.json();
    return { posts };
  },
  component: BlogDetails,
});

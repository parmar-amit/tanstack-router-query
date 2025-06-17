import BlogDetails from '../../components/pages/blog/BlogDetails';
import { fetchAllPostQuery } from '../../services/posts/postsQuery';

export const Route = createFileRoute({
  validateSearch: (search: { limit?: number }) => {
    const limit =
      typeof search.limit === 'number' && search.limit > 0 ? search.limit : 20;
    return { limit };
  },
  loaderDeps: ({ search: { limit } }) => ({ limit }),
  loader: async ({ deps: { limit }, context: { queryClient } }) =>
    queryClient.ensureQueryData(fetchAllPostQuery({ limit })),
  component: BlogDetails,
});

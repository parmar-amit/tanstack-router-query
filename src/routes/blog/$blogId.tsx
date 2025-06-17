import BlogById from '../../components/pages/blog/BlogById';
import { fetchPostByIdQuery } from '../../services/posts/postsQuery';

export const Route = createFileRoute({
  params: {
    parse: (params) => {
      const blogId = Number(params.blogId);
      if (isNaN(blogId) || blogId <= 0) {
        throw new Error('Invalid blog id parameter');
      }
      return { blogId };
    },
  },
  loader: async ({ params: { blogId }, context: { queryClient } }) =>
    queryClient.ensureQueryData(fetchPostByIdQuery(blogId)),
  component: BlogById,
});

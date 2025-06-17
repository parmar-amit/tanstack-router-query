import {
  queryOptions,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { PostApi, PostTypes } from '../../api';

// Fetch all posts with optional limit
export function fetchAllPostQuery(params: PostTypes.FetchPostsParams) {
  return queryOptions<PostTypes.Post[], Error>({
    queryKey: ['posts', params],
    queryFn: () => PostApi.fetchPosts(params),
    // gcTime: timeMinutes(10),
    // staleTime: timeMinutes(3),
  });
}

// Fetch a single post by ID
export function fetchPostByIdQuery(postId: number) {
  return queryOptions<PostTypes.Post, Error>({
    queryKey: ['post', postId],
    queryFn: () => PostApi.fetchPostById(postId),
    enabled: !!postId,
  });
}

//! Delete a single post by ID

export function useDeletePostMutation() {
  const queryClient = useQueryClient();
  // This mutation will delete a post by its ID and invalidate the posts query
  return useMutation<void, Error, number>({
    mutationFn: (postId: number) => PostApi.deletePostById(postId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });
}

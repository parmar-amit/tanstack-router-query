import { api } from '../setup';
import type { FetchPostsParams, Post } from './types';

export const fetchPosts = async (params: FetchPostsParams) => {
  const response = await api.get<Post[]>('', {
    params: { _limit: params.limit },
  });
  if (response.status !== 200) {
    throw new Error('Failed to fetch posts');
  }
  return response.data ?? [];
};

export const fetchPostById = async (postId: number) => {
  const response = await api.get<Post>(`/${postId}`);
  if (!response.data) {
    throw new Error('Failed to fetch post by ID');
  }
  return response.data;
};

export const deletePostById = async (postId: number) => {
  const response = await api.delete(`/${postId}`);
  if (response.status !== 200) {
    throw new Error('Failed to delete post');
  }
  return response.data;
};

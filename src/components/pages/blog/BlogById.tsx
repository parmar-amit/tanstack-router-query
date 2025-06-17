import { useSuspenseQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from '@tanstack/react-router';
import React from 'react';
import {
  fetchPostByIdQuery,
  useDeletePostMutation,
} from '../../../services/posts/postsQuery';
import NotFound from '../../not-found/NotFound';

const BlogById: React.FC = () => {
  const navigate = useNavigate();
  const { blogId } = useParams({ from: '/blog/$blogId' });
  const { data } = useSuspenseQuery(fetchPostByIdQuery(blogId));
  const deletePost = useDeletePostMutation();

  React.useEffect(() => {
    if (deletePost.isSuccess) {
      navigate({
        to: '..',
        search: { limit: 3 },
      });
    }
  }, [deletePost.isSuccess, navigate]);

  if (deletePost.isError) {
    return <NotFound message='Failed to delete the post.' />;
  }

  return (
    <>
      <div className='blog-details-container'>
        <h1 className='blog-details-title'>{data.title}</h1>
        <p className='blog-details-body'>{data.body}</p>
        <p className='blog-details-user'>User ID: {data.userId}</p>
        <button
          className={
            deletePost.isPending
              ? 'blog-delete-button-pending'
              : 'blog-delete-button'
          }
          onClick={() => deletePost.mutate(data.id)}
          disabled={deletePost.isPending}
        >
          {deletePost.isPending ? 'Deleting...' : 'Delete'}
        </button>
      </div>
      <button
        className='blog-back-button'
        onClick={() =>
          navigate({
            to: '..',
            search: { limit: 5 },
          })
        }
      >
        Go Back
      </button>
    </>
  );
};

export default BlogById;

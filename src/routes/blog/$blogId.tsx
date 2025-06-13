import { useLoaderData, useNavigate } from '@tanstack/react-router';
import './-components/blog.css';

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
  const navigate = useNavigate();

  if (!blogData) {
    return <div>Blog post not found</div>;
  }

  const { title, body, userId } = blogData;
  return (
    <>
      <div className='blog-details-container'>
        <h1 className='blog-details-title'>{title}</h1>
        <p className='blog-details-body'>{body}</p>
        <p className='blog-details-user'>User ID: {userId}</p>
      </div>
      <div
        style={{
          position: 'fixed',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1000,
        }}
      >
        <button
          onClick={() => navigate({ to: '..' })}
          style={{
            padding: '10px 24px',
            fontSize: '16px',
            borderRadius: '8px',
            border: 'none',
            background: '#007bff',
            color: '#fff',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}
        >
          Go Back
        </button>
      </div>
    </>
  );
}

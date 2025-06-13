import { Link } from '@tanstack/react-router';
import { routes } from './routes';

const Navbar = () => {
  return (
    <>
      {routes.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          activeProps={{ style: { backgroundColor: '#007bff', color: '#fff' } }}
          style={{
            textDecoration: 'none',
            padding: '0.5rem 1rem',
            display: 'inline-block',
            fontSize: '1rem',
            fontWeight: '500',
            borderRadius: '4px',
            transition: 'background-color 0.3s, color 0.3s',
            margin: '0 0.5rem',
            backgroundColor: '#f8f9fa',
            color: '#343a40',
          }}
        >
          {link.component}
        </Link>
      ))}
    </>
  );
};

export default Navbar;

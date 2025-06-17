import { Link } from '@tanstack/react-router';
import './navbar.css';
import { routes } from './routes';

const Navbar = () => {
  return (
    <>
      {routes.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          activeProps={{ style: { backgroundColor: '#007bff', color: '#fff' } }}
          className='navigation-link '
        >
          {link.component}
        </Link>
      ))}
    </>
  );
};

export default Navbar;

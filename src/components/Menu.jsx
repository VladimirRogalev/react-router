import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <NavLink
        // className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
        style={({ isActive }) =>
          isActive ? { color: 'lightblue', textDecoration: 'none' } : {}
        }
        to="."
        end
      >
        Home
      </NavLink>
      <NavLink
        // className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
        style={({ isActive }) =>
          isActive ? { color: 'lightblue', textDecoration: 'none' } : {}
        }
        to="/courses"
      >
        Courses
      </NavLink>
      <NavLink
        // className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
        style={({ isActive }) =>
          isActive ? { color: 'lightblue', textDecoration: 'none' } : {}
        }
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        // className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
        style={({ isActive }) =>
          isActive ? { color: 'lightblue', textDecoration: 'none' } : {}
        }
        to="/contacts"
      >
        Contacts
      </NavLink>
    </nav>
  );
};

export default Menu;

import './Header.css';

import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <button className="home-button" onClick={() => navigate('/')}>
        DEMO Streaming
      </button>
      <ul>
        <li>
          <a>Log in</a>
        </li>
        <li>
          <button>Start your free trial</button>
        </li>
      </ul>
    </header>
  );
};

export default Header;

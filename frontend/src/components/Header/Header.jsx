import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <div className="header-logo" onClick={() => navigate('/')}>댕갱아</div>
          <div className="header-menu-item" onClick={() => navigate('/gallery')}>갤러리</div>
          <div className="header-menu-item" onClick={() => navigate('/list')}>리스트</div>
          <div className="header-menu-item" onClick={() => navigate('/apply')}>신청하기</div>
          <div className="header-menu-item" onClick={() => navigate('/faq')}>FAQ</div>
        </div>
      </div>
    </header>
  );
};

export default Header;

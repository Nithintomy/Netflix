import React, { useEffect, useState } from 'react';
import './NavBar.css';

function NavBar() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${scroll ? 'scroll' : ''}`}>
      <img
        className='logo'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png'
        alt='Netflix'
      />
      <img
        className='avatar'
        src='https://pbs.twimg.com/profile_images/1356333120992149505/-qvakEK7_400x400.jpg'
        alt='Avatar'
      />
    </div>
  );
}

export default NavBar;

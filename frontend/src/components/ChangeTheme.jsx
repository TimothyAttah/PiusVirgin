import React, { useEffect, useState } from 'react';
import { CgSun } from 'react-icons/cg';
import { HiMoon } from 'react-icons/hi';

const ChangeTheme = ({ theme, setTheme }) => {
  const [night, setNight] = useState(true);
  const toggleThemeColor = () => {
    setNight(!night);
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  };

  const changeColorTheme = () => {
    if (localStorage.getItem('theme') !== null) {
      if (localStorage.getItem('theme') === 'light') {
        document.body.classList.remove('dark');
      } else {
        document.body.classList.add('dark');
      }
    }
  };

  useEffect(() => {
    changeColorTheme()
  },[])
  return (
    <div>
      {night ? (
        <HiMoon onClick={toggleThemeColor} />
      ) : (
        <CgSun onClick={toggleThemeColor} />
      )}
    </div>
  );
};

export default ChangeTheme;

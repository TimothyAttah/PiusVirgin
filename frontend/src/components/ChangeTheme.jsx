import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import styled from 'styled-components';

const ChangeThemeContainer = styled.div`
  svg {
    font-size: 2.3rem;
    cursor: pointer;
  }
`;

const ChangeTheme = () => {
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
    changeColorTheme();
  }, []);
  return (
    <ChangeThemeContainer>
      {night ? (
        <FaMoon onClick={toggleThemeColor} />
      ) : (
        <FaSun onClick={toggleThemeColor} />
      )}
    </ChangeThemeContainer>
  );
};

export default ChangeTheme;

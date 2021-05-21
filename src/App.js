import Main from './routes';
import { useEffect } from 'react';
import UpdateThemeForStyle from './utils/updateThemeForStyle';
import axios from 'axios';
import { BASE_URL } from './constants/Api';

const App = () => {
  useEffect(() => {
    const fetchTheme = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/web/setting`);
        const data = res?.data?.settings[1]?.theme;

        const {
          bgPrimary,
          bgSecondary,
          primary,
          textAlternate,
          textPrimary,
          textSecondary,
          name
        } = data;

        const createThemeOptions = {
          '--bg-primary': bgPrimary,
          '--bg-secondary': bgSecondary,
          '--primary': primary,
          '--text-alternate': textAlternate,
          '--text-primary': textPrimary,
          '--text-secondary': textSecondary,
          name: name
        };

        UpdateThemeForStyle(createThemeOptions);
      } catch (error) {}
    };
    fetchTheme();
  }, []);
  return <Main />;
};

export default App;

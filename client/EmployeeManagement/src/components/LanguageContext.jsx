import { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

const LanguageContext = createContext();

export const useLanguage = () => {
  return useContext(LanguageContext);
};

export const LanguageProvider = ({ children }) => {
  const toggleLanguage = () => {
    // Implement language toggling logic here
  };

  return (
    <LanguageContext.Provider value={{ toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
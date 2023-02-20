import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 fixed bottom-0 w-full text-white py-1">
      <div className="container text-center">
        <p>Copyright &copy; {currentYear} Nirdisto</p>
      </div>
    </footer>
  );
};

export default Footer;

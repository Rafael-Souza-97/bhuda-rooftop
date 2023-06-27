import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center justify-center p-4 bg-gray-50 mt-10 shadow-up">
      <p className="text-gray-600 text-sm md:text-md lg:text-lg">Todos os direitos reservados por  
      <span className='text-primary'> Bhuda Rooftop</span></p>
    </footer>
  );
};

export default Footer;

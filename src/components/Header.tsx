import { useState, useEffect } from 'react';
import headerLogo from '../assets/bhuda/small-logo.png';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';
import '../App.css'

function Header() {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setNav(false);
      }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLinkClick = () => {
    setNav(false);
    window.location.reload();
  };

  return (
    <header className="flex p-5 justify-between bg-gray-50 mb-10 shadow-lg">
      <div className="z-30 flex items-center flex-shrink-0 hover:text-cyan-900 cursor-pointer">
        <a 
          href="/"
          className="font-semibold mt-1 text-xl tracking-tight text-orange-700"
          onClick={handleLinkClick}
        >
          <img src={headerLogo} alt='Bhuda Logo' className="w-36 sm:w-40" />
        </a>
      </div>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer z-50 text-gray-500 mt-2"
      >
        {!nav ? 
          <FiMenu className="mt-1 hover:text-primary" size={30} /> : 
          <FiX className="fixed right-5 mt-1 text-primary" size={30} />
        }
      </div>
      { nav && (
        <ul className="fixed inset-0 flex flex-col z-20 bg-gradient-to-b h-screen from-white to-gray-100 text-gray-500 ">
          <li
            className="flex flex-col justify-center px-4 top-10 absolute cursor-pointer text-sm md:text-md text-center text-gray-400 w-full"
          >
            <div className='mt-20'>
              Avenida Professor Manoel Martins, 
              <br/>
              <span className="font-barlow">491 - 11<span>° andar</span></span>
              <br/>
              Campo Alegre - Conselheiro Lafaiete - MG
              <br/>
              <span className="font-barlow">(31) 99996-6507</span>
            </div>
          </li>

          <li className="flex flex-col text-center mt-80 cursor-pointer text-2xl">
            <a href="https://www.google.com/search?hl=pt-BR&gl=br&q=Rooftop+Bhuda+-+Av.+Prof.+Manoel+Martins,+491+-+11%C2%B0+andar+-+Campo+Alegre,+Conselheiro+Lafaiete+-+MG,+36400-110&ludocid=7478476265962902602&lsig=AB86z5VhbqXTMT6tSF9k0RCqmOks#lrd=0xa3df63915e7d2d:0x67c8e28a8de8944a,1,,,," target="_blank" rel="noopener noreferrer" className="mb-3 hover:text-primary">
              Nossas Avaliações
            </a>

            <a href="https://search.google.com/local/writereview?placeid=ChIJLX1ekWPfowARSpTojYriyGc" target="_blank" rel="noopener noreferrer" className="my-4 hover:text-primary">
              Nos avalie
            </a>

            {/* <a href="/sobre" className="mt-2 hover:text-primary">
              Sobre
            </a> */}
          </li>

          <li className="mt-36 flex items-center justify-center px-4 cursor-pointer">
            <a href="https://www.instagram.com/rooftop.bhuda/?hl=pt" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} className="hover:text-primary" />
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}

export default Header;

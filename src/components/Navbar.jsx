import  {useEffect, useRef, useState} from 'react';
import logo from './../assets/Logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ['Home', 'About', 'Services', 'Contact'];
  const mobileMenu = useRef();
  const toggleMenu = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };
    const handleClickOutside = e => {
    if (mobileMenu.current.contains(e.target)) {
      toggleMenu();
    }
    toggleMenu();
  };
    useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
      <nav className="bg-black p-4 z-50">

        <div className="container mx-auto flex justify-between items-center">
          <div className="h-10">
            <img className={`h-10 object-contain`} src={logo} alt="TKR Logo"/>

          </div>
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                   xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
          <div ref={mobileMenu} className={`lg:flex ${isOpen ? 'fixed left-0 top-14 bg-black' : 'hidden'} w-full lg:w-auto`}>
            <ul className="lg:flex lg:space-x-4 text-white">
              {menuItems.map(item => (<li key={item} className="py-2 lg:py-0">
                <a className="block px-4 py-2 hover:text-primaryHighlight active:bg-primaryHighlight active:text-black rounded-2xl">{item}</a></li>))}
            </ul>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;

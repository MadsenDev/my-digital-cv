import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-6 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        <img src="/logo.svg" className='h-8 w-auto' />
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/madsendev/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaLinkedin size={25} />
          </a>
          <a
            href="https://github.com/MadsenDev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaGithub size={25} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
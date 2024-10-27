import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Image from 'next/image'; // Assuming you're using Next.js

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        
        {/* Logo and Brand Info */}
        <div className="flex flex-col items-center md:items-start space-y-1">
          <Image src="/logo.svg" alt="Logo" width={100} height={100} className="w-24 h-24" /> {/* Larger Logo */}
          <p className="text-sm text-gray-400">© 2024 All rights reserved</p>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center space-y-4">
          <h3 className="text-lg font-semibold">Sosiale Medier</h3>
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/madsendev/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://github.com/MadsenDev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              <FaGithub size={30} />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-end space-y-4">
          <h3 className="text-lg font-semibold">Kontakt</h3>
          <p className="text-sm">
            <a href="mailto:chris@madsens.dev" className="hover:underline text-white">
              chris@madsens.dev
            </a>
          </p>
          <p className="text-sm text-gray-400">Lokasjon: Halden, Norway</p>

          {/* Reference Text */}
          <p className="text-sm text-gray-400">Referanser kan oppgis etter ønske</p>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="mt-12 border-t border-gray-600 pt-6">
        <p className="text-center text-gray-500 text-sm">Laget med Next.js og Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;
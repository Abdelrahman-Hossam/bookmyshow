import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa";
import mainLogo from "../../assets/main-icon-white.png";

const Footer = () => {
  return (
    <footer className="bg-[#2b2b2b] text-gray-400 text-sm">
      <div className="border-t border-gray-600 w-full">
        <div className="flex flex-col items-center py-6">
          {/* Logo */}
          <img src={mainLogo} alt="BookMyScreen Logo" className="w-28 mb-4" />

          {/* Social Icons */}
          <div className="flex space-x-4 mb-4">
            <FaFacebookF className="w-8 h-8 p-2 rounded-full bg-gray-700 text-white" />
            <FaTwitter className="w-8 h-8 p-2 rounded-full bg-gray-700 text-white" />
            <FaInstagram className="w-8 h-8 p-2 rounded-full bg-gray-700 text-white" />
            <FaYoutube className="w-8 h-8 p-2 rounded-full bg-gray-700 text-white" />
            <FaPinterestP className="w-8 h-8 p-2 rounded-full bg-gray-700 text-white" />
            <FaLinkedinIn className="w-8 h-8 p-2 rounded-full bg-gray-700 text-white" />
          </div>

          <p className="mt-2">
            © {new Date().getFullYear()} BookMyScreen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

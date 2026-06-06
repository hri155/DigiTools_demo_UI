import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";

const Footer = () => {
  return (
    <footer className="bg-[#101727] text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

          <div className="md:col-span-1">
            <h1 className="text-4xl font-bold mb-4">DigiTools</h1>

            <p className="text-gray-300 text-sm leading-6">
              Premium digital tools for creators,
              professionals, and businesses. Work smarter
              with our suite of powerful tools.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>

            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a className="hover:text-white">Features</a></li>
              <li><a className="hover:text-white">Pricing</a></li>
              <li><a className="hover:text-white">Templates</a></li>
              <li><a className="hover:text-white">Integrations</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>

            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a className="hover:text-white">About</a></li>
              <li><a className="hover:text-white">Blog</a></li>
              <li><a className="hover:text-white">Careers</a></li>
              <li><a className="hover:text-white">Press</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>

            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a className="hover:text-white">Documentation</a></li>
              <li><a className="hover:text-white">Help Center</a></li>
              <li><a className="hover:text-white">Community</a></li>
              <li><a className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Social Links</h3>

            <div className="flex gap-3">
              <img src={instagram} alt="Instagram" className="w-8 h-8 cursor-pointer" />
              <img src={facebook} alt="Facebook" className="w-8 h-8 cursor-pointer" />
              <img src={twitter} alt="Twitter" className="w-8 h-8 cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 my-10"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">

          <p>© 2026 DigiTools. All rights reserved.</p>

          <div className="flex gap-6">
            <a className="hover:text-white">Privacy Policy</a>
            <a className="hover:text-white">Terms of Service</a>
            <a className="hover:text-white">Cookies</a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
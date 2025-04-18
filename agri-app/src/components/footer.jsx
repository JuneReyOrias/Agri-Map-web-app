import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-800 bg-center bg-cover bg-[url('/images/shape-1.svg')] py-8">
      <div className="mx-auto w-full max-w-screen-xl p-4 lg:py-8">
        <div className="grid gap-8 md:grid-cols-4 sm:grid-cols-2">

          {/* AgriMap Logo and Info */}
          <div>
            <a href="/" className="flex items-center mb-4">
              <img src="/images/agri-logo.png" className="h-10 me-3 rounded-xl" alt="AgriMap Logo" />
              <span className="self-center text-2xl font-semibold text-white whitespace-nowrap">
                AgriMap
              </span>
            </a>
            <p className="text-sm text-gray-100">
              Empowering sustainable agriculture in Zamboanga City through technology, innovation, and farmer-focused solutions.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase">Resources</h2>
            <ul className="text-gray-200 font-medium">
              <li className="mb-4">
                <a href="https://zamboangacity.gov.ph/" className="hover:underline">Zamboanga City Portal</a>
              </li>
              <li>
                <a href="https://www.da.gov.ph/" className="hover:underline">Department of Agriculture</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase">Legal</h2>
            <ul className="text-gray-200 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Terms & Conditions</a>
              </li>
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase">Partners</h2>
            <ul className="grid grid-cols-3 gap-4">
              <li>
                <a href="https://zamboangacity.gov.ph/" target="_blank" rel="noopener noreferrer">
                  <img src="/images/Citylogo.jpg" alt="City Government" className="h-10 object-contain" />
                </a>
              </li>
              <li>
                <a href="http://wmsu.edu.ph/" target="_blank" rel="noopener noreferrer">
                  <img src="/images/OfficialWmsuLogo.png" alt="WMSU" className="h-10 object-contain" />
                </a>
              </li>
              <li>
                <a href="https://ccs.wmsu.edu.ph/" target="_blank" rel="noopener noreferrer">
                  <img src="/images/CCSLogo.png" alt="CCS WMSU" className="h-10 object-contain" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img src="/images/agri-logo.png" alt="City Agriculturist" className="h-10 object-contain" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-6 border-gray-200 dark:border-gray-700" />

        {/* Bottom footer */}
        <div className="text-center">
          <span className="text-sm text-gray-100">
            © 2025 <a href="/" className="hover:underline font-semibold">AgriMap</a>. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client";
import Link from "next/link";
import { useState } from "react";

export default function TeslaNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    <header className="absolute w-full z-50">
      <div className="w-full max-w-[95%] xl:max-w-[93.5%] mx-auto h-[56px] flex items-center justify-between">

        {/* LEFT – LOGO */}
        <Link href="/" className="flex items-center text-white">
          <svg
            className="h-[10px] lg:h-[12px] w-auto"
            viewBox="0 0 342 35"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            <path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z" />
          </svg>
          <div className="mx-1.5 lg:mx-2.5 text-[12px] lg:text-[14px] font-[medium]">|</div>
          <div className="text-[12px] lg:text-[14px] font-[medium]">Careers</div>
        </Link>

        {/* CENTER – NAV */}
        <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center font-[medium]">
          <NavItem label="Explore Jobs" href="#form" />
          <NavItem label="Manufacturing" href="https://www.tesla.com/manufacturing" />
          <NavItem label="AI" href="https://www.tesla.com/AI" />
          <NavItem label="Internships" href="#form" />
          <NavItem label="About Us" href="https://www.tesla.com/about" />
        </nav>

        {/* RIGHT – PROFILE & REGION */}
        <div className="flex items-center gap-3 lg:gap-6">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden text-white text-[12px] font-[medium] hover:bg-black/30 px-1.5 transition duration-500 rounded-sm py-1"
          >
            Menu
          </button>
          
          {/* Desktop Profile Link */}
          <Link
            href="https://auth.tesla.com/oauth2/v1/authorize?response_type=code&client_id=connect&audience=https://profile.tesla.com/&redirect_uri=https://profile.tesla.com/auth/callback/&scope=offline_access%20openid%20ou_code%20email&state=123456"
            className="hidden lg:block text-white text-[14px] font-[medium] hover:bg-black/30 px-2 transition duration-500 rounded-sm py-1"
          >
            Profile
          </Link>

          <div className="hidden lg:flex items-center gap-1 text-white text-[14px] font-[medium]">
            <svg class="tds-icon tds-icon-globe" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
            fill="white" width="24" height="24">
            <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM9.254 20.047a8.147 8.147 0 0 1-.768-1.378c-.404-.91-.722-1.985-.935-3.169h-3.3a8.526 8.526 0 0 0 5.003 4.547Zm.603-1.988c.336.757.718 1.324 1.103 1.69.382.364.732.501 1.04.501.308 0 .658-.137 1.04-.5.385-.367.767-.934 1.103-1.69.321-.723.588-1.59.78-2.56H9.076c.192.97.459 1.837.78 2.56ZM8.75 12c0 .691.036 1.36.103 2h6.294c.067-.64.103-1.309.103-2 0-.691-.036-1.36-.103-2H8.853c-.067.64-.103 1.309-.103 2Zm-1.405-2H3.737a8.522 8.522 0 0 0-.237 2c0 .689.082 1.359.237 2h3.608a20.75 20.75 0 0 1 0-4Zm1.732-1.5h5.845c-.19-.97-.458-1.837-.779-2.56-.336-.756-.718-1.323-1.103-1.69-.382-.363-.732-.5-1.04-.5-.308 0-.658.137-1.04.5-.385.367-.767.934-1.103 1.69-.321.723-.588 1.59-.78 2.56Zm7.577 1.5a20.728 20.728 0 0 1 0 4h3.61a8.52 8.52 0 0 0 .236-2 8.52 8.52 0 0 0-.237-2h-3.609Zm3.094-1.5a8.526 8.526 0 0 0-5.002-4.547c.287.408.543.873.768 1.378.404.91.722 1.985.935 3.169h3.3Zm-12.197 0c.213-1.184.531-2.26.935-3.169.225-.505.48-.97.768-1.378A8.526 8.526 0 0 0 4.252 8.5h3.3Zm7.963 10.169c-.225.505-.48.97-.768 1.378a8.526 8.526 0 0 0 5.002-4.547h-3.3c-.212 1.184-.53 2.26-.934 3.169Z" fill="white"></path>
            </svg>
            <span>US</span>
          </div>
        </div>
      </div>
    </header>

    {/* Mobile Menu Overlay */}
    {menuOpen && (
      <>
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-black/50 z-[60] lg:hidden animate-fadeIn"
          onClick={() => setMenuOpen(false)}
        />
        
        {/* Menu Panel */}
        <div className="fixed right-0 top-0 bottom-0 w-[80%] bg-white z-[70] lg:hidden overflow-y-auto animate-slideInRight">
          <div className="p-6">
            {/* Close Button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="mb-8 text-black text-xl"
            >
              ✕
            </button>

            {/* Menu Items */}
            <nav className="flex flex-col gap-4">
              <Link
                href="#form"
                onClick={() => setMenuOpen(false)}
                className="text-black text-base font-[medium] hover:bg-gray-100 px-3 py-2 rounded-sm"
              >
                Explore Jobs
              </Link>
              <Link
                href="https://www.tesla.com/manufacturing"
                onClick={() => setMenuOpen(false)}
                className="text-black text-base font-[medium] hover:bg-gray-100 px-3 py-2 rounded-sm"
              >
                Manufacturing
              </Link>
              <Link
                href="https://www.tesla.com/AI"
                onClick={() => setMenuOpen(false)}
                className="text-black text-base font-[medium] hover:bg-gray-100 px-3 py-2 rounded-sm"
              >
                AI
              </Link>
              <Link
                href="#form"
                onClick={() => setMenuOpen(false)}
                className="text-black text-base font-[medium] hover:bg-gray-100 px-3 py-2 rounded-sm"
              >
                Internships
              </Link>
              <Link
                href="https://www.tesla.com/about"
                onClick={() => setMenuOpen(false)}
                className="text-black text-base font-[medium] hover:bg-gray-100 px-3 py-2 rounded-sm"
              >
                About Us
              </Link>
              
              {/* Profile & Language Section */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <Link
                  href="https://auth.tesla.com/oauth2/v1/authorize?response_type=code&client_id=connect&audience=https://profile.tesla.com/&redirect_uri=https://profile.tesla.com/auth/callback/&scope=offline_access%20openid%20ou_code%20email&state=123456"
                  onClick={() => setMenuOpen(false)}
                  className="text-black text-base font-[medium] hover:bg-gray-100 px-3 py-2 rounded-sm block mb-2"
                >
                  Profile
                </Link>
                <div className="flex items-center gap-2 text-black text-base font-[medium] px-3 py-2">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor" width="20" height="20">
                  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM9.254 20.047a8.147 8.147 0 0 1-.768-1.378c-.404-.91-.722-1.985-.935-3.169h-3.3a8.526 8.526 0 0 0 5.003 4.547Zm.603-1.988c.336.757.718 1.324 1.103 1.69.382.364.732.501 1.04.501.308 0 .658-.137 1.04-.5.385-.367.767-.934 1.103-1.69.321-.723.588-1.59.78-2.56H9.076c.192.97.459 1.837.78 2.56ZM8.75 12c0 .691.036 1.36.103 2h6.294c.067-.64.103-1.309.103-2 0-.691-.036-1.36-.103-2H8.853c-.067.64-.103 1.309-.103 2Zm-1.405-2H3.737a8.522 8.522 0 0 0-.237 2c0 .689.082 1.359.237 2h3.608a20.75 20.75 0 0 1 0-4Zm1.732-1.5h5.845c-.19-.97-.458-1.837-.779-2.56-.336-.756-.718-1.323-1.103-1.69-.382-.363-.732-.5-1.04-.5-.308 0-.658.137-1.04.5-.385.367-.767.934-1.103 1.69-.321.723-.588 1.59-.78 2.56Zm7.577 1.5a20.728 20.728 0 0 1 0 4h3.61a8.52 8.52 0 0 0 .236-2 8.52 8.52 0 0 0-.237-2h-3.609Zm3.094-1.5a8.526 8.526 0 0 0-5.002-4.547c.287.408.543.873.768 1.378.404.91.722 1.985.935 3.169h3.3Zm-12.197 0c.213-1.184.531-2.26.935-3.169.225-.505.48-.97.768-1.378A8.526 8.526 0 0 0 4.252 8.5h3.3Zm7.963 10.169c-.225.505-.48.97-.768 1.378a8.526 8.526 0 0 0 5.002-4.547h-3.3c-.212 1.184-.53 2.26-.934 3.169Z"></path>
                  </svg>
                  <span>US</span>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </>
    )}
    </>
  );
}

/* ---------- STYLES ---------- */
const styles = `
  @keyframes slideInRight {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .animate-slideInRight {
    animation: slideInRight 0.3s ease-out;
  }
  .animate-fadeIn {
    animation: fadeIn 0.3s ease-out;
  }
`;

if (typeof document !== 'undefined' && !document.getElementById('navbar-animations')) {
  const styleSheet = document.createElement('style');
  styleSheet.id = 'navbar-animations';
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

/* ---------- NAV ITEM ---------- */

function NavItem({ label, href }) {
  return (
    <Link
      href={href}
      className="text-white text-[14px] font-[medium] hover:bg-black/20 px-3 transition duration-500 rounded-sm py-1"
    >
      {label}
    </Link>
  );
}

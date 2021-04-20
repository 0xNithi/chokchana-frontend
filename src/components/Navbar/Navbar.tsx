/* eslint-disable */

import React from 'react'
import { Link } from 'react-router-dom'
import UserBlock from './components/UserBlock'
import ThemeSwitcher from './components/ThemeSwitcher'
import config from './config'

const Navbar: React.FC = () => {
  const links = config.map((item, index) => (
    <Link
      to={item.href}
      className="text-purple-lightest dark:text-purple-light px-3 py-2 rounded-md text-base font-medium"
      key={index}
    >
      {item.label}
    </Link>
  ))

  return (
    <nav className="border-b-2 border-gray-light dark:border-purple bg-white dark:bg-gray-darkest">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-stretch justify-start">
            <button
              className="inline-flex items-center justify-center p-2 mr-6 rounded-md text-purple-light hover:bg-purple focus:outline-none sm:hidden"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                className="block h-6 w-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Link to="/" className="flex-shrink-0 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-7">
                <linearGradient id="linear-gradient">
                  <stop offset="0" stopColor="#12bee5" />
                  <stop offset=".5" stopColor="#c071e9" />
                  <stop offset="1" stopColor="#f24f5a" />
                </linearGradient>
                <path
                  d="m488 216h-17.578l-297.984-198.656a8 8 0 0 0 -11.133 2.278l-47.083 72a8 8 0 0 0 2.536 11.212 40 40 0 1 1 -42.173 67.975 8 8 0 0 0 -11.185 2.691l-25.082 42.5h-14.318a8 8 0 0 0 -8 8v80a8 8 0 0 0 8 8 40 40 0 0 1 0 80 8 8 0 0 0 -8 8v88a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8v-88a8 8 0 0 0 -8-8 40 40 0 0 1 0-80 8 8 0 0 0 8-8v-80a8 8 0 0 0 -8-8zm-414.709-27.778a56.01 56.01 0 0 0 58.519-94.263l38.468-58.825 67.859 45.239-12.793 19.189a8 8 0 1 0 13.312 8.876l12.793-19.19 190.129 126.752h-107.819l-73.459-46.75a8 8 0 0 0 -8.59 13.5l52.246 33.25h-247.056zm406.709 108.348a56.005 56.005 0 0 0 0 110.86v72.57h-80v-24a8 8 0 0 0 -16 0v24h-352v-72.57a56.005 56.005 0 0 0 0-110.86v-64.57h352v24a8 8 0 0 0 16 0v-24h80zm-80-8.57v24a8 8 0 0 1 -16 0v-24a8 8 0 0 1 16 0zm0 56v24a8 8 0 0 1 -16 0v-24a8 8 0 0 1 16 0zm0 56v24a8 8 0 0 1 -16 0v-24a8 8 0 0 1 16 0zm-64-136h-232a8 8 0 0 0 -8 8v104a8 8 0 0 0 8 8h232a8 8 0 0 0 8-8v-104a8 8 0 0 0 -8-8zm-8 104h-216v-88h216zm16 40a8 8 0 0 1 -8 8h-232a8 8 0 0 1 0-16h232a8 8 0 0 1 8 8zm0 32a8 8 0 0 1 -8 8h-232a8 8 0 0 1 0-16h232a8 8 0 0 1 8 8zm-121.344-307.562-16 24a8 8 0 1 1 -13.312-8.876l16-24a8 8 0 1 1 13.312 8.876zm-32 48-16 24a8 8 0 1 1 -13.312-8.876l16-24a8 8 0 0 1 13.312 8.876zm74.594-40.733a8 8 0 0 1 11.05-2.455l88 56a8 8 0 1 1 -8.59 13.5l-88-56a8 8 0 0 1 -2.46-11.045z"
                  fill="url(#linear-gradient)"
                />
              </svg>
              <span className="ml-1 text-xl font-black text-black dark:text-white hidden lg:block">โชคชนะ</span>
            </Link>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex items-center space-x-4">
                <div className="border-l-2 border-purple-light h-8">
                  <span className="sr-only">Vertical line</span>
                </div>
                {links}
              </div>
            </div>
          </div>
          <div className="flex items-center pr-2 sm:pr-0">
            <div className="ml-3 relative">
              <UserBlock />
            </div>
            <div className="ml-3 relative hidden sm:block">
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden sm:hidden">
        <div className="flex flex-col px-2 pt-2 pb-3 space-y-1">{links}</div>
      </div>
    </nav>
  )
}

export default Navbar

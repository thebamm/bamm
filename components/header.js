import Link from 'next/link'
import Container from './container'
import { useState, useEffect } from 'react'
import { Logo, LogoIcon } from './icons'

export default function Header() {
  const storedDarkMode = () => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem('DARK_MODE')) ||
        (!('DARK_MODE' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }

    return false
  }

  const [darkMode, setDarkMode] = useState(storedDarkMode);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem('DARK_MODE', JSON.stringify(darkMode));
    }

    if (darkMode) {
      document.querySelector('html').classList.add('dark')

      return
    }

    document.querySelector('html').classList.remove('dark')
  }, [darkMode]);

  return (
    <header className='sticky top-0 z-40 bg-white dark:bg-coal-800'>
      <Container>
        <div className='flex items-center justify-between py-4'>
          <div className='md:flex items-center'>
            <Link href='/'>
              <a className='flex items-center'>
                <span className="sr-only">bamm blog home page</span>
                <LogoIcon className='text-4xl text-apple-500 mr-2'/>

                <Logo className='text-coal-500 dark:text-apple-50'/>
              </a>
            </Link>
          </div>

          <button
            onClick={toggleDarkMode}
            type='button'
            className='group rounded-md border border-transparent text-coal-500 focus:outline-none'>
            <span className='sr-only'>
              <span className='dark:hidden'>Switch to dark theme</span>
              <span className='hidden dark:inline'>Switch to light theme</span>
            </span>

            <svg
              width='34'
              height='34'
              viewBox='-5 -5 34 34'
              strokeWidth='0'
             className='fill-coal-500 dark:fill-apple-50'
            >
              <g className='dark:opacity-0'>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M9.353 2.939a1 1 0 01.22 1.08 8 8 0 0010.408 10.408 1 1 0 011.301 1.3A10.003 10.003 0 0112 22C6.477 22 2 17.523 2 12c0-4.207 2.598-7.805 6.273-9.282a1 1 0 011.08.22z'/>
              </g>
              <g className='opacity-0 dark:opacity-100'>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M12 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zM4.929 4.929a1 1 0 011.414 0l.707.707A1 1 0 115.636 7.05l-.707-.707a1 1 0 010-1.414zm14.142 0a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM7 12a5 5 0 1110 0 5 5 0 01-10 0zm-5 0a1 1 0 011-1h1a1 1 0 110 2H3a1 1 0 01-1-1zm17 0a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zm-2.05 4.95a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zm-11.314 0a1 1 0 011.414 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707zM12 19a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1z'/>
              </g>
            </svg>
          </button>
        </div>
      </Container>
    </header>
  )
}

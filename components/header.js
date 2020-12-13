import Link from 'next/link'
import Container from './container'
import { useState, useEffect } from 'react'

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
    <header className='sticky top-0 z-40 bg-apple-50 dark:bg-coal-800'>
      <Container>
        <div className='flex items-center justify-between py-4'>
          <div className='md:flex items-center'>
            <Link href='/'>
              <a className='block'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 1280 330'
                  className='w-auto h-6'
                  >
                    <path
                      fill='#55bb55'
                      // stroke='#55bb55'
                      // strokeWidth='2'
                      d='M139.06 92.16c-29.83 0-51.65 10.24-66.34 27.16V9.35H5.94V321h66.78v-20.93c14.69 16.92 36.51 27.16 66.34 27.16 58.32 0 106.4-51.2 106.4-117.53 0-66.34-48.08-117.54-106.4-117.54zM125.7 264.01c-30.72 0-52.98-20.92-52.98-54.31 0-33.4 22.26-54.32 52.98-54.32 30.72 0 52.98 20.92 52.98 54.32 0 33.39-22.26 54.31-52.98 54.31zM444.92 98.39v20.93c-14.69-16.92-36.51-27.16-66.34-27.16-58.32 0-106.4 51.2-106.4 117.54 0 66.33 48.08 117.53 106.4 117.53 29.83 0 51.65-10.24 66.34-27.16V321h66.78V98.39zm-52.98 165.62c-30.72 0-52.98-20.92-52.98-54.31 0-33.4 22.26-54.32 52.98-54.32 30.72 0 52.98 20.92 52.98 54.32 0 33.39-22.26 54.31-52.98 54.31zM810 92.16c-31.61 0-52.09 11.57-64.56 29.38-12.46-18.7-32.05-29.38-58.32-29.38-29.83 0-49.42 11.57-59.66 26.71V98.39h-66.78V321h66.78V195.45c0-26.27 12.47-41.85 34.73-41.85 21.37 0 32.05 14.25 32.05 36.51V321h66.78V195.45c0-26.27 12.47-41.85 34.73-41.85 21.37 0 32.06 14.25 32.06 36.51V321h66.78V184.32c0-55.65-33.39-92.16-84.59-92.16zm379.77 0c-31.61 0-52.09 11.57-64.56 29.38-12.46-18.7-32.05-29.38-58.32-29.38-29.83 0-49.42 11.57-59.66 26.71V98.39h-66.78V321h66.78V195.45c0-26.27 12.47-41.85 34.73-41.85 21.37 0 32.05 14.25 32.05 36.51V321h66.79V195.45c0-26.27 12.46-41.85 34.72-41.85 21.37 0 32.06 14.25 32.06 36.51V321h66.78V184.32c0-55.65-33.39-92.16-84.59-92.16z'/>
                </svg>
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

import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <Container className="border-t border-coal-100">
        <div className="py-12 flex flex-col lg:flex-row items-center">
          <div className="flex mb-10 lg:mb-0 items-center lg:pr-4 lg:w-1/2">
            <Link href='/'>
              <a className='block'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 1280 330'
                  className='w-auto h-6'
                >
                  <path
                    fill='#55bb55'
                    d='M139.06 92.16c-29.83 0-51.65 10.24-66.34 27.16V9.35H5.94V321h66.78v-20.93c14.69 16.92 36.51 27.16 66.34 27.16 58.32 0 106.4-51.2 106.4-117.53 0-66.34-48.08-117.54-106.4-117.54zM125.7 264.01c-30.72 0-52.98-20.92-52.98-54.31 0-33.4 22.26-54.32 52.98-54.32 30.72 0 52.98 20.92 52.98 54.32 0 33.39-22.26 54.31-52.98 54.31zM444.92 98.39v20.93c-14.69-16.92-36.51-27.16-66.34-27.16-58.32 0-106.4 51.2-106.4 117.54 0 66.33 48.08 117.53 106.4 117.53 29.83 0 51.65-10.24 66.34-27.16V321h66.78V98.39zm-52.98 165.62c-30.72 0-52.98-20.92-52.98-54.31 0-33.4 22.26-54.32 52.98-54.32 30.72 0 52.98 20.92 52.98 54.32 0 33.39-22.26 54.31-52.98 54.31zM810 92.16c-31.61 0-52.09 11.57-64.56 29.38-12.46-18.7-32.05-29.38-58.32-29.38-29.83 0-49.42 11.57-59.66 26.71V98.39h-66.78V321h66.78V195.45c0-26.27 12.47-41.85 34.73-41.85 21.37 0 32.05 14.25 32.05 36.51V321h66.78V195.45c0-26.27 12.47-41.85 34.73-41.85 21.37 0 32.06 14.25 32.06 36.51V321h66.78V184.32c0-55.65-33.39-92.16-84.59-92.16zm379.77 0c-31.61 0-52.09 11.57-64.56 29.38-12.46-18.7-32.05-29.38-58.32-29.38-29.83 0-49.42 11.57-59.66 26.71V98.39h-66.78V321h66.78V195.45c0-26.27 12.47-41.85 34.73-41.85 21.37 0 32.05 14.25 32.05 36.51V321h66.79V195.45c0-26.27 12.46-41.85 34.72-41.85 21.37 0 32.06 14.25 32.06 36.51V321h66.78V184.32c0-55.65-33.39-92.16-84.59-92.16z'/>
                </svg>
              </a>
            </Link>
          </div>

          <h5 className="tracking-tighter leading-tight text-center lg:text-left lg:pl-4 lg:w-1/2">
            Web, Tech and Beyond
          </h5>

        {/*  <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">*/}
        {/*    <a*/}
        {/*      href="https://nextjs.org/docs/basic-features/pages"*/}
        {/*      className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"*/}
        {/*    >*/}
        {/*      Read Documentation*/}
        {/*    </a>*/}
        {/*    <a*/}
        {/*      href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}*/}
        {/*      className="mx-3 font-bold hover:underline"*/}
        {/*    >*/}
        {/*      View on GitHub*/}
        {/*    </a>*/}
        {/*  </div>*/}
        </div>
      </Container>
    </footer>
  )
}

'use client';

import Image from 'next/image';
import NavLink from './NavLink';

export default function Hero() {
  return (
    <section>
      <div className='custom-screen sm:pt-56 pt-28 text-gray-600 flex justify-between gap-8 sm:flex-row flex-col'>
        <div className='space-y-5 max-w-4xl text-center sm:w-1/2'>
          <p
            className={`border border-gray-300 px-[15px] py-[5px] rounded-2xl hover:bg-gray-100 transition text-xs text-black hover:text-gray-600 w-max my-0 mx-auto shadow-[0px_1px_1px_0px_rgba(0,0,0,0.25)]`}
          >
            Used by professionals for {" "}
            <span className="text-xs font-medium">
              <b><i>Career Inspiration ♾️</i></b>
            </span>
          </p>
          {/* <p className="text-center text-sm font-light leading-[normal] text-[#1B1B16]">
            Design & Developed By {" "}
            <span className="text-sm font-medium">
              <a
                href="https://devkrazyykunal.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <b><i>Krazyy Kunal ♾️</i></b>
              </a>
            </span>
          </p> */}
          <h1 className='text-3xl text-gray-800 font-extrabold mx-auto sm:text-6xl'>
            Find the right career for you using AI
          </h1>
          <p className='max-w-xl mx-auto'>
            Explore Careers allows you to explore careers based on your skills
            and interests <span className='font-semibold'>using AI</span> in
            seconds, completely for free.
          </p>
          <div className='flex items-center justify-center gap-x-3 font-medium text-sm'>
            <NavLink
              href='/careers'
              className='text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900 '
            >
              Explore Careers
            </NavLink>
            <NavLink
              target='_blank'
              href='https://github.com/Kunalsonar007/explorecareers'
              className='text-gray-700 border hover:bg-gray-50'
              scroll={false}
            >
              Learn more
            </NavLink>
          </div>
        </div>
        <div className=''>
          <Image
            src='/fancy-screenshot.png'
            className='rounded-2xl border'
            alt='hero'
            width={700}
            height={700}
          />
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';
import UTS from '../public/assets/uts-logo.png'
import Evaheld from '../public/assets/evaheld-logo.jpeg'
import { useRouter } from 'next/router';


const About = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/property')
  }
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2  flex justify-between flex-col'>
          <p className='uppercase text-3xl tracking-widest text-[#5651e5]'>
            About Me
          </p>
          <div className='flex justify-between gap-3'>
            <div className=' w-full h-full' > 
              <div className='w-full h-full gap-2 m-auto shadow-xl shadow-gray-400 rounded-xl flex flex-col items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <h3>Education</h3>

                <Image src={UTS} className='rounded-xl' alt='/' />
                <p>University of Technology Sydney</p>
                <p className='text-center text-xs italic'>Bachelor of Engineering {'('}Honour{')'} in {'('}name of Engineering major{')'}  Diploma in Professional Engineering Practice</p>

              </div>
            </div>
            <div className=' w-full h-full' > 
              <div className='w-full h-full gap-2 m-auto shadow-xl shadow-gray-400 rounded-xl flex flex-col items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <h3>Experience</h3>
                <div className='grid grid-cols-2 grid-rows-2 h-[90%] w-[90%] gap-3'>
                <div onClick={handleClick} className='w-full h-full cursor-pointer gap-2 m-auto shadow-xl shadow-gray-400 rounded-xl flex flex-col items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                  <Image src={Evaheld} height='100' width={'100'}  className='rounded-xl' alt='/' />
                  <p className='font-semibold'>Evaheld</p>
                </div>
                <div className='w-full h-full gap-2 m-auto shadow-xl shadow-gray-400 rounded-xl flex flex-col items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                </div>
                <div className='w-full h-full gap-2 m-auto shadow-xl shadow-gray-400 rounded-xl flex flex-col items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                </div>
                <div className='w-full h-full gap-2 m-auto shadow-xl shadow-gray-400 rounded-xl flex flex-col items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                </div>
                </div>
               
              </div>
            </div>
          </div>
          {/* <h2 className='py-4'>Who I Am</h2> */}
          <div className='mt-5'>
            <p className='py-2 text-gray-600 text-md  '>
              I'm a motivated third-year software engineering student with a goal of becoming a full stack developer. I strive
              to make meaningful applications and collaborate with others to make this happen.

            </p>
          
            <Link href='/#projects'>
              <p className='py-2 text-gray-600 underline cursor-pointer'>
                Check out some of my latest projects.
              </p>
            </Link>
          </div>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;

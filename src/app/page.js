import Head from "next/head";
import {BsFillMoonStarsFill } from 'react-icons/bs';
import {FaStackOverflow} from 'react-icons/fa';
import {AiFillLinkedin,AiFillGithub,AiFillTwitterCircle} from 'react-icons/ai'
import Image from "next/image";
import avatar from '/public/Avatar.png'
import Frontlogo from '/public/Frontendlogo.png'
import Backlogo from '/public/Backendlogo.png'
import Analystlogo from '/public/AnalystLogo.png'
import Fullstacklogo from'/public/full-stack.png'
export default function Home() {
  return (
    <div>
    <main className="bg-white px-10">
                               {/* Intro section  */}
      <section className="">
        <nav className="py-10 mb-12 flex justify-between ">
        <h1 className="text-xl ">DeveloperYash</h1>
          <ul className="flex items-center">
            <li className="cursor-pointer text-2xl">
              <BsFillMoonStarsFill/>
            </li>
            <li>
              <a
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 ml-8 rounded-md "
               href="#" >Resume</a>
            </li>
          </ul>
        </nav>
        <div className="flex">
        <div className=" p-10">
          <h2 className="font-medium text-5xl py-2 text-teal-600 " >Hi I am Yash ,</h2>
          <h3 className="text-2xl py-2" >Lorem ipsum dolor .</h3>
          <p className="text-md py-5 leading-8 text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Sit quod non voluptate alias laboriosam dolores!
            </p>

        </div>
        <div className="relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-teal-500 to-white rounded-full w-90 h-90 ml-8">
          <Image src={avatar} className=" fill" objectFit="cover" />
        </div>
        </div>
        <div className="text-4xl flex justify-center gap-10 text-gray-600 ">
        <a href="https://github.com/Yashworkprofile" target="_blank"  className="hover:text-gray-950 transition-colors duration-300">
          <AiFillGithub />
          </a>
          <a  href="https://www.linkedin.com/in/yash-singhal223" target="_blank"  className="hover:text-blue-700 transition-colors duration-300">
          <AiFillLinkedin/>
          </a>
          <a href="https://stackoverflow.com/users/23983727/yash-singhal" target="_blank"  className="hover:text-orange-500 transition-colors duration-300">
          <FaStackOverflow/>
          </a>
        </div>
          
     
      </section>
                              {/* About Me Section */}
     <section className="my-5 p-10">
      <div className="">
        <h1 className="text-4xl text-teal-600 font-medium ">My Expertise</h1>
      </div>
      <div className="my-10 flex gap-10">
        <div className="shadow-lg p-6 w-full max-w-xs flex flex-col items-center gap-5  bg-custom-light-blue ">
          <Image src={Frontlogo} width={100} height={100} />
          <h3 className="text-lg font-semibold">Front-End</h3>
          <p>
          I am Skilled on creating responsive and dynamic user interfaces, using clean, maintainable code in JavaScript, React, Tailwind CSS, JSX, and HTML to deliver seamless and engaging web experiences.

          </p>

        </div>
        <div className="shadow-lg p-6 w-full max-w-xs flex flex-col items-center gap-5 bg-custom-light-blue">
          <Image src={Backlogo} width={100} height={100}/>
          <h3 className="text-lg font-semibold">Back-End</h3>
          <p>
          I specialize in backend development with Python and Java, building robust server-side solutions and APIs. My expertise includes SQL and PostgreSQL for  database management and data manipulation.

          </p>

        </div>
        <div className="shadow-lg p-6 w-full max-w-xs flex flex-col items-center  gap-5 bg-custom-light-blue">
          <Image src={Analystlogo} width={100} height={100}/>
          <h3 className="text-lg font-semibold">Data Analysis</h3>
          <p>
          For data analysis, I leverage Python along with Pandas and NumPy to perform advanced data manipulations and build machine learning models, providing actionable insights from complex datasets.

          </p>

        </div>
        <div className="shadow-lg p-6 w-full max-w-xs flex flex-col items-center gap-5 bg-custom-light-blue ">
          <Image src={Fullstacklogo} width={100} height={100}/>
          <h3 className="text-lg font-semibold">Full-Stack Developer</h3>
          <p>
          As a full-stack developer, I combine Python and Java with frontend frameworks to create complete web applications. I'm also learning Firebase to improve real-time data and cloud functionality.

          </p>

        </div>
        
      
      </div>

     </section>
      </main>
    </div>
  );
}

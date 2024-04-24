import React from 'react'

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { TbWorldShare } from "react-icons/tb";

export default function App() {
  return (
    <div className='bg-zinc-800 flex w-full h-screen'>
      <main className='w-full text-white flex'>
        <header className=' h-screen w-[300px] flex flex-col items-center justify-between border-l-8 border-orange-600'>
          <div className='pt-10'>
            <img className='w-64 rounded' src="https://i.ibb.co/ZgRp7Vy/4ae07d6ffec77bcfba4badb12d3ee5da.jpg" alt="" />
            <div className='flex justify-center pt-4'>
              <span className='text-xl '>AJK</span>
            </div>

            <nav className='pt-10 flex flex-col justify-between p-4'>
              <ul className='flex flex-col gap-4 text-2xl'>
                <li className='cursor-pointer'>sobre</li>
                <li className='cursor-pointer'>projetos</li>
                <li className='cursor-pointer'>site</li>
              </ul>
            </nav>
          </div>
          <div className='pb-10'>
            <span>Todos direitos de ajk</span>
          </div>
        </header>

        <div className=' w-full pl-6 pt-10 flex justify-center overflow-y-scroll scrollbar-thin scrollbar-thumb-orange-600 scrollbar-track-zinc-800'>
          <div>
            <h1 className='text-4xl text-center'>ajk portfolio</h1>

            <div className='max-w-[700px] pt-20 w-full'>
              <h2 className='text-2xl mb-6'>sobre</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aliquam quaerat dicta veniam ipsam repudiandae deserunt accusantium quibusdam, sunt repellendus quasi vero molestiae, enim eum amet blanditiis quia eaque eveniet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptatibus commodi aperiam amet nostrum voluptatum optio natus sunt rem nisi ab perferendis alias illo quos, laborum harum corrupti consequatur aspernatur?</p>
            </div>

            <div className='max-w-[700px] pt-20 w-full'>
              <h2 className='text-2xl mb-6'>experiencia</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aliquam quaerat dicta veniam ipsam repudiandae deserunt accusantium quibusdam, sunt repellendus quasi vero molestiae, enim eum amet blanditiis quia eaque eveniet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptatibus commodi aperiam amet nostrum voluptatum optio natus sunt rem nisi ab perferendis alias illo quos, laborum harum corrupti consequatur aspernatur?</p>
            </div>

            <div className='max-w-[700px] py-20 w-full'>
              <h2 className='text-2xl mb-6'>conhecimento</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aliquam quaerat dicta veniam ipsam repudiandae deserunt accusantium quibusdam, sunt repellendus quasi vero molestiae, enim eum amet blanditiis quia eaque eveniet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptatibus commodi aperiam amet nostrum voluptatum optio natus sunt rem nisi ab perferendis alias illo quos, laborum harum corrupti consequatur aspernatur?</p>
            </div>
          </div>
        </div>
      </main>

      <aside className='bg-orange-600 h-screen w-[60px] text-white flex justify-center items-center overflow-hidden'>
        <ul className='flex flex-col justify-center items-center gap-4 font-sans text-xl w-full'>
          <a href="https://github.com/osvaldocordeiroandre" target='_blank'>
            <li className='hover:bg-orange-400 w-full text-center cursor-pointer p-4 '><FaGithub size={30} /></li>
          </a>
          <a href="https://www.linkedin.com/in/osvaldo-cordeiro-andr%C3%A9-009760231/" target='_blank'>
            <li className='hover:bg-orange-400 w-full text-center cursor-pointer p-4'><FaLinkedin size={30} /></li>
          </a>
          <a href="mailto:ajknew2022@gmail.com">
            <li className='hover:bg-orange-400 w-full text-center cursor-pointer p-4'><MdOutlineEmail size={30} /></li>
          </a>
          <a href="https://itadoriamvs.vercel.app/" target='_blank'>
            <li className='hover:bg-orange-400 w-full text-center cursor-pointer p-4'><TbWorldShare size={30} /></li>
          </a>
        </ul>
      </aside>
    </div>
  )
}

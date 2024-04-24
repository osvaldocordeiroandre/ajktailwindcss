import React from 'react'
import ImageSkelet from './ImageSkelet'

export default function HeaderLeft() {
    return (
        <header className=' h-screen w-[300px] flex flex-col items-center justify-between border-l-8 border-orange-600 sm:hidden'>
            <div className='pt-10'>
                <ImageSkelet hash={'LqONB[%Mof%M~qIUofRjof-;t7IU'} src={'https://i.ibb.co/ZgRp7Vy/4ae07d6ffec77bcfba4badb12d3ee5da.jpg'} />
                <div className='flex justify-center pt-4'>
                    <span className='text-xl animate-slide-Y '>AJK</span>
                </div>

                <nav className='pt-10 flex flex-col justify-between p-4'>
                    <ul className='flex flex-col gap-4 text-2xl animate-slide-X'>
                        <li className='cursor-pointer'>sobre</li>
                        <li className='cursor-pointer'>projetos</li>
                        <li className='cursor-pointer'>site</li>
                    </ul>
                </nav>
            </div>
            <div className='pb-10 animate-slide-X'>
                <span>Todos direitos de ajk</span>
            </div>
        </header>
    )
}

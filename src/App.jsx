import React from 'react'

import AsideRight from './components/asideRight/AsideRight';
import HeaderLeft from './components/headerLeft/HeaderLeft';
import Content from './components/content/Content';

export default function App() {
  return (
    <div className='bg-zinc-800 flex w-full h-screen'>
      <main className='w-full text-white flex'>
        <HeaderLeft />
        <Content />
      </main>
      <AsideRight />
    </div>
  )
}

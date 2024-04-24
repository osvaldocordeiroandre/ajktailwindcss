import React, { useEffect, useState } from 'react'

import { Blurhash } from 'react-blurhash'

export default function ImageSkelet({hash, src}) {
    const [imageLoad, setImageLoad] = useState(false)

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setImageLoad(true)
        }
        img.src = src
    }, [src])

  return (
    <>
        {!imageLoad ? <Blurhash className='rounded animate-slide-X' hash={hash} width={256} height={256} punch={1} resolutionX={31} resolutionY={31}  /> :
        <img className='w-64 rounded animate-slide-X' src={src} alt="" />}
    </>
  )
}

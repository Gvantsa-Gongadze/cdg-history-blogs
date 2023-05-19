import Image from 'next/image'
import me from '../../public/assets/imgs/about-me/me.png'
import { Sprite, Stage } from '@pixi/react'

const AboutMe = () => {
  const canvWidth = 400
  const canvHeight = 500
  return (
    <div className='flex h-[calc(100vh-100px)] justify-center items-center'>
      {/* <Image
        className='w-1/2 p-5'
        width={400}
        height={500}
        src={me.src}
        alt='me'
      /> */}
      <Stage width={canvWidth} height={canvHeight}>
        <Sprite x={0} width={canvWidth} height={canvHeight} image={me.src} />
      </Stage>

      <div className='w-1/2 p-5 flex flex-col'>
        <div className='mb-2 font-bold items-start'>about me text</div>
        <div>about me desctiptoin</div>
      </div>
    </div>
  )
}

export default AboutMe

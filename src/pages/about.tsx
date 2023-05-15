import Image from 'next/image'

const AboutMe = () => {
  return (
    <div className='flex h-[calc(100vh-100px)] justify-center items-center'>
      <Image
        className='w-1/2 p-5'
        width={400}
        height={500}
        src='/../public/assets/imgs/about-me/me.png'
        alt='me'
      />
      <div className='w-1/2 p-5 flex flex-col'>
        <div className='mb-2 font-bold items-start'>about me text</div>
        <div>about me desctiptoin</div>
      </div>
    </div>
  )
}

export default AboutMe

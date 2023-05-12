import { SliderAnimation } from '../../components/animations'

const HomePage = () => {
  return (
    <div className='flex justify-between bg-slate-100 lg:h-[calc(100vh-100px)] md:h-auto flex-col-reverse lg:flex-row'>
      <div className='lg:w-1/2 flex flex-col justify-center items-center text-center bg-slate-400 md:w-full lg:h-full min-h-[400px] p-5'>
        <div className='text-7xl'>Welcome text</div>
        <div className='text-xl'>Mission text goes here</div>
      </div>
      <div className='lg:w-1/2 flex flex-col justify-center items-center md:w-100 h-full min-h-[400px] p-5'>
        <div>
          <SliderAnimation />
        </div>
        <div className='pt-5'>Desctiprion goes here</div>
      </div>
    </div>
  )
}

export default HomePage

import Image from 'next/image'

const ContactUs = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex flex-col items-center text-7xl tracking-widest mb-3'>
        <div>-</div>
        <div>Get In Touch</div>
        <div>-</div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <div className='font-bold'>Amiran Kvantaliani</div>
        <div>Writer</div>
        <div>123-456-7890</div>
        <div>info@my-domain.com</div>
      </div>
    </div>
  )
}

export default ContactUs

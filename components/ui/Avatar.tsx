import ContentfulImage from './ContentfulImage'

const Avatar = ({ name, picture }: any) => {
  return (
    <div className='flex justify-center items-baseline'>
      <div className='mr-2 ml-2'>{name}</div>
      <ContentfulImage
        src={picture.fields.file.url}
        layout='fill'
        className='rounded-full n-9'
        alt={name}
        width={25}
        height={25}
      />
    </div>
  )
}
export default Avatar

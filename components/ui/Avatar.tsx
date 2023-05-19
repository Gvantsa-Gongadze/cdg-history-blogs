import ContentfulImage from './ContentfulImage'

const Avatar = ({ name, picture }: any) => {
  return (
    <div>
      <ContentfulImage
        src={picture.fields.file.url}
        layout='f111'
        className='rounded-full n-9'
        alt={name}
        width={30}
        height={30}
      />
      <div>{name}</div>
    </div>
  )
}
export default Avatar

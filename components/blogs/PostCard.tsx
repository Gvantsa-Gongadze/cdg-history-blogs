import Link from 'next/link'
import ContentfulImage from '../ui/ContentfulImage'
import DateComponent from '../ui/DateComponent'
import Avatar from '../ui/Avatar'

const PostCard = ({ post }: any) => {
  const { title, slug, excerpt, coverImage, author, date } = post.fields

  // console.log('title: ', title)
  // console.log('slug: ', slug)
  // console.log('excerpt: ', excerpt)
  // console.log('coverImage: ', coverImage)
  // console.log('author: ', author)
  // console.log('date: ', date)

  return (
    <div className='shadow-md overflow-hidden m-5 flex-wrap'>
      <Link href={`/blogs/${slug}`} aria-label={title}>
        <div className='mb-2'>
          <ContentfulImage
            alt={`Cover Inage for ${title}`}
            src={coverImage.fields.file.url}
            width={coverImage.fields.file.details.image.width}
            height={coverImage.fields.file.details.image.height}
          />
        </div>

        <div>
          <h3>{title}</h3>
        </div>
        <div>
          <span>Published: </span>
          <DateComponent dateString={date} />
        </div>
        <div className='flex '>
          Author: {author.fields.name}
          {/* <Avatar name={author.fields.name} picture={author.fields.picture} /> */}
        </div>
      </Link>
    </div>
  )
}

export default PostCard

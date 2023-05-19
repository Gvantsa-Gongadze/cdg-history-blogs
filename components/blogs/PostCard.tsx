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

  // return
  return (
    <div>
      <Link href={`/blogs/${slug}`} aria-label={title}>
        <ContentfulImage
          alt={`Cover Inage for ${title}`}
          src={coverImage.fields.file.url}
          width={coverImage.fields.file.details.image.width}
          height={coverImage.fields.file.details.image.height}
        />

        <div>
          <h3>{title}</h3>
        </div>
        <div>
          <DateComponent dateString={date} />
        </div>
        <div>
          <Avatar name={author.fields.name} picture={author.fields.picture} />
        </div>
      </Link>
    </div>
  )
}

export default PostCard

import PostCard from '../../../components/blogs/PostCard'
import { client } from '../../../lib/contentful/client'

const Blogs = ({ blogs }: any) => {
  return (
    <div>
      <div>-</div>
      <div>Blogs</div>
      {blogs.map((blog: any, i: number) => (
        <PostCard key={blog.fields.slug} post={blog} />
      ))}
    </div>
  )
}

export const getStaticProps = async () => {
  const response = await client.getEntries({ content_type: 'post' })
  // console.log('blogs: ', response)
  return {
    props: {
      blogs: response.items,
      revalidate: 60
    }
  }
}

export default Blogs

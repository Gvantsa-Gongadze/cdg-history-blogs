import PostCard from '../../../components/blogs/PostCard'
import { client } from '../../../lib/contentful/client'

const Blogs = ({ blogs }: any) => {
  return (
    <div>
      <div className='text-5xl text-center'>-</div>
      <div className='text-5xl text-center'>Blogs</div>
      <div className='flex m-5 justify-center items-center flex-wrap'>
        {blogs.map((blog: any, i: number) => (
          <PostCard key={blog.fields.slug} post={blog} />
        ))}

        {blogs.map((blog: any, i: number) => (
          <PostCard key={blog.fields.slug} post={blog} />
        ))}

        {blogs.map((blog: any, i: number) => (
          <PostCard key={blog.fields.slug} post={blog} />
        ))}
      </div>
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

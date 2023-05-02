import { client } from '../../../lib/contentful/client'

const Blogs = ({ blogs }) => {
  console.log('posts: ', blogs)
  return <div>list: </div>
  // return <div>list: {posts?.map((post, i) => post)}</div>
}

export const getStaticProps = async () => {
  const response = await client.getEntries({ content_type: 'post' })
  console.log('posts: ', response)

  return {
    props: {
      blogs: response.items,
      revalidate: 60
    }
  }
}

export default Blogs

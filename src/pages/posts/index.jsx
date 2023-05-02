import { client } from '../../../lib/contentful/client'

const Posts = ({ posts }) => {
  console.log('posts: ', posts)
  return <div>list</div>
  // return <div>list: {posts?.map((post, i) => post)}</div>
}

export const getStaticProps = async () => {
  const response = await client.getEntries({ content_type: 'post' })
  console.log('posts: ', response)

  return {
    props: {
      posts: response.items,
      revalidate: 60
    }
  }
}

export default Posts

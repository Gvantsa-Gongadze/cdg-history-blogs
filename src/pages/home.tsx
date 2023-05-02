import { client } from '../../lib/contentful/client'

const HomePage = () => {
  return <div className='text-3xl font-bold'>Home Page</div>
}

export const getStaticProps = async () => {
  const response = await client.getEntries({ content_type: 'post' })
  console.log('response:', response)

  return {
    props: {
      posts: response.items,
      revalidate: 60
    }
  }
}

export default HomePage

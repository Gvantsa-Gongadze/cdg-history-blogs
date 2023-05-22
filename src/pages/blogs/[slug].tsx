// import PostBody from '@/components/posts/PostBody'
// import PostHeader from '@/components/posts/PostHeader'
// import PreviewAlert from '@/components/ui/PreviewAlert'
// import Skeleton from '@/components/ui/Skeleton'

import { useRouter } from 'next/router'
import { client, previewClient } from '../../../lib/contentful/client'
import PostHeader from '../../../components/blogs/PostHeader'
import PostBody from '../../../components/blogs/PostBody'

const Blog = ({ post, preview }: any) => {
  console.log(post)
  const router = useRouter()

  return (
    <div className='flex'>
      <PostHeader post={post} />
      <div>
        <PostBody post={post} />
        <PostBody post={post} />
        <PostBody post={post} />
        <PostBody post={post} />
        <PostBody post={post} />
      </div>
    </div>
  )
}

export const getStaticProps = async ({ params, preview = false }: any) => {
  const cfClient = preview ? previewClient : client

  const { slug } = params
  const response = await cfClient.getEntries({
    content_type: 'post',
    'fields.slug': slug
  })

  if (!response?.items?.length) {
    return {
      redirect: {
        destination: '/posts',
        permanent: false
      }
    }
  }

  return {
    props: {
      post: response?.items?.[0],
      preview,
      revalidate: 60
    }
  }
}

export const getStaticPaths = async () => {
  const response = await client.getEntries({ content_type: 'post' })
  const paths = response.items.map((item: any) => ({
    params: { slug: item.fields.slug }
  }))

  console.log('response', response)
  console.log('paths', paths)
  return {
    paths,
    fallback: true
  }
}

export default Blog

import { useRouter } from 'next/router'
const Blog = () => {
  const { query } = useRouter()
  // console.log(query.slug)
  return <div>Blog</div>
}

export default Blog

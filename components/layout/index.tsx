import Link from 'next/link'

const Layout = ({ children }) => {
  return (
    <>
      <header className='bg-stone-100'>
        <nav>
          <ul>
            <li>
              <Link href='/home'>Home</Link>
            </li>
            <li>
              <Link href='/posts'>Posts</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className='container'>{children}</main>
      <footer>Footer</footer>
    </>
  )
}

export default Layout

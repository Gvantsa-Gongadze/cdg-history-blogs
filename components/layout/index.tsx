import Link from 'next/link'

const Layout = ({ children }: any) => {
  return (
    <>
      <header className='bg-stone-100'>
        <nav>
          <ul>
            <li>
              <Link href='/home'>Home</Link>
            </li>
            <li>
              <Link href='/blogs'>Blogs</Link>
            </li>
            <li>
              <Link href='/about'>About Me</Link>
            </li>
            <li>
              <Link href='/contact'>Contact Us</Link>
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

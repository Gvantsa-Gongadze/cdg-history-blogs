import NavBar from '../elements/NavBar'

const Layout = ({ children }: any) => {
  return (
    <>
      <div>
        <NavBar />
        <main className='container'>{children}</main>
        <footer>Footer</footer>
      </div>
    </>
  )
}

export default Layout

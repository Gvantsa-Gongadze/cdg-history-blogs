import Link from 'next/link'
import { Hamburger, Logo } from '../svg'
import { useState } from 'react'
import clsx from 'clsx'
import {
  navigationNames,
  navigationArray
} from '../../utils/navigarion-constants'

const NavBar: any = (props: any) => {
  const [open, setOpen] = useState(false)

  return (
    <div className='bg-[#e2d6cb]'>
      <nav className='w-100 mx-auto flex p-5 justify-between h-[5rem]w-full max-w-[1344px] items-center px-5 sm:px-10'>
        <Link
          href='/home'
          onClick={() => {
            setOpen(false)
          }}
        >
          <Logo />
        </Link>
        <div
          className={clsx(
            'absolute left-0 top-[4.375rem] z-20 h-[calc(100vh-4.375rem)] w-full overflow-y-auto bg-[#e2d6cb] sm:px-10 lg:static lg:ml-10 lg:flex lg:h-auto lg:w-2/5 lg:items-center lg:overflow-y-visible lg:p-0',
            !open && 'hidden'
          )}
        >
          <div className='flex flex-col gap-2 lg:flex-row lg:gap-8'>
            {navigationArray.map((name: string, i: number) => {
              return (
                <div key={i} className='p-2'>
                  <Link
                    onClick={() => {
                      setOpen(false)
                    }}
                    href={`/${name}`}
                  >
                    {navigationNames[name]}
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
        <button
          className='ml-auto dark:text-[#D8D8D8] lg:hidden'
          onClick={() => setOpen((open) => !open)}
        >
          <Hamburger />
        </button>
      </nav>
    </div>
  )
}

export default NavBar

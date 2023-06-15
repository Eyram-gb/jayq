import React, { Children } from 'react'
import NavBar from './NavBar'
import { Quicksand } from 'next/font/google'

const quicksand = Quicksand({ subsets: ['latin'] })

const Layout = ({ children }) => {
  return (
    <div className={`${quicksand.className}`}>
      <NavBar />
      <div>{children}</div>
    </div>
  )
}

export default Layout

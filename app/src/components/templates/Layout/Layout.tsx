import { ReactNode } from 'react'

import Header from '../../molecules/Header/Header'
import Footer from '../../molecules/Footer/Footer'

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)

export default Layout

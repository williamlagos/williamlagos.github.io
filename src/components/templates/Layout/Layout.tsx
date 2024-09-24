import { ReactNode } from 'react'

import { Header, Footer } from '../../molecules'

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)

export default Layout

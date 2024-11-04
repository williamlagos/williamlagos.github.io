import { ReactNode } from 'react'

import { Header, Footer } from '../../molecules'

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
)

export default Layout

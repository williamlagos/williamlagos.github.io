import { Highlights, Initiatives, Projects, OpenSource } from '../../organisms'
import { Layout } from '../../templates'

const Main = () => (
  <Layout>
    <Initiatives />

    <Projects />
    <OpenSource />
    <Highlights />
  </Layout>
)

export default Main

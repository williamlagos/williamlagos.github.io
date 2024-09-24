import Highlights from '../../organisms/Highlights/Highlights'
import Initiatives from '../../organisms/Initiatives/Initiatives'
import Projects from '../../organisms/Projects/Projects'
import OpenSource from '../../organisms/OpenSource/OpenSource'
import Layout from '../../templates/Layout/Layout'

const Main = () => (
  <Layout>
    <Highlights />
    <Initiatives />
    <Projects />
    <OpenSource />
  </Layout>
)

export default Main

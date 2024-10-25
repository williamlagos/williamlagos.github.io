import styled from 'styled-components'
import { Box, PageHeader } from 'grommet'

import galaxyBackground from './assets/img/galaxy.jpg'

const Galaxy = styled.div`
  display: flex;
  height: 80vh;
  background: url('${galaxyBackground}');
  background-size: cover;
  filter: grayscale(100%);

  h1,
  h2,
  h3,
  h4 {
    color: white;
  }
`

const Overlay = styled.div`
  display: flex;
  align-items: end;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  background-size: cover;
`

const Highlight = styled(Box)`
  width: 100%;
  height: 100%;
`

const Header = () => (
  <Galaxy>
    <Overlay>
      <Highlight align="center" justify="center" direction="row">
        <PageHeader
          title="Hello, I'm William Oliveira de Lagos"
          subtitle="Software Engineer"
        />
      </Highlight>
    </Overlay>
  </Galaxy>
)

export default Header

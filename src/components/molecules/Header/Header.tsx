import styled from 'styled-components'
import { Box, Heading } from 'grommet'

import galaxyBackground from './assets/img/galaxy2.png'

const Galaxy = styled.div`
  display: flex;
  height: 50vh;
  background: url('${galaxyBackground}');
  background-size: cover;
  // filter: brightness(50%) contrast(200%);

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
  // background: rgba(135, 107, 178, 0.7); /* Adjust the alpha value as needed */
  background: rgba(0, 0, 0, 0.7);
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
        <Heading level={1}>Hello, I'm William Oliveira de Lagos</Heading>
      </Highlight>
    </Overlay>
  </Galaxy>
)

export default Header

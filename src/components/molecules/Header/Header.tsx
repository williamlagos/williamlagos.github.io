import styled from 'styled-components'

import galaxyBackground from './assets/img/galaxy.jpg'

const Galaxy = styled.div`
  display: flex;
  align-items: center;
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

const Highlight = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 100%;
`

const HighlightHeading = styled.h1`
  text-transform: uppercase;
  font-size: 5em;
`

const Header = () => (
  <div className="container-fluid p-0">
    <Galaxy>
      <Overlay>
        <Highlight>
          <div className="container-fluid">
            <br />
            <br />
            <HighlightHeading>
              Hello, I'm William Oliveira de Lagos
            </HighlightHeading>
            <h2>
              Software Engineer <br />
              {/* Python | C/C++ | TypeScript */}
            </h2>
          </div>
        </Highlight>
      </Overlay>
    </Galaxy>
  </div>
)

export default Header

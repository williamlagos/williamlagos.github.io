import styled from 'styled-components'

import galaxyBackground from './assets/img/galaxy.jpg'
import lampIcon from './assets/svg/lamp.svg'

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
  width: 100%;
  height: 100%;
`

const Header = () => (
  <div className="container-fluid p-0">
    <Galaxy>
      <Overlay>
        <Highlight>
          <div className="container">
            <img src={lampIcon} width="192" alt="lamp" />
            <br />
            <br />
            <h1>William Oliveira de Lagos</h1>
            <h4>
              Senior Software Engineer <br />
              Python | C/C++ | TypeScript
            </h4>
          </div>
        </Highlight>
      </Overlay>
    </Galaxy>
  </div>
)

export default Header

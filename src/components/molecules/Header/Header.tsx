import styled from 'styled-components'

import galaxyBackground from './assets/img/galaxy.jpg'
import githubIcon from './assets/svg/github.svg'
import linkedinIcon from './assets/svg/linkedin.svg'
import lampIcon from './assets/svg/lamp.svg'
import iconSizes from '../../../tokens/sizes'
import spacing from '../../../tokens/spacing'

const Icon = styled.img`
  height: ${iconSizes.small};
`

const Galaxy = styled.div`
  display: flex;
  align-items: center;
  height: 80vh;
  background: url('${galaxyBackground}');
  background-size: cover;

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

const Links = styled.div`
  margin: ${spacing.md};

  a,
  a:hover {
    text-decoration: none;
  }
`

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
`

const Header = () => (
  <div className="container-fluid p-0">
    <Galaxy>
      <Overlay>
        <Top>
          <Links>
            <a
              target="_blank"
              href="https://www.github.com/williamlagos"
              rel="noopener noreferrer"
            >
              <Icon className="img-fluid" alt="github" src={githubIcon} />
            </a>
            &nbsp;
            <a
              target="_blank"
              href="https://www.linkedin.com/in/lagoswilliam"
              rel="noopener noreferrer"
            >
              <Icon className="img-fluid" alt="linkedin" src={linkedinIcon} />
            </a>
          </Links>
        </Top>
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

import githubIcon from './assets/svg/github.svg'
import twitterIcon from './assets/svg/twitter.svg'
import linkedinIcon from './assets/svg/linkedin.svg'
import lampIcon from './assets/svg/lamp.svg'

const Header = () => (
  <div className="container-fluid p-0">
    <div className="galaxy">
      <div className="overlay">
        <div className="top">
          <div className="links">
            <a
              target="_blank"
              href="https://www.github.com/williamlagos"
              rel="noopener noreferrer"
            >
              <img
                className="img-fluid img-icon"
                alt="github"
                src={githubIcon}
              />{' '}
            </a>
            &nbsp;
            <a
              target="_blank"
              href="https://www.twitter.com/lagoswilliam"
              rel="noopener noreferrer"
            >
              <img
                className="img-fluid img-icon"
                alt="twitter"
                src={twitterIcon}
              />{' '}
            </a>
            &nbsp;
            <a
              target="_blank"
              href="https://www.linkedin.com/in/lagoswilliam"
              rel="noopener noreferrer"
            >
              <img
                className="img-fluid img-icon"
                alt="linkedin"
                src={linkedinIcon}
              />
            </a>
          </div>
        </div>
        <div className="highlight">
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
        </div>
      </div>
    </div>
  </div>
)

export default Header

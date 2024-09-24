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
                src="./svg/github.svg"
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
                src="./svg/twitter.svg"
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
                src="./svg/linkedin.svg"
              />
            </a>
          </div>
        </div>
        <div className="highlight">
          <div className="container">
            <img src="./svg/lamp.svg" width="192" alt="lamp" />
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

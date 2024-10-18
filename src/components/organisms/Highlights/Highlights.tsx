import styled from 'styled-components'

import cloudSvg from './assets/svg/cloud.svg'
import toolSvg from './assets/svg/tool.svg'
import penToolSvg from './assets/svg/pen-tool.svg'
import bookSvg from './assets/svg/book.svg'
import githubIcon from './assets/svg/github.svg'
import linkedinIcon from './assets/svg/linkedin.svg'
import iconSizes from '../../../tokens/sizes'

const Art = styled.img`
  height: ${iconSizes.xlarge};
`

const Highlights = () => (
  <div className="container pt-5">
    <div className="row pt-5 text-center">
      <div className="col-6 col-md-2">
        <a
          target="_blank"
          href="https://www.github.com/williamlagos"
          rel="noopener noreferrer"
        >
          <Art className="img-fluid" alt="cloud" src={githubIcon} />
        </a>
        <div className="py-4">
          <h2>GitHub</h2>
          <p>Here you can see what I'm developing right now.</p>
        </div>
      </div>

      <div className="col-6 col-md-2">
        <Art className="img-fluid" alt="cloud" src={cloudSvg} />
        <div className="py-4">
          <h2>DevOps</h2>
          <p>Cloud hosting, deployment and maintenance specialist.</p>
        </div>
      </div>
      <div className="col-6 col-md-2">
        <Art className="img-fluid" alt="coding" src={toolSvg} />
        <div className="py-4">
          <h2>Develop</h2>
          <p>I develop software solutions with Python, C/C++ and ECMAScript.</p>
        </div>
      </div>
      <div className="col-6 col-md-2">
        <Art className="img-fluid" alt="design" src={penToolSvg} />
        <div className="py-4">
          <h2>Design</h2>
          <p>I do in a collaborated manner, new websites and apps designs.</p>
        </div>
      </div>
      <div className="col-6 col-md-2">
        <Art className="img-fluid" alt="mentorship" src={bookSvg} />
        <div className="py-4">
          <h2>Mentorship</h2>
          <p>
            I offer my knowledge to whoever does need to learn to develop or
            create.
          </p>
        </div>
      </div>
      <div className="col-6 col-md-2">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/lagoswilliam"
          rel="noopener noreferrer"
        >
          <Art className="img-fluid" alt="cloud" src={linkedinIcon} />
        </a>
        <div className="py-4">
          <h2>LinkedIn</h2>
          <p>Check my latest experiences here.</p>
        </div>
      </div>
    </div>
  </div>
)

export default Highlights

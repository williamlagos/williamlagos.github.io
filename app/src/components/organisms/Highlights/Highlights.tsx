import styled from 'styled-components'
import cloudSvg from './assets/svg/cloud.svg'
import toolSvg from './assets/svg/tool.svg'
import penToolSvg from './assets/svg/pen-tool.svg'
import bookSvg from './assets/svg/book.svg'

const Art = styled.img`
  height: 72px;
`

const Highlights = () => (
  <div className="container pt-5">
    <div className="row pt-5 text-center">
      <div className="col-6 col-md-3">
        <Art className="img-fluid" alt="cloud" src={cloudSvg} />
        <div className="py-4">
          <h2>Maintenance</h2>
          <p>Cloud hosting, deployment and maintenance specialist.</p>
        </div>
      </div>
      <div className="col-6 col-md-3">
        <Art className="img-fluid" alt="coding" src={toolSvg} />
        <div className="py-4">
          <h2>Development</h2>
          <p>I develop software solutions with Python, C/C++ and ECMAScript.</p>
        </div>
      </div>
      <div className="col-6 col-md-3">
        <Art className="img-fluid" alt="design" src={penToolSvg} />
        <div className="py-4">
          <h2>Design</h2>
          <p>I do in a collaborated manner, new websites and apps designs.</p>
        </div>
      </div>
      <div className="col-6 col-md-3">
        <Art className="img-fluid" alt="mentorship" src={bookSvg} />
        <div className="py-4">
          <h2>Mentorship</h2>
          <p>
            I offer my knowledge to whoever does need to learn to develop or
            create.
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default Highlights

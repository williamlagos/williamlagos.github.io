import djangoSvg from './assets/svg/django.svg'
import synapseSvg from './assets/svg/synapse.svg'
import elementsSvg from './assets/svg/elements.svg'
import contentsSvg from './assets/svg/contents.svg'
import devSvg from './assets/svg/dev.svg'

const OpenSource = () => (
  <div className="container py-5">
    <div className="row text-center">
      <div className="col-12 pb-4">
        <h1>Open Source Projects</h1>
      </div>
    </div>
    <div className="row text-center">
      <div className="col">
        <a
          target="_blank"
          href="https://github.com/williamlagos?tab=repositories&q=django&type=&language=&sort="
          rel="noopener noreferrer"
        >
          <img className="img-fluid img-symbol" alt="django" src={djangoSvg} />
        </a>
        <div className="py-3">
          <h2>Django</h2>
          <p>A bunch of django packages</p>
        </div>
      </div>
      <div className="col">
        <a
          target="_blank"
          href="https://github.com/williamlagos/synapse"
          rel="noopener noreferrer"
        >
          <img
            className="img-fluid img-symbol"
            alt="synapse"
            src={synapseSvg}
          />
        </a>
        <div className="py-3">
          <h2>Synapse</h2>
          <p>Smart process manager</p>
        </div>
      </div>
      <div className="col">
        <a
          target="_blank"
          href="https://github.com/williamlagos/elements"
          rel="noopener noreferrer"
        >
          <img
            className="img-fluid img-symbol"
            alt="elements"
            src={elementsSvg}
          />
        </a>
        <div className="py-3">
          <h2>Elements</h2>
          <p>Reusable elements for games light framework</p>
        </div>
      </div>
      <div className="col">
        <a
          target="_blank"
          href="https://github.com/williamlagos/contents"
          rel="noopener noreferrer"
        >
          <img
            className="img-fluid img-symbol"
            alt="contents"
            src={contentsSvg}
          />
        </a>
        <div className="py-3">
          <h2>Contents</h2>
          <p>Content Management Service headless platform</p>
        </div>
      </div>
      <div className="col">
        <a
          target="_blank"
          href="https://github.com/williamlagos/coding"
          rel="noopener noreferrer"
        >
          <img className="img-fluid img-symbol" alt="coding" src={devSvg} />
        </a>
        <div className="py-3">
          <h2>Coding</h2>
          <p>Coding challenges and algorithms repositories</p>
        </div>
      </div>
    </div>
  </div>
)

export default OpenSource

import kombiImg from './assets/img/kombi.png'
import marktImg from './assets/img/markt.png'
import eventImg from './assets/img/event.png'
import nasaImg from './assets/img/nasa.png'
import workspacesImg from './assets/img/workspaces.png'
import blockchainImg from './assets/img/blockchain.png'

const Projects = () => [
  <div key="title" className="container-fluid black">
    <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center">Third-Party Mobile and Web Projects</h1>
        </div>
      </div>
    </div>
  </div>,
  <div key="list" className="container-fluid grid">
    <div className="row">
      <div className="col-md-4" style={{ background: `url(${kombiImg})` }}>
        <a
          href="https://williamlagos.github.io/kombi"
          target="_blank"
          className="overlay"
          rel="noopener noreferrer"
        >
          <div className="content">
            <h2>Frete Fácil</h2>
            <p>Freighter delivery app</p>
          </div>
        </a>
      </div>
      <div className="col-md-4" style={{ background: `url(${marktImg})` }}>
        <a
          href="https://williamlagos.github.io/markt"
          target="_blank"
          className="overlay"
          rel="noopener noreferrer"
        >
          <div className="content">
            <h2>Vupit</h2>
            <p>Beer distribution app</p>
          </div>
        </a>
      </div>
      <div className="col-md-4" style={{ background: `url(${eventImg})` }}>
        <a
          href="https://github.com/williamlagos/events"
          target="_blank"
          className="overlay"
          rel="noopener noreferrer"
        >
          <div className="content">
            <h2>DanceApp</h2>
            <p>Events Application</p>
          </div>
        </a>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4" style={{ background: `url(${nasaImg})` }}>
        <a
          href="https://williamlagos.github.io/landing/"
          target="_blank"
          className="overlay"
          rel="noopener noreferrer"
        >
          <div className="content">
            <h2>MoHub</h2>
            <p>Landing Page lead capture</p>
          </div>
        </a>
      </div>
      <div className="col-md-4" style={{ background: `url(${workspacesImg})` }}>
        <a
          href="https://williamlagos.github.io/coworking"
          target="_blank"
          className="overlay"
          rel="noopener noreferrer"
        >
          <div className="content">
            <h2>Fábrica de Ideias Coworking</h2>
            <p>Coworking space landing page</p>
          </div>
        </a>
      </div>
      <div className="col-md-4" style={{ background: `url(${blockchainImg})` }}>
        <a
          href="https://williamlagos.github.io/blockchain"
          target="_blank"
          className="overlay"
          rel="noopener noreferrer"
        >
          <div className="content">
            <h2>Grandir Capital Financeiro</h2>
            <p>Blockchain broker landing page</p>
          </div>
        </a>
      </div>
    </div>
  </div>
]

export default Projects

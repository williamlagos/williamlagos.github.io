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
      <div
        className="col-md-4"
        style={{ background: "url('./img/kombi.png')" }}
      >
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
      <div
        className="col-md-4"
        style={{ background: "url('./img/markt.png')" }}
      >
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
      <div
        className="col-md-4"
        style={{ background: "url('./img/event.png')" }}
      >
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
      <div className="col-md-4" style={{ background: "url('./img/nasa.png')" }}>
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
      <div
        className="col-md-4"
        style={{ background: "url('./img/workspaces.png')" }}
      >
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
      <div
        className="col-md-4"
        style={{ background: "url('./img/blockchain.png')" }}
      >
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

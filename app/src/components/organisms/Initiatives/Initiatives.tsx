const Initiatives = () => (
  <div className="container pt-5">
    <div className="row text-center">
      <div className="col-12 pb-5">
        <h1>Initiatives that I contributed as founder or co-founder</h1>
      </div>
    </div>
    <div className="row text-center">
      <div className="col-md-4">
        <a
          target="_blank"
          href="https://williamlagos.github.io/pandora/"
          rel="noopener noreferrer"
        >
          <img
            className="img-fluid img-brand"
            alt="pandora"
            src="./svg/pandora.svg"
          />
        </a>
        <div className="py-4">
          <h2>Pandora Entertainment</h2>
          <h3>
            <strong>2011 - 2016</strong>
          </h3>
        </div>
      </div>
      <div className="col-md-4">
        <a
          target="_blank"
          href="https://williamlagos.github.io/coworking/"
          rel="noopener noreferrer"
        >
          <img
            className="img-fluid img-brand"
            alt="coworking"
            src="./svg/coworking.svg"
          />
        </a>
        <div className="py-4">
          <h2>Fábrica de Ideias Coworking</h2>
          <h3>
            <strong>2013 - 2019</strong>
          </h3>
        </div>
      </div>
      <div className="col-md-4">
        <a
          target="_blank"
          href="https://williamlagos.github.io/efforia/"
          rel="noopener noreferrer"
        >
          <img
            className="img-fluid img-brand"
            alt="efforia"
            src="./svg/efforia.svg"
          />
        </a>
        <div className="py-4">
          <h2>Efforia Invent Company</h2>
          <h3>
            <strong>2016 - 2021</strong>
          </h3>
        </div>
      </div>
    </div>
    <div className="container py-5">
      <div className="row py-3">
        <div className="col-md-6 col-12">
          <div className="row text-right">
            <div className="col-9 d-flex align-items-center">
              <p>
                <strong>HUB:</strong> Nanocomputer raspberry pi based
                development for commercial and residential automation.
              </p>
            </div>
            <div className="col-3 d-flex justify-content-center">
              <a
                target="_blank"
                href="https://williamlagos.github.io/pandora/hub/"
                rel="noopener noreferrer"
              >
                <img
                  className="img-fluid img-symbol"
                  alt="hub"
                  src="./svg/hub.svg"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="row text-left">
            <div className="col-3 d-flex justify-content-center">
              <a
                target="_blank"
                href="https://github.com/williamlagos/eos"
                rel="noopener noreferrer"
              >
                <img
                  className="img-fluid img-symbol"
                  alt="eos"
                  src="./svg/eos.svg"
                />
              </a>
            </div>
            <div className="col-9 d-flex align-items-center">
              <p>
                <strong>EOS:</strong> Operating system development based on ARM
                for Raspberry Pi, designed to optimize automation solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Initiatives

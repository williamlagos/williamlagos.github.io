import styled from 'styled-components'

import pandoraSvg from './assets/svg/pandora.svg'
import coworkingSvg from './assets/svg/coworking.svg'
import efforiaSvg from './assets/svg/efforia.svg'
import hubSvg from './assets/svg/hub.svg'
import eosSvg from './assets/svg/eos.svg'
import iconSizes from '../../../tokens/sizes'

const Brand = styled.img`
  height: ${iconSizes.xxxlarge};
`

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
          <Brand className="img-fluid" alt="pandora" src={pandoraSvg} />
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
          <Brand className="img-fluid" alt="coworking" src={coworkingSvg} />
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
          <Brand className="img-fluid" alt="efforia" src={efforiaSvg} />
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
                <img className="img-fluid" alt="hub" src={hubSvg} />
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
                <img className="img-fluid" alt="eos" src={eosSvg} />
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

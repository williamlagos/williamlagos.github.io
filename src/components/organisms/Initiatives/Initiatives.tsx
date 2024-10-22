import styled from 'styled-components'

import pandoraSvg from './assets/svg/pandora.svg'
import coworkingSvg from './assets/svg/coworking.svg'
import efforiaSvg from './assets/svg/efforia.svg'
import bitwalaSvg from './assets/svg/bitwala_logo.jpeg'
import parloaSvg from './assets/svg/parloa.svg'
import bmwSvg from './assets/svg/bmw.svg'
import issuuSvg from './assets/svg/issuu.svg'
// import hubSvg from './assets/svg/hub.svg'
// import eosSvg from './assets/svg/eos.svg'
import iconSizes from '../../../tokens/sizes'

const Brand = styled.img`
  height: ${iconSizes.xxlarge};
`

const Initiatives = () => (
  <div className="container-fluid">
    {/* <div
      className="row text-center pt-5"
      style={{ background: '#040403', color: 'white' }}
    >
      <div className="col-12 pb-5">
        <h1>Initiatives that I contributed as founder or co-founder</h1>
      </div>
    </div> */}
    <div
      className="row text-center py-4"
      style={{
        background: '#FFFFFF',
        color: '#000000',
        justifyContent: 'center'
      }}
    >
      <div className="p-4">
        <a
          target="_blank"
          href="https://williamlagos.github.io/pandora/"
          rel="noopener noreferrer"
        >
          <Brand alt="pandora" src={pandoraSvg} />
        </a>
        {/* <div className="py-4">
          <h2>Pandora Entertainment</h2>
          <h3>
            <strong>2011 - 2016</strong>
          </h3>
        </div> */}
      </div>
      <div className="p-4">
        <a
          target="_blank"
          href="https://williamlagos.github.io/coworking/"
          rel="noopener noreferrer"
        >
          <Brand alt="coworking" src={coworkingSvg} />
        </a>
        {/* <div className="py-4">
          <h2>Fábrica de Ideias Coworking</h2>
          <h3>
            <strong>2013 - 2019</strong>
          </h3>
        </div> */}
      </div>
      <div className="p-4">
        <a
          target="_blank"
          href="https://williamlagos.github.io/efforia/"
          rel="noopener noreferrer"
        >
          <Brand alt="efforia" src={efforiaSvg} />
        </a>
        {/* <div className="py-4">
          <h2>Efforia Invent Company</h2>
          <h3>
            <strong>2016 - 2021</strong>
          </h3>
        </div> */}
      </div>
      <div className="p-4">
        <a>
          <Brand alt="bmw" src={bmwSvg} />
        </a>
      </div>
      <div className="p-4">
        <a>
          <Brand alt="bitwala" src={bitwalaSvg} />
        </a>
      </div>
      <div className="p-4">
        <a>
          <Brand alt="parloa" src={parloaSvg} />
        </a>
      </div>
      <div className="p-4">
        <a>
          <Brand alt="issuu" src={issuuSvg} />
        </a>
      </div>
    </div>
    {/* <div
      className="row py-5"
      style={{ background: '#FFFFFF', color: '#000000' }}
    >
      <div className="col-md-6 col-12">
        <div className="row text-right">
          <div className="col-9 d-flex align-items-center">
            <p>
              <strong>HUB:</strong> Nanocomputer raspberry pi based development
              for commercial and residential automation.
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
    </div> */}
  </div>
)

export default Initiatives

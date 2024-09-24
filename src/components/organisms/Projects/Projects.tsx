import styled from 'styled-components'

import kombiImg from './assets/img/kombi.png'
import marktImg from './assets/img/markt.png'
import eventImg from './assets/img/event.png'
import nasaImg from './assets/img/nasa.png'
import workspacesImg from './assets/img/workspaces.png'
import blockchainImg from './assets/img/blockchain.png'
import spacing from '../../../tokens/spacing'

const GridItem = styled.div<{ $backgroundUrl: string }>`
  min-height: 360px;
  background-size: cover !important;
  background-position: center !important;
  padding: 0px !important;
  min-width: calc(100% / 3);
  background: url(${(props) => props.$backgroundUrl});
`

const GridItemOverlay = styled.a`
  width: 100%;
  height: 100%;
  min-height: 240px;
  background: rgba(0, 0, 0, 0.65);
  padding: 0px !important;
  text-decoration: none;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
`

const GridItemContent = styled.div`
  text-decoration: none;
  text-align: center;
  color: white;
`

const Black = styled.div`
  padding: ${spacing.md};
  text-align: center;
  background-color: #000;
  color: #ffffff;

  h1,
  h2 {
    color: white;
  }
`

const Projects = () => [
  <Black key="title" className="container-fluid">
    <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center">Third-Party Mobile and Web Projects</h1>
        </div>
      </div>
    </div>
  </Black>,
  <div key="list" className="container-fluid grid">
    <div className="row">
      <GridItem $backgroundUrl={kombiImg}>
        <GridItemOverlay
          href="https://williamlagos.github.io/kombi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GridItemContent>
            <h2>Frete Fácil</h2>
            <p>Freighter delivery app</p>
          </GridItemContent>
        </GridItemOverlay>
      </GridItem>
      <GridItem $backgroundUrl={marktImg}>
        <GridItemOverlay
          href="https://williamlagos.github.io/markt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GridItemContent>
            <h2>Vupit</h2>
            <p>Beer distribution app</p>
          </GridItemContent>
        </GridItemOverlay>
      </GridItem>
      <GridItem $backgroundUrl={eventImg}>
        <GridItemOverlay
          href="https://github.com/williamlagos/events"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GridItemContent>
            <h2>DanceApp</h2>
            <p>Events Application</p>
          </GridItemContent>
        </GridItemOverlay>
      </GridItem>
    </div>
    <div className="row">
      <GridItem $backgroundUrl={nasaImg}>
        <GridItemOverlay
          href="https://williamlagos.github.io/landing/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GridItemContent>
            <h2>MoHub</h2>
            <p>Landing Page lead capture</p>
          </GridItemContent>
        </GridItemOverlay>
      </GridItem>
      <GridItem $backgroundUrl={workspacesImg}>
        <GridItemOverlay
          href="https://williamlagos.github.io/coworking"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GridItemContent>
            <h2>Fábrica de Ideias Coworking</h2>
            <p>Coworking space landing page</p>
          </GridItemContent>
        </GridItemOverlay>
      </GridItem>
      <GridItem $backgroundUrl={blockchainImg}>
        <GridItemOverlay
          href="https://williamlagos.github.io/blockchain"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GridItemContent>
            <h2>Grandir Capital Financeiro</h2>
            <p>Blockchain broker landing page</p>
          </GridItemContent>
        </GridItemOverlay>
      </GridItem>
    </div>
  </div>
]

export default Projects

import React from 'react'
import styled from 'styled-components'
import { Box, Heading } from 'grommet'

import kombiImg from './assets/img/kombi.png'
import marktImg from './assets/img/markt.png'
import eventImg from './assets/img/event.png'
import nasaImg from './assets/img/nasa.png'
import workspacesImg from './assets/img/workspaces.png'
import blockchainImg from './assets/img/blockchain.png'
import spacing from '../../../tokens/spacing'

// Styled components
const MasonryGrid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-flow: dense;
  gap: ${spacing.sm};
`

const GridItem = styled(Box)<{ $backgroundUrl: string }>`
  background-image: url(${(props) => props.$backgroundUrl});
  background-size: cover !important;
  background-position: center !important;
  position: relative;
  color: white;
  min-height: 300px;
  &:hover {
    opacity: 0.8;
  }
`

const GridItemOverlay = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.65);
  padding: 0px !important;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
`

const Black = styled.div`
  padding: ${spacing.sm};
  text-align: center;

  h1,
  h2 {
    color: white;
  }
`

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Fábrica de Ideias Coworking',
      description: 'Coworking space landing page',
      img: workspacesImg,
      link: 'https://williamlagos.github.io/coworking',
      weight: 6
    },
    {
      title: 'Frete Fácil',
      description: 'Freighter delivery app',
      img: kombiImg,
      link: 'https://williamlagos.github.io/kombi',
      weight: 3
    },
    {
      title: 'Vupit',
      description: 'Beer distribution app',
      img: marktImg,
      link: 'https://williamlagos.github.io/markt',
      weight: 3
    },
    {
      title: 'Grandir Capital Financeiro',
      description: 'Blockchain broker landing page',
      img: blockchainImg,
      link: 'https://williamlagos.github.io/blockchain',
      weight: 2
    },
    {
      title: 'DanceApp',
      description: 'Events Application',
      img: eventImg,
      link: 'https://github.com/williamlagos/events',
      weight: 1
    },
    {
      title: 'MoHub',
      description: 'Landing Page lead capture',
      img: nasaImg,
      link: 'https://williamlagos.github.io/landing/',
      weight: 1
    }
  ]

  return (
    <>
      <Black>
        <Heading fill level={2}>
          HERE ARE SOME STUFF THAT I’VE WORKED IN THE PAST
        </Heading>
      </Black>
      <MasonryGrid
        margin={{ top: '10px' }}
        pad={{ horizontal: '10px' }}
        justify="center"
        responsive
      >
        {projects.map((project, index) => (
          <GridItem
            key={index}
            $backgroundUrl={project.img}
            style={{ gridRowEnd: `span ${project.weight}` }}
          >
            <GridItemOverlay
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </GridItemOverlay>
          </GridItem>
        ))}
      </MasonryGrid>
    </>
  )
}

export default Projects

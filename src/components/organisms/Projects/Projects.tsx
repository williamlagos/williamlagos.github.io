import React, { useContext } from 'react'
import styled from 'styled-components'
import { Box, Heading, Grid, ResponsiveContext } from 'grommet'

import kombiImg from './assets/img/kombi.png'
import marktImg from './assets/img/markt.png'
import eventImg from './assets/img/event.png'
import nasaImg from './assets/img/nasa.png'
import workspacesImg from './assets/img/workspaces.png'
import blockchainImg from './assets/img/blockchain.png'
import spacing from '../../../tokens/spacing'

// Styled components
const GridItem = styled(Box)<{ $backgroundUrl: string }>`
  background-image: url(${(props) => props.$backgroundUrl});
  background-size: cover !important;
  background-position: center !important;
  position: relative;
  color: white;
  width: 100%;
  height: 100%;
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
  text-align: center;
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

const Project: React.FC<{
  title: string
  description: string
  img: string
  link: string
  gridArea: string
}> = ({ title, description, img, link, gridArea }) => (
  <GridItem gridArea={gridArea} $backgroundUrl={img}>
    <GridItemOverlay href={link} target="_blank" rel="noopener noreferrer">
      <h2>{title}</h2>
      <p>{description}</p>
    </GridItemOverlay>
  </GridItem>
)

const Projects: React.FC = () => {
  const size = useContext(ResponsiveContext) as keyof typeof gridProps

  const gridProps = {
    small: {
      rows: ['50vh', '50vh', '50vh', '50vh', '50vh', '50vh'],
      columns: ['100vw'],
      areas: [
        { name: 'coworking', start: [0, 0], end: [0, 0] },
        { name: 'delivery', start: [0, 1], end: [0, 1] },
        { name: 'market', start: [0, 2], end: [0, 2] },
        { name: 'blockchain', start: [0, 3], end: [0, 3] },
        { name: 'events', start: [0, 4], end: [0, 4] },
        { name: 'landing', start: [0, 5], end: [0, 5] }
      ]
    },
    medium: {
      rows: ['25vh', '25vh', '25vh', '25vh'],
      columns: ['50vw', '50vw'],
      areas: [
        { name: 'coworking', start: [0, 0], end: [1, 0] },
        { name: 'delivery', start: [0, 1], end: [0, 1] },
        { name: 'market', start: [1, 1], end: [1, 1] },
        { name: 'blockchain', start: [0, 2], end: [0, 2] },
        { name: 'events', start: [1, 2], end: [1, 2] },
        { name: 'landing', start: [0, 3], end: [1, 3] }
      ]
    },
    large: {
      rows: ['50vh', '30vh'],
      columns: ['50vw', '25vw', '25vw', '25vw'],
      areas: [
        { name: 'coworking', start: [0, 0], end: [1, 0] },
        { name: 'delivery', start: [2, 0], end: [2, 0] },
        { name: 'market', start: [3, 0], end: [3, 0] },
        { name: 'blockchain', start: [0, 1], end: [0, 1] },
        { name: 'events', start: [1, 1], end: [1, 1] },
        { name: 'landing', start: [2, 1], end: [2, 1] }
      ]
    }
  }

  const projects = [
    {
      title: 'Fábrica de Ideias Coworking',
      description: 'Coworking space landing page',
      img: workspacesImg,
      link: 'https://williamlagos.github.io/coworking',
      gridArea: 'coworking'
    },
    {
      title: 'Frete Fácil',
      description: 'Freighter delivery app',
      img: kombiImg,
      link: 'https://williamlagos.github.io/kombi',
      gridArea: 'delivery'
    },
    {
      title: 'Vupit',
      description: 'Beer distribution app',
      img: marktImg,
      link: 'https://williamlagos.github.io/markt',
      gridArea: 'market'
    },
    {
      title: 'Grandir Capital Financeiro',
      description: 'Blockchain broker landing page',
      img: blockchainImg,
      link: 'https://williamlagos.github.io/blockchain',
      gridArea: 'blockchain'
    },
    {
      title: 'DanceApp',
      description: 'Events Application',
      img: eventImg,
      link: 'https://github.com/williamlagos/events',
      gridArea: 'events'
    },
    {
      title: 'MoHub',
      description: 'Landing Page lead capture',
      img: nasaImg,
      link: 'https://williamlagos.github.io/landing/',
      gridArea: 'landing'
    }
  ]

  return (
    <>
      <Black>
        <Heading fill level={2}>
          HERE ARE SOME STUFF THAT I’VE WORKED IN THE PAST
        </Heading>
      </Black>
      <Grid
        justify="center"
        rows={gridProps[size].rows}
        columns={gridProps[size].columns}
        areas={gridProps[size].areas}
        gap="small"
      >
        {projects.map(({ gridArea, title, description, img, link }) => (
          <Project
            key={gridArea}
            title={title}
            description={description}
            img={img}
            link={link}
            gridArea={gridArea}
          />
        ))}
      </Grid>
    </>
  )
}

export default Projects

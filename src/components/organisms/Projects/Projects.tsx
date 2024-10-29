import React, { useContext } from 'react'
import styled from 'styled-components'
import { Box, Heading, Grid, ResponsiveContext } from 'grommet'

import kombiImg from './assets/img/kombi.png'
import marktImg from './assets/img/markt.png'
import eventImg from './assets/img/event.png'
import nasaImg from './assets/img/nasa.png'
import bmwImg from './assets/img/bmw.jpg'
import lightsImg from './assets/img/lights.webp'
import workspacesImg from './assets/img/workspaces.png'
import blockchainImg from './assets/img/blockchain.png'
import berlinImg from './assets/img/berlin.png'
import copenhagenImg from './assets/img/copenhagen.png'
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
  <GridItem id={gridArea} gridArea={gridArea} $backgroundUrl={img}>
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
      rows: ['25vh', '25vh', '25vh', '25vh'],
      columns: ['25vw', '25vw', '25vw', '25vw'],
      areas: [
        { name: 'hub', start: [0, 0], end: [0, 0] },
        { name: 'bmw', start: [0, 1], end: [0, 1] },
        { name: 'coworking', start: [1, 0], end: [1, 1] },
        { name: 'delivery', start: [2, 0], end: [2, 0] },
        { name: 'landing', start: [2, 1], end: [2, 1] },
        { name: 'market', start: [3, 0], end: [3, 0] },
        { name: 'events', start: [3, 1], end: [3, 1] },
        { name: 'blockchain', start: [0, 2], end: [0, 2] },
        { name: 'parloa', start: [1, 2], end: [1, 2] },
        { name: 'issuu', start: [2, 2], end: [2, 2] }
      ]
    }
  }

  const projects = [
    {
      title: 'Pandora HUB',
      description:
        'Nanocomputer raspberry pi based development for commercial and residential automation',
      img: lightsImg,
      link: 'https://williamlagos.github.io/pandora/hub/',
      gridArea: 'hub'
    },
    {
      title: 'BMW iX',
      description: 'BMW Autonomous Vehicle Platform Engineering',
      img: bmwImg,
      link: 'https://www.bmw.com/en/events/nextgen/reveal-bmw-ix.html',
      gridArea: 'bmw'
    },
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
      title: 'Bitwala',
      description: 'And other experiences on blockchain',
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
    },
    {
      title: 'Parloa',
      description:
        'Real-time translation chat application on Berlin-based Scaleup',
      img: berlinImg,
      link: 'https://www.parloa.com/platform/assist/',
      gridArea: 'parloa'
    },
    {
      title: 'Issuu',
      description:
        'Digital Publishing Platform development on Copenhagen-based Scaleup',
      img: copenhagenImg,
      link: 'https://www.issuu.com',
      gridArea: 'issuu'
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

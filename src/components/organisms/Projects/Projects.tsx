import React, { useContext } from 'react'
import styled from 'styled-components'
import { Box, Heading, Grid, ResponsiveContext } from 'grommet'

import kombiImg from './assets/img/kombi.webp'
import marktImg from './assets/img/markt.webp'
import eventImg from './assets/img/event.webp'
import lampsImg from './assets/img/lamps.webp'
import bmwImg from './assets/img/bmw.webp'
import lightsImg from './assets/img/lights.webp'
import workspacesImg from './assets/img/workspaces.webp'
import blockchainImg from './assets/img/blockchain.webp'
import berlinImg from './assets/img/berlin.webp'
import copenhagenImg from './assets/img/copenhagen.webp'
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
      rows: [
        '50vh',
        '50vh',
        '50vh',
        '50vh',
        '50vh',
        '50vh',
        '50vh',
        '50vh',
        '50vh',
        '50vh'
      ],
      columns: ['100vw'],
      areas: [
        { name: 'hub', start: [0, 0], end: [0, 0] },
        { name: 'bmw', start: [0, 1], end: [0, 1] },
        { name: 'parloa', start: [0, 2], end: [0, 2] },
        { name: 'efforia', start: [0, 3], end: [0, 3] },
        { name: 'coworking', start: [0, 4], end: [0, 4] },
        { name: 'blockchain', start: [0, 5], end: [0, 5] },
        { name: 'delivery', start: [0, 6], end: [0, 6] },
        { name: 'issuu', start: [0, 7], end: [0, 7] },
        { name: 'market', start: [0, 8], end: [0, 8] },
        { name: 'events', start: [0, 9], end: [0, 9] }
      ]
    },
    medium: {
      rows: ['50vh', '25vh', '25vh', '25vh', '25vh', '25vh'],
      columns: ['50vw', '50vw'],
      areas: [
        { name: 'bmw', start: [0, 0], end: [1, 0] },
        { name: 'hub', start: [0, 1], end: [0, 1] },
        { name: 'coworking', start: [1, 1], end: [1, 1] },
        { name: 'efforia', start: [0, 2], end: [0, 2] },
        { name: 'issuu', start: [1, 2], end: [1, 2] },
        { name: 'parloa', start: [0, 3], end: [1, 3] },
        { name: 'blockchain', start: [0, 4], end: [0, 4] },
        { name: 'delivery', start: [1, 4], end: [1, 4] },
        { name: 'market', start: [0, 5], end: [0, 5] },
        { name: 'events', start: [1, 5], end: [1, 5] }
      ]
    },
    large: {
      rows: ['25vh', '25vh', '25vh', '25vh', '25vh'],
      columns: ['25vw', '25vw', '25vw', '25vw'],
      areas: [
        { name: 'blockchain', start: [0, 0], end: [0, 0] },
        { name: 'parloa', start: [1, 0], end: [2, 0] },
        { name: 'issuu', start: [3, 0], end: [3, 0] },
        { name: 'bmw', start: [0, 1], end: [1, 2] },
        { name: 'hub', start: [2, 1], end: [3, 2] },
        { name: 'coworking', start: [0, 3], end: [1, 4] },
        { name: 'efforia', start: [2, 3], end: [2, 3] },
        { name: 'delivery', start: [3, 3], end: [3, 3] },
        { name: 'market', start: [2, 4], end: [2, 4] },
        { name: 'events', start: [3, 4], end: [3, 4] }
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
      description: 'Coworking space landing page and educational platform',
      img: workspacesImg,
      link: 'https://williamlagos.github.io/coworking',
      gridArea: 'coworking'
    },
    {
      title: 'Frete Fácil',
      description: 'Freighter delivery app for a local startup',
      img: kombiImg,
      link: 'https://williamlagos.github.io/kombi',
      gridArea: 'delivery'
    },
    {
      title: 'Vupit',
      description: 'Beer distribution app for a local startup',
      img: marktImg,
      link: 'https://williamlagos.github.io/markt',
      gridArea: 'market'
    },
    {
      title: 'Bitwala',
      description: 'Blockchain-based savings account mobile development',
      img: blockchainImg,
      link: 'https://www.bitwala.com',
      gridArea: 'blockchain'
    },
    {
      title: 'DanceApp',
      description: 'Events application for a local startup',
      img: eventImg,
      link: 'https://github.com/williamlagos/events',
      gridArea: 'events'
    },
    {
      title: 'Efforia',
      description: 'Venture building for startups',
      img: lampsImg,
      link: 'https://williamlagos.github.io/efforia/',
      gridArea: 'efforia'
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
    <section>
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
    </section>
  )
}

export default Projects

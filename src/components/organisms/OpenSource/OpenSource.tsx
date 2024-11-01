import styled from 'styled-components'
import { Box, Heading } from 'grommet'

import djangoSvg from './assets/svg/django.svg'
import synapseSvg from './assets/svg/synapse.svg'
import elementsSvg from './assets/svg/elements.svg'
import contentsSvg from './assets/svg/contents.svg'
import devSvg from './assets/svg/dev.svg'
import iconSizes from '../../../tokens/sizes'

const Symbol = styled.img`
  height: ${iconSizes.xxlarge};

  @media (max-width: 768px) {
    height: ${iconSizes.large};
  }

  @media (max-width: 480px) {
    height: ${iconSizes.medium};
  }
`

const projects = [
  {
    href: 'https://github.com/williamlagos?tab=repositories&q=django&type=&language=&sort=',
    alt: 'python',
    src: djangoSvg,
    title: 'Python Packages'
    // description: "A bunch of django packages"
  },
  {
    href: 'https://github.com/williamlagos/eos',
    alt: 'eos',
    src: synapseSvg,
    title: 'Docker Images'
    // description: "Smart process manager"
  },
  {
    href: 'https://github.com/williamlagos/elements',
    alt: 'elements',
    src: elementsSvg,
    title: 'Game Engine'
    // description: "Reusable elements for games light framework"
  },
  {
    href: 'https://github.com/williamlagos/contents',
    alt: 'contents',
    src: contentsSvg,
    title: 'Headless CMS'
    // description: "Content Management Service headless platform"
  },
  {
    href: 'https://github.com/williamlagos/coding',
    alt: 'coding',
    src: devSvg,
    title: 'Coding Challenges'
    // description: "Coding challenges and algorithms repositories"
  }
]

const OpenSource = () => (
  <Box>
    {/* <Box align="center">
      <Heading level={2}>OPEN SOURCE PROJECTS</Heading>
    </Box> */}
    <Box
      direction="row"
      justify="center"
      gap="large"
      pad="xlarge"
      wrap={true}
      style={{ background: '#FFFFFF', color: '#000000' }}
    >
      {projects.map((project, index) => (
        <Box key={index} align="center">
          <a target="_blank" href={project.href} rel="noopener noreferrer">
            <Symbol className="img-fluid" alt={project.alt} src={project.src} />
          </a>
          <h2>{project.title}</h2>
          {/* <p>{project.description}</p> */}
        </Box>
      ))}
      <Box>
        <Heading level={2}>
          HERE ARE SOME PROJECTS THAT I'M WORKING ON IT RIGHT NOW
        </Heading>
      </Box>
    </Box>
  </Box>
)

export default OpenSource

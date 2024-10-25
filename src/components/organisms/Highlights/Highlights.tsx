import styled from 'styled-components'
import { Box, Heading, Text } from 'grommet'

import cloudSvg from './assets/svg/cloud.svg'
import toolSvg from './assets/svg/tool.svg'
import penToolSvg from './assets/svg/pen-tool.svg'
import bookSvg from './assets/svg/book.svg'
import githubIcon from './assets/svg/github.svg'
import linkedinIcon from './assets/svg/linkedin.svg'
import iconSizes from '../../../tokens/sizes'

const Art = styled.img`
  height: ${iconSizes.xlarge};
  filter: invert(1);
`

const Highlights = () => {
  const highlightsData = [
    {
      href: 'https://www.github.com/williamlagos',
      imgSrc: githubIcon,
      alt: 'cloud',
      heading: 'GitHub',
      text: "Here you can see what I'm developing right now.",
      isLink: true
    },
    {
      imgSrc: cloudSvg,
      alt: 'cloud',
      heading: 'DevOps',
      text: 'Cloud hosting, deployment and maintenance specialist.'
    },
    {
      imgSrc: toolSvg,
      alt: 'coding',
      heading: 'Develop',
      text: 'I develop software solutions with Python, C/C++ and ECMAScript.'
    },
    {
      imgSrc: penToolSvg,
      alt: 'design',
      heading: 'Design',
      text: 'I do in a collaborated manner, new websites and apps designs.'
    },
    {
      imgSrc: bookSvg,
      alt: 'mentorship',
      heading: 'Mentorship',
      text: 'I offer my knowledge to whoever does need to learn to develop or create.'
    },
    {
      href: 'https://www.linkedin.com/in/lagoswilliam',
      imgSrc: linkedinIcon,
      alt: 'cloud',
      heading: 'LinkedIn',
      text: 'Check my latest experiences here.',
      isLink: true
    }
  ]
  return (
    <Box
      direction="row"
      justify="center"
      gap="large"
      pad="medium"
      className="container-fluid pt-5"
      style={{ background: '#040403', color: 'white' }}
    >
      {highlightsData.map((highlight, index) => (
        <Box key={index} direction="row" gap="25px">
          {highlight.isLink ? (
            <a target="_blank" href={highlight.href} rel="noopener noreferrer">
              <Art
                className="img-fluid"
                alt={highlight.alt}
                src={highlight.imgSrc}
              />
            </a>
          ) : (
            <Art
              className="img-fluid"
              alt={highlight.alt}
              src={highlight.imgSrc}
            />
          )}
          <div>
            <Heading weight="normal" margin="0" level={4}>
              {highlight.heading}
            </Heading>
            <Text weight="lighter">{highlight.text}</Text>
          </div>
        </Box>
      ))}
    </Box>
  )
}

export default Highlights

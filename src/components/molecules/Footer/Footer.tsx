import { Box, Text, Anchor, Heading, Grid, ResponsiveContext } from 'grommet'
import styled from 'styled-components'

import cloudSvg from './assets/svg/cloud.svg'
import toolSvg from './assets/svg/tool.svg'
import penToolSvg from './assets/svg/pen-tool.svg'
import bookSvg from './assets/svg/book.svg'
import githubIcon from './assets/svg/github.svg'
import linkedinIcon from './assets/svg/linkedin.svg'
import berlinIcon from './assets/svg/berlin.svg'
import brazilIcon from './assets/svg/brazil.svg'
import usaIcon from './assets/svg/usa.svg'
import spainIcon from './assets/svg/spain.svg'
import italyIcon from './assets/svg/italy.svg'
import germanyIcon from './assets/svg/germany.svg'
import iconSizes from '../../../tokens/sizes'

const Art = styled.img`
  width: ${iconSizes.xlarge};
  height: ${iconSizes.xlarge};
  filter: invert(1);

  @media (max-width: 768px) {
    width: ${iconSizes.large};
    height: ${iconSizes.large};
  }

  @media (max-width: 480px) {
    width: ${iconSizes.medium};
    height: ${iconSizes.medium};
  }
`

const Flag = styled.img`
  height: ${iconSizes.small};
`

const Footer = () => {
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
      text: 'I develop software solutions with many tech stacks.'
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
      text: 'I offer my knowledge to whoever does need to learn to create.'
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
    <ResponsiveContext.Consumer>
      {(size) => (
        <Grid
          areas={
            size === 'small'
              ? [
                  { name: 'contact', start: [0, 0], end: [0, 0] },
                  { name: 'highlight1', start: [0, 1], end: [0, 1] },
                  { name: 'highlight2', start: [0, 2], end: [0, 2] },
                  { name: 'highlight3', start: [0, 3], end: [0, 3] },
                  { name: 'highlight4', start: [0, 4], end: [0, 4] },
                  { name: 'highlight5', start: [0, 5], end: [0, 5] },
                  { name: 'highlight6', start: [0, 6], end: [0, 6] }
                ]
              : [
                  { name: 'contact', start: [0, 0], end: [0, 1] },
                  { name: 'highlight1', start: [1, 0], end: [1, 0] },
                  { name: 'highlight2', start: [1, 1], end: [1, 1] },
                  { name: 'highlight3', start: [2, 0], end: [2, 0] },
                  { name: 'highlight4', start: [2, 1], end: [2, 1] },
                  { name: 'highlight5', start: [3, 0], end: [3, 0] },
                  { name: 'highlight6', start: [3, 1], end: [3, 1] }
                ]
          }
          columns={size === 'small' ? ['auto'] : ['1/7', '2/7', '2/7', '2/7']}
          rows={
            size === 'small'
              ? ['auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto']
              : ['auto', 'auto']
          }
          gap="medium"
          pad={'large'}
          style={{ background: '#040403', color: 'white' }}
          responsive
        >
          <Box gridArea="contact" align="start" pad="small">
            <img
              alt="Berlin Brandenburg Gate"
              src={berlinIcon}
              style={{ height: iconSizes.xlarge }}
            ></img>
            <br />
            <Text>Berlin, Germany</Text>
            <Text>+49 151 4189 5770</Text>
            <Anchor href="mailto:william.lagos@icloud.com">
              william.lagos@icloud.com
            </Anchor>
            <br />
            <Box direction="row">
              <Flag src={usaIcon}></Flag>
              <Flag src={brazilIcon}></Flag>
              <Flag src={spainIcon}></Flag>
              <Flag src={italyIcon}></Flag>
              <Flag src={germanyIcon}></Flag>
            </Box>
          </Box>
          {highlightsData.map((highlight, index) => (
            <Box
              key={index}
              gridArea={`highlight${index + 1}`}
              direction="row"
              gap="25px"
              pad="small"
            >
              {highlight.isLink ? (
                <a
                  target="_blank"
                  href={highlight.href}
                  rel="noopener noreferrer"
                >
                  <Art alt={highlight.alt} src={highlight.imgSrc} />
                </a>
              ) : (
                <Art alt={highlight.alt} src={highlight.imgSrc} />
              )}
              <div>
                <Heading weight="normal" margin="0" level={4}>
                  {highlight.heading}
                </Heading>
                <Text weight="lighter">{highlight.text}</Text>
              </div>
            </Box>
          ))}
        </Grid>
      )}
    </ResponsiveContext.Consumer>
  )
}

export default Footer

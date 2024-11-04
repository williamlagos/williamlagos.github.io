import styled from 'styled-components'
import { Box } from 'grommet'

import pandoraSvg from './assets/svg/pandora.svg'
import coworkingSvg from './assets/svg/coworking.svg'
import efforiaSvg from './assets/svg/efforia.svg'
import parloaSvg from './assets/svg/parloa.svg'
import bmwSvg from './assets/svg/bmw.svg'
import issuuSvg from './assets/svg/issuu.svg'
import iconSizes from '../../../tokens/sizes'

const Brand = styled.img`
  height: ${iconSizes.xxlarge};

  @media (max-width: 768px) {
    height: ${iconSizes.large};
  }

  @media (max-width: 480px) {
    height: ${iconSizes.medium};
  }
`

const Initiatives = () => (
  <section>
    <Box
      direction="row"
      justify="center"
      gap="large"
      pad="large"
      wrap={true}
      style={{
        background: '#FFFFFF',
        color: '#000000'
      }}
    >
      <div>
        <a href="#hub">
          <Brand alt="pandora" src={pandoraSvg} />
        </a>
      </div>
      <div>
        <a href="#coworking">
          <Brand alt="coworking" src={coworkingSvg} />
        </a>
      </div>
      <div>
        <a href="#efforia">
          <Brand alt="efforia" src={efforiaSvg} />
        </a>
      </div>
      <div>
        <a href="#bmw">
          <Brand alt="bmw" src={bmwSvg} />
        </a>
      </div>
      <div>
        <a href="#parloa">
          <Brand alt="parloa" src={parloaSvg} />
        </a>
      </div>
      <div>
        <a href="#issuu">
          <Brand alt="issuu" src={issuuSvg} />
        </a>
      </div>
    </Box>
  </section>
)

export default Initiatives

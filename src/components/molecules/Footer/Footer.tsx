import { Footer as GrommetFooter, Box, Text, Anchor } from 'grommet'

const Footer = () => (
  <GrommetFooter background="dark" pad="medium" justify="center">
    <Box direction="row" justify="between" width="large">
      <Box align="center" pad="small">
        <Text weight="bold">Phone</Text>
        <Text>+49 151 4189 5770</Text>
      </Box>
      <Box align="center" pad="small">
        <Text weight="bold">Address</Text>
        <Text>Berlin - Germany</Text>
      </Box>
      <Box align="center" pad="small">
        <Text weight="bold">E-mail</Text>
        <Anchor href="mailto:william.lagos@icloud.com">
          william.lagos@icloud.com
        </Anchor>
      </Box>
    </Box>
  </GrommetFooter>
)

export default Footer

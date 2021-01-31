import { Box, Flex } from 'theme-ui'
import { Input, Button } from './hero'

import Fade from 'react-reveal/Fade'

export default () => (
  <Box
    sx={{
      alignItems: ['flex-end', 'flex-end', 'flex-end', 'center', 'center'],
      flexDirection: 'column',
      textAlign: ['center'],
      width: ['90vw', '90vw', '85vw', '70vw'],
      mx: 'auto',
    }}>
    <Fade sx={{}} bottom clear>
      <h1
        sx={{
          mt: [5],
          mb: [4, 4, 4, 5],
          fontSize: [4, 4, 5, 6, 7],
        }}>
        <span sx={{ color: 'primary' }}>
          Fleeks helps brighter talents to showcase their skills and gives them
        </span>
        <br />a platform to learn from their peers.
      </h1>
      <Flex
        sx={{ flexDirection: 'column', width: '100%', alignItems: 'center' }}>
        <Input />
        <Button top={false} sx={{}} />
      </Flex>
    </Fade>
  </Box>
)

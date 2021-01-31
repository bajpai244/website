import { Box, Flex } from 'theme-ui'
import Fade from 'react-reveal/Fade'

export default () => (
  <Flex
    variant={'section_box'}
    sx={{
      alignItems: [
        'flex-start',
        'flex-start',
        'flex-start',
        'center',
        'center',
      ],
      flexDirection: 'column',
      width: '100vw',
    }}>
    <Fade left clear>
      <Slide_1 />
    </Fade>
    <Fade right clear>
      <Slide_2 />
    </Fade>
    <Fade left clear>
      <Slide_3 />
    </Fade>
  </Flex>
)

const Cont = ({ children }) => (
  <Flex
    sx={{
      alignItems: [
        'flex-start',
        'flex-start',
        'flex-start',
        'center',
        'center',
      ],
      mt: [3],
      flexDirection: ['column', 'column', 'column', 'row', 'row'],
    }}>
    {children}
  </Flex>
)

const Image = ({ src }) => (
  <img
    src={src}
    sx={{ mx: [0, 0, 0, 0, 3, 3], width: [300, 350, 500, 550, 500, 600] }}
  />
)

const H1 = ({ children }) => (
  <h1 sx={{ mb: [0], fontSize: [4, 5, 5, 6, 7] }}> {children}</h1>
)

const Slide_1 = () => (
  <Cont>
    <Box sx={{}}>
      <H1>This place is for you!</H1>
      <p sx={{ mt: [0] }}>
        Connect, learn, teach and
        <span sx={{ color: 'primary' }}> grow with your peers</span>
      </p>
    </Box>
    <Image src='img_1.png' />
  </Cont>
)

const Slide_2 = () => (
  <Cont>
    <Box sx={{ display: ['block', 'block', 'block', 'none'] }}>
      <H1>Making learning fun</H1>
      <p sx={{ mt: [0] }}>
        <span sx={{ color: 'primary' }}>Explore communities, </span> compete and
        learn socially.
      </p>
    </Box>
    <Image src='img_2.png' />
    <Box sx={{ display: ['none', 'none', 'none', 'block'] }}>
      <H1>Making learning fun</H1>
      <p sx={{ mt: [0] }}>
        <span sx={{ color: 'primary' }}>Explore communities, </span> compete and
        learn socially.
      </p>
    </Box>
  </Cont>
)

const Slide_3 = () => (
  <Cont>
    <Box>
      <H1 sx={{}}>Introducing fleekers!</H1>
      <p sx={{ mt: [0] }}>
        Talent is rare, so why not use it right?
        <span sx={{ color: 'primary' }}> Monetize your skills</span>
      </p>
    </Box>
    <Image src='img_3.png' />
  </Cont>
)

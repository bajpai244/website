import { Flex } from 'theme-ui'

export default () => (
  <Flex
    as={'header'}
    variant={'custom_box'}
    sx={{ alignItems: 'center', pt: 3, width: '100vw' }}>
    <img src={'icons/logo.png'} sx={{ width: [80, 100] }} />
    <Flex sx={{ flex: 1, justifyContent: 'flex-end' }}>
      {social_data.map(({ path, width, height }) => (
        <img
          src={path}
          key={path}
          sx={{
            width: [(width ? width : 20) * 0.6, (width ? width : 20) * 0.8],
            height: [
              (height ? height : 20) * 0.6,
              (height ? height : 20) * 0.8,
            ],
            mx: [2],
            cursor: 'pointer',
            transition: '0.2s',
            ':hover': {
              transform: 'scale(1.1)',
            },
          }}
        />
      ))}
    </Flex>
  </Flex>
)

const social_data = [
  {
    path: 'icons/twitter.png',
  },
  {
    path: 'icons/insta.png',
  },
  {
    path: 'icons/facebook.png',
    width: 10,
    height: 20,
  },
  {
    path: 'icons/phone.png',
  },
  {
    path: 'icons/mail.png',
    width: 26,
    height: 19,
  },
]

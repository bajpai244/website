import { Flex, Text } from 'theme-ui'

export default () => (
  <Flex
    as={'header'}
    sx={{
      alignItems: 'center',
      pt: 3,
      width: '100vw',
      flexDirection: 'column',
      pb: [3],
      mt: [5],
    }}>
    <img src={'icons/logo.png'} sx={{ width: 100 }} />
    <Flex sx={{ flex: 1, justifyContent: 'flex-end', mt: [4] }}>
      {social_data.map(({ path, width, height }) => (
        <img
          src={path}
          key={path}
          sx={{
            width: (width ? width : 20) * 0.8,
            height: (height ? height : 20) * 0.8,
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
    <Text sx={{ color: 'input', mt: [5], fontSize: [1] }}>
      © Copyright 2021. All rights reserved.
    </Text>
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

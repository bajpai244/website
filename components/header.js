import { Flex } from 'theme-ui'

export default () => (
  <Flex
    as={'header'}
    variant={'custom_box'}
    sx={{ alignItems: 'center', pt: 3, width: '100vw' }}>
    <img src={'icons/logo.png'} sx={{ width: [80, 100] }} />
    <Flex sx={{ flex: 1, justifyContent: 'flex-end' }}>
      {social_data.map(({ path, link, width, height }) => (
        <img
          onClick={() => {
            window.open(link, '_blank')
          }}
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

export const social_data = [
  {
    path: 'icons/twitter.png',
    link: 'https://twitter.com/fleeks_official',
  },
  {
    path: 'icons/insta.png',
    link: 'https://www.instagram.com/fleeks_official/',
  },
  {
    path: 'icons/facebook.png',
    width: 10,
    height: 20,
    link: 'https://www.facebook.com/Fleeks-102950775036211/',
  },
  /*{
    path: 'icons/phone.png',
    link: '',
  },*/
  {
    path: 'icons/mail.png',
    width: 26,
    height: 19,
    link: 'https://mail.google.com/mail/?view=cm&fs=1&to=fleeks@fleeks.co.in',
  },
]

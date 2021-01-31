import { Flex, Box, Text } from 'theme-ui'
import { toast } from 'react-toastify'
import { db } from '../lib/firebase'
import { css } from 'glamor'

const notify_success = () =>
  toast.success('🦄 Thanks for signing up!', {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    className: 'toast-success-container toast-success-container-after',
    progressClassName: css({
      background: '#12bf9d',
    }),
  })

const notify_error = () =>
  toast.error('🦄 Wow so easy!', {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })

const save_email = (email) => {
  // Add a new document in collection "cities"
  db.collection('emails')
    .add({ email })
    .then(function () {
      notify_success()
    })
    .catch(function (error) {
      notify_error()
    })
}

export default () => {
  return (
    <Flex
      variant='section_box'
      sx={{
        width: '100vw',
        mt: [5],
        justifyContent: 'center',
        alignItems: ['center', 'center'],
        flexDirection: ['column', 'column', 'column', 'row', 'row'],
      }}>
      <img src='hero.png' sx={{ width: [300, 350, 400, 450, 450, 550] }} />
      <Box
        sx={{
          px: [1, 1, 1, 1, 5],
          alignSelf: ['flex-start'],
          mb: [3],
          ml: [0, 0, 0, 3, 3],
        }}>
        <h1 sx={{ color: 'primary', fontSize: [5, 6, 6, 6, 7], mb: 0 }}>
          Where Education <br /> Meets Social
        </h1>
        <h2 sx={{ mt: 0 }}>
          Everyone wants to learn, everyone wants to teach.
        </h2>
        <Input />
        <Button />
      </Box>
    </Flex>
  )
}

export const Button = ({ top = true }) => {
  return (
    <Flex
      onClick={() => {
        const arr = window.document.getElementsByClassName('inp')
        const value = arr[top ? 0 : 1].value
        save_email(value)
      }}
      sx={{
        backgroundColor: 'primary',
        width: 'fit-content',
        borderRadius: 15,
        px: [3],
        mt: [3],
        py: [1, 2, 1],
        cursor: 'pointer',
        transition: '0.2s',
        ':hover': {
          transform: 'scale(1.05)',
        },
      }}>
      <Text sx={{ fontWeight: 'bold', fontSize: [1, 2, 2, 2, 2] }}>
        Get Early Access
      </Text>
    </Flex>
  )
}

export const Input = () => (
  <input
    className='inp'
    placeholder='Enter your email address'
    sx={{
      color: 'input',
      backgroundColor: 'background',
      border: 0,
      borderBottom: '1px solid',
      borderColor: 'input',
      pb: [2],
      fontSize: [1, 2, 2],
      width: [200],
    }}
  />
)

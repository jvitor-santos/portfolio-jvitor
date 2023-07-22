import { Flex, useColorMode } from '@chakra-ui/react'

import { Nav } from '~/components/Nav'
import { Main } from '~/components/Main'
import { Aside } from '~/components/Aside'

export default function Home() {
  const { colorMode } = useColorMode()

  return (
    <Flex
      w={'100%'}
      h={'100%'}
      minH={'100vh'}
      alignItems={'center'}
      flexDirection={'column'}
      bg={colorMode === 'light' ? 'white' : 'gray.darkest'}
    >
      <Nav />

      <Flex
        w={'100%'}
        maxW={'118.8rem'}
        flexDirection={['column', 'column', 'row']}
      >
        <Aside />
        <Main />
      </Flex>
    </Flex>
  )
}

import { Flex, useColorMode } from '@chakra-ui/react'

import { ButtonToChangeTheme } from './Buttons/ButtonToChangeTheme'

export function Nav() {
  const { colorMode } = useColorMode()

  return (
    <Flex
      as={'nav'}
      w={'100%'}
      h={'auto'}
      justifyContent={'center'}
      bg={colorMode === 'light' ? 'gray.lightest2' : 'gray.darker'}
    >
      <Flex w={'100%'} h={'auto'} px={'4.8rem'} py={'0.8rem'} maxW={'118.8rem'}>
        <ButtonToChangeTheme />
      </Flex>
    </Flex>
  )
}

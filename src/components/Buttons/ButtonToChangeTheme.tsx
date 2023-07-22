import { Icon, Button, useColorMode } from '@chakra-ui/react'

import { Moon, Sun } from 'phosphor-react'

export function ButtonToChangeTheme() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Button
      w={'4.8rem'}
      h={'4.8rem'}
      ml={'auto'}
      borderRadius={'8px'}
      bg={colorMode === 'light' ? 'white' : 'gray.darkest'}
      onClick={() => toggleColorMode()}
    >
      {colorMode === 'light' ? (
        <Icon
          as={Sun}
          w={'2rem'}
          h={'2rem'}
          weight={'regular'}
          color={'gray.darker'}
        />
      ) : (
        <Icon
          as={Moon}
          w={'2rem'}
          h={'2rem'}
          weight={'regular'}
          color={'gray.lightest'}
        />
      )}
    </Button>
  )
}

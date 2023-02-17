import { Button, useColorMode } from '@chakra-ui/react'

export function ButtonColorMode() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Button onClick={() => toggleColorMode()} title={colorMode}>
      {colorMode}
    </Button>
  )
}
